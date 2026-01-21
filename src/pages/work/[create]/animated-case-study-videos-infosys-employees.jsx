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
      name: 'Digital Campaign videos for E-learning courses',
    company: 'Jigsaw',
        image: '/img/works/jigsaw_work.webp',
tags: ['Ed-tech', 'Digital Campaign', 'Marketing Video', 'Product Launch Video'],
    href: '/work/b2b-brand-campaign-agency/jigsaw-e-learning-explainer-video',
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
  //   key: 2,
  //   name: 'AI Transformation',
  //   company: 'Infosys',
  //   image: '/img/infy-ai-first.jpg',
  //    tags: ['Technology', 'Digital Campaign','Employer Branding video', 'Social Media Content'],
  //   href: '/campaigns/case-study/infosys-employees-social-media-campaign',
  // },
]

const pageData = {
  logo: {
    src: '/img/logos/infosys-logo.jpg',
    width: '150',
    height: '105',
  },
  image: '/img/case-study/infy_first_banner.webp',
  tags: ['Technology', 'Digital Campaign','Employer Branding video', 'Social Media Content'],
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
        key: 1,
        duration: 130,
        vimeoId: '1042874576',
        name: 'Food Procurement Industry',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/food_procurement.jpg',
        },
      },
      {
        key: 2,
        duration: 128,
        vimeoId: '1042874487',
        name: 'Financial Services Industry',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/financial_services.jpg',
        },
      },
      {
        key: 3,
        duration: 130,
        vimeoId: '1042874748',
        name: 'Fashion Retail Industry',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/fashion_retail.jpg',
        },
      },
      {
        key: 4,
        duration: 128,
        vimeoId: '1042874327',
        name: 'Education and Learning Industry',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/education_and_learning.jpg',
        },
      },
      {
        key: 5,
        duration: 130,
        vimeoId: '1042874695',
        name: 'Beauty and Cosmetics Industry',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/beauty_and_cosmetics.jpg',
        },
      }
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
      title="Infosys Employer Branding Humanizing AI Campaign | Makerrs" 
      description="We elevated Infosys employer branding by spotlighting employee voices and humanizing AI to reinforce its position as an AI-first workplace."
      url="https://www.makerrs.com/work/brand-campaign/animated-case-study-videos-infosys-employees"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Social Media Campaign: Meet the AI-First Employees"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-[32px] pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background & Problem Statement
              </LineHeading>

              <p className=" mb-6 md:mb-7.5">
                Established in 1981 in India, Infosys has evolved into
                a global IT consulting powerhouse with operations in 54
                countries and over 300,000 employees.
              </p>
              <p className="mb-6 md:mb-7.5">
                Today, Infosys is at the forefront of AI-driven transformation.
                With a global ambition to establish themselves as an AI-first company,
                not just by developing cutting-edge AI solutions for clients but by embedding
                AI into the very culture of their workforce.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                The Opportunity
              </LineHeading>

              <p className="mb-6 md:mb-7.5">
              In the past, Infosys had created several case study
              videos showcasing AI-powered client success stories.
              </p>
              <p className="mb-6 md:mb-7.5">
              But these narratives followed a familiar pattern, 
              focusing on business outcomes, pain points, and results.
              </p>
              <p className="mb-6 md:mb-7.5">
              We saw an opportunity to amp up the human element. Our goal 
              was to create a global narrative by bringing to life the stories 
              of the employees who developed these AI solutions every day. 
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
              Creative Approach
              </LineHeading>

              <p className="mb-6 md:mb-7.5">
                We flipped the script of the typical case study video. Rather than simply narrating 
                business outcomes, we placed Infosys employees at the center of the story, giving 
                them the spotlight as creators, problem-solvers, and enablers in AI adoption.
              </p>
              <p className="mb-6 md:mb-7.5">
                We developed a series of 5 employee-perspective case studies, using an innovative 
                mixed-media format to bring these AI adoption stories to life.
              </p>
       <ul className='list-disc pl-6 leading-7 mb-[30px]'>
                <li className="list-disc pl-6 leading-7 text-[16px] md:text-[20px] font-semibold  tracking-[-0.5px] opacity-90 mb-6 md:mb-7.5">
                <span className="font-bold">Mixed media aesthetic</span> - We moved beyond standard-issue stock footage and opted for 
                a bold, mixed-media look instead.  Blending stock images, custom illustrations, and 
                dynamic typography, this approach gave the stories an artistic look that ‘popped’  
                on social feeds.
                </li>
                <li className="list-disc pl-6 leading-7 text-[16px] md:text-[20px] font-semibold tracking-[-0.5px] opacity-90 mb-6 md:mb-7.5">
                <span className="font-bold">Authentic narratives</span> - Each employee story was scripted to sound personal, authentic, 
                and conversational. Employees spoke from their perspective—sharing how AI transformed 
                their roles, the challenges they overcame, and the sense of purpose they found in their work
                </li>
                <li className="list-disc pl-6 leading-7 text-[16px] md:text-[20px] font-semibold  tracking-[-0.5px] opacity-90 mb-6 md:mb-7.5">
                <span className="font-bold">Humanizing AI</span> - By shifting the focus from technology to the people behind it, the series proved that 
                AI is not just a tool for clients but an enabler of employee growth. 
                </li>
              </ul>
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
        className="py-15 md:pb-30 md:!pt-0"
        posts={similarPostsData}
      /> */}
    </>
  )
}
Colearn.PageLayout = SCSLayout
export default Colearn
