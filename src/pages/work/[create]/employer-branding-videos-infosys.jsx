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
    RollupNumber
} from '@/components/shared'
import { useRouter } from 'next/router'
import { CommercialSection } from '@/components/pages/work'
import styles from '@/styles/sections/StatsSection.module.scss'

export const stats = [

    {
        id: 0,
        countUpProps: {
            value: 16,
            suffix: <span className="text-rb-red"></span>,
        },
        text: (
            <span className="md:max-w-[188px]">
                films produced

            </span>
        ),
    },
    {
        id: 1,
        countUpProps: {
            value: 32,
            suffix: (
                <div className="inline-flex">
                    <span className="text-rb-red"></span>
                </div>
            ),
        },
        text: (
            <>
                high-quality<br />
                assets delivered

            </>
        ),
    },

    {
        id: 2,
        countUpProps: {
            value: 14,
            suffix: (
                <div className="inline-flex">
                    K<span className="text-rb-red">+</span>
                </div>
            ),
        },
        text: (
            <span className="md:max-w-[188px]">
                organic YouTube <br />views per video
            </span>
        ),
    },

    {
        id: 3,
        countUpProps: {
            value: 1,
            suffix: <span className="text-rb-red"></span>,
        },
        text: (
            <>
                powerful global<br />
                employer branding campaign

            </>
        ),
    },
]

const pageData = {
     logo: {
    src: '/img/logos/infosys-logo.png',
    width: '150',
    height: '70',
  },
    tags: ['Technology', 'Employer Branding Campaign', 'Global Video Production','Interview Video'],
    image: '/img/case-study/infosys_eb_banner_visual.png',
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
                vimeoId: '1039988503',
                name: 'Brittney Salama #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/brittney_salama.jpg',
                },
            },
            {
                key: 1,
                duration: 128,
                vimeoId: '1039988986',
                name: 'Shannon Hart #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/shannon_hart.jpg',
                },
            },
            {
                key: 2,
                duration: 130,
                vimeoId: '1039989210',
                name: 'Irina Kose #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/irina_kose.jpg',
                },
            },
            {
                key: 3,
                duration: 128,
                vimeoId: '1039989399',
                name: 'Frederic Beynel #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/frederic_beynel.jpg',
                },
            },
            {
                key: 4,
                duration: 130,
                vimeoId: '1039989589',
                name: 'Luiz Marques #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/luiz_marques.jpg',
                },
            },
            {
                key: 5,
                duration: 128,
                vimeoId: '1039997387',
                name: 'Natasza Kopczynska #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/natasza_kopczynska.jpg',
                },
            },
            {
                key: 6,
                duration: 130,
                vimeoId: '1039997765',
                name: 'Vinash Mistry #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/vinash_mistry.jpg',
                },
            },
            {
                key: 7,
                duration: 128,
                vimeoId: '1039998001',
                name: 'Weyinmi Slim #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/weyinmi_slim.jpg',
                },
            },
            {
                key: 8,
                duration: 130,
                vimeoId: '1039998293',
                name: 'Charlotte Ferriday #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/charlotte_ferriday.jpg',
                },
            },
            {
                key: 9,
                duration: 128,
                vimeoId: '1039998758',
                name: 'Umar Tariq #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/umar_tariq.jpg',
                },
            },
            {
                key: 10,
                duration: 130,
                vimeoId: '1039999068',
                name: 'Juhi Dubey #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/juhi_dubey.jpg',
                },
            },
            {
                key: 11,
                duration: 128,
                vimeoId: '1039999455',
                name: 'Michelle Roman #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/michelle_roman.jpg',
                },
            },
            {
                key: 12,
                duration: 130,
                vimeoId: '1039999630',
                name: 'Antonia Rizakou #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/antonia_rizakou.jpg',
                },
            },
            {
                key: 13,
                duration: 128,
                vimeoId: '1040000126',
                name: 'Tamara Certain #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/tamara_certain.jpg',
                },
            },
            {
                key: 14,
                duration: 130,
                vimeoId: '1040000311',
                name: 'Osagioduwa Evbuomwan #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/osagioduwa_evbuomwan.jpg',
                },
            },
            {
                key: 15,
                duration: 128,
                vimeoId: '1040000771',
                name: 'Sandra Jackson #ForwardWithInfosys',
                company: 'Infosys',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/sandra_jackson.jpg',
                },
            },

        ],
    },
}

