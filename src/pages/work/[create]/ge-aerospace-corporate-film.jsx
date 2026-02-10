import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  SEO,
  Testimonials,
  WorkHeroSection,
  SimilarPosts,
  LineHeading,
} from '@/components/shared'
import { useRouter } from 'next/router'
import { CommercialSection } from '@/components/pages/work'

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
    name: 'Global Case Study and Client Testimonial Videos on WSJ',
    company: 'Infosys',
    image: '/img/works/infosys_x_wsj.webp',
    alt: 'Infosys',
    tags: [
      'Case Study Videos',
      'Testimonial Videos',
      'Multi-location Video Production',
      'IT Consulting',
    ],
    tabs: ['Videos'],
    case_study_title: 'infosys-wsj',
    href: '/work/b2b-video-production-agency/infosys-wsj',
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
    src: '/img/logos/general-electric.png',
    width: '150',
    height: '105',
  },
  specifyWidth: 'md:!w-[200px] !w-[180px]',
  image: '/img/case-study/ge_aerospace_banner.webp',
  tags: ['Manufacturing', 'Aerospace', 'Corporate Films & Videos'],
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
        vimeoId: '1078429989',
        name: 'GE Aerospace in India',
        company: 'GE Aerospace',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/ge_aerospace_thumbnail.webp',
        },
      },
    ],
  },
}

function Aerospace() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.asPath}`

  const {
    logo,
    tags,
    commercials,
    desktopVideo,
    mobileVideo,
    image,
    specifyWidth,
  } = pageData

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
        title="GE Aerospace India Corporate Film | Makerrs"
        description="We created a corporate film for GE Aerospace India, showcasing its 40-year aviation legacy, local partnerships, and vision for the future of flight."
        url="https://www.makerrs.com/work/video-production/ge-aerospace-corporate-film"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Corporate Film for Aerospace Manufacturing giant in India"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
        specifyWidth={specifyWidth}
      />
      <section className="bg-white  md:pb-14 pb-[24px] overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background & Problem Statement
              </LineHeading>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                For over 40 years, GE Aerospace has been a committed partner in
                India&apos;s aviation journey. Working alongside local talent,
                suppliers, and institutions, it has contributed to the growth of
                Indian commercial and defence aviation sectors. Now, GE
                Aerospace India wanted a film that would celebrate the journey
                and the deep relationships built in India so far. The film would
                need to highlight key milestones, but also move beyond them - to
                tell a story rooted in co-creation, long-term commitment, and a
                partnership that continues to shape the future of flight.
              </p>
            </div>
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative Approach
              </LineHeading>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                Taking inspiration from GE&apos;s global brand voice, we
                anchored the film in a human idea: hands. Hands that design,
                assemble, test, and lift. Hands that power flight, and
                possibility. Through hands, we told the story of GE
                Aerospace&apos;s journey in India, its local partnerships and
                its vision.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                Shot across GE Aerospace&apos;s Bengaluru and Pune facilities,
                the film blends cinematic detail with scale. We paired original
                footage with rare archival material from GE&apos;s global
                library to capture key milestones - from the first CF6 engine on
                an Air India Airbus to the Tejas partnership with Hindustan
                Aeronautics Limited. A custom-composed music track and a warm,
                grounded visual treatment brought authenticity and emotion to
                the narrative.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                The film was unveiled at Aero India 2025, celebrating GE
                Aerospace&apos;s journey in and with India, and a future powered
                by the same spirit - making in India, for India and the world.
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
Aerospace.PageLayout = SCSLayout
export default Aerospace
