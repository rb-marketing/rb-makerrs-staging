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
    key: 0,
    name: '#ForwardWithInfosys',
    company: 'INFOSYS',
    image: '/img/infosys_eb_campaign.jpg',
    tags: ['Employer Branding', 'Campaign', 'Video Production'],
    href: '/work/b2b-brand-campaign-agency/infosis-eb',
  },
 {
    key: 0,
    name: 'Digital Courses',
    company: 'Jigsaw',
    image: '/img/works/jigsaw_work.webp',
    tags: ['Ed-tech', 'Digital Campaign', 'Marketing Video', 'Product Launch Video'],
    href: '/b2b-brand-campaign-agency/case-study/jigsaw-e-learning-explainer-video',
  },
  {
    key: 3,
  name: 'Social Media Campaign: Meet the AI-First Employees',
    company: 'Infosys',
    image: '/img/works/infy-ai-first-work.webp',
     tags: ['Technology', 'Digital Campaign','Employer Branding video', 'Social Media Content'],
    href: '/work/b2b-brand-campaign-agency/infosys-employees-social-media-campaign',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/exicom_logo.png',
    width: '150',
    height: '105',
  },
  image: '/img/case-study/exicom_banner.png',
  specifyWidth: 'md:!w-[200px] !w-[180px]',
  tags: ['Mobility', 'Product Launch Video', 'Marketing Video', '3D Animation Video'],
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
        vimeoId: '1091113738/b849fb9867',
        name: 'Unveiling Harmony Direct 2.0 by Exicom',
        company: 'Exicom',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/exicom_video_thumbnail.png',
        },
      }
    ],
  },
}

function Exicom() {
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
      title="Exicom Harmony 2.0 Product Launch Video | Makerrs" 
      description="We produced a sleek 3D launch video for Exicom’s Harmony 2.0, revealing design precision and amplifying impact for EV partners and manufacturers."
      url="https://www.makerrs.com/work/video-production/3d-product-reveal-video-exicom"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title=" Unveiling Harmony Direct 2.0 - Electric Fleet Charger"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
        specifyWidth = {specifyWidth}
      />
      <section className="bg-white overflow-hidden md:pb-14 pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background & Problem Statement
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-6 md:mb-7.5">
               Exicom is a leading player in India’s electric vehicle (EV) charging ecosystem. Known for its
               advanced charging solutions for fleets, public infrastructure, and OEMs – the brand was set to 
               unveil its latest high performance product, the Harmony Gen 2 DC fast charger. The launch was 
               planned as a digital and an offline one - at an exclusive event where the audience would include 
               fleet operators, charge zone partners, car manufacturers and other key decision-makers in the EV 
               space.
              </p>
               <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-6 md:mb-7.5">
               Exicom needed a high-impact 3D animation video. Something sharp and stylised using 3D product 
               renders, crafted in a tight timeline and to deliver launch-day wow.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative approach
              </LineHeading>

             <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-6 md:mb-7.5">
               We created a premium 3D product animation video that built anticipation through light, movement, 
               and form. Instead of revealing the charger all at once, we teased around its contours and design 
               details - slowly guiding the viewer through its features, and leading up to a full reveal. Stylised 
               backgrounds, subtle rim lighting, and smooth camera motion gave the film a premium, high-tech feel, 
               perfectly suited for Exicom’s live product launch. All of it packed into a sleek 30 seconds.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-6 md:mb-7.5">
               To highlight key product features and benefits, the video included bold, on-screen text graphics 
               seamlessly timed to product visuals. We curated the stock music track, editing and timing it for 
               maximum wow with the audience.
              </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

    </>
  )
}
Exicom.PageLayout = SCSLayout
export default Exicom