function InfosysWb() {
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
                title="Infosys Global Employer Branding Campaign | Makerrs"
                description="We crafted 16 employee-led films across 5 countries for Infosys, scaling its global employer brand and attracting diverse talent with authentic stories."
                url="https://www.makerrs.com/work/video-production/employer-branding-videos-infosys"
            />
            <WorkHeroSection
                logo={logo}
                socials={socials}
                tags={tags}
                image={image}
                title="Crafting a Unified Employer Brand Across Continents"
            // desktopVideo={desktopVideo}
            // mobileVideo={mobileVideo}
            />
            <section className="bg-white overflow-hidden pb-[24px] md:pb-9">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Context & Brief
                            </LineHeading>
                            <p className=" mb-6 md:mb-7.5">
                                As one of the world’s leading technology consulting firms, Infosys has grown from its roots in India to a global presence spanning 54 countries and over 300,000 employees. But with the expansion came a new brand challenge - to attract local talent in international regions.
                            </p>
                            <p className=" mb-6 md:mb-7.5">
                                To solve this challenge, Infosys needed a global Employer Branding campaign positioning itself as a global employer. The campaign had to be insight-led with powerful and real narratives to help shift the brand perception and attract local talent.
                            </p>
                            <p className=" mb-6 md:mb-7.5">
                                We crafted 16 compelling employee-led films - shot in London, Paris, New York, Melbourne, and Richardson - all in 45 days.
                            </p>
                        </div>
                        <div className="mt-9 md:mb-16">
                            <LineHeading className="mb-6 md:mb-9">
                                Creative Approach
                            </LineHeading>

                            <p className="mb-6 md:mb-7.5">
                                To bring alive truthful narratives from across continents, we first met dozens of employees and curated campaign voices. Our first week or two were spent in meetings to understand the people at Infosys, learn about their careers and experiences at work, and then craft 16 unique scripts - one for every individual we would feature in the campaign.
                            </p>
                            <p className="mb-6 md:mb-7.5">
                                In parallel, our Directorial and Design teams created a unique Instagram- and LinkedIn-friendly campaign look and feel. A treatment that would lend a unique yet consistent look and feel across all 16 videos and their adapts, yet bring through individual narratives and in a short turnaround time.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-start space-y-6 md:mt-12 md:w-[78.7rem] mt-9">
                            <div className="flex items-center space-x-4">
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/img/case-study/approch_img_1.png"
                                        alt="Puding GIF 2"
                                        className="md:h-[28rem] md:w-[41rem]"
                                    />
                                </div>

                                <div className="flex flex-col items-center">
                                    <img
                                        src="/img/case-study/approch_img_2.png"
                                        alt="Puding GIF"
                                        className="md:h-[28rem] md:w-[41rem]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-9 md:mt-20 md:mb-16 ">
                            <div className=''>
                                <LineHeading className="mb-6 md:mb-[30px] text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                    Creative Execution
                                </LineHeading>
                            </div>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6 md:mb-[30px]">
                                To deliver at the speed and scale required for this global campaign, we leveraged our global collaborative of curated directors, producers, and cinematographers. We briefed hand-picked video crews in London, Paris, New York, Melbourne, and Richardson. Each local crew was briefed on the cultural context, campaign purpose and aesthetics - with the Creative Direction, production coordination, project management and post production happening in our India office.
                            </p>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6 md:mb-[30px]">
                                Nearly 40 individuals contributed across locations -  writers, directors, producers, editors, project managers, and account leads -  all working as one global team. The result: a consistent, scaled, and culturally rich campaign, powered by a precise process and our creative cloud platform.
                            </p>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6">
                                Together, we brought alive the campaign’s core idea - to capture and share authentic, emotionally resonant stories - each spotlighting an Infosys employee and their professional journey at Infosys.
                            </p>
                        </div>
                        <div className="mt-6 w-full ">
                            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem] ">
                                <img src="/img/case-study/creative_excution_1.png" alt="creative_excution 1" className="w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/creative_excution_5.png" alt="creative_excution 2" className="w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/creative_excution_3.png" alt="creative_excution 3" className="w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/creative_excution_2.png" alt="creative_excution 4" className="w-[15rem] object-cover rounded-lg shadow-md" />
                                <img src="/img/case-study/creative_excution_4.png" alt="creative_excution 5" className="w-[15rem] object-cover rounded-lg shadow-md" />
                            </div>
                            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
                                <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/creative_excution_3.png"
                                    />
                                </div>
                                <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/creative_excution_1.png"
                                    />
                                </div>
                                <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/creative_excution_2.png"
                                    />
                                </div>
                                <div className="row-start-5 row-span-2 col-start-1 relative">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/creative_excution_4.png"
                                    />
                                </div>
                                <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className=" w-[15rem] object-cover rounded-lg shadow-md"
                                        src="/img/case-study/creative_excution_5.png"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-9 md:mt-20 md:mb-16 ">
                            <div className=''>
                                <LineHeading className="mb-6 md:mb-[30px] text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                    Cloud-based Workflows
                                </LineHeading>
                            </div>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6 md:mb-[30px]">

                                The project plan was built on six weeks of tightly managed execution - mapped down to the day.

                            </p>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6 md:mb-[30px]">
                                Week 1–2: We kicked off with research into global talent trends and employer branding benchmarks for tech consulting brands. In parallel, we finalized campaign concepts, created visual references, and developed a powerful creative framework to ensure consistency across all locations.
                            </p>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6 md:mb-[30px]">
                                Week 2–3: Our teams conducted pre-interviews with all 16 Infosys speakers, developed detailed talking points and story outlines, and locked scripts. We also designed motion graphic templates and defined graphic assets to be used across all videos in the series.
                            </p>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6 md:mb-[30px]">
                                Week 3–4: Our production team reached out to local crews in all 5 global locations for the remote shoots. They were briefed on scripts, visual language, interview styles, and cultural nuances. Soon after, local recces were completed. We shot across 5 global locations where every shoot was remotely directed by Makerrs’s creative leadership, providing real-time feedback for tight quality control.
                                Despite spanning five time zones, the process remained smooth - no footage lost, no brief misunderstood.
                            </p>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6 md:mb-[30px]">
                                Week 4–5: With footage from all five countries rolling in, we initiated post-production at our in-house studio. To make this process easier and incorporate client reviews at every stage, we used cloud-based workflows and asynchronous editing. We also handled versioning, audio mixing, color grading, and approvals across locations efficiently.
                            </p>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6 md:mb-[30px]">
                                Week 6: The final videos, each 1-minute in length with supporting 30-second social edits were finalized and delivered - a full five working days ahead of the 45-day deadline
                            </p>
                            <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-[36px]">
                                Throughout the project, we managed the end-to-end execution - from research, pre-interviews, scriptwriting, design & graphics, crew curation, remote direction, global shoot management, editing & sound, color correction, versioning, cloud-based feedback, to full client servicing across time zones.
                            </p>
                        </div>


                    </div>

                    <div className='md:mt-[80px] '>
                        <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                            Reslult and Impact
                        </LineHeading>
                    </div>
 <div className="lg:block md:hidden hidden flex flex-col lg:flex lg:flex-row grid-cols-2 md:justify-start lg:relative lg:right-16 gap-x-5 md:gap-x-[124px] gap-y-4 md:gap-y-6 max-w-full md:max-w-none md:mb-[80px] border-y-2 pt-4 border-gray-300 md:border-none">
  {stats.map((s, i) => (
    <div
      key={s.id}
      className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative 
        border-b border-gray-300  md:border-none
        ${s.id === 2 ? ' md:!pr-[10px]' : ''} 
        ${s.id === 3 ? ' md:!ml-[10px]' : ''} 
        ${styles.statline} 
        ${i !== stats.length - 1 ? 'border-b-2 md:border-none border-gray-300' : ''}`}
    >
      <div
        className={`lg:w-fit flex lg:flex lg:flex-col lg:mx-auto 
          ${s.id === 0 ? 'md:!ml-12' : ''} 
          ${s.id === 1 ? 'md:!ml-8' : ''} 
          ${s.id === 2 ? 'md:!ml-4 md:!pr-[30px]' : ''} 
          ${s.id === 3 ? 'md:!ml-0' : ''}`}
      >
        <div>
          <RollupNumber
            {...s.countUpProps}
            className={`${
              s.countUpProps?.value === 1 ? 'md:ml-[-12px]' : ''
            }`}
          />
        </div>
        <div
          className={`text-sm lg:mt-[12px] lg:ml-0 leading-[15.54px] md:text-2xl md:leading-7 tracking-[-.56px] md:tracking-[-0.96px] text-rb-black 
            ${s.id === 0 ? 'mt-[25px]' : 'mt-[13px]'} md:mt-4 font-medium font-everett
            ${s.id === 0 ? 'md:!ml-[15px] ml-[75px]' : ''} 
            ${s.id === 1 ? 'md:!ml-[8px] ml-[75px]' : ''} 
            ${s.id === 2 ? 'md:!ml-[15px] ml-[20px]' : ''} 
            ${s.id === 3 ? 'ml-[110px]' : ''}`}
        >
          {s.text}
        </div>
      </div>
    </div>
  ))}
</div>

<div className="lg:hidden md:hidden block grid grid-cols-2 md:flex md:flex-row md:justify-start lg:relative lg:right-16 gap-x-5 md:gap-x-[124px] gap-y-[48px] max-w-full md:max-w-none md:mb-[80px]">
  {stats.map((s, i) => (
    <div
      key={s.id}
      className={`text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative 

        ${i < stats.length - 2 ? '' : ''} 
        md:border-none lg:w-1/4 ${styles.statline}`}
    >
      <div className="lg:w-fit flex flex-col lg:mx-auto">
        <div>
          <RollupNumber
            {...s.countUpProps}
            className={`${s.countUpProps?.value === 1 ? 'md:ml-[-12px] ml-[-8px]' : 'ml-[-5px] '}  `}
          />
        </div>
        <div
          className={`text-sm md:mt-2 mt-0  md:mt-4 lg:mt-[16px] lg:ml-0 leading-[15.54px] md:text-2xl md:leading-7 tracking-[-.56px] md:tracking-[-0.96px] text-rb-black font-medium font-everett`}
        >
          {s.text}
        </div>
      </div>
    </div>
  ))}
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
InfosysWb.PageLayout = SCSLayout
export default InfosysWb
