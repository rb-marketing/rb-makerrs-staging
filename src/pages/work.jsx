import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { workPosts } from '@/utils/dummy'
import {
  SEO, TrustedBrandsSection, WorkListHeroSection, LineHeading, PlayCard,
  VideoMetaModal
} from '@/components/shared'
import { ContentPostCard } from '@/components/shared/Cards/ContentPostCard'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import Script from 'next/script'
import { aboutSchema } from '@/components/schema/about-schema'

const INIT_MODAL = {
  open: false,
  // slug: null,
  video: null,
  loading: false,
  title: null,
}

const getCountryFromCookie = () => {
  if (typeof document === 'undefined') return null;

  const match = document.cookie.match(/user-country=([^;]+)/);
  return match ? match[1] : null;
};



export default function WorkPage({ selectedvalue = 'featured' }) {
  const router = useRouter()
  const _posts = workPosts

  const caseStudyTags = [
    {
      name: 'Featured',
      url: 'featured',
    },
    {
      name: 'Design',
      url: 'design',
    },
    {
      name: 'Videos',
      url: 'videos',
    },
    {
      name: 'Podcast',
      url: 'podcast',
    },
    {
      name: 'Campaign',
      url: 'campaign',
    }
  ]

  const workData = [
    {
      slug: 'SLB interactive explainers',
      featuredImage: {
        src: '/img/explainer-video/SLB.png',
      },

      title: 'Interactive Explainer for oilfield services',
      company: {
        name: 'SLB',
      },
      video: {
        workDetails: {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
        },
        content:
          'SLB was digitizing its sales, manufacturing, and product engineering workflows. And this interactive explainer helped their IT team launch and drive adoption across the organisation.',
      },
      popUpTitle:
        'Animated Explainer on Sales Digitization for ~30,000 employees',
      popUpPoints: [
        '01. Data sorting',
        '02. Creative Consulting',
        '03. Concept',
        '04. Script',
        '05. Storyboard',
        '06. Animation',
        '07. Interactivity',
        '08. Hosting',
      ],
      redText: 'Premium Interactive Explainer',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
      ],
    },
    {
      slug: 'Adobe eDam',
      featuredImage: {
        src: '/img/explainer-video/adobe.png',
      },
      title: 'Whiteboard Explainer Video on DAM',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092040991?share=copy',
        },
        content:
          'How do you pitch a great Digital Asset Management to busy marketers? By telling them an engaging persona-driven story (made using custom whiteboard illustration) that hits the mark.',
      },
      popUpTitle: 'Whiteboard Explainer Video on Digital Asset Management',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Illustrations',
        '04. Storyboard',
        '05. Animation',
        '06. Voice over',
        '07. Music & SFX',
        '08. Project Management',
      ],
      redText: 'Premium Whiteboard Animation',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
      ],
    },
    {
      slug: 'Hansel / Superbeard',
      featuredImage: {
        src: '/img/explainer-video/Hansel.png',
      },
      title: 'Live Action Explainer for SAAS product',
      company: {
        name: 'Hansel.io',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/867141400?share=copy',
        },
        content:
          'How we communicated complex information using a simple, human-centric story. Here’s our live action explainer for Hansel - a SAAS product for context aware A/B testing.',
      },
      popUpTitle:
        'Live Action Explainer on user drop-off management product - Hansel',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Custom UI Graphics',
        '04. Fictitious brand ',
        '05. Casting & Styling',
        '06. Production',
        '07. Post Production',
        '08. Versioning',
      ],
      redText: 'Live Action Explainer',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
      ],
    },
    {
      slug: 'DCMO',
      featuredImage: {
        src: '/img/explainer-video/DCMO.png',
      },
      title: 'Animated Explainer for DCMO Services',
      company: {
        name: 'Infosys Equinox',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092042256?share=copy',
        },
        content:
          'An exciting explainer video to help increase awareness for Digital Commerce Marketing Offerings from Infosys Equinox. The target audience: CXOs at E-Commerce businesses.',
      },
      popUpTitle: 'Animated Explainer for Digital Commerce Marketing  Services',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Graphic Design',
        '04. Storyboard',
        '05. Animation',
        '06. Voice Over',
        '07. Music',
        '08. Teaser Video',
      ],

      redText: 'Custom 2D Animation',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092041941?share=copy',
          thumbnail: '/img/explainer-video/wipro.png',
          title: 'Motion Graphics Case Study for HIMSS',
          duration: '01:50',
        },
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
      ],
    },
    {
      slug: 'Wipro Animated Case Study',
      featuredImage: {
        src: '/img/explainer-video/wipro.png',
      },
      title: 'Motion Graphics Case Study for HIMSS',
      company: {
        name: 'Wipro',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092041941?share=copy',
        },
        content:
          'IT giant Wipro had a challenging task for us: 24 case study videos in 90 days. We made them and delivered them on time! Check out one of the sophisticated videos from the project.',
      },
      popUpTitle: 'Motion Graphics Case Study for Wipro’s booth at HIMSS event',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Design & Storyboard',
        '04. Motion Graphics',
        '05. Voice over',
        '06. Music & SFX',
        '07. Project Management',
        '08. Asset Management',
      ],

      redText: 'Sophisticated Motion Graphics',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1092039633?share=copy',
          thumbnail: '/img/explainer-video/vymo_sme.png',
          title: 'Live action explainer with Motion Graphics',
          duration: '02:05',
        },
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
      ],
    },
    {
      slug: 'Vymo SMB Explainer',
      featuredImage: {
        src: '/img/explainer-video/vymo_sme.png',
      },
      title: 'Live action explainer with Motion Graphics',
      company: {
        name: 'Vymo',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1092039633?share=copy',
        },
        content:
          'When Vymo wanted a great explainer to target North American regional banks - we created a studio-shot live-action film with a fun set, actors and custom motion graphics.',
      },
      popUpTitle: 'Live action explainer with Motion Graphics for SAAS Brand',
      popUpPoints: [
        '01. Concept',
        '02. Script Customisation',
        '03. Graphic design',
        '04. Casting & Styling',
        '05. Set Design',
        '06. Production',
        '07. Editing & Animation',
        '08. Music, SFX & more',
      ],

      redText: 'Studio-Shot Explainer Video',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1042874327',
          thumbnail: '/img/explainer-video/ai_first_employees.png',
          title: 'Mixed Media Explainer Video Case Study',
          duration: '01:20',
        },
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
      ],
    },
    {
      slug: 'Collage style explainer - Univ Upskilling (Infosys)',
      featuredImage: {
        src: '/img/explainer-video/ai_first_employees.png',
      },
      title: 'Mixed Media Explainer Video Case Study',
      company: {
        name: 'Infosys',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1042874327',
        },
        content:
          'We flipped the script of typical case study videos by placing our client’s employees at the center of the story—giving them the spotlight as enablers of AI-first software solutions.',
      },
      popUpTitle: 'Mixed Media Explainer Video Case Studies for Social Media',
      popUpPoints: [
        '01. Script',
        '02. Graphic design',
        '03. Motion Graphics',
        '04. Voice Over',
        '05. Music & SFX',
        '06. Video Thumbnail',
      ],
      redText: 'Mixed Media Explainer Video Case Study',
      relatedVideos: [
        {
          videolink: 'https://vimeo.com/1030707001',
          thumbnail: '/img/explainer-video/Multiplier.png',
          title: 'SAAS Marketing Explainer',
          duration: '01:29',
        },
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
      ],
    },
    {
      slug: 'Introducing Multiplier',
      featuredImage: {
        src: '/img/explainer-video/Multiplier.png',
      },
      title: 'SAAS Marketing Explainer',
      company: {
        name: 'Multiplier',
      },
      video: {
        workDetails: {
          videolink: 'https://vimeo.com/1030707001',
        },
        content:
          'Multiplier - a SAAS solution that simplifies the complexities of global employee onboarding - needed a video for its global launch. Here’s the on-brand custom 2D explainer we created.',
      },
      popUpTitle: 'SAAS Marketing Explainer for Multiplier',
      popUpPoints: [
        '01. Concept',
        '02. Script',
        '03. Graphic Design',
        '04. Stock image curation',
        '05. Storyboard',
        '06. Animation',
        '07. Voice Over',
        '08. Music',
      ],

      redText: 'SAAS Marketing Explainer',
      relatedVideos: [
        {
          videolink:
            'https://rb-video-poc.s3.ap-south-1.amazonaws.com/slb/v2/index.html',
          thumbnail: '/img/explainer-video/SLB.png',
          title: 'Interactive Explainer for oilfield services',
          duration: '09:03',
        },
        {
          videolink: 'https://vimeo.com/1092040991?share=copy',
          thumbnail: '/img/explainer-video/adobe.png',
          title: 'Whiteboard Explainer Video on DAM',
          duration: '02:21',
        },
        {
          videolink: 'https://vimeo.com/867141400?share=copy',
          thumbnail: '/img/explainer-video/Hansel.png',
          title: 'Live Action Explainer for SAAS product',
          duration: '01:30',
        },
        {
          videolink: 'https://vimeo.com/1092042256?share=copy',
          thumbnail: '/img/explainer-video/DCMO.png',
          title: 'Animated Explainer for DCMO Services',
          duration: '02:20',
        },
      ],
    },
  ]

  const [selectedTag, setSelectedTag] = useState(null)
  const [visiblePosts, setVisiblePosts] = useState(6)
  const scrollRef = React.useRef(null)
  const [modal, setModal] = useState(INIT_MODAL)
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const detectedCountry = getCountryFromCookie();
    setCountry(detectedCountry);
  }, []);



  useEffect(() => {
    const storedVisible = sessionStorage.getItem('work-visiblePosts')
    const storedTag = sessionStorage.getItem('work-selectedTag')

    if (storedVisible) setVisiblePosts(parseInt(storedVisible, 10))
    if (storedTag) setSelectedTag(storedTag)
    if (!router.query.work) {
      if (selectedvalue && caseStudyTags.some(tag => tag.url === selectedvalue)) {
        setSelectedTag(selectedvalue)
      } else if (!storedTag) {
        setSelectedTag('featured')
      }
    } else {
      setSelectedTag(router.query.work)
    }
  }, [router.query.work, selectedvalue])

  const saveState = (scrollOverride) => {
    const scroll = scrollOverride !== undefined ? scrollOverride : window.scrollY
    sessionStorage.setItem('work-scroll', String(scroll))
    sessionStorage.setItem('work-visiblePosts', String(visiblePosts))
    sessionStorage.setItem('work-selectedTag', selectedTag || 'featured')
  }

  useEffect(() => {
    const scrollToPosts = () => {
      //after hard refresh we need to scrolls tabs section right..for that
      const postsGrid = document.querySelector(".work-posts-section")
      const stickyTabs = document.querySelector(".sticky-tab-section")
      if (postsGrid) {
        const gridTop = postsGrid.getBoundingClientRect().top + window.scrollY
        const stickyHeight = stickyTabs?.offsetHeight || 0
        window.scrollTo({ top: gridTop - stickyHeight - 70, behavior: "smooth" })
      }
    }

    const restore = () => {
      const navEntries = performance.getEntriesByType("navigation")
      const isReload = navEntries.length && navEntries[0].type === "reload"
      const storedTag = sessionStorage.getItem("work-selectedTag")
      const storedScroll = sessionStorage.getItem("work-scroll")

      if (storedTag) {
        setSelectedTag(storedTag)
      }

      if (isReload) {
        // Hard refresh → reset to 6 posts & scroll to tabs
        setVisiblePosts(6)
        sessionStorage.setItem("work-visiblePosts", "6")
        scrollToPosts()
      } else if (storedScroll && !isNaN(parseInt(storedScroll, 10))) {
        // Back/forward navigation → restore posts & scroll
        const storedVisible = sessionStorage.getItem("work-visiblePosts")
        if (storedVisible) setVisiblePosts(parseInt(storedVisible, 10))

        setTimeout(() => {
          window.scrollTo(0, parseInt(storedScroll, 10))
        }, 50)
      } else {
        // First visit → reset to 6 posts (NO SCROLL)
        setVisiblePosts(6)
        sessionStorage.setItem("work-visiblePosts", "6")
      }
    }
    restore()

  }, [])


  useEffect(() => {
    setVisiblePosts(6)
  }, [selectedTag])

  const handleTagClick = (tagUrl) => {
    // Reset visible posts to 6 when switching tab
    setVisiblePosts(6)
    setSelectedTag(tagUrl)

    // Shallow route update
    router.push(`/work/${tagUrl}`, undefined, { shallow: true, scroll: false })

    // Scroll to posts
    setTimeout(() => {
      const postsGrid = document.querySelector('.work-posts-section')
      const stickyTabs = document.querySelector('.sticky-tab-section')
      if (postsGrid) {
        const topOffset = postsGrid.getBoundingClientRect().top + window.scrollY
        const stickyHeight = stickyTabs?.offsetHeight || 0
        window.scrollTo({ top: topOffset - stickyHeight - 70, behavior: 'smooth' })
      }
    }, 50)
  }

  const handleSeeMore = () => {
    const newVisible = visiblePosts + 6
    setVisiblePosts(newVisible)
    saveState()
  }

  const handleSeeLess = () => {
    setVisiblePosts(6)
    setTimeout(() => {
      const postsGrid = document.querySelector(".work-posts-section")
      const stickyTabs = document.querySelector(".sticky-tab-section")
      if (postsGrid) {
        const gridTop = postsGrid.getBoundingClientRect().top + window.scrollY
        const stickyHeight = stickyTabs?.offsetHeight || 0
        window.scrollTo({ top: gridTop - stickyHeight - 70, behavior: 'smooth' })
      }
    }, 100)
  }
  const handleRelatedVideoClick = (videolink) => {
    const clickedVideoData = workData.find(
      (item) => item.video.workDetails.videolink === videolink
    )

    if (clickedVideoData) {
      setModal({
        open: true,
        loading: false,
        video: clickedVideoData.video,
        title: clickedVideoData.popUpTitle,
        points: clickedVideoData.popUpPoints,
        redText: clickedVideoData.redText,
        relatedVideos: clickedVideoData.relatedVideos,
      })
    }
  }


  // const filteredPosts = _posts
  //   .filter(post => selectedTag && post.tabs?.map(tab => tab.toLowerCase()).includes(selectedTag.toLowerCase()))
  //   .slice(0, visiblePosts)

  const filteredPosts = _posts
    .filter(post => {
      // 1️⃣ Region filter
      if (post.region?.length && country && !post.region.includes(country)) {
        return false;
      }

      // 2️⃣ Tag filter
      if (selectedTag) {
        return post.tabs?.some(
          tab =>
            typeof tab === 'string' &&
            tab.toLowerCase() === selectedTag.toLowerCase()
        );
      }

      // 3️⃣ No tag selected → show post
      return true;
    })
    .slice(0, visiblePosts);


  // Derived metadata for SEO
  const selectedTagData = caseStudyTags.find(tag => tag.url === selectedTag) || caseStudyTags[0];
  return (
    <>
      <SEO
        title="Top Branding, Video Production & Podcast Solutions | Makerrs"
        description="Get great brand design, scalable video production, branded podcast production, and winning creative campaigns for your borderless business."
        url={`https://www.makerrs.com/work/${selectedTag || 'featured'}`}
        keywords="B2B Brands, Brand solutions, B2B Business, Work, Portfolio, Big Ideas, Projects, Work Showcase, Case Study, Case Studies, Creativity, Innovation, B2C Brands, B2C Business" />

      <section className="py-14 md:py-24 overflow-hidden bg-rb-mercury text-rb-black ">
        <WorkListHeroSection
          type="Makerrs Work"
          typeTwo="Makerrs Work"
          video1="/img/services/strategy2.mp4"
          video2="/img/services/strategy1.mp4"
          pillImg="/img/who-we-are/about-pill.webp"
          marqueType="img"
          contentClassName="max-w-[1100px] w-full leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:!mt-16 cap-trim font-semibold !tracking-[-0.56px] md:!tracking-[-0.08rem]"
          content={<>Big ideas, captivating design, campaign magic and flawless global video production. We&apos;re the creative engine behind unstoppable brand growth.</>}
          duration={25}
        />
      </section>

      <div className="container relative bg-white">
        {/* Tags */}
        <div className="sticky top-0 bg-white z-[2] p-2 md:p-0 border-b border-gray-300 sticky-tab-section">
          <div className="relative mt-0 py-6">
            <div ref={scrollRef} className="flex gap-3 overflow-x-auto overflow-y-hidden no-scrollbar md:justify-center md:gap-12">
              {caseStudyTags.map(tag => (
                <a key={tag.url} href="#" onClick={e => { e.preventDefault(); handleTagClick(tag.url) }}
                  className={`inline-block align-top leading-[1] p-0 m-0 !mr-[9px] text-[32px] font-medium font-everett relative whitespace-nowrap
                   ${selectedTag === tag.url ? 'text-rb-link-green after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[7px]' : 'text-[#11101080] hover:text-rb-link-green'}`}>
                  {tag.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Posts */}
        {/* {selectedTag === 'videos' ? (
          <section className={`overflow-hidden pb-18 pt-18 md:pb-0`}>
            <div className="container">
              <div className="grid gap-y-8 md:gap-y-[42px] gap-x-5 md:gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-0">
                {workData.slice(0, 8).map((v) => (
                  <PlayCard
                    onClick={() => {
                      setModal({
                        open: true,
                        loading: false,
                        video: v.video,
                        title: v.popUpTitle,
                        points: v.popUpPoints,
                        redText: v.redText,
                        relatedVideos: v.relatedVideos,
                      })
                    }}
                    src={v?.featuredImage?.src}
                    name={v?.title}
                    company={v?.company?.name}
                    key={v.slug}
                  />
                ))}
              </div>

              <VideoMetaModal
                showContent={true}
                loading={modal.loading}
                open={modal.open}
                video={modal.video}
                title={modal.title}
                points={modal.points}
                redText={modal.redText}
                relatedVideos={modal.relatedVideos}
                setOpen={(v) => {
                  setModal((m) => ({ ...m, open: v }))
                }}
                onRelatedVideoClick={handleRelatedVideoClick}
              />
            </div>
          </section>
        ):( */}

        {selectedTag === 'podcast' ? (
            <h2 className='w-full text-sm leading-[21px] max-w-[1100px] md:text-[32px] md:leading-9.5 mt-8 md:!mt-16 cap-trim font-semibold !tracking-[-0.56px] md:!tracking-[-0.08rem]'>Coming Soon!</h2>
        ) : (

          <div className="container work-posts-section">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-24 mt-16 md:mt-18">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(p => (
                  <div key={p.key} onPointerDown={() => saveState()}>
                    <ContentPostCard href={`/${selectedTag}/${p.case_study_title}`} page="work" {...p} />
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No case studies available for &ldquo;{selectedTag}&ldquo;
                </p>
              )}
            </div>
          </div >
        )
        }



        {/* See More / See Less */}
        {
          filteredPosts.length > 0 && (
            <div className="text-center">
              {(() => {
                // If no tag selected → total is filteredPosts length
                if (!selectedTag) {
                  const total = filteredPosts.length;

                  if (total > 6 && visiblePosts < total) {
                    return (
                      <Button
                        className="w-fit mx-auto mt-[30px] md:mt-15"
                        onClick={handleSeeMore}
                        suffix={<LineArrow />}
                      >
                        SEE MORE
                      </Button>
                    );
                  }

                  if (total > 6 && visiblePosts >= total) {
                    return (
                      <Button
                        className="w-fit mx-auto mt-[30px] md:mt-15"
                        onClick={handleSeeLess}
                        suffix={<LineArrow />}
                      >
                        SEE LESS
                      </Button>
                    );
                  }

                  return null;
                }

                // Tag selected → count safely
                const total = _posts.filter(post =>
                  post.tabs?.some(
                    tab =>
                      typeof tab === 'string' &&
                      tab.toLowerCase() === selectedTag.toLowerCase()
                  )
                ).length;

                if (total > 6 && visiblePosts < total) {
                  return (
                    <Button
                      className="w-fit mx-auto mt-[30px] md:mt-15"
                      onClick={handleSeeMore}
                      suffix={<LineArrow />}
                    >
                      SEE MORE
                    </Button>
                  );
                }

                if (total > 6 && visiblePosts >= total) {
                  return (
                    <Button
                      className="w-fit mx-auto mt-[30px] md:mt-15"
                      onClick={handleSeeLess}
                      suffix={<LineArrow />}
                    >
                      SEE LESS
                    </Button>
                  );
                }

                return null;
              })()}
            </div>
          )
        }

      </div >

      <TrustedBrandsSection className="py-12 md:pt-24 md:pb-12" />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      ></script>
    </>
  )
}
