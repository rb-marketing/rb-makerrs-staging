import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
    LineHeading,
    PostContent,
    PressSection,
    SimilarPosts,
    StatsContainer,
    Testimonials,
    WorkHeroSection,
    testimonialsDefault,
    SEO 
} from '@/components/shared'

import { ccs, similarPosts } from '@/utils/dummy'
import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router'
// import { createTestimonialData } from '@/pages/services/create'

const lilliaPost = [

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
    name: 'Launching an AI-powered healthcare brand in record time',
    company: 'Lillia Care',
    image: '/img/works/lillia_img.jpg',
    alt:'Lillia Care',
    tags: ['Healthtech', 'Brand Identity', 'Website Design', 'Website Development'],
    tabs: ['Design','Featured','Technology'],
  
        href: '/work/b2b-brand-design-agency/lillia-care-brand-launch',
     
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
const lilliaCareData = [
    {
        key: 0,
        quote:
            <>Makerrs brought a combination of clarity and creativity to our brand launch. They translated complex healthcare ideas into a design system that felt simple, intuitive, and full of heart. <br />
                What impressed us most was their ability to move fast in delivering an insight-driven brand identity and website experience in really crunched timelines.
            </>,
        name: 'KUNCHERIA MARATTUKALAM',
        designation: 'FOUNDER & DIRECTOR',
        image: {
            srcSet:

                '/img/testimonials/kuncheria_marattukalam.jpg 533w, /img/testimonials/kuncheria_marattukalam.jpg 1066w',
            sizes: '(max-width:768px) 533px, 1066px',
        },
    }
]

const pageData = {
    logo: {
        src: '/img/logos/infosys-logo.png',
        width: '150',
        height: '70',
    },
    tags: ['Technology', 'Integrated Design Services', 'Brand Experience', 'ESG'],
    image: '/img/case-study/infosys-banner.jpg',
    featured: {
        src: '/img/works/ccs_2x.webp',
        width: '2880',
        height: '1544',
    },
    // commercials: {
    //     type: 'video',
    //     sources: [
    //         {
    //             key: 0,
    //             duration: 15,
    //             vimeoId: '1078232265',
    //             name: 'AI-powered Healthcare',
    //             company: 'LILLIA CARE',
    //             thumbnail: {
    //                 width: 446,
    //                 height: 265,
    //                 src: '/img/case-study/lillia-video-thumbanail.jpg',
    //             },
    //         }

    //     ],
    // },

}



function InfosysLivingLabs() {
    const router = useRouter()
    const articleUrl = `https://www.makerrs.com${router.asPath}`
    const { logo, tags, featured, commercials, stats, press, image } = pageData
    const socials = [
        // {
        //     key: 0,
        //     href: '/',
        //     color: '#25D366',
        //     icon: <Whatsapp />,
        // },
        {
            key: 1,
            href: `https://twitter.com/intent/tweet?text=${articleUrl}`,
            color: '#000',
            icon: <Twitter />,
        },
        // {
        //     key: 2,
        //     href: '/',
        //     color: '#0088cc',
        //     icon: <Telegram />,
        // },
        {
            key: 3,
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`,
            color: '#006699',
            icon: <Linkedin />,
            type: 'linkedin',
        },
    ]
    return (
    <>
         <SEO 
         title="Infosys Sustainability Design Gallery | Makerrs"
         description="Infosys’ Living Labs gallery showcased sustainability leadership with immersive design, recycled materials, and data-driven storytelling." 
         url="https://www.makerrs.com/work/brand-design/infosys-sustainability-gallery"
         />
            <WorkHeroSection
                logo={logo}
                socials={socials}
                tags={tags}
                featured={featured}
                title='A Design Gallery on Sustainability'
                image={image}
            />

            <section className="bg-white md:pb-14 pb-9  overflow-hidden">
                <div className="container">
                    <div className="cs-content max-w-[914px]">

                        <div className="mt-9 md:mt-9 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                The Opportunity
                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                Infosys had a high-visibility gallery space at the <strong>Living Labs</strong> building in its Bangalore campus. The client wanted to use the space to showcase stories and inspiration from across the company. After much deliberation, we dialled down on the first showcase: sustainability efforts and leadership across Infosys.

                            </p>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] ">
                                The task was to create a compelling, design-led narrative that expressed Infosys’ sustainability vision, engaged influential visitors, and showcased real-world impact to visiting clients, media, and stakeholders.

                            </p>

                        </div>
                        <div className="mt-9 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Creative approach

                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                Sustainability has become a buzzword in most industries. How do we elevate it beyond the cliches?
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                We conceptualized a branded theme rooted in an inspiring conceptual hook, one that would resonate with the knowledgeable audience it caters to.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                <strong> The Pale Blue Dot: Infosys’ Sustainable Legacy, </strong>

                            </p>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                Drawing inspiration from sci-fi guru Carl Sagan’s poetic reflection on Earth, spotlighting Infosys&apos; role in safeguarding that tiny blue speck in the universe.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                We approached the space as a living, breathing experience through spatial storytelling and data visualizations around everyday green practices.
                            </p>
                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                            <img src="/img/case-study/infosys-banner-1.jpg" alt="infosys-living-labs-gallery" srcset="" />
                        </div>
                        <div className="mt-9 md:mt-20 ">
                            {/* Left Side */}

                            <div className=''>
                                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                    Visual language
                                </LineHeading>

                            </div>

                            
                                  <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                    To bring the theme to life, we adopted a collage-based visual language, which was organic, textured, and intentionally raw, to reflect the core sustainability values of reuse, reduce, recycle, and repurpose.
                                </p>
                                  <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                    Design production emphasized low-impact materials: recycled substrates, natural dyes, reusable framing systems, and zero-waste fabrication. The visual aesthetic reinforced the idea of sustainability as a practice embedded in the very way stories are told.

                                </p>
                               <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] ">
                                    We divided the gallery into four elemental zones - Earth, Air, Fire, and Water - each representing a facet of sustainability: energy, resources, innovation, and regeneration. The design used recycled materials, raw textures, ambient lighting, and interactive content to ensure the space felt immersive and mindful.
                                </p>

                           
                        </div>

                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-[64px] mt-8">
                            <img src="/img/case-study/infosys-banner-2.jpg" alt="infosys-living-labs-gallery" srcset="" />
                        </div>




                        <div className="mt-9 md:mt-20 ">
                            {/* Left Side */}

                            <div className=''>
                                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                    The Narrative


                                </LineHeading>


                            </div>



                        
                                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                    We curated and designed high-impact content from extensive Infosys archives, translating complex data, milestones, and green practices into bite-sized, visually compelling narratives.
                                </p>
                                <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-[30px]">
                                    <strong className="md:text-xl !text-rb-black !leading-[170%]" >Hero Stories :</strong> 8 -10 marquee sustainability projects



                                </p>
                                <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-[30px]">
                                    <strong className="md:text-xl !text-rb-black !leading-[170%]" >Impact Posters :</strong> Hard-hitting facts, carbon milestones, circular economy wins


                                </p>
                                <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-[30px]">
                                    <strong className="md:text-xl !text-rb-black !leading-[170%]" >Infographics : </strong>  Energy savings, water recycling, green campuses




                                </p>
                                <p className="md:text-xl  !leading-[170%] mb-[30px]">
                                    <strong className="md:text-xl !text-rb-black !leading-[170%]" >Installations :</strong> Recycled art


                                </p>
                                <p className="md:text-xl  !leading-[170%] mb-[30px]">
                                    <strong className="md:text-xl !text-rb-black !leading-[170%]" >Merchandise :</strong> Eco-mugs, badges, laptop stickers promoting green habits



                                </p>


                                <p className="md:text-xl  !leading-[170%] mb-[30px]">
                                    <strong className="md:text-xl !text-rb-black !leading-[170%]" >Multimedia content :</strong>  AV snippets and drone footage of green campuses, sustainability projects projects and recycling systems


                                </p>

                           
                        </div>
                        <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[79.7rem]  md:my-16 ">
                            <img src="/img/case-study/lab-1.jpg" alt="infosys-living-lab 1" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                            <img src="/img/case-study/lab-2.jpg" alt="infosys-living-lab 2" className="w-[15rem] object-cover rounded-lg shadow-md" />
                            <img src="/img/case-study/lab-3.jpg" alt="infosys-living-lab 3" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                            <img src="/img/case-study/lab-4.jpg" alt="infosys-living-lab 4" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                            <img src="/img/case-study/lab-5.jpg" alt="infosys-living-lab 5" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
                            <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                                <img
                                    alt=""
                                    loading="lazy"
                                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                                    src="/img/case-study/lab-3.jpg"
                                />
                            </div>

                            <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                                <img
                                    alt=""
                                    loading="lazy"
                                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                                    src="/img/case-study/lab-1.jpg"
                                />
                            </div>
                            <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                                <img
                                    alt=""
                                    loading="lazy"
                                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                                    src="/img/case-study/lab-4.jpg"
                                />
                            </div>

                            <div className="row-start-5 row-span-2 col-start-1 relative">
                                <img
                                    alt=""
                                    loading="lazy"
                                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                                    src="/img/case-study/lab-5.jpg"
                                />
                            </div>
                            <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                                <img
                                    alt=""
                                    loading="lazy"
                                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                                    src="/img/case-study/lab-2.jpg"
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

                                    With its striking visuals, modular storytelling, the Living Labs gallery told a powerful story of a tech giant that’s grounded in responsibility and innovative in environmental vision.

                                </p>

                                <p className="md:text-xl text-rb-black/70 !leading-[170%]">

                                    With content designed in bite-sized, conversation-friendly formats, and designed to spark conversation and leave a lasting impression on CXOs, media, and visitors alike.

                                </p>


                        </div>

 <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[79.7rem]  md:my-16 ">
                            <img src="/img/case-study/lab-6.jpg" alt="infosys-living-lab 1" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                            <img src="/img/case-study/lab-7.jpg" alt="infosys-living-lab 2" className="w-[15rem] object-cover rounded-lg shadow-md" />
                            <img src="/img/case-study/lab-8.jpg" alt="infosys-living-lab 3" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                            <img src="/img/case-study/lab-9.jpg" alt="infosys-living-lab 4" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                            <img src="/img/case-study/lab-10.jpg" alt="infosys-living-lab 5" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
                            <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                                <img
                                    alt=""
                                    loading="lazy"
                                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                                    src="/img/case-study/lab-8.jpg"
                                />
                            </div>

                            <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                                <img
                                    alt=""
                                    loading="lazy"
                                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                                    src="/img/case-study/lab-6.jpg"
                                />
                            </div>
                            <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                                <img
                                    alt=""
                                    loading="lazy"
                                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                                    src="/img/case-study/lab-9.jpg"
                                />
                            </div>

                            <div className="row-start-5 row-span-2 col-start-1 relative">
                                <img
                                    alt=""
                                    loading="lazy"
                                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                                    src="/img/case-study/lab-10.jpg"
                                />
                            </div>
                            <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                                <img
                                    alt=""
                                    loading="lazy"
                                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                                    src="/img/case-study/lab-7.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
{/* 
                <CommercialSection
                    sources={commercials?.sources}
                    type={commercials?.type}

                /> */}
            </section>
            {/* <Testimonials
        testimonialData={lilliaCareData}
         className="!mt-0 md:mb-15"
      /> */}
            {/* <SimilarPosts
               tag="explore more case studies"
                className="py-15 md:pb-30"
                posts={lilliaPost}
            /> */}
        </>
    )
}
InfosysLivingLabs.PageLayout = SCSLayout
export default InfosysLivingLabs