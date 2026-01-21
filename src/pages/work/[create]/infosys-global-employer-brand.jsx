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
    name: 'Transforming relationships for SME banks in U.S.A',
    company: 'VYMO',
    image: '/img/works/vymo_sme.webp',
    tags: ['SaaS', 'Digital Campaign', 'Explainer Video', 'Marketing Video'],
    href: '/work/b2b-brand-campaign-agency/vymo-sme-bank-explainer-video',
    },
]

const pageData = {
    logo: {
        src: '/img/logos/infosys-logo.png',
        width: '150',
        height: '70',
    },
    image: "/img/works/infosys-global-leaders-banner.webp",
    tags: ['Technology', 'Campaign', 'Employer Branding Video', 'Global Video Production'],


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
                vimeoId: '1031815235',
                name: 'Andrea Hendrickx',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/andrea-hendrickx.webp',
                },
            },
            {
                key: 1,
                duration: 130,
                vimeoId: '1030711146',
                name: 'Ralf Gehrig',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/ralf-gehrig.webp',
                },
            },
            {
                key: 2,
                duration: 130,
                vimeoId: '1031814418',
                name: 'Bill Burgess',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/bill-burgess.webp',
                },
            },
            {
                key: 3,
                duration: 130,
                vimeoId: '1031815698',
                name: 'Jens Nullmeyer',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/jens-nullmeyer.webp',
                },
            },



        ],
    },
}

function GlobalLeaders() {
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
                title="Infosys Global Leaders Hiring Campaign | Makerrs"
                description="We created a hiring campaign for Infosys showcasing global leaders, strengthening employer branding and attracting diverse talent to scale future growth."
                url="https://www.makerrs.com/work/brand-campaign/infosys-global-employer-brand"
            />
            <WorkHeroSection
                logo={logo}
                socials={socials}
                tags={tags}
                title="Global Leaders: a Hiring Campaign"
                // desktopVideo={desktopVideo}
                // mobileVideo={mobileVideo}
                image={image}
            />
            <section className="bg-white md:pb-[5.3rem] pb-[24px] md:pt-0 overflow-hidden">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">


                            <p className=" mb-6 md:mb-7.5">
                                The Infosys Global Leaders series celebrates diverse talent from across the globe, driving the organization forward. Featuring leaders who&apos;ve navigated remarkable careers within Infosys, the series showcases how their EVP &quot;Move Forward. Take The World With You&quot;, empowers growth and success. Each story blends personal journeys with region–specific cultural nuances to connect with local talent, highlighting Infosys&apos; inclusive, innovative workplace. More than insights, it&apos;s an invitation to join a company where diversity, collaboration, and career growth define the path to leadership. At Infosys, you don&apos;t just grow–you lead.

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
GlobalLeaders.PageLayout = SCSLayout
export default GlobalLeaders
