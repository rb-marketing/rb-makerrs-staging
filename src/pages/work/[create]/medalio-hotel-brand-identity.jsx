import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
    LineHeading,
    SEO,
    SimilarPosts,
    WorkHeroSection,

} from '@/components/shared'
import { VideoGallery } from '@/components/pages/work/VideoGallery'
export const similarPostsData = [
    
          {
    key: 0,
    name: 'Launching an AI-powered healthcare brand in record time',
    company: 'Lillia Care',
    image: '/img/works/lillia_img.jpg',
    alt:'Lillia Care',
    tags: ['Healthtech', 'Brand Identity', 'Website Design', 'Website Development'],
    tabs: ['Design','Featured','Technology'],
  
        href: '/work/b2b-brand-design-agency/lillia-care-brand-launch',
     
    },
     {
    key: 1,
    name: "A Design Gallery on Sustainability",
    image: '/img/works/infosys-living-labs-gallery.jpg',
    company: 'Infosys',
    alt: 'infosys-living-labs-gallery',
    tabs: ['featured','Design','videos'],
    tags: ['Technology', 'Integrated Design Services', 'Brand Experience', 'ESG'],
  case_study_title:'infosys-sustainability-design-gallery',
          href: '/work/b2b-brand-design-agency/infosys-sustainability-design-gallery',
  },
 {
    key: 2,
    name: 'Branding for an Indulgent Dessert Café',
    image: '/img/case-study/pudingding-thumbnail.jpg',
    company: 'P.U. Dingding',
    alt: 'P.U. Dingding',
    tags: ['F&B', 'Cafe', 'Brand Identity', 'Launch Video'],
    href: '/work/b2b-brand-design-agency/pu-dingding-dessert-cafe-branding'
  },
]


const pageData = {
    logo: {
        src: '/img/logos/medalio.png',
        alt: 'metro wholesale ad',
        width: '150',
        height: '200',
    },
    image: '/img/case-study/meladio-banner.jpg',
    tags: ['Hospitality', 'Brand Identity', 'Logo Design'],
    commercials: {
        type: 'video',
        sources: [
            {
                key: 0,
                duration: 15,
                vimeoId: '1075594847/afe045803b',
                name: ' Brand Film',
                company: 'MELADIO',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/meladio-video-thumbnail.jpg',
                },
            }

        ],
    },
}



