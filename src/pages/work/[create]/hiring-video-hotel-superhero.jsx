import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  PostContent,
  PressSection,
  SEO,
  SimilarPosts,
  StatsContainer,
  Testimonials,
  WorkHeroSection,
  testimonialsDefault,
} from '@/components/shared'
import { useRouter } from 'next/router'
import { ccs, similarPosts } from '@/utils/dummy'
import { CommercialSection } from '@/components/pages/work'
// // import { createTestimonialData } from '@/pages/services/create'

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
    src: '/img/logos/treebo_logo.png',
    width: '150',
    height: '105',
  },
  specifyWidth: 'md:!w-[200px] !gw-[180px]',
  // image: '/img/case-study/treebo_banner.webp',
  tags: ['Hospitality Tech', 'Hiring Video', 'Employer Branding', 'Testimonial Video'],
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
        vimeoId: '787820271',
        name: 'Treebo Recruitment Film',
        company: 'Treebo',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/treebo_hotels.webp',
        },
      }
    ],
  },
}

function Treebo() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.pathname}`

  const { logo, tags, commercials, desktopVideo, mobileVideo, image, specifyWidth } = pageData
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
      title="Treebo Hotels Recruitment Video | Makerrs" 
      description="We produced a recruitment film for Treebo Hotels that revealed Hotel Superhero, a SaaS built to scale hospitality talent and redefine budget travel."
      url="https://www.makerrs.com/work/video-production/hiring-video-hotel-superhero"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title='Hiring for "Hotel Superhero", hospitality SAAS'
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
        specifyWidth = {specifyWidth}
      />
      <section className="bg-white overflow-hidden md:pb-14 pb-[24px]">
         <div className="container">
            <div className="cs-content max-w-[914px]">
                <div className="mt-0 md:mb-20">
                    <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                    Spotless linen, free Wi-Fi, complimentary breakfast—who wouldn’t
                    love world-class hospitality at an affordable price? This video, 
                    we created for Treebo, showcases the launch of ‘Hotel Superhero,’ 
                    a SaaS solution designed to elevate budget travel with delightful 
                    guest experiences!
                    </p>
                </div>
            </div>
          </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>
{/* 
      <SimilarPosts
         tag="explore more case studies"
        className="py-15 md:pb-30"
        posts={similarPostsData}
      /> */}
    </>
  )
}
Treebo.PageLayout = SCSLayout
export default Treebo