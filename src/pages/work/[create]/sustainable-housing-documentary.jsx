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

const pageData = {
  logo: {
    src: '/img/logos/werise_logo.jpeg',
    width: '150',
    height: '105',
  },
  image: '/img/case-study/werise_1.png',
  tags: ['Non-profit', 'Documentary'],
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
        vimeoId: '1109043592',
        name: 'Sustainable Hope',
        company: 'WeRise',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/werise_2.png',
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
        title="WeRise Sustainable Social Housing Documentary | Makerrs"
        description="We produced a powerful film for WeRise that humanised India’s housing crisis — showing how sustainable design & community building can restore dignity and hope."
        url="https://www.makerrs.com/work/video-production/sustainable-housing-documentary"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="A Vision for Sustainable Social Housing"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-[56px] pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Background</LineHeading>

              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                Millions of Indians live in homes that fail to meet basic
                standards of safety, hygiene, and dignity. Recent studies reveal
                that approximately 35% of India’s urban population lives in
                informal settlements or slums, many of which fall far short of
                basic habitability standards (
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S0264275125000794"
                  target="_blank"
                  className="underline"
                >
                  ScienceDirect, 2025
                </a>
                ). These substandard homes aren’t merely an issue of
                infrastructure. They perpetuate cycles of poverty by affecting
                health, limiting educational attainment, reducing economic
                opportunities, and undermining social dignity.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                This is the backdrop against which WeRise emerged - an
                initiative with a vision to create sustainable social
                communities that go beyond providing houses, aiming instead to
                build environments where families can live with safety, pride,
                and opportunity.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Brief</LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Our brief was to create a documentary film that could
                communicate this vision powerfully to diverse audiences. The
                challenge lay in balancing multiple objectives: humanizing the
                scale of India’s housing problem, presenting WeRise’s solution
                as a credible and scalable model, and inspiring action from
                potential partners, funders, and volunteers.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                This required that the film document the realities of
                substandard housing, highlight the systemic gaps that kept
                families in these conditions, and introduce WeRise as a
                collaborative, innovative approach capable of addressing the
                issues in focus.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Our Approach</LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                We approached the film as both researchers and storytellers. We
                began with extensive research on sustainable housing models,
                drawing lessons from global examples like Mexico’s large‑scale
                community housing initiatives and Africa’s localized,
                skill‑driven construction methods. These insights helped us
                place WeRise in the global conversation around housing and
                sustainability, while anchoring it in the Indian context.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Narratively, we used a multi‑layered structure to bring the
                story to life. At its core were deeply personal accounts - like
                Lakshmi, a domestic worker living in unsafe housing - which made
                the problem tangible. These personal stories were framed by
                voices of leaders and experts, including WeRise’s founder,
                social sector leaders, and global design experts, therefore
                adding depth and credibility. This combination of intimate
                storytelling and institutional insight allowed us to communicate
                the problem and the solution with equal depth.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                The film also highlighted WeRise’s five‑pillar approach:
                technological empowerment, financial inclusion, sustainable
                design, sweat equity, and community building. We showed what
                this looks like in practice. From soil‑cement block technology
                produced on‑site to community‑driven construction and shared
                spaces designed to support education, livelihoods, and social
                equity. Pre‑interviews with participants and extensive
                on-location filming ensured authenticity, while careful
                scripting tied these elements into a coherent, compelling
                narrative.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">The Outcome</LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                The result was a 24‑minute documentary, supported by shorter
                versions for digital and advocacy use. The film captured
                WeRise’s early milestones, including the identification of 19
                homes for transformation, the securing of government clearances,
                the mobilization of 30 volunteers, and a clear roadmap to build
                20 homes in 12 months, with plans to scale to hundreds in the
                coming years.
              </p>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                The film also positioned WeRise as an innovative and credible
                solution, and provides a versatile asset for fundraising,
                partnerships, and public engagement.
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
