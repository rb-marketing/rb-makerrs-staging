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
        src: '/img/logos/axis_bank_logo.png',
        alt: 'metro wholesale ad',
        width: '150',
        height: '200',
    },
    image: '/img/case-study/axis_bank_banner_thumbnail.jpg',
    tags: ['Finance','Internal Communications Campaign', 'Marketing Campaign'],
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



function AxisBankActivation() {
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
                title="Axis Bank Activation Campaign | Makerrs"
                description="Inside our LTSY Campaign for Axis Bank: A country-wide activation that celebrates frontline excellence and everyday customer obsession."
                url="https://www.makerrs.com/work/brand-design/axis-bank-activation-campaign"
            />
            <WorkHeroSection
                title={'Nationwide Activation Celebrating Customer Obsession'}
                logo={logo}
                socials={socials}
                tags={tags}
                desktopVideo={desktopVideo}
                mobileVideo={mobileVideo}
                image={image}
            />
     <section className="bg-white overflow-hidden">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9 ">
                                The Opportunity
                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                                For banks today, success is measured not just in profits but in the thousands of small moments of customer delight every day. 
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                                So when Axis Bank set its sights on becoming India’s most customer-obsessed bank, the spotlight fell on its frontline: 100,000 employees across 5,300 branches, meeting millions of customers every day. To channel that interaction at scale, Axis Bank created SPARSH Week: an annual, month-long nationwide campaign that celebrated customer-first banking. It gave staff the space to celebrate customer delight and turn customer obsession into an everyday habit.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                               For SPARSH Week 2024, the goal was to create an activation campaign that Axis Bank and its partners could roll out seamlessly across 5,300 branches.
                            </p>
                        </div>

                        <div className="mt-9 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                The Campaign Idea
                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                               We anchored the campaign in <span className='font-bold'>Love To Serve You</span>, a tagline that made service feel less like duty and more like pride. But at the scale we were speaking, a long phrase alone wouldn’t cut it. It needed the speed and stickiness of the world employees already live in: shorthand, emojis, acronyms.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                              So we gave it wings as <span className='font-bold'>LTSY</span>, a short form built for today. Quick to type, easy to repeat, and primed for virality. Employees could wear it on a badge, pass it in a WhatsApp group, or shout it out at a branch meeting.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                               <span className='font-bold'>LTSY</span> aimed at turning every employee into a customer’s cheerleader, reframing customer delight as something to celebrate and reminding everyone that a smile is the best return a bank can earn.
                            </p>

                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-[64px] mt-[30px]">
                            <img src="/img/case-study/axis_gif_1.gif" alt="axis_gif_1" srcset="" />
                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0">
                            <img src="/img/case-study/axis_gif_2.gif" alt="axis_gif_2" srcset="" />
                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0">
                            <img src="/img/case-study/axis_gif_3.gif" alt="axis_gif_3" srcset="" />
                        </div>
                       
                        <div className="mt-9 md:mt-20 ">
                             <div className=''>
                                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                    The Activation
                                </LineHeading>
                            </div>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                            We gave <span className='font-bold'>Love To Serve You</span> a form employees could own, crafting “Love to” affirmations. These were playful, personal lines that turned values into everyday declarations. <span className='italic'>Love to act on feedback. Love to dream big. Love to keep promises.</span>
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                            To make the affirmations stick, we paired each with a signature hand gesture. A clap, a point, a promise -  simple symbols that employees could show, not just say. This performative layer made the values tangible: something employees would love to flash across a branch floor, share in a WhatsApp group, or wear on a badge.
                            </p>
                        </div>
                            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[79.7rem]  md:my-16 ">
                                <img src="/img/case-study/axis_img_5.jpg" alt="axis_img_1" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/axis_img_4.jpg" alt="axis_img 2" className="w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/axis_img_3.jpg" alt="axis_img 3" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/axis_img_2.jpg" alt="axis_img 4" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/axis_img_1.jpg" alt="axis_img 5" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                            </div>
                            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
                                <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/axis_img_3.jpg"
                                    />
                                </div>

                                <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                         className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/axis_img_5.jpg"
                                    />
                                </div>
                                <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/axis_img_2.jpg"
                                    />
                                </div>

                                <div className="row-start-5 row-span-2 col-start-1 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                     className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/axis_img_1.jpg"
                                    />
                                </div>
                                <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                                    <img
                                        alt=""
                                        loading="lazy"
                                 className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/axis_img_4.jpg"
                                    />
                                </div>
                            </div>
                        <div className="mt-9 md:mt-20 bg-white">
                            <LineHeading className="mb-6 md:mb-9">
                                The Experience
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] md:mb-[120px] mb-[60px]">
                                We built the campaign to scale - flexible and simple for multiple partners to activate across thousands of branches. It carried the same energy across geographies and contexts, staying as relevant on a branch poster in a small town as it did on stage at the bank&apos;s national headquarters. From emailers and WhatsApp messages to badges, notepads, and branch displays, every element worked together to create a unified, celebratory experience to across the country.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
AxisBankActivation.PageLayout = SCSLayout
export default AxisBankActivation