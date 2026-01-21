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
      key: 9,
      name: 'Campaign Explainer Video for HRM SAAS product',
      company: 'MULTIPLIER',
      image: '/img/works/multiplier_work.webp',
      tags: ['SaaS', 'Lead Gen Campaign', 'Product Launch Video', 'Explainer Video', '2D Animation Video'],
      tabs: ['Campaign'],
      case_study_title:'multiplier-hr-saas-explainer-video',
      href: '/work/b2b-brand-campaign-agency/multiplier-hr-saas-explainer-video',
    },
       {
    key: 1,
    name: 'Launching the Cobalt Cloud Community',
    company: 'Infosys',
     alt: 'Cobalt Community Launch',
     tabs: ['Campaign'],
    image: '/img/cobalt_community.jpg',
    tags: ['Technology', 'Digital Campaign', 'Platform Launch Video', '2D Animation Video'],
    case_study_title:'infosys-cobalt-community-launch-video',
        href: '/work/b2b-brand-campaign-agency/infosys-cobalt-community-launch-video',
  },
   {
    key: 2,
    name: 'Transforming Relationships for SME banks in U.S.A',
    company: 'VYMO',
   image: '/img/works/vymo_sme.webp',
    tags: ['SaaS', 'Digital Campaign', 'Explainer Video', 'Marketing Video'],
    href: '/work/b2b-brand-campaign-agency/vymo-sme-bank-explainer-video',
    },
]

const pageData = {
  logo: {
    src: '/img/logos/slb-logo-new.webp',
    width: '150',
    height: '105',
  },
  specifyWidth: 'md:!w-[180px] !w-[150px]',
  image: '/img/case-study/slb_banner.webp',
  tags: ['Engineering', 'Campaign', 'Explainer Video', 'Demo Video', 'Interactive Video'],
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
        vimeoId: '867139215',
        name: 'Digitizing the SLB Sales Funnel',
        company: 'SLB',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/slb_thumnail.png',
        },
      },
    ],
  },
}

function Slb() {
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
      title="SLB Sales Digitisation Explainer Video | Makerrs" 
      description="We built a modular explainer video that streamlined SLB’s digital transformation, scaling adoption and showcasing the value of its new sales toolkit"
      url="https://www.makerrs.com/work/brand-campaign/interactive-explainer-slb"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Sales Digitisation Campaign - Interactive Explainer"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        specifyWidth = {specifyWidth}
        image={image}
      />
      <section className="bg-white  overflow-hidden md:pb-14 pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background & Problem Statement
              </LineHeading>

              <p className="mb-6 md:mb-7.5">
                SLB is a global company driving innovation in oilfield services.
                And even as they were delivering technology-based solutions for
                their clients, they were ramping up digitization internally.
              </p>
              <p className=" mb-6 md:mb-7.5">
                SLB was in the process of digitizing sales, manufacturing, and
                product engineering workflows in order to deliver a better
                customer experience and to enhance efficiency. While the tool
                kit was still under development, a launch date was set and it
                was time to plan for technology adoption amongst key stakeholder
                groups.
              </p>
              <p className=" mb-6 md:mb-7.5">
                Their ask to Makerrs: equip internal teams with a
                comprehensive understanding of their evolving digital toolkit.
                The starting point for us: detailed user journeys built for the
                tech team!
              </p>
              <p className=" mb-6 md:mb-7.5">
                The challenge: build the stories from an internal marketing POV,
                introduce the tool kit in an exciting manner and drive
                technology user adoption.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative approach
              </LineHeading>

              <p className="mb-6 md:mb-7.5">
                Multiple in-depth discovery calls helped us change the brief
                from a 1-hour walkthrough requirement to a cool 10-minute,
                interactive and engaging explainer video.
              </p>
              <p className="mb-6 md:mb-7.5">
                We created a modular video structure, sat down with the client
                in Houston and hashed out all the key information for each
                module. Our approach ensured that each module unfolded like a
                mini-story that was not based on dry, technical jargon, but as
                personas-specific narratives.
              </p>
              <p className="mb-6 md:mb-7.5">
                The magic truly came alive in the custom-designed storyboard.
                The visual language was relatable to the oilfield industry and
                the stakeholders, supported the core messaging and positioned
                the technology well. Quality animation, SFX and an engaging
                American voice over brought it all together. Now, SLB has an
                internal technology transformation story that sells itself.
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
Slb.PageLayout = SCSLayout
export default Slb
