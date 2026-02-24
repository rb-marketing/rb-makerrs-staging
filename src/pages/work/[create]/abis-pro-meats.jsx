import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import { useRouter } from 'next/router';
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
        src: '/img/logos/abis_logo.png',
        alt: 'Abis Logo',
        width: '150',
        height: '200',
    },
    specifyWidth: '!w-[75px]',
    image: '/img/case-study/abis case_study_banner.jpg',
    tags: ['FMCG', 'Brand Identity'],
    commercials: {
        type: 'video',
        sources: [
            {
                key: 0,
                duration: 15,
                vimeoId: '1163909587/b40aab33c0',
                name: 'Abis Pro Brand Identity',
                company: 'ABIS',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/abis_pro_video_thumbnail.jpg',
                },
            }

        ],
    },
}



function Abis() { 
  const router = useRouter()
  const fullUrl = `https://www.makerrs.com${router.asPath}`
 const { logo, tags, commercials, desktopVideo, mobileVideo, image, specifyWidth } = pageData
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
                title="Meta title should be 'Abis Pro FMCG Brand Identity Design | Makerrs'"
                description="Meta descriptions should be 'See how we designed ABIS Pro’s brand identity. From packaging, retail and digital to making traceability and clean meat practices visible, modern, and trustworthy."
                url="https://www.makerrs.com/work/brand-designs/abis-pro-meats"
            />
            <div className='md:pt-[16px]'>
                <WorkHeroSection
                title={'ABIS Pro Brand Identity: Goodness. Guaranteed.'}
                logo={logo}
                socials={socials}
                tags={tags}
                desktopVideo={desktopVideo}
                mobileVideo={mobileVideo}
                image={image}
                specifyWidth={specifyWidth}
            />
            </div>
            
     <section className="bg-white overflow-hidden  ">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-[24px] md:mb-[30px] ">
                                Background
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                                In India, meat is deeply personal. It’s tradition, nutrition, ritual. And often, compromise.
                                For decades, consumers have had to choose between habit and hygiene. Between the familiar butcher 
                                and the faceless brand. In a category where trust is everything, clarity was missing.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mt-4">
                                ABIS Pro entered this landscape with a fundamental belief that good meat should nourish, not just fill. 
                                And that goodness should be proven. Through traceability. Through clean practices.  The opportunity was 
                                to redefine what everyday good meat means in India.
                            </p>
                        </div>

                         <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-[24px] md:mb-[30px] ">
                                Challenge
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                                ABIS Pro had the systems. Cold-chain traceability. Antibiotic-residue-free farming. Decades of 
                                process expertise, from hatchery to home. So how do you make invisible processes visible?
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mt-4">
                                How do you turn operational excellence into emotional trust? And how do you speak to a discerning Indian 
                                consumer, the one who reads labels, asks questions, and never settles for “just okay”? We had to design a
                                system that works everywhere: packaging, stores, digital, restaurants and hotels without losing warmth or 
                                clarity.
                            </p>
                        </div>

                        <div className="mt-9 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Brand Persona
                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                We began by defining who ABIS Pro is: the Caring Expert.  A persona inspired by the quiet confidence of 
                                the wise farmer, the meticulous scientist, and the discerning homemaker.Someone who works behind the
                                scenes. Who believes goodness is built with care. With the right feed, right practices, right people. 
                                This persona became the emotional anchor of the brand. A guardian of goodness.
                            </p>

                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                            <img src="/img/case-study/abis_case_study_img1.jpg" alt="abis" srcset="" />
                        </div>
                        <div className="mt-9 md:mt-20 ">
                            {/* Left Side */}

                            <div className=''>
                                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                    Copy & Tonality
                                </LineHeading>
                              
                            </div>
                                <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-[30px]">
                                    With the persona defined, the voice followed naturally. ABIS Pro speaks like someone who knows 
                                    their craft, and doesn’t need to shout about it. The language mirrors the product: clean, traceable,
                                    and quietly reassuring.  At the heart of it all sits the brand promise: Goodness. Guaranteed.
                                </p>
                                <p className="text-base md:text-2xl text-rb-black/70 !leading-[150%] mb-[24px]">
                                    The tone is :
                                </p>
                                <p className="mb-6 md:mb-7.5 ">
                                    <ul className="list-disc pl-6 leading-7 mb-[30px]">
                                    <li className="list-disc pl-6 leading-7 mb-[30px]">
                                        Confident, but never flashy
                                    </li>
                                     <li className="list-disc pl-6 leading-7 mb-[30px]">
                                        Clear, not cluttered with jargon
                                    </li>
                                     <li className="list-disc pl-6 leading-7 mb-[30px]">
                                        Meticulous, respecting consumers who check every label
                                    </li>
                                    <li className="list-disc pl-6 leading-7 mb-[30px]">
                                        Modern Indian, grounded, warm, and culturally fluent
                                    </li>
                                    </ul>
                                </p>
                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)] md:w-[78.7rem] -mx-4 md:mx-0 md:my-[4rem] mt-8">
                            <img src="/img/case-study/abis_case_study_img2.jpg" alt="abis" srcset="" />
                        </div>
                         <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9 ">
                                Logo
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                                We built the visual system around the existing ABIS Pro logo, across packaging, storefronts, and 
                                institutional environments. Clear rules around spacing, usage, and blunders ensure the logo retains 
                                its integrity across touchpoints.
                            </p>
                        </div>

                        <div className="mt-9 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                               Colour Palette
                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                At the heart of the palette is ABIS Green, our hero colour.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                               Inspired by poultry farms and production landscapes, it conveys freshness, trust, and a natural 
                               connection to food. Supporting pastels and earthy neutrals create balance, while a restrained neon 
                               accent adds a modern edge,  reflecting the brand’s belief in tech and digitization across the value chain.
                            </p>

                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                            <img src="/img/case-study/abis_case_study_img3.jpg" alt="abis" srcset="" />
                        </div>
                        <div className="mt-9 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                               Typography
                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                Typography balances authority with warmth. A bold primary typeface delivers clarity and confidence,
                                while a complementary script font introduces a human, almost handwritten softness. This combo feels 
                                both  professional and personal, clinical but never cold.
                            </p>
                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                            <img src="/img/case-study/abis_case_study_img4.jpg" alt="abis" srcset="" />
                        </div>
                        <div className="mt-9 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Iconography
                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                Icons are deliberately minimal and precise. Clean forms. Earthy simplicity. They convey complex ideas, 
                                such as traceability, protein content, clean practices, into instantly understandable signals.
                            </p>
                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                            <img src="/img/case-study/abis_case_study_img5.jpg" alt="abis" srcset="" />
                        </div>
                         <div className="mt-9 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                USPs as Visual Stamps
                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                ABIS Pro’s key strengths, for instance 100% Traceable, Up to 30% Protein, Clean Practices, Nurtured 
                                Right, are expressed as distinctive visual stamps.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                They act as conversational callouts. Used individually or as patterns, they make the brand’s proof points 
                                impossible to miss, on packs, in stores, across communication.
                            </p>
                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                            <img src="/img/case-study/abis_case_study_img6.jpg" alt="abis" srcset="" />
                        </div>
                         <div className="mt-9 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Illustrations
                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                Line-art illustrations of farm animals, produce, and rural life add another layer to the 
                                brand world. Simple. Wholesome. Timeless. They evoke nostalgia and bring warmth.
                            </p>
                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                            <img src="/img/case-study/abis_case_study_img7.jpg" alt="abis" srcset="" />
                        </div>
                        <div className="mt-9 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Collaterals & Extensions
                            </LineHeading>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                From packaging to storefronts, uniforms to digital grids, the identity scales effortlessly. 
                                Every touchpoint reinforces the same message: this is meat you can trust every day.
                            </p>
                        </div>
                        <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                            <img src="/img/case-study/abis_case_study_img8.jpg" alt="abis" srcset="" />
                        </div>
                        <div className="mt-9 md:mt-20 ">
                            <div className=''>
                                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                                    Results
                                </LineHeading>
                            </div>
                                <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                                    The ABIS Pro brand identity has emerged as a visual system rooted in honesty and care. We created 
                                    a distinctive brand world that balances modernity with warmth, with a confident, meticulous voice 
                                    that respects Indian consumers. Built clean. Built clear. Built on protein. Delivering the promise 
                                    of &apos;Goodness. Guaranteed&apos;.
                                </p>
                        </div>
                    </div>
                </div>
                <div className='md:pb-14 pb-[24px] md:mt-[44px]   md:pt-0  text-black overflow-hidden' >
                    <VideoGallery sources={commercials?.sources} type={commercials?.type} />
                </div>
            </section>

        </>
    )
}
Abis.PageLayout = SCSLayout
export default Abis