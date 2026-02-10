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
    FeaturedWorkSection,
    WorkHeroSection,
    testimonialsDefault,
    testimonialsDesign
} from '@/components/shared'
import { useRouter } from 'next/router'
import { CommercialSection } from '@/components/pages/work'



const similarPostsData = [
    {
        key: 2,
        name: 'Launching an AI-powered healthcare brand in record time',
        company: 'Lillia Care',
        image: '/img/works/lillia_img.jpg',
        alt: 'Lillia Care',
        tags: ['Healthtech', 'Brand Identity', 'Website Design', 'Website Development'],
        tabs: ['Design', 'Featured', 'Technology'],

        href: '/work/b2b-brand-design-agency/lillia-care-brand-launch',

    },

    {
        key: 0,
        name: 'Crafting a Symbol of Success in Hospitality',
        image: '/img/case-study/medalio_thumbnail.webp',
        company: 'Medalio',
        alt: 'Medalio',
        tabs: ['Design'],
        tags: ['Hospitality', 'Brand Identity', 'Logo Design'],
        href: '/work/b2b-brand-design-agency/medalio-hospitality-brand-identity'
    },
    {
        key: 1,
        name: "A Design Gallery on Sustainability",
        image: '/img/works/infosys-living-labs-gallery.jpg',
        company: 'Infosys',
        alt: 'infosys-living-labs-gallery',
        tabs: ['featured', 'Design', 'videos'],
        tags: ['Technology', 'Integrated Design Services', 'Brand Experience', 'ESG'],
        case_study_title: 'infosys-sustainability-design-gallery',
        href: '/work/b2b-brand-design-agency/infosys-sustainability-design-gallery',
    },
]
const pageData = {
    logo: {
        src: '/img/logos/biocon.jpg',
        width: '150',
        height: '30',
    },
    specifyWidth: 'md:!w-[180px] !w-[160px]',
    tags: ['Biopharmaceutical', 'Integrated Design Services', 'Brand Experience'],
    image: '/img/case-study/biocon_banner_visual.png',
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
                vimeoId: '1065134907',
                name: 'Brand Film',
                company: 'P.U. Dingding',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/puding-thumbnail.png',
                },
            },
            {
                key: 1,
                duration: 128,
                vimeoId: '1065140520',
                name: 'Founders Film',
                company: 'P.U. Dingding',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/puding-thumbnail_1.png',
                },
            },

        ],
    },
}

