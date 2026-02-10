import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  SEO,
  SimilarPosts,
  WorkHeroSection,
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router';

export const similarPostsData = [
   {
    key: 0,
     name: 'Sales Digitisation Campaign - Interactive Explainer', 
     image: '/img/works/slb_work.webp',
     company: 'SLB',
     alt: 'slb',
     tabs: ['Featured','Campaign','Videos','Technology'],
     tags: ['Engineering', 'Campaign', 'Explainer Video', 'Demo Video', 'Interactive Video'],
     case_study_title:'slb-interactive-explainer',
      href: '/work/b2b-brand-campaign-agency/slb-interactive-explainer',
    
  },
    {
    key: 1,
    name: 'Launching an AI-powered healthcare brand in record time',
    company: 'Lillia Care',
    image: '/img/works/lillia_img.jpg',
    alt:'Lillia Care',
   tags: ['Healthtech', 'Brand Identity', 'Website Design', 'Website Development'],
    tabs: ['Design','Featured','Technology'],
  
        href: '/work/b2b-brand-design-agency/lillia-care-brand-launch',
     
    },
      {
    key: 2,
    name: 'Immersive 3D Walkthrough for Infosys Topaz',
    image: '/img/works/infosys-thobaz.webp',
    company: 'Infosys',
    alt: 'Immersive 3D Walkthrough for Infosys Topaz',
    tabs: ['Videos','Technology'],
    tags: ['Technology', 'Interactive Experience', '3D Animation Video', 'Marketing Video'],
    case_study_title:'infosys-topaz-3d-interactive-experience',
      href: '/work/b2b-brand-experience-agency/infosys-topaz-3d-interactive-experience',
    
  },

]

const pageData = {
  logo: {
    src: '/img/logos/bajaj_logo.png',
    alt:'metro wholesale ad',
    width: '150px',
    height: '10px',
  },
  specifyWidth: 'md:!w-[80px] !w-[60px]',
  image: '/img/case-study/bajaj_pulsar_banner.webp',
  tags: ['Automotive', 'XR Solution (AR/VR/MR)', 'Gamified Experience'],
//   desktopVideo: '/img/works/metro-wholesale-big2.mp4',
//   mobileVideo: '/img/works/metro-wholesale.mp4',
  featured: {
    src: '/img/works/ccs_2x.webp',
    width: '2880',
    height: '1544',
  },
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
        duration: 15,
        vimeoId: '1050711781',
        name: 'AR powered Print AD for Bajaj Pulsar',
        company: 'Bajaj Auto',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/bajaj_ppulsar.webp',
        },
      }
    ],
  },
}

function BajajAuto() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.asPath}`

  const { logo, tags, commercials, image, specifyWidth } = pageData
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
      title="Bajaj Pulsar Augmented Reality Campaign | Makerrs" 
      description="We crafted an AR campaign for Bajaj Pulsar that turned static print into interactive 3D journeys, engaging riders at scale and inspiring test rides."
      url="https://www.makerrs.com/work/brand-design/bajaj-pulsar-augmented-reality"
      />
      <WorkHeroSection
      title={'Augmented Reality that brought the automobile alive'}
        logo={logo}
        socials={socials}
        tags={tags}
        image={image}
        specifyWidth={specifyWidth}
      />
  <section className="bg-white overflow-hidden md:pb-14 pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
         
            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                To captivate a new generation of riders and breathe life into traditional 
                print advertising, Bajaj Pulsar embarked on an innovative campaign leveraging the power of AR.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                We transformed static print ads into immersive 3D experiences, allowing potential customers to explore powerful 
                features of the new NS 400Z in unprecedented detail.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                Built on a cutting&ndash;edge WebAR platform, this groundbreaking campaign eliminated the need
                for app downloads, ensuring seamless accessibility across devices. Through optimized 3D modeling,
                lighting, and responsive motion controls, we created an interactive experience that brought the 
                Pulsar to life, allowing users to examine every angle and appreciate its design intricacies from 
                the comfort of their own homes. This innovative approach not only elevated the brand experience but also provided a unique and engaging touchpoint for potential customers, driving deeper brand affinity and ultimately inspiring test rides.
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
BajajAuto.PageLayout = SCSLayout
export default BajajAuto
