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

const swiggyTestimonialData = [
{
    key: 1,
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

export const similarPostsData = [
    {
        key: 0,
        name: '5 Star Campaigns for a Wholesale Brand',
        company: 'Metro Wholesale',
        image: '/img/works/metro-wholesale.jpg',
        alt:'metro wholesale ad',
        tags: ['TV Campaign', 'Ad Film', 'Retail'],
        href: '/work/brand-campaign-agency-india/metro-wholesale-case-study',
      },
      {
        key: 1,
        name: 'An ode to the Security Personnel who Guard our Homes',
        company: 'MyGate',
        image: '/img/works/heros-mygate.jpg',
        alt:'heros at mygate ad',
        tags: ['Digital Campaign', 'Video Content', 'B2C SAAS'],
        href: '/work/brand-campaign-agency-india/mygate-case-study',
      },
      {
        key: 2,
        name: ' Campaign films: Winter Jackets',
        company: 'Swiggy',
        image: '/img/works/Swiggy_Wali_Jacket.png',
        alt: ' Campaign films: Winter Jackets',
       tags: ['Digital Campaign', 'Ad Film', 'Quick Commerce'],
        href: '/work/brand-campaign-agency-india/swiggy-winter-jacket-case-study',
      }
  
  ]

const pageData = {
    logo: {
        src: '/img/logos/swiggy-logo.webp',
        alt: 'swiggy',
        width: '260',
        height: '105',
    },
    tags: ['Quick Commerce', 'Gen AI Video', 'Ad Film'],
    desktopVideo: '/img/works/metro-wholesale-big2.mp4',
    mobileVideo: '/img/works/metro-wholesale.mp4',
    image: '/img/case-study/swiggy_insanely_good_banner_visual.png',
    featured: {
        src: '/img/works/ccs_2x.webp',
        width: '2880',
        height: '1544',
    },
    commercials: {
        type: 'video',
        sources: [
            {
                key: 0,
                duration: 1,
                vimeoId: '1113808198',
                name: 'Gen AI Ad for Swiggy',
                company: 'SWIGGY',
                thumbnail: {
                    width: 642,
                    height: 430,
                    src: '/img/case-study/swiggy_insanely_good_video_thumbnail.png',
                },
                // url:"https://www.youtube.com/watch?v=xvvpNmP1G_4"
            }
        ],
    },
}

function SwiggyInsenlyGood() {
    const router = useRouter();
    const fullUrl = `https://www.makerrs.com${router.asPath}`;
    const { logo, tags, commercials, image } = pageData
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
                title="Case Study | Swiggy Insanely Good"
                description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
                url="https://www.makerrs.com/work/video-production/ai-video-swiggy"
            />
            <WorkHeroSection
                title={'Gen AI Ad for Single-Origin Coffee Range'}
                logo={logo}
                socials={socials}
                tags={tags}
                image={image}
            />
            <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Background
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] leading-7">
                                Swiggy’s InsanelyGood app was created to deliver premium, fresh groceries with a focus on quality and curation. One of its standout offerings was a collection of single-origin coffees from regions like Coorg, Wayanad, and Nepal.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Brief
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] leading-7 mb-[30px]">
                                The brief was to create a 15-second ad film that highlighted the provenance of these coffees and drove app downloads. But there was a challenge built into the brief: how do you take the audience across different geographies, capture the sensory richness of each origin, and do it all in a short, cost-efficient format?
                            </p>
                        </div>
                        <div className="mt-6 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                AI-First Production
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] leading-7 mb-[30px]">
                                This challenge called for a solution that could deliver cinematic richness without heavy production overheads. That’s where GenAI-first production came in. By generating the coffee landscapes entirely with AI tools, we could bring alive diverse origins - from the misty hills of Nepal to the lush estates of Coorg and Wayanad - without the cost and complexity of location shoots. 
                            </p>
                        </div>
                        <div className="mt-6 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Creative approach
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] leading-7 mb-[30px]">
                                That shift to GenAI also opened up a creative opportunity: if we could stage these origins so seamlessly, why not use it to transport the audience straight to the places their coffee comes from?
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] leading-7 mb-[30px]">
                                We built the story around a single, human anchor: a coffee mug in hand. Intimate and relatable, it became the perfect device to carry viewers across multiple AI-crafted backdrops. 
                                With every shift of the mug, the world behind it changed - from Nepal’s misty hills to Coorg’s lush plantations to Wayanad’s bold estates. This let us compress the sensory richness of provenance into a sharp 15-second format, while showcasing AI’s ability to create immersive, cinematic landscapes at speed.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] leading-7 mb-[30px]">
                                To complete the experience, the voice-over was AI-generated, bringing consistency and speed to the process, while the supers were crafted and added manually to reinforce clarity and emphasis. This hybrid method gave us both efficiency and control - delivering a film that felt transportive, premium, and digitally native.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Conclusion
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] leading-7 mb-[30px]">
                                The result was a 15-second AI-powered film that solved the brief with both creativity and efficiency. By combining a strong conceptual idea with AI-driven execution, we could achieve cinematic storytelling without heavy production overheads.
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
SwiggyInsenlyGood.PageLayout = SCSLayout
export default SwiggyInsenlyGood
