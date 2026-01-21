import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
    LineHeading,
    SEO,
    WorkHeroSection,
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router';


const pageData = {
    logo: {
        src: '/img/logos/tata-logo.svg',
        alt: "Tata Women's Cricket Film",
        width: '300',
        height: '150',
    },
    specifyWidth: 'md:!w-[220px] !w-[200px]',
    image: '/img/case-study/tata-womens-ckicket-thumbnail.webp',
    tags: ['Video Content', 'Employer Branding', 'Sports League'],
    commercials: {
        type: 'video',
        sources: [
            {
                key: 0,
                duration: 15,
                vimeoId: '1080157493',
                name: 'The Rap Anthem',
                company: 'JEWELS',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/case-study/tata-womens-ckicket-video-thumbnail.webp',
                },
            },
        ],
    },
}



function Tatawomens() {
        const router = useRouter();
    const fullUrl = `https://www.makerrs.com${router.asPath}`;
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
                title="Case Study: Tata Women's Cricket Film"
                description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
                url="https://www.makerrs.com/work/video-production/rap-video-tata-womens-cricket-league"
            />
            <WorkHeroSection
                title={"High-energy rap music video on Tata Women's Cricket Premiere League"}
                logo={logo}
                socials={socials}
                tags={tags}
                desktopVideo={desktopVideo}
                mobileVideo={mobileVideo}
                image={image}
                specifyWidth={specifyWidth}
            />
            <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                The Brief
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                                Tata launched its first-ever women’s cricket league, bringing together 19 teams from 16 group companies. For many of the women, this was their first time on a cricket field. Some had never played before, others had to balance work, home, and training to participate.
                            </p>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mt-8">
                                To mark this milestone, Tata wanted to create a video that didn’t feel like a typical corporate recap. It needed to carry the energy of the game, the pride of participation, and the emotional weight of what this league meant for the women involved. Something fresh, celebratory, and true to the spirit of the sport—and the players.
                            </p>

                        </div>

                        <div className="mt-6 md:mt-12">
                            <LineHeading className="mb-6 md:mb-9">
                                Our Approach
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                To break away from the usual tone of internal communication films, we chose to tell this story through a rap music video. It was a deliberate decision -  to capture the energy of the league and appeal to a younger, more diverse workforce. The goal was to create something that felt current and memorable.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                                We collaborated with a young rap artist from Mumbai - Meba Ofilia <a href="https://www.instagram.com/mebaofilia/?hl=en" target="_blank" className='text-blue-500'>(Mebaofilia)</a>, to compose and perform the track. While Meba’s style is rooted in Hip Hop and R&B, the lyrics were written in-house in Hinglish to connect with a big internal audience that speaks different languages across companies and teams. Rap allowed us to bring in pace, attitude, but clarity was key - this was an internal audience, and we needed every lyric to land. The format helped us keep the energy high while staying grounded in the real experiences of the players.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-12 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Crafting the Narrative
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">

                                The narrative centred on the idea of “firsts” - the first catch, the first run, the first time playing a sport at this scale. These moments were translated into lyrics that felt direct, emotional, and rooted in everyday language. Lines like “Dekha pehli baar itna bada sa maidaan / Par kyu main darun, mere saathi mere saath” captured both the fear and the support that defined many of the women’s journeys.

                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">

                                Visually, the film combined stylised shots of players walking onto the field, huddling with teammates, and owning their space - with direct-to-camera chorus shots that reinforced pride and presence.

                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">


                                The result was a bold, 90-second anthem that spoke to the women who played - and those who might step up next.

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
Tatawomens.PageLayout = SCSLayout
export default Tatawomens