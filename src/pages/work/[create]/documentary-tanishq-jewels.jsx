import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
    LineHeading,
    SEO,
    Testimonials,
    WorkHeroSection,
    RollupNumber 
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import styles from '@/styles/sections/StatsSection.module.scss'
import { useRouter } from 'next/router';

const jewelsTestimonialData = [
    {
      key: 0,
      quote:
        'It has been a pleasure to work with the Makerrs team on Project Loom. They are a unique platform that works with a range of directors and cinematographers to produce content across multiple languages and locations. This makes them nimble and effective.',
      name: 'SHOBA NARAYAN',
      designation: 'FOUNDER',
      image: {
        srcSet:
          '/img/testimonials/shoba-narayan.webp 533w, /img/testimonials/shoba-narayan.webp 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    }
  ]

const pageData = {
    logo: {
        src: '/img/logos/taneria.png',
        alt: 'metro wholesale ad',
        width: '260',
        height: '105',
    },
    image: '/img/case-study/jewels_india_banner_ visual.jpg',
    tags: ['Digital Campaign', 'Video Content', 'Jewellery'],
    commercials: {
        type: 'video',
        sources: [
            {
                key: 0,
                duration: 15,
                vimeoId: '1065050354',
                name: 'Chettinad Jewellery',
                company: 'JEWELS',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/jewellery_thumb_1.jpg',
                },
            },
            {
                key: 1,
                duration: 128,
                vimeoId: '1065052032',
                name: 'Nakashi Jewellery',
                company: 'JEWELS',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/jewellery_thumb_2.jpg',
                },
            },
        ],
    },
}

const stats = [
    {
      id: 0,
      countUpProps: {
        value: 1,
        suffix: (
            <div className="inline-flex">
              M <span className="text-rb-red">+</span>
            </div>
          ),
      },
      text: (
        <span className="md:max-w-[188px]">
          organic views
        </span>
      ),
    },
    {
      id: 1,
      countUpProps: {
        value: 12,
        suffix: (
          <div className="inline-flex">
            k <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: (
        <>
          viewers engaged
        </>
      ),
    },
    {
      id: 2,
      countUpProps: {
        value: 1,
        suffix: (
          <div className="inline-flex">
            k <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: <>
        conversations
      </>,
    }
  ]
 
function Jewels() {
    const router = useRouter();
    const fullUrl = `https://www.makerrs.com${router.asPath}`;
    const { logo, tags, commercials, desktopVideo, mobileVideo,  image } = pageData
    const socials = [
   {
      key: 0,
      href: `https://twitter.com/intent/tweet?text=${fullUrl}`,
      color: '#000',
      icon: <Twitter />,
    },

    {
      type: 'linkedin',
      key: 1,
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}`,
      color: '#006699',
      icon: <Linkedin />,
    },
    ]
    return (
        <>
            <SEO
                title="Case Study: Taneira - Jewels of India"
                url="https://www.makerrs.com/work/video-production/documentary-tanishq-jewels"
            />
            <WorkHeroSection
                title={' Documentaries: Indian Handcrafted Jewellery and Craftspeople '}
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
                            <LineHeading className="mb-6 md:mb-9">
                                The Brief
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                                When Tanishq, India&apos;s leading jewellery brand, partnered with acclaimed journalist
                                Shoba Narayan to document India&apos;s jewelry-making heritage, they sought to create more
                                than just a historical record.
                            </p>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mt-8">
                                Their vision was to celebrate the rich craftsmanship and history of India&apos;s
                                jewellery traditions, connect modern customers with their heritage, as well
                                as position brand Taneira as a leader in handcrafted jewellery too and not just
                                modern minimalism. . To start with, this ambitious project would focus on two distinct
                                jewellery-making traditions.
                            </p>
                           
                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)] md:full -mx-4 md:mx-0">
                            <img src="/img/case-study/jewels_of_india.jpg" alt="jewels of india" srcset="" />
                        </div>
                        <div className="mt-6 md:mt-6">
                            <LineHeading className="mb-6 md:mb-9">
                                Our Approach
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                We worked closely with Shoba Narayan to understand the history behind these jewellery
                                traditions. We met with historians, cultural experts and collectors from the regions, and
                                with craftsmen from traditional jewellery making families. We developed an understanding
                                of the cultural relevance of these jewellery, the evolution of the craft, the process of
                                the craft today, and explored the beauty of the jewellery itself.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                Over the course of a few months, we  developed powerful narratives and captured beautiful
                                footage that would charm customers in Tanishq&apos;s retail environments as well as engage a
                                broader online audience on <a href="http://www.jewelsofindia.org" target="_blank" className='text-blue-500'>www.jewelsofindia.org.</a>
                            </p>
                        </div>
                        <div className="mt-6 md:mt-12">
                            <LineHeading className="mb-6 md:mb-9">
                                Crafting the Narrative
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                Our Creative team and Producers worked closely with curated Directors and Cinematographers.
                                In traditional workshops, where space was often limited and work areas considered sacred, we
                                found ways to capture intricate details without disrupting the artisans&apos; careful work. We captured
                                artful visuals in low lighting. We brought alive rich storylines that served multiple purposes while
                                maintaining the authenticity of the subject and the craftsmen. For Tanishq&apos;s retail spaces, the films
                                focused on narratives that outlined the history, the craft and the beauty of handmade
                                culturally-relevant jewellery - enchanting customers to explore traditional jewellery ranges
                                sold at Tanishq. And for broader distribution, we developed more detailed explorations of each region’s
                                jewellery traditions, revealing their cultural significance, the creative process and the technical mastery
                                of these crafts.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <StatsSection
                        tag=" Impact and Reach"
                        className="pt-2 md:pt-6 pb-0 md:pb-2"
                        data= {stats}
                    /> */}

                  <section className="bg-white overflow-hidden pt-2 md:pt-6 pb-0 md:pb-2">
                    <div className="container">
                      <LineHeading className="mb-6 md:mb-7.5">Impact and Reach</LineHeading>
                      <p className="text-base lg:w-2/3 md:!text-[20px] text-rb-black/80 !leading-[150%] mb-[30px]">
                      This journey through India&apos;s jewellery-making heritage demonstrated the power of authentic
                      storytelling in modern retail. It showed how cultural documentation, when executed thoughtfully,
                      can create lasting value - preserving traditional knowledge while strengthening brand narratives 
                      and connecting with contemporary audiences.
                      </p>
                      <div className="flex flex-col lg:flex lg:flex-row grid-cols-2 md:justify-start lg:relative lg:right-16 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-full md:max-w-none">
                        {stats.map((s, i) => (
                          <div
                            className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.statline}`}
                            key={s.id}
                          >
                            <div className='lg:w-fit flex lg:flex lg:flex-col lg:mx-auto md:last:ml-16'>
                                <div>
                                <RollupNumber {...s.countUpProps} />
                                </div>
                                <div className={`text-xl mt-[20px] ml-8 lg:mt-0 lg:ml-0 leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett
                                  ${s.id === 0 ?'ml-[41px]': ''}
                                  ${s.id === 2 ?'ml-[60px]': ''}
                                  `
                                  
                                  }>
                                  {s.text}
                                </div>
                              </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>  


                <CommercialSection
                    sources={commercials?.sources}
                    type={commercials?.type}
                />
                <Testimonials
                    title={'WHAT OUR CLIENT SAYS'}
                    testimonialData={jewelsTestimonialData}
                    className="pt-30 md:pt-[10rem] md:pb-30 pb-15"
                />
            </section>

        </>
    )
}
Jewels.PageLayout = SCSLayout
export default Jewels