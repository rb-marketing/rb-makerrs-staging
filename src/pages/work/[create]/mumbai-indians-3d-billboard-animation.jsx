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
    src: '/img/logos/mumbai-indians.png',
    width: '150',
    height: '90',
  },
  specifyWidth: 'md:!w-[100px] !w-[80px]',
  image:"/img/case-study/mumbai-indians-banner.webp",
  tags: ['Sports', '3D Billboard Animation'],

 
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
        vimeoId:'1043072192',
        name: 'MI 3D Billboard Animation',
        company: 'Mumbai Indians',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/mumbai-indians-video-thumbnail.webp',
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
      title="Mumbai Indians 3D Billboard Logo Launch | Makerrs" 
      description="We unveiled Mumbai Indians’ logo with a 3D billboard at Gateway of India, amplifying fan emotion and visibility through immersive cinematic design."
      url="https://www.makerrs.com/work/videos/mumbai-indians-3d-billboard-animation"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Launching a Sports Brand logo with a 3D Billboard"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
        specifyWidth={specifyWidth}
      />
      <section className="bg-white md:pb-14 pb-[24px] overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              

              <p className=" mb-6 md:mb-7.5">
         Using a cutting–edge suite of 3D animation tools, we created a stunning 3D billboard animation for Mumbai Indians that pushes creative boundaries. Set against the Gateway of India for amplified emotional recall, the animation elevates the logo as a bold, three–dimensional spectacle with photorealistic water simulations, and dynamic camera movements. Optimized for high–impact visibility, this innovation sets a new benchmark for immersive logo–led storytelling.
              </p>
             
            </div>
          
          </div>
        </div>

        <CommercialSection
        
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

{/*     
      <SimilarPosts
        tag="explore more case studies"
        className="py-15 md:pb-30"
        posts={similarPostsData}
      /> */}
    </>
  )
}
Colearn.PageLayout = SCSLayout
export default Colearn
