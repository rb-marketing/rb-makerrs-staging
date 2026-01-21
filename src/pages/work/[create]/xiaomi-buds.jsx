import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
    LineHeading,
    SEO,
    WorkHeroSection,
    Testimonials
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router';

const pageData = {
    logo: {
        src: '/img/logos/xiaomi-logo.webp',
        alt: "xiaomi-buds",
         width: '200',
         height: 'auto',
    },
    image: '/img/case-study/xiaomi_buds_6_banner_visual.png',
    tags: ['Consumer Electronics', 'Ad Film', 'Digital Campaign', 'Product Launch Campaign'],
    commercials: {
        type: 'video',
        sources: [
           {
                key: 0,
                duration: 15,
                vimeoId: '1075750297/173aaccf2a',
                name: 'Redmi Buds 6',
                company: 'Xiaomi',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/xiaomi_buds_6_video_thumbnail.png',
                },
            },
        ],
    },
}

const testimonialsDefault = [
    {
        key: 0,
        quote:
        'We partnered with Makerrs to create video content for our internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends and are always experimental and open to feedback. They’re an amazing lot to work with!',
        name: 'Lissa Smith',
        designation: 'Marketing Manager',
        company: 'FORTUNE 100 ITES ENTERPRISE',
        image: {
        srcSet:
            '/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
        },
    },
]



function XiaomiBuds() {
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
                title="Case Study: Xioami Buds 6"
                description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
                url="https://www.makerrs.com/work/brand-campaign/xiaomi-buds"
            />
            <WorkHeroSection
                title={"Action-packed launch film for Redmi Buds 6"}
                logo={logo}
                socials={socials}
                tags={tags}
                desktopVideo={desktopVideo}
                mobileVideo={mobileVideo}
                image={image}
            />
            <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                                This action-packed film for the Redmi Buds 6 showcases the earbuds&apos; impressive features. We used a mix of live-action, GenAI visuals, and 3D graphics to bring the Redmi Buds 6&apos;s features to life and take our viewers on a journey with the protagonist as he escapes the chaos of everyday life and gets transported to his own engaging world. The film is packed with visual excitement and highlights the Redmi Buds 6 as the ultimate tool for escaping the noise and enjoying your favorite content anytime, anywhere!
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
XiaomiBuds.PageLayout = SCSLayout
export default XiaomiBuds