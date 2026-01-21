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
    src: '/img/logos/infosys-logo.jpg',
    width: '180',
    height: '105',
  },
  image: '/img/case-study/infosys_x_wsj_banner.webp',
  tags: ['Case Study Videos', 'Testimonial Videos', 'Multi-location Video Production', 'IT Consulting'],
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
        vimeoId: '1084658661/b2d6c34787',
        name: 'Kia Motors',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_kia_motors_thumbnail.webp',
        },
      },
      {
        key: 1,
        duration: 130,
        vimeoId: '1084665775/f24a80bb6b',
        name: 'Vialto',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_vialto_thumbnail.webp',
        },
      },
      {
        key: 2,
        duration: 130,
        vimeoId: '1084666340/30c7698609',
        name: 'Spotlight',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_spotlight_Thumbnail.webp',
        },
      },
      {
        key: 3,
        duration: 130,
        vimeoId: '1084669972/1fbba55efb',
        name: 'ADT Boca Raton',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_adt_thumbnail.webp',
        },
      },
    ],
  },
}

function InfosysWSJ() {
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
      title="Case Study | Infosys x WSJ" 
      url="https://www.makerrs.com/work/videos/infosys-wsj"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Global Case Study and Client Testimonial Videos on WSJ"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white md:pb-[5.3rem] pb-[24px] overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                With a strategic focus on reaching C-suite audiences, Infosys partnered with WSJ to 
                showcase transformative business stories from across the globe. The brief called for 
                authentic, engaging, and impact-rich client features that would live on WSJ&apos;s global 
                platform, demanding production values that surpass previous benchmarks.
                </p>
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                We delivered a creative solution that marries live-action interviews with cinematic b-roll
                and bespoke motion graphics. From crafting insightful interview structures to ensuring seamless
                on-location production, every detail was designed to elevate the narrative. The result? A series 
                of polished, impactful films that inspire and connect with global business leaders on WSJ&apos;s platform.
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
InfosysWSJ.PageLayout = SCSLayout
export default InfosysWSJ
