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
  WorkHeroSection,
  testimonialsDefault,
} from '@/components/shared'
import { useRouter } from 'next/router'
import { ccs, similarPosts } from '@/utils/dummy'
import { CommercialSection } from '@/components/pages/work'
// // import { createTestimonialData } from '@/pages/services/create'

export const similarPostsData = [
  {
    key: 1,
    name: '#ForwardWithInfosys',
    company: 'INFOSYS',
    image: '/img/infosys_eb_campaign.jpg',
    tags: ['Employer Branding', 'Campaign', 'Video Production'],
    href: '/work/b2b-brand-campaign-agency/infosis-eb',
  },
  {
    key: 2,
    name: 'Digital Campaign videos for E-learning courses',
    company: 'Jigsaw',
    image: '/img/works/jigsaw_work.webp',
    tags: [
      'Ed-tech',
      'Digital Campaign',
      'Marketing Video',
      'Product Launch Video',
    ],
    href: '/work/b2b-brand-campaign-agency/jigsaw-e-learning-explainer-video',
  },
  {
    key: 3,
    name: 'Social Media Campaign: Meet the AI-First Employees',
    company: 'Infosys',
    image: '/img/works/infy-ai-first-work.webp',
    tags: [
      'Technology',
      'Digital Campaign',
      'Employer Branding video',
      'Social Media Content',
    ],
    href: '/work/b2b-brand-campaign-agency/infosys-employees-social-media-campaign',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/infosys-cobalt.svg',
    width: '150',
    height: '105',
  },
  image: '/img/case-study/cobalt-casestudy-banner.jpg',
  tags: [
    'Technology',
    'Digital Campaign',
    'Platform Launch Video',
    '2D Animation Video',
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
        vimeoId: '1042882588',
        name: 'Campaign Film for Cobalt',
        company: 'INFOSYS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/coballt-thumbnail.jpg',
        },
      },
    ],
  },
}

function Colearn() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.asPath}`

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
        title="Infosys Cobalt Cloud Community Explainer Video | Makerrs"
        description="We created an animated explainer for Infosys Cobalt Cloud Community, scaling collaboration and positioning Infosys as a leader in cloud innovation."
        url="https://www.makerrs.com/work/video-production/abstract-animation-video-infosys-cobalt-launch"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Launching the Cobalt Cloud Community"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white md:pb-14 pb-[24px] overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                The opportunity
              </LineHeading>

              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                Infosys Cobalt Cloud Community was on an ambitious growth
                trajectory—expanding from 150,000 to 500,000 cloud practitioners
                in just a few months.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                The communication challenge was to make cloud innovation feel
                accessible, collaborative, and exciting to both Infosys
                employees (Phase I) and later, external partners and clients
                (Phase II).
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                To achieve this, Infosys needed a compelling introduction—one
                that would showcase the scale, impact, and collaborative spirit
                of the Cobalt Cloud Community in a way that was both visually
                arresting and strategically engaging.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Our solution</LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Rather than a conventional explainer video, we crafted a
                symbolic animated experience—one that inspired as much as it
                informed.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                <ul className="list-disc pl-6 leading-7 mb-[30px]">
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    <span className="font-bold">Custom illustration: </span> We
                    developed a clean, elegant, and modern design language that
                    cut through the visual noise, ensuring the video stood out
                    across digital platforms.
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    <span className="font-bold">Minimalist animation: </span>We
                    designed seamless transitions, to ensure that every scene
                    was designed to flow effortlessly, mirroring the
                    collaboration within the cloud ecosystem.
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    <span className="font-bold">
                      Conversational storytelling:
                    </span>{' '}
                    The script demystified complex cloud concepts into a simple
                    narrative that resonated with developers, partners, and
                    business leaders alike.
                  </li>
                </ul>
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">The Result</LineHeading>

              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                The animated video became the pivotal brand asset of the Infosys
                Cobalt Cloud Community campaign. By visually capturing the
                collaborative power of cloud practitioners, it successfully
                positioned Infosys as a leader in fostering open, innovative
                cloud ecosystems.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                As the community expands beyond Infosys employees to global
                partners, clients, and citizen developers, this campaign
                continues to serve as an invitation to co-create the future of
                cloud innovation—together.
              </p>
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
Colearn.PageLayout = SCSLayout
export default Colearn
