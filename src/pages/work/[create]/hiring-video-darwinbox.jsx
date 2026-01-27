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
import { CommercialSection } from '@/components/pages/work'
// // import { createTestimonialData } from '@/pages/services/create'

export const similarPostsData = [
  {
    key: 1,
    name: 'Transforming relationships for SME banks in U.S.A',
    company: 'VYMO',
    image: '/img/works/vymo_sme.webp',
    tags: ['SaaS', 'Digital Campaign', 'Explainer Video', 'Marketing Video'],
    href: '/work/b2b-brand-campaign-agency/vymo-sme-bank-explainer-video',
  },
  {
    key: 2,
    name: 'HEALTHTECH AND INSURTECH CASE STUDY VIDEOS FOR HIMSS',
    company: 'WIPRO',
    image: '/img/casestudy-for-himss.webp',
    tags: [
      'Healthtech',
      'Case Study Video',
      'Explainer Video',
      '2D Animation Video',
    ],
    href: '/work/b2b-video-production-agency/wipro-healthtech-case-study-videos',
  },
  {
    key: 3,
    name: 'PROJECT LOOM',
    company: 'TANEIRA',
    image: '/img/project-loom.webp',
    tags: [
      'Fashion',
      ' Short Films',
      ' Documentaries',
      'Web Series',
      'Interviews',
    ],
    href: '/work/b2b-video-production-agency/taneira',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/darwinbox_logo_new.png',
    width: '150',
    height: '105',
  },
  specifyWidth: 'md:!w-[200px] !w-[180px]',
  image: '/img/case-study/darwinbox_banner_visual.png',
  tags: ['HR Tech', 'Hiring Video', 'Employer Branding', 'Culture Video'],
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
        vimeoId: '787820894',
        name: 'Recruitment Film',
        company: 'Darwinbox',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/darwinbox_video_thumbnail.png',
        },
      },
    ],
  },
}

function DarWinBox() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.pathname}`

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
        title="Darwinbox Recruitment Video | Makerrs"
        description="We made a recruitment video for Darwinbox with humor, authenticity, and founder-led storytelling to showcase their vibrant workplace culture."
        url="https://www.makerrs.com/work/video-production/hiring-video-darwinbox"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        title="A hiring video with humor and heart"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
        specifyWidth={specifyWidth}
      />
      <section className="bg-white  overflow-hidden md:pb-14 pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">The Challenge</LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Darwinbox, one of the world&apos;s fastest-growing AI-powered
                Human Capital Management (HCM) platforms, needed a way to
                attract top talent. The mission was to create an employer
                branding video that captured their vibrant and innovative
                culture, not just another standard corporate film. The goal was
                to excite, entertain, and inspire prospective talent by showing
                Darwinbox as an aspirational workplace where innovation,
                opportunity, and passion all come together.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Our Solution</LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Instead of a typical testimonial or a predictable montage of
                stock footage, we built a story-driven narrative that used humor
                and authenticity to showcase what life at Darwinbox is really
                like. The film reimagined the evolution of HR, from clunky old
                desktops and outdated processes to Darwinbox&apos;s modern,
                mobile-first world. With the founders leading the story, we
                humanized the brand and made the culture feel relatable. We
                showed employees as they actually are; cycling through hallways,
                quizzing in libraries, or volunteering together. Capturing the
                everyday energy of the Darwinbox team.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">The Result</LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                The film cut through the noise of generic hiring videos, and
                established Darwinbox as a destination workplace for ambitious
                talent. By blending founder-led storytelling with witty,
                authentic moments. Today, as Darwinbox continues its incredible
                growth, the film is used as a recruitment tool encouraging
                people to join a workplace like no other.
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
DarWinBox.PageLayout = SCSLayout
export default DarWinBox
