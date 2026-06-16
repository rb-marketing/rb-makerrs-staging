import { useEffect, useRef, useState } from 'react'

export const VideoModal = ({
  open,
  setOpen,
  children,
  vimeoId,
  youtubeVideo,
  videopath
}) => {
  const container = useRef()
  // Only mount children (and their <video src> tags) after the modal has been
  // opened at least once — prevents the browser from eagerly downloading the
  // video file while the modal is closed.
  const [hasOpened, setHasOpened] = useState(false)

  useEffect(() => {
    const onClick = (e) => {
      if (
        container.current === e.target ||
        container.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [setOpen])

  useEffect(() => {
    if (open && !hasOpened) setHasOpened(true)
  }, [open, hasOpened])

  useEffect(() => {
    if (!hasOpened) return
    const video = container.current?.querySelector('video')
    const iframe = container.current?.querySelector('iframe')
    const youtubeIframe = container.current?.querySelector('.youtube-iframe')
    if (video) {
      if (open) {
        video.muted = false
        video.play().catch((err) => { if (err.name !== 'AbortError') throw err })
      } else {
        video.muted = true
        video.pause()
      }
    }
    if (iframe) {
      if (open) {
        if(vimeoId){
          iframe.src = `https://player.vimeo.com/video/${vimeoId}?h=214303372e&autoplay=1&title=0&byline=0&portrait=0`
        }
        if (videopath) {
          iframe.src= videopath
        }
      } else {
        iframe.src = ''
      }
    }
    if (youtubeIframe) {
      if (open) {
        youtubeIframe.src = youtubeVideo
      } else {
        youtubeIframe.src = ''
      }
    }
  }, [open, vimeoId, youtubeVideo, hasOpened])

  return (
    <div
      data-state={open ? 'open' : 'closed'}
      data-rb-cursor
      data-rb-cursor-type="close"
      className="fixed flex items-center justify-center left-0 top-0 z-[9999] cursor-auto bg-black w-full h-full opacity-0 invisible data-[state=open]:opacity-100 data-[state=open]:visible"
      ref={container}
    >
      <button className="absolute right-5 top-5 md:right-12 md:top-12">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M1.195 1.193 20.26 20.258m-19.065 0L20.26 1.193"
            stroke="#fff"
            strokeWidth="2.247"
            strokeMiterlimit="10"
          />
        </svg>
      </button>
      {hasOpened && children}
    </div>
  )
}
