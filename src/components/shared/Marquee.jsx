import { useEffect, useMemo, useRef } from 'react'

// Module-level singletons — GSAP loads once, shared across all Marquee instances
let _gsap = null
let _gsapPromise = null
let _ScrollTrigger = null
let _stPromise = null

function loadGsap() {
  if (!_gsapPromise) {
    _gsapPromise = import('gsap').then((m) => {
      _gsap = m.gsap
      return _gsap
    })
  }
  return _gsapPromise
}

function loadScrollTrigger() {
  if (!_stPromise) {
    _stPromise = loadGsap().then((gsap) =>
      import('gsap/dist/ScrollTrigger').then((m) => {
        _ScrollTrigger = m.ScrollTrigger
        gsap.registerPlugin(m.ScrollTrigger)
        return _ScrollTrigger
      })
    )
  }
  return _stPromise
}

// direction=-1 : left to right
// direction=1 : right to left
// scrollSpeedBased : speed based on amount of scroll

export const Marquee = ({
  children,
  duration,
  direction,
  scrollSpeedBased,
}) => {
  const ref = useRef()
  const tween = useRef()
  const stRef = useRef()
  const props = useMemo(
    () => ({
      scrollSpeedBased: !!scrollSpeedBased,
      direction: direction ?? 1,
      duration: duration ?? 15,
    }),
    [duration, direction, scrollSpeedBased]
  )

  useEffect(() => {
    let cancelled = false
    loadGsap().then((gsap) => {
      if (cancelled || !ref.current) return
      const parts = ref.current.querySelectorAll('.marquee__part')
      tween.current = gsap
        .to(parts, {
          xPercent: -100,
          repeat: -1,
          duration: props.duration,
          ease: 'linear',
        })
        .totalProgress(0.5)
      gsap.set(parts, { xPercent: -50 })
      gsap.to(tween.current, { timeScale: props.direction })
    })
    return () => {
      cancelled = true
      tween.current?.kill()
    }
  }, [props.direction, props.duration])

  useEffect(() => {
    if (!props.scrollSpeedBased) return
    loadScrollTrigger().then((ScrollTrigger) => {
      if (!_gsap) return
      const timeScaleClamp = _gsap.utils.clamp(1, 6)
      stRef.current = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          tween.current?.timeScale(
            props.direction * timeScaleClamp(Math.abs(self.getVelocity() / 200))
          )
        },
      })
    })
    return () => {
      stRef.current?.kill()
    }
  }, [props.scrollSpeedBased, props.direction])

  return (
    <div className="flex origin-left">
      <div className="marquee__inner flex" ref={ref}>
        <div className="flex flex-shrink-0 relative whitespace-nowrap marquee__part">
          {children}
          {children}
        </div>
        <div className="flex flex-shrink-0 relative whitespace-nowrap marquee__part">
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}
