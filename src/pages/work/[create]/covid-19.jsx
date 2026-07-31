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
        src: '/img/logos/infosys-logo-png.webp',
        width: '150',
        height: '70',
    },
    // image: "/img/works/infosys-global-leaders-banner.webp",
    tags: ['2.5D Animation', 'Mining', 'Case Study Video', 'Tech Marketing Video', 'Pandemic'],


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
        ],
    },
}

function Covid() {
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
                title="Case Study Video: Tech for Safe Mining | Makerrs"
                description="We created a hiring campaign for Infosys showcasing global leaders, strengthening employer branding and attracting diverse talent to scale future growth."
                url="https://www.makerrs.com/work/video-production/covid-19"
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
            <section className="bg-white md:pb-[5.3rem]  pb-[24px] md:pt-0 overflow-hidden">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <p className=" mb-6 md:mb-7.5">
                               When a large Brazilian mining company needed to ensure field personnel safety during Covid-19, Infosys developed a safety and welfare app that scaled to screen 100,000 people every week. The app enabled self-screening, logging of medical issues, flagged on-site labour shortage and more. We crafted a sophisiticated stock-footage-based case study video and wove into it 2.5D graphics suggestive of the solution and transformative nature during a crisis. 
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
Covid.PageLayout = SCSLayout
export default Covid
