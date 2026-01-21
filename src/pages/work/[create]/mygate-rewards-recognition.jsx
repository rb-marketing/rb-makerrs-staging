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
        src: '/img/logos/mygate-logo-1.png',
        alt: "MyGate Rewards Recognition",
        width: '200',
        height: '105',
    },
    image: '/img/case-study/mygate_rewards_banner_visual.png',
    tags: ['B2C SaaS', 'Digital Campaign', 'Video Content'],
    commercials: {
        type: 'video',
        sources: [
           {
                key: 0,
                duration: 15,
                vimeoId: '776201521',
                name: 'Heroes at MyGate',
                company: 'MyGate',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/mygate_rewards_video_thumbnail.png',
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



function MygateRewards() {
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
                title="Case Study: MyGate Rewards & Recognition "
                description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
                url="https://www.makerrs.com/work/video-production/mygate-rewards-recognition"   
            />
            <WorkHeroSection
                title={"#HeroesAtMyGate: Celebrating India’s Security Guards"}
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
                            <LineHeading className="mb-6 md:mb-9">
                                Background
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                                How often do we stop to acknowledge the people who keep our homes and communities safe? MyGate, India’s leading housing society management app, set out to change that by creating Annual Security Guard Day - a first-of-its-kind initiative to honour the country’s 8 million private security professionals.
                            </p>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mt-[30px]">
                                As part of this campaign, called #HeroesAtMyGate, MyGate chose 12 remarkable security guards from across India, many stepping onto an airplane for the very first time, and brought them to Bangalore for a special awards ceremony celebrating their dedication, resilience, and years of service.
                            </p>

                        </div>

                        <div className="mt-[30px] md:mt-[80px]">
                            <LineHeading className="mb-6 md:mb-9">
                                Brief
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                MyGate wanted a film that would capture the spirit of the guards’ journeys to Bangalore and the pride of being honoured at its Annual Security Guard Day awards ceremony. The film would act as a standout piece of content to deepen the campaign’s impact, generate goodwill, and position MyGate as a brand rooted in empathy and community.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-[80px] md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Our Approach
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                We set out to create a film that felt warm, authentic, and relatable, putting security guards’ lived experiences at the forefront. The narrative followed their journeys from home to the awards stage, showing their anticipation, pride, and vulnerability.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                To ensure the film didn’t just celebrate these stories but also made viewers reflect on the unseen demands of the job, we introduced a contrasting perspective: MyGate employees stepping into the guards’ roles for a day. This was designed to help viewers appreciate the effort, discipline, and complexity of a guard’s role, something most people take for granted, and to create a sense of shared respect for their work.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                Before filming, we spent time understanding the people behind the uniforms -  conducting pre-interviews with the selected guards and mapping their personal stories. This helped us identify the most powerful narratives to feature and plan moments that would resonate emotionally on screen. Similarly, with the employees, we explored what it would mean for them to truly step into the guards’ roles - from experiencing the physical demands of long shifts to understanding the constant vigilance the job requires.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                We filmed across Bangalore, Mumbai, Delhi, and Kolkata. Post-production was completed within 5 days to meet the campaign timeline. The final film combined empathy-led storytelling with a message about respect, community, and recognising the people who often go unnoticed.
                                </p>
                                                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                The campaign helped build stronger emotional connections with MyGate’s audience and strengthened its positioning as a trusted, community-focused brand. The impact was reflected in national coverage by the 
                                <a href="https://www.financialexpress.com/business/brandwagon-mygate-launches-heroesatmygate-campaign-to-honour-the-security-guards-from-around-the-country-1897272/" target="_blank" class="text-blue-500 hover:text-blue-700"> Financial Express</a>,
                                featuring the campaign and highlighting MyGate’s efforts to recognise and celebrate the country’s security workforce.
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
MygateRewards.PageLayout = SCSLayout
export default MygateRewards