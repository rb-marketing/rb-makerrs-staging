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

const pageData = {
  logo: {
    src: '/img/logos/vymo-logo.webp',
    width: '150',
    height: '109',
  },
  image: '/img/works/vymo-wholesalers-banner.webp',
  tags: ['SaaS', 'Digital Campaign', 'Explainer Video', 'Marketing Video'],

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
        vimeoId: '894997360',
        name: 'Vymo for Wholesalers',
        company: 'Vymo',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/vymo-wholesalers-video.webp',
        },
      },
    ],
  },
}

export const similarPostsData = [
  {
    key: 9,
    name: 'Campaign Explainer Video for HRM SAAS product',
    company: 'MULTIPLIER',
    image: '/img/works/multiplier_work.webp',
    tags: [
      'SaaS',
      'Lead Gen Campaign',
      'Product Launch Video',
      'Explainer Video',
      '2D Animation Video',
    ],
    tabs: ['Campaign'],
    case_study_title: 'multiplier-hr-saas-explainer-video',

    href: '/work/b2b-brand-campaign-agency/multiplier-hr-saas-explainer-video',
  },
  {
    key: 1,
    name: 'Launching the Cobalt Cloud Community',
    company: 'Infosys',
    alt: 'Cobalt Community Launch',
    tabs: ['Campaign'],
    image: '/img/cobalt_community.jpg',
    tags: [
      'Technology',
      'Digital Campaign',
      'Platform Launch Video',
      '2D Animation Video',
    ],
    case_study_title: 'infosys-cobalt-community-launch-video',
    href: '/work/b2b-brand-campaign-agency/infosys-cobalt-community-launch-video',
  },
  {
    key: 2,
    name: 'Transforming relationships for SME banks in U.S.A',
    company: 'VYMO',
    image: '/img/works/vymo_sme.webp',
    tags: ['SaaS', 'Digital Campaign', 'Explainer Video', 'Marketing Video'],
    href: '/work/b2b-brand-campaign-agency/vymo-sme-bank-explainer-video',
  },
]

function VymoWholeSalers() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.asPath}`

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
        title="Vymo Insurance Wholesalers Explainer Video | Makerrs"
        description="We created a Vymo campaign that helped insurance wholesalers streamline leads, strengthen ties, and boost sales."
        url="https://www.makerrs.com/work/brand-campaign/vymo-insurance-wholesale"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Transforming Field Sales for Insurance Wholesalers in U.S.A"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white pt-3.5 md:pb-14 pb-[24px] md:pt-0 overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                Vymo’s platform empowers insurance wholesalers to manage
                relationships, track leads, and drive sales more effectively. To
                showcase this, we created a compelling marketing video—refining
                the script, casting industry-relevant personas, and bringing it
                all to life with seamless visuals and custom graphics. Produced
                efficiently in Bangalore with a global appeal, the film
                highlights how Vymo transforms sales engagement for wholesalers.
                We worked closely with the client in enhancing scripts,
                visualizing in a contextually-relevant manner, and running
                efficient production workflows throughout the year.
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
      />  */}
    </>
  )
}
VymoWholeSalers.PageLayout = SCSLayout
export default VymoWholeSalers