function Biocon() {
    const router = useRouter()
    const articleUrl = `https://www.makerrs.com${router.asPath}`

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
                title="Office Branding for Biocon's HQ | Makerrs"
                description="We reimagined Biocon's headquarters with visual storytelling, powered by the ‘Sphaera’ motif that reflects global growth, innovation, and purpose."
                url="https://www.makerrs.com/work/brand-design/biocon-office-branding"
            />
            <WorkHeroSection
                logo={logo}
                socials={socials}
                tags={tags}
                image={image}
                title="Office Branding for Biocon's Global Headquarters"
            // desktopVideo={desktopVideo}
            // mobileVideo={mobileVideo}
            specifyWidth={specifyWidth}
            />
            <section className="bg-white overflow-hidden md:pb-[56px] pb-9">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mt-[36px]  bg-white">
                            <LineHeading className="mb-6 md:mb-9">
                                The Opportunity

                            </LineHeading>
                            <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                                Biocon Biologics Ltd had transformed from an Indian biotech brand to a global player with a footprint in over 120 countries. As they prepared to inaugurate Biocon House in Bangalore as their new global headquarters, the task was clear: refresh their HQ branding and make it a powerful visual canvas that reflects Biocon’s global presence and highlights their brand personality and tone. Across four floors, we would design wall graphics to bring growth stories, vision statements, and more to life. 
                            </p>
                        </div>

                        <div className="mt-9 md:mt-20  bg-white">
                            <LineHeading className="mb-6 md:mb-9">
                                Our Creative Approach
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-9">
                                We were introduced to Biocon’s refreshed brand identity, which prominently featured a circular motif, called the “Sphaera”, inspired by the abstract double helix in its logo. This Sphaera was positioned as a key storytelling element, symbolizing Biocon’s spirit in science, innovation, and healthcare.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-9">
                              Our approach focused on creating environments that reflect Biocon’s innovation and areas of impact.
                            </p>
                        </div>

                       <div className="mt-9 md:mt-20  bg-white">
                            <LineHeading className="mb-6 md:mb-9">
                                The Brand Motif
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-9">
                                With the Sphaera as a common visual metaphor, we imagined diverse settings for it to play out, reflecting Biocon&apos;s business, vision, culture, and values.
                            </p>

                            <div className="mb-[36px] md:mb-20">
                                <p className="mb-[24px] md:mb-9 md:text-xl !font-bold !text-[#111010]">
                                    1. Connecting Science and Care (Reception)
                                </p>
                                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-9">
                                    Inspired by ‘The Creation of Adam’, this graphic features a robotic and human hand reaching out, with the Biosphere at its core, showing how Biocon connects science with care. 
                                </p>
                                <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                                    <img src="/img/case-study/connecting_science.jpg" alt="connecting_science" srcset="" />
                                </div>
                            </div>

                            <div className="mb-[36px] md:mb-20">
                                <p className="mb-[24px] md:mb-9 md:text-xl !font-bold !text-[#111010]">
                                    2. Biocon’s Global Footprint (Corridor)
                                </p>
                                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-9">
                                    A world map showing Biocon’s presence across 120 countries, highlighting their global scale.
                                </p>
                                <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                                    <img src="/img/case-study/biocon_global_footprint.png" alt="biocon_global_footprint" srcset="" />
                                </div>
                            </div>
                            <div className="mb-[36px] md:mb-20">
                                <p className="mb-[24px] md:mb-9 md:text-xl !font-bold !text-[#111010]">
                                    3. Going Glocal (Lift lobby)
                                </p>
                                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-9">
                                    The Statue of Liberty and a Yakshagana dancer, collaboratively holding up a notice board,  share the spotlight, with one holding the Biosphere like a torch, the other grounding it in Indian classical roots. It’s a playful yet symbolic nod to Biocon’s East-meets-West global identity.
                                </p>
                                <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                                    <img src="/img/case-study/going_glocal.jpg" alt="going_glocal" srcset="" />
                                </div>
                            </div>
                            <div className="mb-[36px] md:mb-20">
                                <p className="mb-[24px] md:mb-9 md:text-xl !font-bold !text-[#111010]">
                                    4. Powered by Sustainability (Workspace wall)
                                </p>
                                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-9">
                                    An aerial view of a lush forest with the Biosphere blended into the greenery, highlighting Biocon’s focus on sustainability.
                                </p>
                                <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                                    <img src="/img/case-study/powered_by_sustainability.png" alt="powered_by_sustainability" srcset="" />
                                </div>
                            </div>
                            <div className="mb-[36px] md:mb-20">
                                <p className="mb-[24px] md:mb-9 md:text-xl !font-bold !text-[#111010]">
                                    5. Innovation in Progress (Waiting area)
                                </p>
                                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-16">
                                    From molecular biology visuals to an MRI machine tunnel featuring the Biosphere, we merged science imagery with brand motifs to create immersive zones.
                                </p>
                                <div className="flex flex-col items-center md:items-start space-y-6 md:mt-12 md:w-[78.7rem] mt-9">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex flex-col items-center">
                                            <img
                                                src="/img/case-study/innovatin_in_progress_1.png"
                                                alt="innovatin_in_progress_1"
                                                className="md:h-[28rem] md:w-[41rem]"
                                            />
                                        </div>

                                        <div className="flex flex-col items-center">
                                            <img
                                                src="/img/case-study/innovatin_in_progress_2.png"
                                                alt="innovatin_in_progress_2"
                                                className="md:h-[28rem] md:w-[41rem]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[36px] md:mb-20">
                                <p className="mb-[24px] md:mb-9 md:text-xl !font-bold !text-[#111010]">
                                    6. Legacy of the Leadership (Corridor)
                                </p>
                                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-9">
                                    A timeline wall dedicated to founder Kiran Mazumdar-Shaw, celebrating her pioneering journey with award milestones and a stylized portrait. The Biosphere here adds gravitas to her legacy.
                                </p>
                                <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                                    <img src="/img/case-study/legacy_of_the_leadership.png" alt="legacy_of_the_leadership" srcset="" />
                                </div>
                            </div>
                            <div className="mb-[36px] md:mb-20">
                                <p className="mb-[24px] md:mb-9 md:text-xl !font-bold !text-[#111010]">
                                    7. Collaborating as One (Breakout area)
                                </p>
                                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-9">
                                A large team sitting on a round table, the Biosphere forms the table itself, emphasizing collaboration, inclusivity, and shared vision.
                                </p>
                                <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                                    <img src="/img/case-study/collaborating_as_one.png" alt="collaborating_as_one" srcset="" />
                                </div>
                            </div>
                            <div className="mb-[36px] md:mb-20">
                                <p className="mb-[24px] md:mb-9 md:text-xl !font-bold !text-[#111010]">
                                    8. The Culture of Everyday India (Cafeteria)
                                </p>
                                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-9">
                                A vibrant visual montage of Karnataka with bullock carts, dancers, temple towns, cops, etc., illustrates Biocon’s local roots and cultural connect.
                                </p>
                                <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                                    <img src="/img/case-study/culture_of_everyday_india.png" alt="culture_of_everyday_india" srcset="" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-9 md:mt-20 bg-white">
                            <LineHeading className="mb-6 md:mb-9">
                                The Experience
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[64px]">
                                With the Biosphere as a common thread, we connected stories of science, innovation, culture, and global achievements across Biocon House in Bangalore.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
Biocon.PageLayout = SCSLayout
export default Biocon
