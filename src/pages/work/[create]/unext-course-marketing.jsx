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
  FeaturedWorkSection,
  WorkHeroSection,
  testimonialsDefault,
} from '@/components/shared'
import { useRouter } from 'next/router'
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
    key: 1,
    name: 'Social Media Campaign: Meet the AI-First Employees',
    company: 'Infosys',
    image: '/img/works/infy-ai-first-work.webp',
    tags: [
      'Technology',
      'Digital Campaign',
      'Employer Branding video',
      'Social Media Content',
    ],
    href: '/work/b2b-brand-campaign-agency/infosys-employees-social-media-campaign',
  },
  {
    key: 2,
    name: 'Launching the Cobalt Cloud Community',
    company: 'Infosys',
    image: '/img/cobalt_community.jpg',
    tags: [
      'Technology',
      'Digital Campaign',
      'Platform Launch Video',
      '2D Animation Video',
    ],
    href: '/work/b2b-brand-campaign-agency/infosys-cobalt-community-launch-video',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/unext-logo.svg',
    width: '150',
    height: '50',
  },
  image: '/img/case-study/jigsaw_banner.webp',
  tags: [
    'Ed-tech',
    'Digital Campaign',
    'Marketing Video',
    'Product Launch Video',
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
        duration: 130,
        vimeoId: '1058920419',
        name: 'Product Management',
        company: 'UNEXT',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/jigsaw-thumbnail1.jpg',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '895013824',
        name: 'People Analytics & Digital HR',
        company: 'UNEXT',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/jigsaw-thumbnail2.jpg',
        },
      },
      {
        key: 2,
        duration: 128,
        vimeoId: '895013752',
        name: 'Business Analytics',
        company: 'UNEXT',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/jigsaw-thumbnail3.jpg',
        },
      },
      {
        key: 3,
        duration: 128,
        vimeoId: '895014054',
        name: 'Full Stack Data Science',
        company: 'UNEXT',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/jigsaw-thumbnail4.jpg',
        },
      },
      {
        key: 4,
        duration: 128,
        vimeoId: '895013948',
        name: 'Cloud Computing',
        company: 'UNEXT',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/jigsaw-thumbnail5.jpg',
        },
      },
      {
        key: 5,
        duration: 128,
        vimeoId: '895013878',
        name: 'PGDP - Data Science',
        company: 'UNEXT',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/jigsaw-thumbnail6.jpg',
        },
      },
    ],
  },
}

function Colearn() {
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
        title="Jigsaw E-learning Campaign Video | Makerrs"
        description="We designed short ad films for Jigsaw Academy that showcased six programs with clarity and impact, inspiring students to envision their career goals."
        url="https://www.makerrs.com/work/brand-campaign/unext-course-marketing"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Digital Campaign videos for E-learning courses"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white md:pb-[32px] pb-[24px]  overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Context & Brief
              </LineHeading>

              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                The ed-tech startup boom in India has given rise to a large
                influx of options for the modern-day learner. For a player like
                Jigsaw (now UNext), it was extremely important to pack a punch
                within bite-sized video ads that attracted learners to their
                platform.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Jigsaw Academy came to us with a mandate of creating targeted
                advertisements that positioned six programs that they were
                taking to market. The films needed to demonstrate how
                individuals would benefit professionally from the courses
                offered by the e-learning platform.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Approach</LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                We crafted a series of twenty-second pre-roll ads as well as
                sub-10-second pre-roll teasers to amplify the campaign.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                The ads gave prospective students an overview of the six unique
                programs offered by Jigsaw and their partners – IIM Indore,
                Manipal Academy of Higher Education, and NASSCOM. We used a
                combination of stock footage and images, motion graphics, and
                voice overs to demonstrate how the curriculum allows individuals
                to better-prepare for their dream jobs.
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
                testimonialData={[
                    {
                        key: 3,
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
                    },
                ]}
                className="py-7.5 md:py-15 "
            /> */}
      {/* 
            <SimilarPosts
                tag="explore more case studies"
                className="py-15 md:pb-30 md:!pt-0"
                posts={similarPostsData}
            /> */}
    </>
  )
}
Colearn.PageLayout = SCSLayout
export default Colearn
