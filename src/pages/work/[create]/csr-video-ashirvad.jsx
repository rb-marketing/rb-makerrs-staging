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
    key: 23,
    name: 'Corporate Film for Aerospace Manufacturing giant in India',
    company: 'GE Aerospace',
    image: '/img/works/ge_aerospace.webp',
    alt: 'GE Aerospace',
    tags: ['Manufacturing', 'Aerospace', 'Corporate Films & Videos'],
    tabs: ['Featured'],
    case_study_title: 'ge-aerospace-corporate-film',
    href: '/work/b2b-brand-experience-agency/ge-aerospace-corporate-film',
  },
  {
    key: 0,
    name: 'Sales Digitisation Campaign - Interactive Explainer',
    image: '/img/works/slb_work.webp',
    company: 'SLB',
    alt: 'slb',
    tags: [
      'Engineering',
      'Campaign',
      'Explainer Video',
      'Demo Video',
      'Interactive Video',
    ],
    case_study_title: 'slb-interactive-explainer',
    href: '/work/b2b-brand-campaign-agency/slb-interactive-explainer',
  },
  {
    key: 2,
    name: 'Gordon Ritter on the Future of Software',
    company: 'Vymo',
    image: '/img/works/vymo_gordon_ritter.webp',
    alt: 'Vymo',
    tags: ['SaaS', 'Digital Campaign', 'Explainer Video', 'Marketing Video'],
    case_study_title: 'vymo-gordon-ritter-thought-leadership-video',
    href: '/work/b2b-video-production-agency/vymo-gordon-ritter-thought-leadership-video',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/ashirvad_logo.png',
    width: '150',
    height: '105',
  },
  image: '/img/case-study/ashirvad_pipes_1.png',
  tags: ['Manufacturing', 'CSR Video'],
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
        vimeoId: '1109037213',
        name: 'CSR Initiative by Ashirvad',
        company: 'Ashirvad',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/ashirvad_pipes_2.png',
        },
      },
    ],
  },
}

function Colearn() {
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
        title="Ashirvad Plumbing School CSR Video | Makerrs"
        description="We crafted a film that shows how Ashirvad’s Gurukul-style Plumbing School gives young plumbers dignity, purpose & opportunity."
        url="https://www.makerrs.com/work/video-production/csr-video-ashirvad"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="Building Pathways for Skilled Plumbers"
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
                Plumbing is one of India’s most essential yet underdeveloped
                trades. At the time of making this film in 2019, less than five
                percent of India’s 487 million workers had received any formal
                skills training, and in the plumbing sector alone, nearly eight
                lakh people were employed, of which almost 90 percent were
                untrained. This gap had resulted in low employability, poor job
                satisfaction, and a lack of dignity of labor for thousands of
                young workers.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                As a leader in water management solutions, Ashirvad Pipes saw an
                opportunity to address this skills gap as part of its commitment
                to corporate social responsibility. The company launched the
                Ashirvad Plumbing School - a one-of-its-kind, Gurukul-style
                institution offering practical training, technical knowledge,
                and holistic personality development for aspiring plumbing
                engineers. Designed to uplift the profession and create
                sustainable livelihood opportunities, the initiative aligned
                business expertise with social impact.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                In its initial years, the school had already completed five
                batches, trained 154 plumbing engineers, and facilitated
                placements in leading companies such as Sobha, Shapoorji
                Pallonji, and Prestige.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Brief</LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Ashirvad approached us with a clear brief: create a film that
                captures the essence of this pioneering CSR initiative. But more
                than that, the brand wanted a narrative that would humanize the
                school’s impact and go beyond the expected CSR reel. The
                challenge lay in making the story resonate with diverse
                stakeholders while staying authentic and aspirational. We needed
                to create a piece that was both a compelling human story and a
                credible representation of Ashirvad’s commitment to the plumbing
                ecosystem.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Our Approach</LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Our solution was to transform this institutional success story
                into a deeply human one. We began by conducting in‑depth
                pre‑interviews with several students and alumni, uncovering the
                personal stories that best reflected the school’s transformative
                impact. Through this process, we identified Sunil and Siva as
                the strongest voices to bring the narrative to life. Sunil, an
                engineering graduate who struggled to find meaningful
                employment, and Siva, a BCom graduate who had drifted through
                multiple unsatisfying jobs, embodied the aspirations of
                thousands of young Indians seeking dignity and growth in their
                careers. Their journeys became the emotional core of the film,
                taking viewers on a before‑and‑after journey - from career
                dissatisfaction to newfound purpose and opportunity.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                To balance this emotional storytelling with authority, we
                featured Rajiv Pandya, CFO of Ashirvad Pipes, who articulated
                the vision behind the Plumbing School and the company’s
                commitment to uplifting the trade. We complemented these
                narratives with on‑ground visuals of the school’s
                infrastructure, hands-on training sessions, and interactive
                classrooms, bringing the Gurukul‑style approach to life on
                screen. The film interwove these human stories with compelling
                statistics, creating a narrative that was both emotionally
                resonant and anchored in measurable impact.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">The Outcome</LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                The film successfully delivered on two fronts - engaging
                audiences emotionally through real student journeys while
                simultaneously meeting the needs of corporate storytelling with
                clarity and credibility. The project resulted in a 3.5 minute
                film used across digital platforms and offline presentations to
                communicate the Ashirvad Plumbing School initiative. It
                documented the school’s early milestones - five batches
                completed, 154 plumbing engineers trained, and placements in
                leading companies - providing a clear, data‑driven snapshot of
                the program’s scale and purpose.
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
