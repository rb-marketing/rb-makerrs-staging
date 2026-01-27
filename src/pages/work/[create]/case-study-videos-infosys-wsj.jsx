import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  SEO,
  Testimonials,
  WorkHeroSection,
  SimilarPosts,
  LineHeading,
  RollupNumber,
} from '@/components/shared'
import { useRouter } from 'next/router'
import { CommercialSection } from '@/components/pages/work'
import styles from '@/styles/sections/StatsSection.module.scss'
export const similarPostsData = [
  {
    key: 0,
    name: 'Supporting young women in pursuit of a Future in STEM',
    company: 'WeRise',
    image: '/img/works/we_rise.webp',
    alt: 'WeRise',
    tags: ['Non-profit', 'CSR Video', 'Documentary'],
    tabs: ['Videos'],
    case_study_title: 'werise-women-in-science-documentary',
    href: '/work/b2b-video-production-agency/werise-women-in-science-documentary',
  },
  {
    key: 1,
    name: 'Corporate Film for Aerospace Manufacturing giant in India',
    company: 'GE Aerospace',
    image: '/img/works/ge_aerospace.webp',
    alt: 'GE Aerospace',
    tags: ['Manufacturing', 'Aerospace', 'Corporate Films & Videos'],
    tabs: ['Videos'],
    case_study_title: 'ge-aerospace-corporate-film',
    href: '/work/b2b-video-production-agency/ge-aerospace-corporate-film',
  },
  {
    key: 2,
    name: 'Gordon Ritter on the Future of Software',
    company: 'Vymo',
    image: '/img/works/vymo_gordon_ritter.webp',
    alt: 'Vymo',
    tags: [
      'SaaS',
      'Thought Leadership Video',
      'Corporate Film',
      'Interview Video',
    ],
    case_study_title: 'vymo-gordon-ritter-thought-leadership-video',
    href: '/work/b2b-video-production-agency/vymo-gordon-ritter-thought-leadership-video',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/infosys-logo.png',
    width: '150',
    height: '70',
  },
  image: '/img/case-study/infosys_x_wsj_banner.webp',
  tags: [
    'Technology',
    'Case Study Video',
    'Testimonial Video',
    'Global Video Production',
  ],
  // desktopVideo: '/img/works/metro-wholesale-big.mp4',
  // mobileVideo: '/img/works/metro-wholesale.mp4',
  // featured: {
  //   src: '/img/works/ccs_2x.webp',
  //   width: '2880',
  //   height: '1544',
  // },
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
        vimeoId: '1084658661/b2d6c34787',
        name: 'Kia Motors',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_kia_motors_thumbnail.webp',
        },
      },
      {
        key: 1,
        duration: 130,
        vimeoId: '1084665775/f24a80bb6b',
        name: 'Vialto',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/vialto-wsj.png',
        },
      },
      {
        key: 2,
        duration: 130,
        vimeoId: '1084666340/30c7698609',
        name: 'Spotlight',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_spotlight_Thumbnail.webp',
        },
      },
      {
        key: 3,
        duration: 130,
        vimeoId: '1084669972/1fbba55efb',
        name: 'ADT Boca Raton',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/adt-wsj.png',
        },
      },
    ],
  },
}
const stats = [
  {
    id: 0,
    countUpProps: {
      value: 11,
      suffix: (
        <div className="inline-flex text-md ml-[7px] md:text-[70px] text-[40px]">
          films {/* <span className="text-rb-red">+</span> * */}
        </div>
      ),
    },
    text: (
      <span className="md:max-w-[188px] md:text-[22px]">
        produced across the US, Asia, and Australia
      </span>
    ),
  },
  {
    id: 1,
    countUpProps: {
      value: 14,
      suffix: (
        <div className="inline-flex md:ml-[15px] ml-[10px] md:text-[70px] text-[40px]">
          days{/* K<span className="text-rb-red">+</span> */}
        </div>
      ),
    },
    text: (
      <>
        <span className="md:max-w-[188px] md:text-[22px]">
          of average turnaround time per video
        </span>
      </>
    ),
  },
]

