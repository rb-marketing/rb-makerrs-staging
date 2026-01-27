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
  key: 23,
  name: "Corporate Film for Aerospace Manufacturing giant in India",
  company: 'GE Aerospace',
  image: '/img/works/ge_aerospace.webp',
  alt: 'GE Aerospace',
  tags: ['Manufacturing', 'Aerospace', 'Corporate Films & Videos'],
  tabs: ['Featured'],
  case_study_title:'ge-aerospace-corporate-film',
        href: '/work/b2b-brand-experience-agency/ge-aerospace-corporate-film',

  },
{
    key: 0,
     name: 'Sales Digitisation Campaign - Interactive Explainer',
     image: '/img/works/slb_work.webp',
     company: 'SLB',
     alt: 'slb',
     tags: ['Engineering', 'Campaign', 'Explainer Video', 'Demo Video', 'Interactive Video'],
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
    src: '/img/logos/colearn-logo.webp',
    width: '150',
    height: '105',
  },
  specifyWidth: 'md:!w-[200px] !w-[180px]',
  image: '/img/case-study/colearn_banner.webp',
  tags: ['Ed-tech', 'Employer Branding & Recruitment Campaign', 'Hiring Video',],
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
        vimeoId: '867137489',
        name: 'Yuna’s Story',
        company: 'COLEARN',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/colearn-thumbnail1.jpg',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '895020060',
        name: 'Billy’s Story',
        company: 'COLEARN',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/colearn-thumbnail2.jpg',
        },
      },
    ],
  },
}

function Colearn() {
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
      title="CoLearn Employer Branding STEM Educators | Makerrs" 
      description="We helped CoLearn inspire STEM educators in Indonesia with testimonial videos that elevated teaching and scaled recruitment"
      url="https://www.makerrs.com/work/video-production/recruitment-video-colearn-education"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Hiring STEM Educators for Indonesia"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
        specifyWidth={specifyWidth}
      />
      <section className="bg-white overflow-hidden md:pb-16 pb-9">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background & Problem Statement
              </LineHeading>

              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                In the vibrant Southeast Asian market, where the demand for
                quality STEM education was soaring, CoLearn identified a
                critical challenge. Talented STEM grads were steering clear of
                the teaching route in Indonesia. Why? The profession hadn’t
                exactly been a poster child for success in the country - given
                aging school infrastructure, long hours, modest pay, and a
                perception problem.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Hesitation among skilled young STEM educators left
                forward-thinking EdTech disruptors like CoLearn in a fix.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                CoLearn’s brief to us: show talented, young SouthEast Asians
                that teaching with CoLearn would be a fulfilling journey both
                professionally and personally, and the teaching space - wherever
                they chose!
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                We addressed this brief by collaboratively hand-picking the
                right teachers, and crafting stories to lead the hiring campaign
                with.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative approach
              </LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                The heart of our creative approach lay in presenting a vibrant
                and engaging portrayal of the daily lives of CoLearn&apos;s star
                teachers, emphasizing that teaching was not confined to dreary
                classrooms but could unfold in inspiring environments, impacting
                hundreds of young learners across Indonesia.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Our work extended beyond borders, producing films in two
                different countries. The result was a powerful recruitment tool
                that not only addressed the immediate supply gap but also
                reshaped social perceptions around teachers who wanted to
                nurture Indonesia’s next generation.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Through lively conversations, captivating b-roll footage, and a
                cinematic edit, we crafted hiring videos that showcased the
                fulfillment, flexibility, and immense potential for personal and
                professional growth that a teaching career with CoLearn offers.
                The videos also emphasized the substantial impact the STEM
                teachers could have on Indonesia’s young learning population.
              </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

      <Testimonials
        // type='semi'
        testimonialData={[
          {
            key: 0,
            quote:
              'Despite difficulties faced in shooting in 2 countries, we created these awesome videos, while keeping everyone safe during Covid-19.',
            name: 'MARC IRAWAN',
            designation: 'Founder',
            company: 'COLEARN',
            image: {
              srcSet:
                '/img/testimonials/marc.webp 533w, /img/testimonials/marc.webp 1066w',
              sizes: '(max-width:768px) 533px, 1066px',
            },
          }
        ]}
        className="md:!pb-30 md:pt-15 pb-15 md:!mt-0"
        title = 'WHAT OUR CLIENT SAYS'
      />

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
