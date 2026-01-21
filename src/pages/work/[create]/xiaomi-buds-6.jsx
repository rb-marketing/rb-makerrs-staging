import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
    SEO,
    Testimonials,
    WorkHeroSection,
    RollupNumber,
    LineHeading,
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router';


const pageData = {
    logo: {
        src: '/img/logos/xiaomi-logo.webp',
        alt: 'Xiaomi Redmi Buds 5C',
        width: '260',
        height: '105',
    },
    image: '/img/works/xiaomi-a4-5g-banner.png',
    tags: ['Consumer Electronics', 'Ad Film', 'Digital Campaign', 'Product Launch Campaign'],
    commercials: {
        type: 'video',
        sources: [
            {
                key: 0,
                duration: 15,
                vimeoId: '1091121229/8728a1e284',
                name: 'Redmi A4 5G Campaign Film',
                company: 'Xiaomi',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/works/xiaomi-a4-5g-video.png',
                },
            },

        ],
    },
}


function XiaomiA45G() {
    const router = useRouter();
    const fullUrl = `https://www.makerrs.com${router.asPath}`;
    const { logo, tags, commercials, desktopVideo, mobileVideo, image } = pageData
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
                title="Case Study: Xiaomi A4 5G"
                description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
                url="https://www.makerrs.com/work/brand-campaign-agency-india/xiaomi-a4-5g"
            />
            <WorkHeroSection
                title={'Launch Campaign for Redmi A4 5G'}
                logo={logo}
                socials={socials}
                tags={tags}
                desktopVideo={desktopVideo}
                mobileVideo={mobileVideo}
                image={image}
            />
            <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
                <div className="container ">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Background and Objective
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                                The Redmi A4 5G was about to be launched as India’s most affordable truly 5G smartphone. Priced under ₹10,000 and powered by the global debut of the Snapdragon 4s Gen 2 processor. With premium features packed into an entry-level device, the A4 5G was set to change what people expected from a budget smartphone.

                            </p>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mt-[30px]">
                                A product built for <i>Bharat</i> - the students, first-jobbers, and small business owners in Tier 2 and 3 cities. People who heavily depend on their mobile phones, who are ambitious, value-conscious, and eager to move fast, to get ahead.
                            </p>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mt-[30px]">
                                Xiaomi wanted a launch campaign that would connect with this audience, reflect their Bharat, and help drive early traction.
                            </p>

                        </div>
                        <div className="mt-6 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Creative Approach
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">

                                We took a narrative-driven approach - rooting the product in a story that felt familiar to <i>Bharat</i>. At the centre of the film are two characters many would recognise: a father running a quiet, old-school bakery that’s losing pace with the world, and his son Raghu - disconnected, disinterested, and glued to his phone. But one day as he endlessly scrolls, an idea sparks. Raghu begins to reimagine what the family business could become.

                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">

                                With the Redmi A4 5G in hand, he becomes a one-man brand team - shooting content, designing logos, creating reels, and giving the bakery a full makeover. He rebrands his father’s old <i>Babu Raj Bakery</i><span className="pl-2" />into the sleek, new BRB Café - a space that feels young, fresh, and built for today. Soon, customers start flocking in, and the business begins to pick up again. Each key feature of the phone - its 50MP camera, smooth 120Hz display, and powerful Snapdragon 4s Gen 2 processor - is woven into the story as a tool that enabled the transformation of this small business.

                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">

                                Shot in Hindi and adapted to 8 regional languages, the film is fast-paced, relatable, and rooted in everyday ambition - designed to connect with the young minds of Bharat who are ready to take charge, if given the right tools.

                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">

                                At the heart of it is a clear message: with speed, vision, and the Redmi A4 5G - <i>Ab India karega 5G</i>.

                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">

                                And oh, we crafted the campaign with the same speed: going from brief to creative concepts, scripts, production, 3D animations, master films, language adapts and 136 versions for various platforms in 22 days flat.

                            </p>
                        </div>
                    </div>
                </div>




                <CommercialSection
                   
                    sources={commercials?.sources}
                    type={commercials?.type}

                />
                {/* <Testimonials
          title={'WHAT OUR CLIENT SAYS'}
          testimonialData={jewelsTestimonialData}
          className="pt-14 md:pt-24 md:pb-30 pb-16"
        /> */}
            </section>

        </>
    )
}
XiaomiA45G.PageLayout = SCSLayout
export default XiaomiA45G
