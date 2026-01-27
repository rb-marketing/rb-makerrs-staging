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
import { CommercialSection } from '@/components/pages/work'
// // import { createTestimonialData } from '@/pages/services/create'

export const similarPostsData = [
  {
    key: 0,
    name: 'Supporting young women in pursuit of a Future in STEM',
    company: 'WeRise',
    image: '/img/works/we_rise.webp',
    alt: 'WeRise',
    tags: ['Non-profit', 'CSR Video', 'Documentary'],
    tabs: ['Videos'],
    case_study_title: 'werise-women-in-science-documentary',
    href: '/work/b2b-video-production-agency/werise-women-in-science-documentary',
  },
  {
    key: 1,
    name: 'Corporate Film for Aerospace Manufacturing giant in India',
    company: 'GE Aerospace',
    image: '/img/works/ge_aerospace.webp',
    alt: 'GE Aerospace',
    tags: ['Manufacturing', 'Aerospace', 'Corporate Films & Videos'],
    tabs: ['Videos'],
    case_study_title: 'ge-aerospace-corporate-film',
    href: '/work/b2b-video-production-agency/ge-aerospace-corporate-film',
  },
  {
    key: 2,
    name: 'Gordon Ritter on the Future of Software',
    company: 'Infosys',
    image: '/img/works/vymo_gordon_ritter.webp',
    alt: 'Infosys',
    tags: [
      'SaaS',
      'Thought Leadership Video',
      'Corporate Film',
      'Interview Video',
    ],
    tabs: ['featured', 'Videos'],
    case_study_title: 'vymo-gordon-ritter-thought-leadership-video',
    href: '/work/b2b-video-production-agency/vymo-gordon-ritter-thought-leadership-video',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/wipro-logo.webp',
    width: '150',
    height: '105',
  },
  image: '/img/case-study/wipro_himss_banner_visual.png',
  tags: [
    'Healthtech',
    'Case Study Video',
    'Explainer Video',
    '2D Animation Video',
  ],
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
        duration: 84,
        vimeoId: '896417248',
        name: 'Provider Case Study',
        company: 'WIPRO',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/wipro-thumbnail1.jpg',
        },
      },
      {
        key: 1,
        duration: 114,
        vimeoId: '903319789',
        name: 'Provider Solution',
        company: 'WIPRO',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/wipro-thumbnail5.jpg',
        },
      },
      {
        key: 2,
        duration: 114,
        vimeoId: '903319848',
        name: 'Payer Case Study',
        company: 'WIPRO',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/wipro-thumbnail2.jpg',
        },
      },
      {
        key: 3,
        duration: 93,
        vimeoId: '903319710',
        name: 'Smart Track Case Study',
        company: 'WIPRO',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/wipro-thumbnail3.jpg',
        },
      },
      {
        key: 4,
        duration: 105,
        vimeoId: '903319639',
        name: 'Life Science Case Study',
        company: 'WIPRO',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/wipro-thumbnail4.jpg',
        },
      },
    ],
  },
}

function Wipro() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.pathname}`

  const { logo, tags, commercials, image } = pageData
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
        title="Wipro Healthtech Case Study Videos for HIMSS | Makerrs"
        description="We crafted healthtech and insurtech case study films for Wipro, revealing complex solutions with innovation and strengthening their presence at HIMSS."
        url="https://www.makerrs.com/work/video-production/healthcare-case-study-video-wipro"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Healthtech and Insurtech Case Study Videos for HIMSS"
        image={image}
      />
      <section className="bg-white md:pb-[32px] pb-[24px] overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background & Problem Statement
              </LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                The healthcare industry grapples with constant change, demanding
                efficient solutions to manage data, improve patient care, and
                streamline operations. HIMSS, the annual Healthcare Information
                and Management Systems Society conference, is a bustling hub for
                healthcare professionals and organizations seeking cutting-edge
                technology solutions.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Standing out amongst the multitude of technology providers at
                HIMSS, presented a significant challenge for Wipro. They needed
                to effectively communicate their diverse healthcare solutions
                and case studies within a limited timeframe and capture the
                attention of a diverse set of healthcare professionals in a busy
                event setting.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative approach
              </LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                We harnessed the power of animation to stand out from the sea of
                technology service providers at HIMSS, and produced 9 business
                impact stories in about 45 days. Each video had a custom
                designed storyboard, 2D animation, kinetic typography, sharp
                scripts and voice overs - a combination that lent itself to
                engaging storytelling around complex healthcare technology
                solutioning.
              </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

      {/* <Testimonials
        // type='semi'
        testimonialData={testimonialsDefault.slice(0, -2)}
        className="py-7.5 md:py-15 "
      /> */}

      {/* <SimilarPosts
        tag="explore more case studies"
        className="py-15 md:pb-30 md:pt-0"
        posts={similarPostsData}
      /> */}
    </>
  )
}
Wipro.PageLayout = SCSLayout
export default Wipro
