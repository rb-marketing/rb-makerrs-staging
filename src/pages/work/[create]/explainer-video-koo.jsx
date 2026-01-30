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
    src: '/img/logos/koo_logo.png',
   width: '150',
    height: '109',
  },
  specifyWidth: 'md:!w-[80px] !w-[60px]',
  // image: '/img/case-study/koo_self_verification_banner_visual.png',
  tags: ['Social Network', 'Explainer Video', '2D Animation Video'],
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
        vimeoId: '1008705901',
        name: 'Koo’s Self-Verification Explainer Video',
        company: 'Koo',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/koo_video_thumbnail.png',
        },
      },
    ],
  },
}

function KooSelfVerification() {
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
      title="Koo's Self-Verification Launch Video | Makerrs" 
      url="https://www.makerrs.com/work/video-production/explainer-video-koo"
      description="We created a launch video for Koo, a social media platform, to introduce the verification feature, showcasing how users earn the coveted yellow tick."
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Koo Launches Self-Verification"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
        specifyWidth={specifyWidth}
      />
      <section className="bg-white overflow-hidden md:pb-14 pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-0 md:mb-20">
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                    Koo became the first social media platform to empower Indians to authenticate and secure 
                    their identity on the Twitter-like local-language app. So when Koo approached us to make a 
                    custom-designed video to help launch the game-changing feature, we made this video in pretty 
                    much one week flat. The video unveils the exciting feature and shows how users could earn the 
                    coveted yellow verification tick on Koo.
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
KooSelfVerification.PageLayout = SCSLayout
export default KooSelfVerification
