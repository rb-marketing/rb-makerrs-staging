import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  SEO,
  Testimonials,
  WorkHeroSection,
  SimilarPosts,
  LineHeading
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
    src: '/img/logos/infosys-logo.jpg',
    width: '150',
    height: '105',
  },
  image: '/img/case-study/infosys_springboard_banner.webp',
  tags: ['Technology', 'Non-profit', 'CSR Video', 'Corporate Film'],
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
        vimeoId: '1078433338',
        name: 'Infosys x Springboard',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_springboard_thumbnail.webp',
        },
      },
    ],
  },
}

function Ukraine() {
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
      title="Infosys Springboard Ukraine Documentary Video | Makerrs" 
      url="https://www.makerrs.com/work/video-production/csr-video-infosys-street-child"
      description="We showcased Infosys Springboard’s role in empowering Ukraine’s war-affected children with digital learning centres, reclaiming education and hope."
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Powering education in war-torn Ukraine, with Street Child"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-14 pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
                <LineHeading className="mb-6 md:mb-9">
                  Background & Problem Statement
                </LineHeading>
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                As of January 2024, the conflict in Ukraine had disrupted education for 1.9 million
                children, damaging over 3,700 learning spaces and destroying 350 schools, causing them
                to rely solely on remote education.
                </p>
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                To help children find their way back to learning, Infosys partnered with Street Child, an 
                international children&apos;s charity, to create safe learning environments. This collaboration
                led to the establishment of Digital Learning Centres (DLCs) equipped with Infosys Springboard&apos;s 
                digital learning platform, offering tailored courses for both students and teachers, helping them reclaim 
                education amidst an ongoing war. 
                </p>
            </div>
            <div className="mt-9 md:mb-20">
                <LineHeading className="mb-6 md:mb-9">
                  Creative Approach
                </LineHeading>
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                To bring this effort to light, Infosys approached us to create a heartfelt documentary,
                one that not only captures the impact of this initiative but also its soul: the children 
                of Ukraine, who get the chance to learn, play, and hope, despite the destruction around them.
                </p>
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                This film blends archival news clips, on-ground visuals of children learning in the DLCs, 
                impactful bytes from DLC tutors, and key voices from Street Child and Infosys. These 
                first-hand accounts are a reflection of why this initiative matters and the real impact 
                it has on the children&apos;s education and lives. 
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
Ukraine.PageLayout = SCSLayout
export default Ukraine
