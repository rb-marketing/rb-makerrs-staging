import { SEO } from '@/components/shared/SEO'
import { SolutionsSection, Marquee, VideoModal, RollupNumber, Testimonials } from '@/components/shared'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { LineHeading, RevealText } from '@/components/shared'
import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import statstyles from '@/styles/sections/StatsSection.module.scss'

import styles from '@/styles/home.module.scss'
const LandPage = () => {
  const groupIcons = [
    {
      id: 0,
      name: 'cain.webp',
      width: '100px',
      height: '34px',
      alt: 'cain',
    },
    {
      id: 1,
      name: 'infosys-logo.jpg',
      width: '90',
      height: '30',
      alt: 'infosis',
    },
    {
      id: 2,
      name: 'indeed.webp',
      width: '132',
      height: '36',
      alt: 'indeed',
      className: '',
    },
     {
      id: 3,
      name: 'pudingding.png',
      width: '100',
      height: '30',
      alt: 'pudingding',
      className: '',
    },
    {
      id: 4,
      name: 'taneria.png',
      width: '132',
      height: '36',
      alt: 'taneria',
      className: '',
    },
    {
      id: 5,
      name: 'general-electric.png',
      width: '200',
      height: '150',
      alt: 'general-electric',
    },
    {
      id: 6,
      name: 'darwinbox.webp',
      width: '132',
      height: '36',
      alt: 'darwinbox',
      className: '',
    },
     {
      id: 7,
      name: 'itc.png',
      width: '60px',
      // height: '30px',
      alt: 'itc',
    },
    {
      id: 8,
      name: 'wipro.svg',
      width: '83',
      height: '66',
      alt: 'Wipro',
    },
    {
      id: 9,
      name: 'mumbai-indians.png',
      width: '100px',
      // height: '40px',
      alt: 'mumbai-indians',
    },
    {
      id: 10,
      name: 'sequoia.png',
      width: '167',
      height: '52',
      alt: 'sequoia',
    },
    {
      id: 11,
      name: 'swiggy.svg',
      width: '157',
      height: '39',
      alt: 'swiggy',
    },
    {
      id: 12,
      name: 'Tanishq.png',
      width: '80',
      height: '67',
      alt: 'Tanishq',
    },
    {
      id: 13,
      name: 'bosch.webp',
      width: '151',
      height: '33',
      alt: 'bosch',
    },
    {
      id: 14,
      name: 'slb.webp',
      width: '113',
      height: '52',
      alt: 'slb',
    },
     {
      id: 15,
      name: 'dara.png',
      width: '200',
      height: '150',
      alt: 'dara',
    },
    {
      id: 16,
      name: 'vymo-logo.webp',
      width: '127',
      height: '52',
      alt: 'vymo-logo',
    },
    {
      id: 17,
      name: 'exicom.png',
      width: '163',
      height: '44',
      alt: 'exicom',
    },
    {
      id: 18,
      name: 'treebo.png',
      width: '163',
      height: '44',
      alt: 'treebo',
    },
    {
      id: 19,
      name: 'virtusa.png',
      width: '120',
      height: '44',
      alt: 'virtusa',
    },
    {
      id: 20,
      name: 'bagmane.png',
      width: '140',
      height: '44',
      alt: 'bagmane',
    },
    {
      id: 21,
      name: 'komatsu.png',
      width: '140',
      height: '44',
      alt: 'komatsu',
    },
    {
      id: 22,
      name: 'aarki.png',
      width: '140',
      height: '44',
      alt: 'aarki',
    },
  ]
   const stats = [
    {
      id: 0,
      countUpProps: {
        value: 60,
        suffix: (
          <div className="inline-flex">
            {/* K <span className="text-rb-red">+</span> */}
          </div>
        ),
      },
      text: (
        <span className="">
          Change count of 
          <br />
          brands
        </span>
      ),
    },
    {
      id: 1,
      countUpProps: {
        value: 4,
        suffix: (
          <div className="inline-flex">
            K <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: (
        <>
          Change video numbers
        </>
      ),
    }
  ]
  const createTestimonialData = [
    {
    key: 0,
    quote:
      'We are delighted to team up with Red Bangle to promote the fight against childhood cancer in Romania! The video showcases the ability of the creatives and product managers at Red Bangle to deliver a very compelling case for our innovative work, and to capture the hearts and minds of the audience.',
    name: 'ALINA PATRAHAU',
    designation: 'FOUNDER',
    company: 'DARUIESTE ARIPI',
    image: {
      srcSet:
        `/img/testimonials/alina-patrahau.jpg 533w, /img/testimonials/alina-patrahau.jpg 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 1,
    quote:
        <>
        Red Bangle was especially impressive with their creative strategy, design, and copy. They took the quirk and the energy of local markets and their iconic signs and transformed them into a fresh, modern expression for our brand. Our customers are drawn to the unique identity, and it has translated into a love for the product itself.
        </>,
    name: 'KUNCHERIA MARATTUKALAM',
    designation: 'FOUNDER & DIRECTOR',
    company: 'Maratt Group',
    image: {
        srcSet:

            `/img/testimonials/kuncheria_marattukalam.jpg 533w, /img/testimonials/kuncheria_marattukalam.jpg 1066w`,
        sizes: '(max-width:768px) 533px, 1066px',
    },
    },
    {
    key: 2,
    quote:
      'We partnered with Red Bangle to create internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends, are always experimental and open to feedback. They are amazing to work with!',

    designation: 'VP INTERNAL COMMUNICATIONS',
    company: 'FORTUNE 100 ITES ENTERPRISE',
    image: {
      srcSet:
        `/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
{
    key: 3,
    quote:
      'The Red Bangle team is fantastic to work with. They add value not just from a creative standpoint but also in terms of communication strategy.',
    name: 'ROSHAN CARIAPPA',
    designation: 'VICE-PRESIDENT MARKETING',
    company: 'VYMO',
    image: {
      srcSet:
        `/img/testimonials/roshan.webp 533w, /img/testimonials/roshan.webp 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 4,
    quote:
      'Because of Covid restrictions, our team was unable to travel to India for the event. But the team at Red Bangle supported us on the ground and even helped us manage our golfing ambassador. Thanks team!',
    name: 'MATT WALKINGTON',
    designation: 'Account Director',
    company: 'BRIGHT PARTNERSHIPS',
    image: {
      srcSet:
        `/img/testimonials/matt-walkington.webp 533w, /img/testimonials/matt-walkington.webp 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 5,
    quote:
      <>Red Bangle brought a unique blend of clarity and creativity—translating complex healthcare concepts into a simple brand identity system that was &apos;full of heart&apos;. They also created a cohesive website experience within incredibly tight deadlines. Their efficiency and understanding of our needs were pivotal in successfully launching our brand.
      </>,
    name: 'Rinku Agarwal Basu',
    designation: 'COO',
    company: 'Lillia Care',
    image: {
      srcSet:

        `/img/testimonials/rinku-agarwal.png 533w, /img/testimonials/rinku-agarwal.png 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
{
    key: 6,
    quote:
      'From hand-drawn mascots to quirky doodles, and delicious copy that weaves in witty puns from popular song lyrics—every element of our new brand feels fun, indulgent, and effortlessly us. Red Bangle has given us a brand bursting with character and joy!',
    name: 'NAKUL KULKARNI',
    designation: ' CO-FOUNDER',
    company: 'P.U. DINGDING',
    image: {
      srcSet:
        `/img/testimonials/nakul_1.jpg 533w, /img/testimonials/nakul_1.jpg 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 7,
    quote:
      'Despite difficulties faced in shooting in 2 countries, we created these awesome videos, while keeping everyone safe during Covid-19.',
    name: 'MARC IRAWAN',
    designation: 'Founder',
    company: 'COLEARN',
    image: {
      srcSet:
        `/img/testimonials/marc.webp 533w, /img/testimonials/marc.webp 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
  {
    key: 8,
    quote:
      'It’s never easy creating great videos for a fast-growing business like ours. We struggled, till we came across Red Bangle.',
    name: 'SUNIL SURESH',
    designation: 'CHIEF MARKETING AND STRATEGY OFFICER',
    company: 'CAPILLARY TECHNOLOGIES',
    image: {
      srcSet:
        `/img/testimonials/sunil-suresh.webp 533w, /img/testimonials/sunil-suresh.webp 1066w`,
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]
  const heroSection = useRef()
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(max-width:768px)', () => {
      // const istyles = containerMbRef.current?.getBoundingClientRect()
      // const nstyles = insetRef.current?.getBoundingClientRect()

      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.2,
          start: '50% 40%',
          end: '80% 20%',
          trigger: heroSection.current,

          // markers: true,
        },
      })
      const getY = () => {
        const mEl = 72 + 50 + 72
        const titleElm = containerMbRef.current.getBoundingClientRect().height

        const y = mEl + titleElm
        return y
      }
      tl.fromTo(
        '.content-showreel',
        { opacity: 1, y: 0, duration: 0.05 },
        { opacity: 0, y: () => getY() },
        0
      ).fromTo(' .play-icon', { opacity: 0.5 }, { opacity: 1 })

      return () => {
        tl.kill()
      }
    })

    const resize = () => {
      gsap.matchMediaRefresh()
    }
    window.addEventListener('resize', resize)

    let singleLetterTimeline = gsap.timeline({
      ease: 'power2.out',
      repeat: -1,
    })

    singleLetterTimeline
      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 0,
          delay: 2,
        }
      )

      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 100,
        },
        '+=1'
      )
      .to(
        `.${styles.letterRoll}`,

        {
          yPercent: 0,
        },
        '+=2'
      )

    const letterTimeline = gsap.timeline()
    letterTimeline.to(
      `.${styles.rtol}, .${styles.ltor}`,
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: {
          each: 0.256,
        },
      },
      0
    )
    return () => {
      window.removeEventListener('resize', resize)
      letterTimeline.kill()
      mm.kill()
    }
  }, [])
  const onModalOpen = (e) => {
    setHerovideoOpen(true)
    e.stopPropagation()
  }
  const videoRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasReachedTop, setHasReachedTop] = useState(false)
  const [herovideoOpen, setHerovideoOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const elementHeight = document.querySelector('#hero-section').offsetHeight
      const scrollPosition = window.scrollY

      if (window.innerWidth > 768) {
        if (elementHeight + scrollPosition >= windowHeight + 600) {
          setHasReachedTop(true)
        } else {
          setHasReachedTop(false)
        }
      } else {
        if (elementHeight + scrollPosition >= windowHeight + 500) {
          setHasReachedTop(true)
        } else {
          setHasReachedTop(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <SEO
        title="AI-First Creative Agency for Global Brands - Red Bangle"
        description="We craft brand solutions, creative campaigns, AI products, interactive brand experiences, AI avatars and sticky original content IPs for over 60 brands globally."
        url="https://www.redbangle.com"
      />

      <section
        className="bg-white md:-mb-[3px] md:pt-9  relative overflow-hidden "
        ref={heroSection}
      >
        <div className="height-div aspect-video absolute w-full opacity-0 pointer-events-none z-30 bg-rb-red top-0" />
        <div className="container">
          <div>
            <div className={` ${styles.title}`}>
              <span className={`${styles.ltor}`}>
                <span className="hidden md:inline"> BORDERLESS</span>
              </span>
            </div>

            <div className={` ${styles.title} block md:hidden mt-[-28px]`}>
              <span className={`${styles.ltor} `}> BORDERLESS</span>
            </div>

            <div className="banner relative h-[50%] w-full overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                src="/creative_agency_banner.mp4"
                poster="/img/home/creative_agency_banner.webp"
                className="absolute top-0 left-0 w-full h-full object-cover"
              ></video>
              <div className={` ${styles.title}`}>
                <div className={` ${styles.textblend} md:whitespace-nowrap`}>
                  CREATIVE AGENCY
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            id="hero-section"
            className="flex items-center justify-center text-center md:mt-10 mt-5"
          >
            <div>
              <div className="text-rb-black text-[16px] md:text-[24px] leading-[1.5] md:leading-[1.33] tracking-[-0.64px] md:tracking-[-0.96px] font-semibold max-w-[900px]">
                We help fast-growing businesses build sticky global brands and engaging narratives through videos, podcasts, campaigns and design.
              </div>
              <div className="flex items-center justify-center md:flex-row flex-col md:mt-10 mt-9 md:gap-5 gap-4">
                <Button
                  href="/contact?type=client"
                  className="font-bold  w-full md:w-auto !inline-flex"
                  suffix={<LineArrow hover />}
                >
                  Get creative services
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 ">
          <Marquee duration={50}>
            <div className="flex items-center h-[80px] md:h-[70px]">
              {groupIcons.map(({ name, id, ...rest }) => (
                <div key={id} className="mx-6 md:mx-12 filter grayscale">
                  <img
                    src={`/img/logos/${name}`}
                    loading="lazy"
                    alt=""
                    {...rest}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* <div
        ref={videoRef}
        className={`mt-12 md:mt-8 md:mb-[-2px] video-scroll duration-500 ease-out !overflow-visible lg:h-[200vh] md:h-[150vh] ${
          hasReachedTop ? 'active' : ''
        }`}
        onClick={onModalOpen}
        data-rb-cursor
        data-rb-cursor-type="play"
      >
        <div className="absolute bottom-4 right-4 z-10 backdrop-blur-2xl bg-rb-black/50 rounded-[32px] py-[17px] px-4.5 pl-[20px] overflow-hidden md:hidden block">
          <div className="flex items-center gap-2 justify-center text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="13"
              fill="none"
            >
              <path
                fill="#fff"
                d="M.043 1.124c0-.442.489-.71.86-.47L9.09 5.916c.342.22.342.72 0 .94L.903 12.117a.559.559 0 0 1-.86-.47V1.125Z"
              />
            </svg>
          </div>
        </div>
        <div className="md:sticky top-1/4 lg:top-0 overflow-hidden hidden md:block lg:h-screen">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/img/home/why-not-video.mp4"
            poster="/img/home/why_not_banner.webp"
            className="web-vid w-full h-full object-cover relative"
          ></video>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          src="/img/home/why-not-video.mp4"
          poster="/img/home/why_not_banner.webp"
          className="block md:hidden w-full h-full object-cover"
        ></video>
      </div> */}

      <section className="bg-white pt-18 md:pt-30 pb-18 md:pb-30">
        <div className="container">
          <LineHeading className="mb-6 md:mb-7.5">WHY TRY MAKERRS</LineHeading>
          <div className="max-w-[1046px]">
            <RevealText text="We know what it takes to deliver brand differentiation and engagement in the AI era. Our bold creative teams and borderless execution across videos, podcasts, campaigns and design help you scale your business - be it for B2B, B2C or D2C." />
          </div>
          <Button
            href="/about/who-we-are"
            className="font-bold mt-11 md:mt-16 w-full md:w-auto !inline-flex"
            suffix={<LineArrow hover />}
          >
            See manifesto
          </Button>
        </div>
      </section>

      <div>
        <SolutionsSection />
      </div>

    <section className="bg-white overflow-hidden py-18 md:pt-30 md:pb-0">
        <div className="container">
          <LineHeading className="mb-6 md:mb-7.5">We are a borderless creative agency</LineHeading>
          <div className="grid lg:flex grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-[44px] gap-y-12 md:gap-y-6 max-w-[1200px] mx-auto w-full pl-6 md:px-6 ml-0 md:ml-5 md:ml-[3.1rem] transform transform -translate-x-[24px] sm:-translate-x-6 lg:-translate-x-6 xl:-translate-x-[7.9rem]">
            {stats.map((s, i) => (
              <div
                className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${statstyles.statline} [&:nth-child(3)]:md:pr-[7px] [&:nth-child(1)]:md:pr-[26px] ${s.id === 3 ? 'md:!pr-[26px] md:!pl-6':''}`}
                key={s.id}
              >
                <div>
                  <div className={`lg:w-fit lg:mx-auto relative`}>
                    <div>
                        <RollupNumber {...s.countUpProps} />
                      </div>
                    <div className={`text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett ${s.id === 0 ? 'md:ml-[5px]':''}`}>
                      {s.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>

        <Testimonials
          title={'WHAT OUR COLLABORATORS SAY'}
          className="py-18 md:py-30"
          testimonialData={createTestimonialData}
          type="semi"
        />

      <VideoModal
        open={herovideoOpen}
        setOpen={setHerovideoOpen}
        // vimeoId="1084150253"
        videopath="/img/home/why-not-video.mp4"
      >
        <div className="relative max-w-[90%] md:max-w-[80%] w-full">
          {/* <iframe
            src="https://player.vimeo.com/video/1084150253?h=dff56feeb5&autoplay=1&title=0&byline=0&portrait=0"
            className="w-full aspect-video h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/img/home/why-not-video.mp4"
            className="w-full"
            width="1920"
            height="1080"
          ></video>
        </div>
      </VideoModal>
    </>
  )
}
export default LandPage
