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
  name: 'Digital Campaign videos for E-learning courses',
  company: 'Jigsaw',
  image: '/img/works/jigsaw_work.webp',
  tags: ['Ed-tech', 'Digital Campaign', 'Marketing Video', 'Product Launch Video'],
  href: '/work/b2b-brand-campaign-agency/jigsaw-e-learning-explainer-video',
  },
   {
    key: 1,
    name: 'Social Media Campaign: Meet the AI-First Employees.',
    company: 'Infosys',
    image: '/img/works/infy-ai-first-work.webp',
     tags: ['Technology', 'Digital Campaign','Employer Branding video', 'Social Media Content'],
    href: '/work/b2b-brand-campaign-agency/infosys-employees-social-media-campaign',
    },
    {
    key: 2,
    name: 'Launching the Cobalt Cloud Community',
    company: 'Infosys',
    image: '/img/cobalt_community.jpg',
    tags: ['Technology', 'Digital Campaign', 'Platform Launch Video', '2D Animation Video'],
    href: '/work/b2b-brand-campaign-agency/infosys-cobalt-community-launch-video',
    },
  // {
  //   key: 0,
  //   name: 'STEM EDUCATORS WANTED',
  //   company: 'COLEARN',
  //   image: '/img/stem-educators-wanted.webp',
  //   tags: ['Ed-tech'],
  //   href: '/campaigns/case-study/colearn-stem-educators-recruitment-video',
  // },
  // {
  //   key: 1,
  //   name: 'CASE STUDIES FOR HIMSS',
  //   company: 'WIPRO',
  //   image: '/img/casestudy-for-himss.webp',
  //   tags: ['Healthtech', 'Case Study Video', 'Explainer Video', '2D Animation Video'],
  //   href: '/campaigns/case-study/wipro-healthtech-case-study-videos',
  // },
  // {
  //   key: 2,
  //   name: 'PROJECT LOOM',
  //   company: 'TANEIRA',
  //   image: '/img/project-loom.webp',
  //   tags: ['Fashion'],
  //   href: '/campaigns/case-study/taneira',
  // },
]

const pageData = {
  logo: {
    src: '/img/logos/infosys-logo.jpg',
    width: '180',
    height: '105',
  },
  tags: ['Employer Branding','Campaign' ,'Video Production'],
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
        vimeoId: '1039988503',
        name: 'Brittney Salama',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_1.jpg',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '1039988986',
        name: 'Shannon Hart',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_2.jpg',
        },
      },
      {
        key: 2,
        duration: 130,
        vimeoId: '1039989210',
        name: 'Irina Kose',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_3.jpg',
        },
      },
      {
        key: 3,
        duration: 130,
        vimeoId: '1039989399',
        name: 'Frederic Beynel',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_4.jpg',
        },
      },
      {
        key: 4,
        duration: 130,
        vimeoId: '1039989589',
        name: 'Luiz Marques',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_5.jpg',
        },
      },
      {
        key: 5,
        duration: 130,
        vimeoId: '1039997387',
        name: 'Natasza Kopczynska',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_6.jpg',
        },
      },
      {
        key: 6,
        duration: 130,
        vimeoId: '1039997765',
        name: 'Vinash Mistry',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_7.jpg',
        },
      },
      {
        key: 7,
        duration: 130,
        vimeoId: '1039998001',
        name: 'Weyinmi Slim',    
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_8.jpg',
        },
      },
      {
        key: 8,
        duration: 130,
        vimeoId: '1039998293',
        name: 'Charlotte Ferriday',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_9.jpg',
        },
      },
      {
        key: 9,
        duration: 130,
        vimeoId: '1039998758',
        name: 'Umar Tariq',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_10.jpg',
        },
      },
      {
        key: 10,
        duration: 130,
        vimeoId: '1039999068',
        name: 'Juhi Dubey',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_11.jpg',
        },
      },
      {
        key: 11,
        duration: 130,
        vimeoId: '1039999455',
        name: 'Michelle Roman',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_12.jpg',
        },
      },
      {
        key: 12,
        duration: 130,
        vimeoId: '1039999630',
        name: 'Antonia Rizakou',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_13.jpg',
        },
      },
      {
        key: 13,
        duration: 130,
        vimeoId: '1040000126',
        name: 'Tamara Certain',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_14.jpg',
        },
      },
      {
        key: 14,
        duration: 130,
        vimeoId: '1040000311',
        name: 'Osagioduwa Evbuomwan',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_15.jpg',
        },
      },
      {
        key: 15,
        duration: 130,
        vimeoId: '1040000771',
        name: 'Sandra Jackson',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_eb_16.jpg',
        },
      },
    ],
  },
}

function Colearn() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.pathname}`

  const { logo, tags, commercials, desktopVideo, mobileVideo } = pageData
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
      title="Case Study | Infosys" 
      description="Top agency for branding, content creation, animated video production, employer branding campaigns & interactive brand experiences."
      url="https://www.makerrs.com/work/b2b-brand-campaign-agency/infosis-eb"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Crafting a Unified Employer Brand Across Continents"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
      />
      <section className="bg-white pt-7.5 md:pb-14 pb-9 md:pt-0 overflow-hidden md:pt-[3.75rem]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
               Context & Brief
              </LineHeading>

              <p className=" mb-6 md:mb-7.5">
                With a rich history dating back to 1981, Infosys evolved from an 
                IT consulting and services firm in India to a global powerhouse 
                present in 54 countries and a workforce of over 300,000 employees.
              </p>
              <p className="mb-6 md:mb-7.5">
                Their brief to us: develop a comprehensive global Employer Branding 
                campaign that would not only position Infosys as a global brand but 
                also as an exciting local employer in various regions around the world.
                This would involve featuring employee experiences and career progressions,
                and leveraging the hashtag #ForwardwithInfosys.
              </p>
              <p className="mb-6 md:mb-7.5">
                The challenge: conceptualize, design, script and produce 16 videos across
                London, Paris, New York, Melbourne and Richardson within 45 days.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative Approach, Scalable Production & Impact
              </LineHeading>

              <p className="mb-6 md:mb-7.5">
                Craft relatable and inspiring stories of Infosys employees — highlighting 
                their personal and professional journeys across professions, ethnicities, 
                and genders. Use authentic storytelling, cinematic visuals, and bite-sized 
                social media edits to emphasize how Infosys is not just a workplace but a 
                springboard for thriving global careers.
              </p>
              <p className="mb-6 md:mb-7.5">
                Within a 45-day timeframe – we created a total of 16 engaging 1-minute videos
                and 30-second adaptations. These videos resonated well with our audience, 
                garnering an impressive average of 14,000 organic views per video on YouTube.
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
        tag="explore our case studies"
        className="py-15 md:pb-30 md:!pt-0"
        posts={similarPostsData}
      /> */}
    </>
  )
}
Colearn.PageLayout = SCSLayout
export default Colearn
