import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  SEO,
  Testimonials,
  WorkHeroSection,
  SimilarPosts
} from '@/components/shared'
import { useRouter } from 'next/router'
import { CommercialSection } from '@/components/pages/work'

export const similarPostsData = [
    {
    key: 0,
    name: "Supporting young women in pursuit of a Future in STEM",
    company: 'WeRise',
    image: '/img/works/we_rise.webp',
    alt: 'WeRise',
     tags: ['Non-profit', 'CSR Video', 'Documentary'],
    tabs: ['Videos'],
    case_study_title:'werise-women-in-science-documentary',
    href: '/work/b2b-video-production-agency/werise-women-in-science-documentary',
  },
  {
  key: 1,
  name: "Corporate Film for Aerospace Manufacturing giant in India",
  company: 'GE Aerospace',
  image: '/img/works/ge_aerospace.webp',
  alt: 'GE Aerospace',
   tags: ['Manufacturing', 'Aerospace', 'Corporate Films & Videos'],
  tabs: ['Videos'],
  case_study_title:'ge-aerospace-corporate-film',
      href: '/work/b2b-video-production-agency/ge-aerospace-corporate-film',
  },
  {
  key: 2,
  name: "Global Case Study and Client Testimonial Videos on WSJ",
  company: 'Infosys',
  image: '/img/works/infosys_x_wsj.webp',
  alt: 'Infosys',
  tags: ['Case Study Videos', 'Testimonial Videos', 'Multi-location Video Production', 'IT Consulting'],
  tabs: ['Videos'],
  case_study_title:'infosys-wsj',
    href: '/work/b2b-video-production-agency/infosys-wsj',
  },
]


const pageData = {
  logo: {
    src: '/img/logos/healthify_logo.png',
   width: '150',
    height: '109',
  },
  // image: '/img/case-study/healthifyme_banner_visual.png',
  tags: ['Health & Fitness', 'Marketing Campaign', 'Product Launch Video', 'Testimonial and Case Study Videos'],
  // desktopVideo: '/img/works/metro-wholesale-big.mp4',
  // mobileVideo: '/img/works/metro-wholesale.mp4',
  // featured: {
  //   src: '/img/works/ccs_2x.webp',
  //   width: '2880',
  //   height: '1544',
  // },
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
        vimeoId: '1100213305',
        name: 'Employee Testimonial Video',
        company: 'HealthifyMe App',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/healthifyme_app_video_thumbnail.png',
        },
      },
    ],
  },
}

function HealthifyEmployeeWell() {
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
      title="HealthifyMe Employee Wellness App Video | Makerrs" 
      url="https://www.makerrs.com/work/video-production/employee-wellness-healthifyme-app-video"
      description="We crafted a marketing video for HealthifyMe that showcased its gamified employee wellness app, inspiring HR teams to drive healthier, happier workplaces."
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="How a Healthtech Startup Gamified Workplace Wellness"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-14 pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-0 md:mb-20">
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                    HealthifyMe is a digital health and wellness startup. Its app provides on-cloud nutritional 
                    and fitness advice, as well as calorie and water tracking to individuals and via enterprises to 
                    employees. To pitch its game changing solution to HR teams interested in boosting employee wellness, 
                    HealthifyMe needed a great marketing video.
                </p>
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                    The HealthifyMe app had a great gamified approach to employee wellness, so bringing this feature to 
                    the screen was pretty exciting for us. Our marketing video for HealthifyMe showcased the gamified 
                    approach to better employee health through a fictionalised narrative featuring actors, an office-like 
                    environment, wellness activities and cool app screens. The resulting video helped pitch a never-before 
                    employee wellness solution to large enterprises across India. 
                </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>
    </>
  )
}
HealthifyEmployeeWell.PageLayout = SCSLayout
export default HealthifyEmployeeWell
