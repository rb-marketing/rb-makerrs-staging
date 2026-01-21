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
  key: 23,
  name: "Corporate Film for Aerospace Manufacturing giant in India",
  company: 'GE Aerospace',
  image: '/img/works/ge_aerospace.webp',
  alt: 'GE Aerospace',
   tags: ['Manufacturing', 'Aerospace', 'Corporate Films & Videos'],
  tabs: ['Featured'],
  case_study_title:'ge-aerospace-corporate-film',
        href: '/work/b2b-video-production-agency/ge-aerospace-corporate-film',

  },
{
    key: 0,
     name: 'Sales Digitisation Campaign - Interactive Explainer',
     image: '/img/works/slb_work.webp',
     company: 'SLB',
     alt: 'slb',
     tags: ['Engineering', 'Campaign', 'Explainer Video', 'Demo Video', 'Interactive Video'],
     case_study_title:'slb-interactive-explainer',
      href: '/work/b2b-brand-campaign-agency/slb-interactive-explainer',
    
  },
        {
  key: 2,
  name: "Gordon Ritter on the Future of Software",
  company: 'Vymo',
  image: '/img/works/vymo_gordon_ritter.webp',
  alt: 'Vymo',
  tags: ['SaaS', 'Thought Leadership Video', 'Corporate Film', 'Interview Video'],
  case_study_title:'vymo-gordon-ritter-thought-leadership-video',
  href: '/work/b2b-video-production-agency/vymo-gordon-ritter-thought-leadership-video',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/werise_logo.jpeg',
    width: '150',
    height: '105',
  },
  image: '/img/case-study/werise_banner.webp',
  tags: ['Non-profit', 'CSR Video', 'Documentary'],
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
        vimeoId: '1085674583',
        name: 'Women of Tomorrow',
        company: 'WeRise',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/werise_thumbnail.webp',
        },
      },
       {
        key: 1,
        duration: 130,
        vimeoId: '1109626962',
        name: 'The Scholar Journey',
        company: 'WeRise',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/werise_thumbnail-1.png',
                },
      },
    ],
  },
}

function WeRise() {
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
      title="WeRise Women in STEM Documentary | Makerrs" 
      url="https://www.makerrs.com/work/video-production/women-in-STEM-documentary"
      description="We collaborated with WeRise to reveal young women’s STEM journeys, capturing resilience and showcasing a path that inspires tomorrow’s innovators."
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Supporting young women in pursuit of a Future in STEM"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-[84px] pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
              This documentary short explores the promising journey of young women in science. It highlights their aspirations, challenges, and the bright future they envision, inspiring the world with their determination and innovation.
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
WeRise.PageLayout = SCSLayout
export default WeRise
