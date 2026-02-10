import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
    LineHeading,
    SEO,
    WorkHeroSection,

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
        src: '/img/logos/exicom_logo.png',
        width: '150',
        height: '30',
    },
    // specifyWidth: 'md:!w-[100px] !w-[80px]',
    tags: ['E-Mobility','Design','Brand Transformation', 'Visual Identity'],
    image: '/img/case-study/exicom_brand_refresh_banner_visual.jpg',
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
                vimeoId: '1145227327/431a418fa3',
                name: 'Smart EV Charging Reimagined',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/exicom_work_thubnail.jpg',
                },
            },
        ],
    },
}

function ExicomMobility() {
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
                title="Exicom E-Mobility Rebrand | Makerrs"
                description="Discover how Makerrs transformed Exicom with a bold new brand identity, voice, and design system built for the fast-growing EV charging market."
                url="https://www.makerrs.com/work/brand-designs/exicom-EV-charger-rebrand"
            />
            <WorkHeroSection
                logo={logo}
                socials={socials}
                tags={tags}
                image={image}
                title=" Exicom Brand Refresh: Choose Smart. Charge Smart."
            // desktopVideo={desktopVideo}
            // mobileVideo={mobileVideo}
            specifyWidth={specifyWidth}
            />
            <section className="bg-white overflow-hidden md:pb-[56px] pb-[24px]">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-6 md:mb-[30px]">
                                Background 
                            </LineHeading>
                            <p className="!leading-[150%]">
                               Electric mobility isn&apos;t a niche anymore. It’s mainstream, and brutally competitive. 
                               What used to be a commodity race, has morphed into a brand game. Exicom’s EV chargers 
                               find themselves in this new landscape. Once viewed as a technical utility, EV chargers 
                               are now expected to combine experience, design, and intelligence. The market is evolving 
                               from <span className='font-bold'>functional utility</span> to <span className='font-bold'>emotional connection</span>. And that’s precisely where Exicom found 
                               itself at a crossroads.
                            </p>
                             <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 mt-[30px] md:mt-16">
                                <img src="/img/case-study/exicom_case_study_background.jpg" alt="exicom_case_study_background" srcset="" />
                            </div>

                        </div>
                        
                        <div className="mt-9 md:mt-[64px] md:mb-16 ">
                            <div className=''>
                                <LineHeading className="mb-6 md:mb-[24px] text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                    Challenge
                                </LineHeading>
                            </div>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px]">
                            Exicom had credibility. Decades of engineering. Proven hardware. Big partnerships. But here’s the challenge: nobody was hearing that story. The brand came across as functional, industrial, safe. Solid, but a bit too silent for its own good. The task was three-fold:
                            </p>
                            <p className="mb-6 !leading-[150%]">
                                <ul className="list-disc pl-6 leading-7 mb-[24px]">
                                <li className="list-disc pl-6 leading-7 mb-[24px]">
                                    Exicom needed a brand new look and a whole new voice. It needed to turn up the dial from industrial to inspiring. And be seen as a thought leader, not just a market leader.
                                </li>
                                <li className="list-disc pl-6 leading-7 mb-[24px]">
                                    Build an identity that speaks to two audiences at once: the B2B buyer who demands reliability, and the design-conscious B2C segment that values experience.
                                </li>
                                <li className="list-disc pl-6 leading-7">
                                    Create a design system flexible enough to stretch across products, platforms, and markets, without losing its E-mobility aura.
                                </li>
                                </ul>
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-start space-y-6 md:mt-12 md:w-[78.7rem] mt-9">
                            <div class="flex items-center space-x-4 w-full">
                                <div class="w-1/2">
                                    <img
                                    src="/img/case-study/exicom_casestudy_left.jpg"
                                    alt=""
                                    class="w-full aspect-[4/3] object-cover"
                                    />
                                </div>

                                <div class="w-1/2">
                                    <img
                                    src="/img/case-study/e-loop.jpg"
                                    alt=""
                                    class="w-full aspect-[4/3] object-cover"
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="mt-9 md:mt-[80px] md:mb-[64px] ">
                            <div className=''>
                                <LineHeading className="mb-6 md:mb-[24px] text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                    Brand Persona
                                </LineHeading>
                            </div>

                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6 md:mb-[30px]">
                                We began by defining the brand from the ground-up, focusing on intelligence, innovation and design precision. To bring that to life, we crafted two brand archetypes:
                            </p>

                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6 md:mb-[30px]">
                                <span className='font-bold'>The Geeky Visionary:</span> Smart. Sharp. Geeky.  A bit like your favourite science professor. Who also builds rockets on weekends and cares about the environment, the community and the customer.
                            </p>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                                <span className='font-bold'>The Silent Disruptor:</span> Daring, unconventional, the kind of innovator who challenges the status quo, without fanfare and fuss.
                            </p>
                        </div>
                        <div className="w-full  mx-auto">
                           
                            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem] ">
                                <img src="/img/case-study/exicom_cs_1.jpg" alt="identity 1" className="w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/exicom_cs_2.jpg" alt="identity 2" className="w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/exicom_cs_3.jpg" alt="identity 3" className="w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/exicom_cs_4.jpg" alt="identity 4" className="w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/exicom_cs_5.jpg" alt="identity 5" className="w-[15rem] object-cover rounded-lg shadow-md" />
                            </div>
                            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
                                <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/exicom_cs_3.jpg"
                                    />
                                </div>

                                <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/exicom_cs_1.jpg"
                                    />
                                </div>
                                <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/exicom_cs_4.jpg"
                                    />
                                </div>

                                <div className="row-start-5 row-span-2 col-start-1 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/exicom_cs_5.jpg"
                                    />
                                </div>
                                <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/exicom_cs_2.jpg"
                                    />
                                </div>
                            </div>


                        </div >

                        <div className="mt-9 md:mt-20 md:mb-[80px]">
                            

                            <div className=''>
                                <LineHeading className="mb-6 md:mb-[24px] text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                    Copy & tonality
                                </LineHeading>
                            </div>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                            Next, we crafted a tagline that brings it all together: 
                            </p>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-[24px] md:mb-[30px]">
                                <span className='font-bold italic'>Choose smart. Charge smart.</span> 
                            </p>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-[24px] md:mb-[30px]">
                                Crisp. Sticky. Universal. A positioning that bridges industrial scale with everyday experience. When you choose Exicom, you&apos;re choosing intelligent charging solutions that prioritize design, efficiency and sustainability.
                            </p>
                             <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-[24px] md:mb-[30px]">
                            The tone of voice had to strike the sweet spot: geeky when needed, bold when the moment calls for it. For instance: 
                            </p>
                             <p className="md:text-xl text-rb-black/70 !leading-[170%] italic font-bold">
                               <span className='font-bold'>“Why should smart be boring?”</span>
                            </p>
                             <p className="md:text-xl text-rb-black/70 !leading-[170%] italic font-bold">
                                <span className='font-bold'>“Everyone said it’s impossible. So someone had to do it.”</span> 
                            </p>
                            
                        </div>
                    </div>
                </div>
                {/* <div className='md:pb-18 pb-4 text-white md:pt-20 pt-10'>
                    <CommercialSection
                        sources={commercials?.sources}
                        type={commercials?.type}
                        isWhiteText={false}
                        showHeading={true}
                        className={`mt-24 `}
                    />
                </div> */}
                <CommercialSection
                    sources={commercials?.sources}
                    type={commercials?.type}
                />

            </section>
        </>
    )
}
ExicomMobility.PageLayout = SCSLayout
export default ExicomMobility
