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
    name: '#ForwardWithInfosys',
    company: 'INFOSYS',
    image: '/img/infosys_eb_campaign.jpg',
    tags: ['Employer Branding', 'Campaign', 'Video Production'],
    href: '/work/b2b-brand-campaign-agency/infosis-eb',
  },
 {
    key: 0,
    name: 'Digital Courses',
    company: 'Jigsaw',
    image: '/img/works/jigsaw_work.webp',
   tags: ['Ed-tech', 'Digital Campaign', 'Marketing Video', 'Product Launch Video'],
    href: '/b2b-brand-campaign-agency/case-study/jigsaw-e-learning-explainer-video',
  },
  {
    key: 3,
  name: 'Social Media Campaign: Meet the AI-First Employees',
    company: 'Infosys',
    image: '/img/works/infy-ai-first-work.webp',
     tags: ['Technology', 'Digital Campaign','Employer Branding video', 'Social Media Content'],
    href: '/work/b2b-brand-campaign-agency/infosys-employees-social-media-campaign',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/infosys-logo.png',
    width: '150',
    height: '70',
  },
  // image: '/img/case-study/infosys_business_agility_banner.png',
  tags: ['Technology', 'Marketing Video'],
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
        vimeoId: '776201023/0449eea345',
        name: 'Business Agility Concept',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_business_agility_video_thumbnail.png',
        },
      }
    ],
  },
}

function InfosysBusinessAgility() {
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
      title="Infosys Business Agility Video | Makerrs" 
      url="https://www.makerrs.com/work/video-production/stock-footage-video-infosys-business-agility"
      description="We produced a dynamic campaign video for Infosys, showcasing the power of business agility and inspiring teams to scale with precision"

      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title=" IT Consulting firm delivers Business Agility Solution"
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-14 pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-0 md:mb-20">
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-6 md:mb-7.5">
               When a Fortune 500 software services company wanted to drive home an important message on 
               business agility, we crafted a video that wasn’t just on-point in terms of script, but also 
               energetic and memorable.
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
InfosysBusinessAgility.PageLayout = SCSLayout
export default InfosysBusinessAgility
