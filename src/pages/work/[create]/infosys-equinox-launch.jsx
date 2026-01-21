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
        src: '/img/logos/infosys_equinox_logo.png',
        width: '150',
        height: '90',
    },

    image: "/img/works/infy-equinox banner.webp",
    tags: ['SaaS', 'Marketing Campaign', 'Brand Launch', 'Video', 'Thought Leadership'],
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
                vimeoId: '1042873090',
                name: 'Brand Launch',
                company: 'INFOSYS',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/infy-equinox-brand-logo.webp',
                },
            },
            {
                key: 2,
                duration: 128,
                vimeoId: '1039907521',
                name: ' Thought Leadership',
                company: 'INFOSYS',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/infy-equinox-thought-leadership.webp',
                },
            },
            {
                key: 3,
                duration: 130,
                vimeoId: '1039904916',
                name: 'E-book Promo',
                company: 'INFOSYS',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/infy-equinox-e-book.webp',
                },
            },
            {
                key: 4,
                duration: 128,
                vimeoId: '1039906572',
                name: 'Client Testimonial',
                company: 'INFOSYS',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/infy-equinox-client-testimonial.webp',
                },
            },

        ],
    },
}

function InfosysEquinox() {
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
                title="Infosys Equinox Brand Launch Campaign | Makerrs"
                description="We launched Infosys Equinox with a human-centric campaign uniting thought leadership, social reach, and client advocacy."
                url="https://www.makerrs.com/work/campaigns/infosys-equinox-brand-launch"
            />
            <WorkHeroSection
                logo={logo}
                socials={socials}
                tags={tags}
                title="Launching a brand that makes Commerce Human"
                // desktopVideo={desktopVideo}
                // mobileVideo={mobileVideo}
                image={image}
            />
            <section className="bg-white overflow-hidden md:pb-[5.3rem] pb-[24px]">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                The Opportunity
                            </LineHeading>

                            <p className=" mb-6 md:mb-7.5">
                                Infosys Equinox – a human-centric digital commerce platform offering rich, hyper-personalized experiences across every channel and touchpoint. A platform was designed and developed to deliver memorable omnichannel shopping experiences for global brands in CPG and retail.

                            </p>
                            <p className="mb-6 md:mb-7.5">
                                When it came time for the digital launch of Infosys Equinox, the client wanted the launch campaign to be designed around the platform’s positioning - <strong>“Make commerce human”</strong>.
                            </p>
                        </div>
                        <div className="mt-6 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                The Challenge
                            </LineHeading>

                            <p className="mb-6 md:mb-7.5">
                                Our goal was to seamlessly integrate various launch communication elements, including brand identity, thought leadership, social media, and customer advocacy, into one cohesive, impactful content marketing campaign. And we had to do it at the peak of the pandemic. With everyone working remotely, the interview videos were virtually recorded, and our teams collaborated from home to bring this campaign to life.
                            </p>

                        </div>
                        <div className="mt-6 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Our Solution
                            </LineHeading>

                            <p className="mb-6 md:mb-7.5">
                                We developed a 4-part content campaign that brought the &quot;Make Commerce Human&quot; proposition to life. Designed to generate excitement, build credibility, and inspire engagement, each piece served a unique role in shaping the Equinox brand.
                            </p>

                            <ul className='list-disc pl-6 leading-7 mb-[30px]'>
                                <li className="list-disc pl-6 leading-7 mb-[30px] text-[16px] md:text-[20px] font-semibold  tracking-[-0.5px] opacity-90 ">
                                    <span className="font-bold">Brand reveal</span> - We kicked off the campaign with a visually stunning brand reveal video. Derived from the ‘X’ and ‘O’ of Equinox, we created custom motion graphics and a design language that symbolized synergy and transformation. The voiceover script played on multiplying the power of digital with the future of commerce, delivering a punchy message: Make commerce human.
                                </li>
                                <li className="list-disc pl-6 leading-7 mb-[30px] text-[16px] md:text-[20px] font-semibold  tracking-[-0.5px] opacity-90 ">

                                    <span className="font-bold">Thought leadership</span> - We also developed Thought Leadership content by filming podcast-style conversations with senior Infosys leaders, wrapped in the Equinox visual aesthetic. Minimalist graphics, sharp editing, and industry insights helped reinforce Infosys Equinox as a thought leader in human-centric digital commerce. Given the timing of this project - the peak of the pandemic – the team worked remotely, adapted quickly, conducting virtual shoots and collaborating from home.
                                </li>
                                <li className="list-disc pl-6 leading-7 mb-[30px] text-[16px] md:text-[20px] font-semibold  tracking-[-0.5px] opacity-90 ">

                                    <span className="font-bold">E-book promos</span> - Next, we amplified the Infosys Equinox solutions on social, with the goal of  driving downloads. Creating 10 bite-sized teaser videos, each introducing a bold question from the Equinox e-book, nudging users to discover 10 ways to make commerce human.
                                </li>
                                <li className="list-disc pl-6 leading-7 mb-[30px] text-[16px] md:text-[20px] font-semibold  tracking-[-0.5px] opacity-90 ">

                                    <span className="font-bold">Client testimonials</span> - We closed the loop with real-world industry validation. Through authentic, direct-to-camera interviews with leaders from key clients like Kraft Heinz and Bike Bandit, we captured how Equinox is helping brands deliver better customer experiences.
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                The Outcome
                            </LineHeading>

                            <p className="mb-6 md:mb-7.5">
                                From identity to advocacy, the Infosys Equinox campaign created a 360-degree brand experience that felt consistent, distinct, and deeply human. Each content asset aligned with the central brand idea while offering something unique to the audience. Our integrated solution helped position Infosys Equinox as a landmark step towards meaningful, human-centric commerce.
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
InfosysEquinox.PageLayout = SCSLayout
export default InfosysEquinox