function InfosysWSJ() {
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
        title="Infosys x WSJ Global Case Study Videos | Makerrs"
        description="We crafted multi-location case study videos for Infosys and WSJ, showcasing digital transformation stories that resonate with global leaders."
        url="https://www.makerrs.com/work/video-production/case-study-videos-infosys-wsj"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Global Case Study Videos for Infosys"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-[5.3rem] pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Context</LineHeading>
              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                Infosys, a global leader in digital services and consulting, has
                consistently driven transformation for enterprises across
                energy, telecom, manufacturing, healthcare, and more. In a move
                to reinforce its position, Infosys established a media
                partnership with The Wall Street Journal (WSJ), which included a
                dedicated Wall Street Journal microsite featuring business
                transformation stories under the theme <i>Humanizing Digital</i>
                . The objectives with this content partnership were to build
                brand visibility, credibility, advocacy and engage a global
                C-suite audience.
              </p>
            </div>

            <div className=" md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Brief</LineHeading>

              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                Enhance the partnership with WSJ by creating a larger bank of
                transformation stories that would also be published on the WSJ
                microsite.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Our Solution</LineHeading>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Our creative approach blended authentic branded storytelling
                with global production, and delivered consistent quality across
                every case study video. We matched the editorial style of the
                Wall Street Journal platform. Designed to inform and impress
                global business leaders, the videos also aligned with Infosys’
                brand voice and communications.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                With a central team working on the creative direction,
                production and post production, we leveraged our global curated
                collaborative of filmmakers for on-ground video shoots. This
                combination allowed us to scale up production while keeping the
                quality and style consistent across regions and industries.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                In every video, our creative directors, producers and editors
                prioritised messaging frameworks to articulate each client’s
                transformation journey and strategic partnership with Infosys.
                And on-ground crews were carefully briefed to ensure premium
                visual quality and cinematography style consistency.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Our Process</LineHeading>

              <ul className="list-disc pl-6  text-rb-black/90 sm:text-[16px] md:!text-xl font-semibold leading-[150%] tracking-[-0.5px] opacity-90">
                <li className="list-disc pl-6 mb-[24px]">
                  Subject matter understanding and story structuring
                </li>
                <li className="list-disc pl-6 mb-[24px]">
                  Scalable project plan tailored to multi-location shoots
                </li>
                <li className="list-disc pl-6 mb-[24px]">
                  Global network of video crews to film interviews & cinematic
                  B-roll across locations like California, Singapore, Auckland,
                  Melbourne, Hong Kong, Arizona, Richardson, and Boca Raton
                </li>
                <li className="list-disc pl-6 mb-[24px]">
                  Custom-designed motion graphics that visually unpacked
                  Infosys’ solutions and impact
                </li>
                <li className="list-disc pl-6 mb-[24px]">
                  Custom-crafted teasers to social media amplification
                </li>
                <li className="list-disc pl-6 mb-[24px]">
                  Cloud-based workflows to ensure faster turnarounds and
                  real-time visibility
                </li>
              </ul>
            </div>

            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Results</LineHeading>
              <div className="lg:block hidden flex flex-col lg:flex lg:flex-row grid-cols-2 md:justify-start lg:relative lg:right-16 gap-x-5 md:gap-x-[124px] gap-y-8 md:gap-y-6 max-w-full md:max-w-none ">
                {stats.map((s, i) => (
                  <div
                    className={`
    w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative
    after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
    after:w-px after:h-10 after:bg-rb-cotton-seed after:visible
    after:right-[10px] md:after:right-[-230px]  last:after:hidden
  `}
                    key={s.id}
                  >
                    <div
                      className={`lg:w-fit flex lg:flex lg:flex-col lg:mx-auto  ${s.id === 0 ? 'md:!ml-16' : ''} ${s.id === 1 ? 'md:!ml-[16rem]' : ''}`}
                    >
                      <div>
                        <RollupNumber
                          {...s.countUpProps}
                          className={`lg:text-[70px] ${
                            s.countUpProps?.value === 11
                              ? 'md:ml-[-12px]'
                              : 'md:ml-[-12px]'
                          }`}
                        />
                      </div>
                      <div
                        className={`text-sm lg:mt-0 lg:ml-0 leading-[15.54px] md:text-2xl md:leading-7 tracking-[-.56px] md:tracking-[-0.96px] text-rb-black ${
                          s.id === 1 ? 'mt-[21px]' : 'mt-[5px]'
                        } font-medium font-everett
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
              <div className="container px-0 md:hidden block">
                <div
                  className="flex flex-col lg:flex lg:flex-row grid-cols-2 md:justify-start lg:relative lg:right-16 max-w-full md:max-w-none
    divide-y divide-gray-300  border-b border-gray-300"
                >
                  {stats.map((s, i) => (
                    <div
                      className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.statline}
        pb-[20px]`}
                      key={s.id}
                    >
                      <div
                        className={`lg:w-fit flex flex-col lg:mx-auto 
            ${s.id === 1 ? 'md:!ml-12 pt-[28px]' : ''}
            ${s.id === 0 ? 'md:!ml-32' : ''}
           
          `}
                      >
                        <div className="w-[400px]">
                          <RollupNumber
                            {...s.countUpProps}
                            className={`text-[40px] font-medium !tracking-[-0.768px] mr-[4px]`}
                          />
                        </div>

                        {/* Text beside number */}
                        <div
                          className={`ml-2 text-[14px] leading-[15.54px] md:text-2xl md:leading-7 tracking-[-0.56px] md:tracking-[-0.96px] text-rb-black font-medium font-everett`}
                        >
                          {s.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="list-disc pl-6 pt-[24px] md:pt-12 text-rb-black/90 sm:text-[16px] md:!text-xl font-semibold leading-[150%] tracking-[-0.5px] opacity-90">
                <li className="list-disc pl-6 mb-[24px]">
                  <span className="font-bold text-[#111010]">
                    All videos featured
                  </span>{' '}
                  on the Infosys x WSJ microsite
                </li>
                <li className="list-disc pl-6 mb-[24px]">
                  <span className="font-bold text-[#111010]">
                    Consistent creative quality
                  </span>{' '}
                  across locations and industries
                </li>
                <li className="list-disc pl-6 mb-[24px]">
                  <span className="font-bold text-[#111010]">
                    Faster delivery & better visibility{' '}
                  </span>{' '}
                  through scalable post-production and efficient workflows
                </li>
                <li className="list-disc pl-6 mb-[24px]">
                  <span className="font-bold text-[#111010]">
                    High engagement{' '}
                  </span>{' '}
                  through teasers, webinars, and amplification assets like
                  carousels, static posts, and GIFs
                </li>
              </ul>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

      {/* <SimilarPosts
         tag="explore more case studies"
        className="py-15 md:pb-30"
        posts={similarPostsData}
      /> */}
    </>
  )
}
InfosysWSJ.PageLayout = SCSLayout
export default InfosysWSJ
