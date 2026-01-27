import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  SEO,
  SimilarPosts,
  WorkHeroSection,
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
]

const pageData = {
  logo: {
    src: '/img/logos/dozee.png',
    width: '150',
    height: '90',
  },
  specifyWidth: 'md:!w-[80px] !w-[60px]',
  image: '/img/case-study/dozee-banner.webp',
  tags: ['MedTech', 'PR Video', 'Video Report'],

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
        vimeoId: '896417033/9c440dc1f5',
        name: 'Dozee Sattva Report',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/dozee-video-banner.webp',
        },
      },
    ],
  },
}

function Colearn() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.pathname}`

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
        title="Dozee Beds Healthcare Video | Makerrs"
        description="Our video for Dozee Beds and Sattva Consulting showcased how smart hospital beds elevate care and drive large-scale public health impact in India."
        url="https://www.makerrs.com/work/video-production/video-report-dozee-public-health"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Highlighting the impact of Dozee Beds in India's Healthcare"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
        specifyWidth={specifyWidth}
      />
      <section className="bg-white pt-3.5 md:pb-14 pb-[24px] md:pt-0 overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                An impact study conducted by Sattva Consulting shows that India
                can potentially save 110,000+ more lives every year by upgrading
                hospital beds to Dozee Beds across public healthcare facilities.
                Our video presents the data from the study along with
                heart-warming and inspiring footage and testimonials on this
                innovative medical technology.
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
Colearn.PageLayout = SCSLayout
export default Colearn