function Medalio() {
    const { logo, tags, commercials, desktopVideo, mobileVideo, image } = pageData
    const socials = [
        {
            key: 0,
            href: 'https://twitter.com/intent/post?url=makerrs.com%2Fwork%2Fcreate%2Fjewels-case-study',
            color: '#000',
            icon: <Twitter />,
        },

        {
            type: 'linkedin',
            key: 1,
            href: 'https://www.makerrs.com/work/create/jewels-case-study',
            color: '#006699',
            icon: <Linkedin />,
        },
    ]
    return (
        <>
            <SEO
                title="Medalio Hospitality Brand Identity Design | Makerrs"
                description="We created a hospitality brand identity for Medalio that unites elegance and warmth, symbolizing progress and offering a sanctuary for travelers."
                url="https://www.makerrs.com/work/brand-designs/medalio-hotel-brand-identity"
            />
            <WorkHeroSection
                title={'Crafting a Symbol of Success in Hospitality'}
                logo={logo}
                socials={socials}
                tags={tags}
                desktopVideo={desktopVideo}
                mobileVideo={mobileVideo}
                image={image}
            />
     <section className="bg-white overflow-hidden  ">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9 ">
                                The Opportunity
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                                <a href="https://www.business-standard.com/industry/news/indian-mid-segment-hotels-enjoy-competitive-edge-against-int-l-peers-124121001052_1.html" className="underline">
                                    The Indian hospitality sector
                                </a> is experiencing unprecedented <a href="https://hospitality.economictimes.indiatimes.com/news/hotels/home-grown-mid-segment-hotel-brands-have-competitive-edge-in-india-study/116207844" className="underline">
                                    growth
                                </a>, driven by a surge in domestic and international tourism. The time was right for a new-age brand to emerge—one that isn’t just another hotel but a sanctuary that celebrates the ambitions of its guests while offering them an oasis of comfort. An elegant and modern space with thoughtfully curated services and amenities, Medalio stands out as a pitstop catering to those on a journey to fulfill their dreams. It inculcates a sense of pride and honours guests who have arrived in life as well as those who are on their way.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mt-4">
                                The challenge was to create an identity that seamlessly blended sophistication with warmth — a space that feels earned, a mark of progress, a milestone in itself.
                            </p>
                        </div>

                        <div className="mt-9 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Creative Approach
                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                Our design direction was driven by the ethos of Medalio: aspirational, elegant, yet deeply personal. We envisioned Medalio as a trusted companion—one that recognizes the drive of its ambitious guests, offering them a refined yet effortless space to reset, reflect, and recharge. The challenge was to balance a premium aesthetic with an inviting and warm presence, ensuring that every touchpoint reinforced Medalio’s philosophy of achievement and belonging.
                            </p>

                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                            <img src="/img/case-study/meladio-banner-1.jpg" alt="thelagram" srcset="" />
                        </div>
                        <div className="mt-9 md:mt-20 ">
                            {/* Left Side */}

                            <div className=''>
                                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                    Logo
                                </LineHeading>
                              
                            </div>

                      
                                <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                                The name &apos;Medalio&apos; is inspired by the medallion—a universal symbol of success, excellence, and recognition. It conveys a sense of accomplishment and prestige.

                                </p>
                                <p className=" md:text-xl text-rb-black/70 !leading-[170%]">
                                The logo embodies this philosophy. Crafted with geometric precision, its bold lines signify progress and purpose. The branded &apos;E&apos; within the logo wordmark acts as a distinct brand asset. Designed as a symbol of progress, the laddered E represents a stairway to success for those striving to rise. It is an abbreviated visual shorthand for the logo that can be used independently as a brand mnemonic.
                                </p>
                              
                        
                        </div>



                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)] md:w-[78.7rem] -mx-4 md:mx-0 md:my-[4rem] mt-8">
                            <img src="/img/case-study/meladio-banner-2.jpg" alt="jewels of india" srcset="" />
                        </div>
                        <div className="mt-9 md:mt-20 ">
                            {/* Left Side */}

                            <div className=''>
                                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                Brand Identity
                                </LineHeading>
                              
                            </div>

                                <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                                Medalio&apos;s identity is built on aspiration, elegance, and warmth. At its core lies the medallion—a symbol of prestige and progress—seamlessly woven into the brand&apos;s visual language. To further enrich this identity, we crafted a bank of six custom medallion patterns. These intricate dials with radial geometry, serve multiple purposes — as standalone visual artifacts, background textures, and as visual motors when in motion.
                                </p>
                                <p className=" md:text-xl text-rb-black/70 !leading-[170%]">
                                The greyscale color palette establishes a sophisticated yet welcoming aesthetic, reinforcing the brand’s classy persona. Paired with the clean and contemporary typeface, the typography ensures clarity and elegance across all touchpoints. Monochrome photography enhances Medalio’s timeless appeal. Together, these elements create an identity that is not only visually compelling but also deeply symbolic of progress, recognition, and the journey ahead.

                                </p>
                              
                        
                        </div>
                            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[79.7rem]  md:my-16 ">
                                <img src="/img/case-study/medalio-1.jpg" alt="medalio 1" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/medalio-2.jpg" alt="medalio 2" className="w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/medalio-3.jpg" alt="medalio 3" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/medalio-4.jpg" alt="medalio 4" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/medalio-5.jpg" alt="medalio 5" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                            </div>
                            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
                                <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/medalio-3.jpg"
                                    />
                                </div>

                                <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                         className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/medalio-1.jpg"
                                    />
                                </div>
                                <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/medalio-4.jpg"
                                    />
                                </div>

                                <div className="row-start-5 row-span-2 col-start-1 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                     className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/medalio-5.jpg"
                                    />
                                </div>
                                <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                                    <img
                                        alt=""
                                        loading="lazy"
                                 className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/medalio-2.jpg"
                                    />
                                </div>
                            </div>


                        <div className="mt-9 md:mt-20 ">
                            {/* Left Side */}

                            <div className=''>
                                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                The Experience 

                                </LineHeading>
                              
                            </div>

                                <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                                With Medalio, we crafted more than just a hotel brand—we created a sanctuary for achievers, dreamers, and explorers. The brand stands as a testament to progress, a mark of distinction, and a place that truly understands its guests. Through a meticulously designed identity, we ensured that every touchpoint reinforces Medalio as a brand that reassures and empowers — serving as an enabler for guests — offering a space that reflects their ambition, validates their progress, and fuels their aspirations.

                                </p>
                               
                              
                        
                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)] md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16 md:mb-4 mt-[3rem]">
                            <img src="/img/case-study/medalio-banner-2.jpg" alt="jewels of india" srcset="" />
                        </div>


                    </div>
                </div>

         <div className='md:pb-14 pb-[24px] md:mt-[44px]   md:pt-0  text-black overflow-hidden' >
                    <VideoGallery sources={commercials?.sources} type={commercials?.type} />
                </div>



            </section>
            {/* <SimilarPosts
                 tag="explore more case studies"
                className="py-15 md:pb-30 md:py-0"
                posts={similarPostsData}
            /> */}

        </>
    )
}
Medalio.PageLayout = SCSLayout
export default Medalio