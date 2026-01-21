import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  SEO,
  SimilarPosts,
  WorkHeroSection,
} from '@/components/shared'
import { useRouter } from 'next/router'
import { CommercialSection } from '@/components/pages/work'
// // import { createTestimonialData } from '@/pages/services/create'
export const similarPostsData = [
  {
    key: 0,
    name: 'Sales Digitisation Campaign - Interactive Explainer',
    image: '/img/works/slb_work.webp',
    company: 'SLB',
    alt: 'slb',
    tags: ['Engineering', 'Campaign', 'Explainer Video', 'Demo Video', 'Interactive Video'],
    case_study_title: 'slb-interactive-explainer',
    href: '/work/b2b-brand-campaign-agency/slb-interactive-explainer',

  },
  {
    key: 1,
    name: 'Launching an AI-powered healthcare brand in record time',
    company: 'Lillia Care',
    image: '/img/works/lillia_img.jpg',
    alt: 'Lillia Care',
    tags: ['Healthtech', 'Brand Identity', 'Website Design', 'Website Development'],
    href: '/work/b2b-brand-design-agency/lillia-care-brand-launch',

  },
  {
    key: 2,
    name: 'Augmented Reality that brought the automobile alive',
    image: '/img/works/bajaj_pulsar_work_age.webp',
    company: 'Bajaj Auto',
    alt: 'Augmented Reality that brought the automobile alive',
    tags: ['Automotive', 'XR Solution (AR/VR/MR)', 'Gamified Experience'],
    case_study_title: 'bajaj-pulsar-augmented-reality-campaign',
    href: '/work/b2b-brand-experience-agency/bajaj-pulsar-augmented-reality-campaign',

  },

]

const pageData = {
  logo: {
    src: '/img/logos/infosys-logo.png',
    width: '150',
    height: '70',
  },
  image: "/img/works/infosys-topaz-banner.webp",
  tags: ['Technology', 'Interactive Experience', '3D Animation Video', 'Marketing Video'],


  commercials: {
    title: (
      <>
        Portfolio of video projects that&nbsp;elevated brands and exceeded
        client expectations.
      </>
    ),
    excerpt:
      'Unlock the full potential of your brand with our commercial adaptations. We combine innovative ideas, expert production, and strategic messaging to create captivating commercials that leave a lasting impression.',
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 130,
        vimeoId: '1081725699/f7dfef7632',
        name: 'Topaz Interactive Experience',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/topaz-video-thumbanail.webp',
        },
      },

    ],
  },
}

function Colearn() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.pathname}`

  const { logo, tags, commercials, desktopVideo, mobileVideo, image } = pageData
  const socials = [
    {
      key: 0,
      href: `https://twitter.com/intent/tweet?text=${articleUrl}`,
      color: '#000',
      icon: <Twitter />,
    },

    {
      key: 1,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`,
      color: '#006699',
      icon: <Linkedin />,
      type: 'linkedin',
    },
  ]
  return (
    <>
      <SEO
        title="Infosys Topaz Immersive 3D Walkthrough | Makerrs"
        description="Infosys Topaz unlocked AI innovation with our futuristic 3D walkthrough, creating a seamless interactive showcase that redefined enterprise storytelling"
        url="https://www.makerrs.com/work/brand-design/infosys-topaz-3d-interactive-experience"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title=" Immersive 3D Walkthrough for Infosys Topaz"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white md:pb-14 pb-[24px] md:pt-0 overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">


              <p className=" mb-6 md:mb-7.5">
                Infosys, an ambitious IT consulting enterprise, had recently developed pathbreaking AI Assistants. These AI Assistants were an offering from Infosys’ Topaz – a suite of AI-first offerings that accelerate business value.

              </p>
              <p className=" mb-6 md:mb-7.5">
                The first 6 AI Assistants were already revolutionizing how Infosys was worked and solutioned for its clients. It was time now to showcase these AI Assistants to the world, invite clients to explore them, and unlock opportunities for the custom-development and roll out of AI Assistants across industries. The content we develop was to be visually clutter-breaking, engaging right through, and be highly modular to allow for the addition of more AI Assistants in the future. We got to work!
              </p>
              <p className=" mb-6 md:mb-7.5">
                We crafted a futuristic, virtual world of Topaz. The walkthrough experience built on the Unreal Engine pushes the boundaries of enterprise demonstrations. The custom framework integrates AI bot functionality with intuitive user navigation, while sophisticated media visualization brings inviting environments to life. In keeping with the futuristic look and AI-first approach, the characters and the voices used in the experience were Meta Humans and AI voice overs. Through meticulous optimization and rigorous testing, this offline application delivers a seamless, high-performance showcase of Infosys Topaz&apos;s AI Assistants—setting a new standard for interactive product and solution demonstrations.

              </p>
              <p className=" mb-6 md:mb-7.5">
                Preview a section of the interactive experience below.

              </p>
            </div>

          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>


      {/* <SimilarPosts
         tag="explore more case studies"
        className="py-15 md:pb-30"
        posts={similarPostsData}
      /> */}
    </>
  )
}
Colearn.PageLayout = SCSLayout
export default Colearn
