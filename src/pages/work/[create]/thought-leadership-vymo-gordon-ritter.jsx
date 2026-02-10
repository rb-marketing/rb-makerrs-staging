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
    src: '/img/logos/vymo-logo.webp',
   width: '150',
    height: '109',
  },
  // image: '/img/case-study/vymo_gordon_ritter_banner.webp',
  tags: ['SaaS', 'Thought Leadership Video', 'Corporate Film', 'Interview Video'],
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
        vimeoId: '1078406512',
        name: 'Gordon Ritter on the Future of Software',
        company: 'Vymo',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/vymo_gordon_ritter_thumbnail.webp',
        },
      },
    ],
  },
}

function VymoLeadManagement() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.asPath}`

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
      title="Vymo Future of Software Thought Leadership Video | Makerrs" 
      url="https://www.makerrs.com/work/video-production/thought-leadership-vymo-gordon-ritter"
      description="A thought leadership video blending Gordon Ritter’s insights with Vymo’s vision, revealing the future of enterprise software with clarity and impact."
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Gordon Ritter on the Future of Software"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-14 pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-0 md:mb-20">
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                Emergence Capital&apos;s Gordon Ritter, a leading investor in next-generation enterprise
                software like Vymo, brings decades of software investment expertise to a groundbreaking 
                conversation about next-generation enterprise solutions. Developed in collaboration with 
                Vymo, this thought leadership piece transcends traditional interview formats by weaving 
                expert insights with dynamic visual storytelling. The film distills complex software trends 
                into compelling narratives that illuminate the path forward for organizations embracing frontier 
                technologies like Vymo.
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
      />  */}
    </>
  )
}
VymoLeadManagement.PageLayout = SCSLayout
export default VymoLeadManagement
