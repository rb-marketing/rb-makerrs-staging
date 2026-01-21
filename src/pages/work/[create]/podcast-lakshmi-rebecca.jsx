import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  SEO,
  WorkHeroSection,
  Testimonials,
  RollupNumber,
} from '@/components/shared'
import styles from '@/styles/sections/StatsSection.module.scss'
import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router'
import { VideoGallery } from '@/components/pages/work/VideoGallery'
const pageData = {
  logo: {
    src: '/img/logos/lsr_sign.png',

    alt: 'sign',
    width: '300',
    height: '200',
  },
  specifyWidth: 'md:!w-[200px] !w-[180px]',
  image: '/img/case-study/lrs-banner.png',
  tags: ['Video Content', 'YouTube Series'],
  commercials: {
    type: 'projectLoom',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '1108098347',
        name: ' India Hikes on LRS',
        company: 'Lakshmi Rebecca',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/indiahikes.png',
        },
      },
      {
        key: 1,
        duration: 15,
        vimeoId: '868491277',
        name: 'Industree on LRS',
        company: 'Lakshmi Rebecca',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/industree.png',
        },
      },
      {
        key: 2,
        duration: 15,
        vimeoId: '1108099333',
        name: ' Kalki on LRS',
        company: 'Lakshmi Rebecca',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/kalki.png',
        },
      },
      {
        key: 3,
        duration: 15,
        vimeoId: '1101828642',
        name: 'Frontier Markets on LRS',
        company: 'Lakshmi Rebecca',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/frontier-markets.png',
        },
      },
      {
        key: 4,
        duration: 15,
        vimeoId: '1101832304',
        name: 'Garv on LRS',
        company: 'Lakshmi Rebecca',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/garv.png',
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

function LRSTalkShow() {
  const router = useRouter()
  const fullUrl = `https://www.makerrs.com${router.asPath}`
  const {
    logo,
    tags,
    commercials,
    desktopVideo,
    mobileVideo,
    image,
    specifyWidth,
  } = pageData

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

  const stats = [
    {
      id: 0,
      countUpProps: {
        value: 10,
        suffix: (
          <div className="inline-flex">
            M <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: <span className="md:max-w-[188px]">views on YouTube</span>,
    },
    {
      id: 1,
      countUpProps: {
        value: 60,
        suffix: (
          <div className="inline-flex">
            K<span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: (
        <>
          {' '}
          subscribers built
          <br /> organically
        </>
      ),
    },
  ]
  return (
    <>
      <SEO
        title="Case Study: Lakshmi Rebecca Show"
        description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
        url="https://www.makerrs.com/work/video-podcast/podcast-lakshmi-rebecca"
      />
      <WorkHeroSection
        title={'The Lakshmi Rebecca Show: YouTube Series on Impact Businesses'}
        logo={logo}
        socials={socials}
        tags={tags}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
        image={image}
        specifyWidth={specifyWidth}
      />
      <section className="bg-white overflow-hidden md:pb-30 pb-15">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Reframing the Conversation
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                What if we stopped measuring India by its problems and measured
                it instead by the solutions its people have been quietly
                building? Solutions like a comic book on menstruation that
                educated over 1.4 million girls. Or 10,000 rural women
                entrepreneurs transforming local economies by delivering
                essential products to the door. Or forests grown in backyards
                that could last a 100 years.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                Back in 2010, (and even now) these weren’t the stories you often
                found in mainstream headlines. But they were shaping the future
                in ways that couldn’t be ignored.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                The Lakshmi Rebecca Show, originally launched as Chai With
                Lakshmi, set out to make these stories visible. Long before
                purpose-driven content became a trend, the show created space
                for social entrepreneurs and grassroots innovators to share what
                they were building and why it mattered.
              </p>
            </div>

            <div className="mt-9 md:mt-[80px]">
              <LineHeading className="mb-6 md:mb-9">
                A Format Designed for Clarity and Impact
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                Each episode focused on two goals: giving social entrepreneurs
                and changemakers a space to share their work in their own words,
                and helping audiences understand the ideas clearly enough to
                inspire participation and action.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                When Shanti Raghavan spoke about Enable India, an organization
                that equipped people with disabilities to find meaningful
                employment, she explained how confidence and systems matter as
                much as skills. Instead of making disability an obstacle, this
                enterprise defined a design problem that could be solved.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                Industree, which helps artisan collectives connect with global
                brands and build sustainable livelihoods, offered a model that
                others could learn from. Their “6C ecosystem” guided rural
                artisan collectives through every stage of growth, from
                professional management and skills training to better design,
                access to markets, and digital tools. By structuring creative
                manufacturing for the new age, they showed how traditional
                livelihoods could scale without losing their roots.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                Some episodes explored innovative and sustainable solutions to
                large scale problems, while others examined models,
                technologies, or products shaping the future in less visible
                ways. But all shared the same intent: help good ideas look
                great, and get discovered.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-6 md:my-16 md:w-[78.7rem] mt-[32px]">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <img
                    src="/img/case-study/lrs-img-2.png"
                    alt="lrs"
                    className="md:h-[28rem] md:w-[41rem]"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="/img/case-study/lrs-img-1.png"
                    alt="lrs"
                    className="md:h-[28rem] md:w-[41rem]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-9 md:mt-[80px] ">
              <LineHeading className="mb-6 md:mb-9">
                Behind the Scenes
              </LineHeading>
              <div className="text-base md:text-xl text-rb-black/80 md:mt-[30px] ">
                <p className="text-base md:!text-xl text-rb-black/80 !leading-[150%] mb-[30px]">
                  Creating the Lakshmi Rebecca Show was weeks of creative effort
                  poured into each episode. Broadly, the process looked as
                  follows:
                </p>

                <ul className="list-disc pl-6 leading-7 mb-[30px]">
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    Pre-interviews and research to identify and develop each
                    story
                  </li>

                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    Story structuring and production planning
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    In-studio interview production
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    Production across locations for up to two days to capture
                    authentic perspectives and testimonials, and supporting
                    b-roll footage
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    Scripting, episode structuring and custom infographics
                    design
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    Post-production: editing, motion graphics, voiceovers,
                    colour correction and music
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    Multiple reviews and organic restructuring to deliver an
                    impactful episode that was typically in under 20 minutes
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    YouTube packaging - thumbnails and descriptions
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    Publishing, distribution and social media sharing
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-[64px]">
              <img src="/img/case-study/lrs-img-3.png" alt="lrs" srcset="" />
            </div>

            <div className="mt-9 md:mt-[80px]">
              <LineHeading className="mb-6 md:mb-9">
                Impact That Went Beyond Numbers
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                The show often featured founders and teams who were still early
                in their journeys and lacked resources to document or publicize
                their work. In sharing these stories, it gave them something
                they could use for outreach, fundraising, and credibility
                building.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                Over a period of time, the impact showed in numbers too -
              </p>
            </div>
          </div>
          <div className="lg:block hidden flex flex-col lg:flex lg:flex-row grid-cols-2 md:justify-start lg:relative lg:right-16 gap-x-5 md:gap-x-[124px] gap-y-8 md:gap-y-6 max-w-full md:max-w-none ">
            {stats.map((s, i) => (
              <div
                className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.statline}`}
                key={s.id}
              >
                <div
                  className={`lg:w-fit flex lg:flex lg:flex-col lg:mx-auto  ${s.id === 0 ? 'md:!ml-16' : ''} ${s.id === 1 ? 'md:!ml-12' : ''}`}
                >
                  <div>
                    <RollupNumber
                      {...s.countUpProps}
                      className={` ${
                        s.countUpProps?.value === 60 ? 'md:ml-[-5px]' : ''
                      }`}
                    />
                  </div>
                  <div
                    className={`text-sm lg:mt-[12px] lg:ml-0 leading-[15.54px] md:text-2xl md:leading-7 tracking-[-.56px] md:tracking-[-0.96px] text-rb-black ${
                      s.id === 1 ? 'mt-[21px]' : 'mt-[5px]'
                    } md:mt-4 font-medium font-everett
                      ${s.id === 0 ? 'ml-[40px]' : ''}
                      ${s.id === 1 ? 'ml-[56px]' : ''}
                       
                `}
                  >
                    {s.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="block md:hidden lg:hidden grid grid-cols-2 gap-x-5 gap-y-8 md:gap-x-[124px] md:gap-y-6 md:justify-start   lg:flex lg:flex-row lg:relative lg:right-16   
    max-w-full md:max-w-none"
          >
            {stats.map((s, i) => (
              <div
                key={s.id}
                className={`w-full lg:w-1/4  lg:text-left group relative`}
              >
                {/* Number on top */}
                <div className="text-[42px] leading-[48px] tracking-[-1.44px] md:text-stat ">
                  <RollupNumber
                    {...s.countUpProps}
                    className={`${s.countUpProps?.value === 10 ? ' ml-[-8px]' : 'ml-[-2px] '}  `}
                  />
                </div>

                {/* Text below */}
                <div className="text-sm md:text-2xl md:leading-7 tracking-[-.56px] md:tracking-[-0.96px] text-rb-black  md:mt-4 font-medium font-everett">
                  {s.text}
                </div>
              </div>
            ))}
          </div>

          <div className="text-base md:text-xl text-rb-black/80 mt-[30px] max-w-[914px] md:mb-20">
            <ul className="list-disc pl-6 leading-7 mb-[30px]">
              <li className="list-disc pl-6 leading-7 mb-[30px]">
                Several stories picked up by mainstream press
              </li>

              <li className="list-disc pl-6 leading-7 mb-[30px]">
                Viewers wrote-in about adopting sustainable habits or starting
                their own businesses.
              </li>
            </ul>
            <p className="text-base md:!text-xl text-rb-black/80 !leading-[150%] mb-[30px]">
              The <i>Lakshmi Rebecca Show </i> built emotional equity. It earned
              attention by giving attention to ideas that mattered. The takeaway
              is clear: real stories age well, and purpose leaves a lasting
              footprint.
            </p>
          </div>
        </div>

        <div>
          <VideoGallery
            sources={commercials?.sources}
            type={commercials?.type}
          />
        </div>
      </section>
    </>
  )
}
LRSTalkShow.PageLayout = SCSLayout
export default LRSTalkShow
