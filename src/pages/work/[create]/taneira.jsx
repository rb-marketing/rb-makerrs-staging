import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import { useRouter } from 'next/router';
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
import { CommercialSection } from '@/components/pages/work'
// // import { createTestimonialData } from '@/pages/services/create'

export const similarPostsData = [
  {
    key: 1,
    name: 'Campaign Explainer Video for HRM SAAS product',
    company: 'MULTIPLIER',
    image: '/img/hiring-saas-explainer.webp',
    tags: ['SaaS', 'Lead Gen Campaign', 'Product Launch Video', 'Explainer Video', '2D Animation Video'],
    href: '/work/b2b-video-production-agency/multiplier-hr-saas-explainer-video',
  },
  {
    key: 2,
    name: 'Transforming Customer Relationships for SME Banks in U.S.A',
    company: 'VYMO',
    image: '/img/sme-banking-explainer.webp',
    tags: ['SaaS', 'Digital Campaign', 'Explainer Video', 'Marketing Video'],
    href: '/work/b2b-video-production-agency/vymo-sme-bank-explainer-video',
  },
  {
    key: 2,
    name: 'Healthtech and Insurtech Case Study Videos for HIMSS',
    company: 'WIPRO',
    image: '/img/casestudy-for-himss.webp',
    tags: ['Healthtech', 'Case Study Video', 'Explainer Video', '2D Animation Video'],
    href: '/work/b2b-video-production-agency/wipro-healthtech-case-study-videos',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/taneira-logo.webp',
    width: '150',
    height: '105',
  },
  tags: ['Fashion',' Short Films',' Documentaries','Web Series','Interviews'],
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
        duration: 84,
        vimeoId: '868479183',
        name: 'Jamdani',
        company: 'TANEIRA',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/taneira-thumbnail1.webp',
        },
      },
      {
        key: 1,
        duration: 114,
        vimeoId: '903315204',
        name: 'Kanjeevaram',
        company: 'TANEIRA',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/taneira-thumbnail2.webp',
        },
      },
      {
        key: 2,
        duration: 93,
        vimeoId: '903315879',
        name: 'Khadi',
        company: 'TANEIRA',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/taneira-thumbnail3.webp',
        },
      },
      {
        key: 3,
        duration: 105,
        vimeoId: '903316052',
        name: 'Patan Patola',
        company: 'TANEIRA',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/taneira-thumbnail4.webp',
        },
      },
      {
        key: 4,
        duration: 105,
        vimeoId: '903315116',
        name: 'Chanderi',
        company: 'TANEIRA',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/taneira-thumbnail5.webp',
        },
      },
    ],
  },
}

function Taneira() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.asPath}`

  const { logo, tags, commercials, desktopVideo, mobileVideo } = pageData
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
    },
  ]
  return (
    <>
      <SEO 
      title="Case Study | Taneira" 
      description="Top agency for branding, content creation, animated video production, employer branding campaigns & interactive brand experiences."
      url="https://www.makerrs.com/work/videos/taneira"
      />
      <WorkHeroSection
        logo={logo}
        // socials={socials}
        tags={tags}
        title="Celebrating India's Handlooms"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
      />
      <section className="bg-white pt-7.5md:pb-14 pb-9 md:pt-15  overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background & Problem Statement
              </LineHeading>

              <p className="mb-6 md:mb-7.5">
                In the rich fabric of India&apos;s handloom traditions, Project
                Loom, led by author and journalist Shoba Narayan, emerges as a
                beacon for the artisans working tirelessly in anonymity.
                Commissioned by Taneira, a Titan company, the project aims to
                elevate the art of handloom craftsmanship, shedding light on the
                history and culture woven into each fabric.
              </p>
              <p className="mb-6 md:mb-7.5">
                Shoba presented a unique challenge to us: how do you make
                consumers more aware and appreciative of the artistry in their
                hands? The mission extended to inspire a deeper understanding
                and value for the craftsmanship involved. The trickiest part?
                Producing these stories across the country without breaking the
                bank.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative approach
              </LineHeading>

              <p className="mb-6 md:mb-7.5">
                Our approach was a deep dive into the world of Indian handloom,
                working closely with Shoba Narayan to understand the heart of
                these traditions. We embarked on a journey of discovery -
                meeting artisans and art historians, asking many a question, and
                capturing the history of the weaves as well as the essence of
                their unique creative processes.
              </p>
              <p className="mb-6 md:mb-7.5">
                The result was a series of six visually stunning short
                documentary films, each unraveling a unique intricate handloom
                process from inception to completion. Collaborating with
                carefully chosen film collaborators across India, we traversed
                locations that have a rich history of weaving traditions and
                collectives, bringing to life the untold stories of India’s
                weaving traditions and the textiles today’s consumers cherish.
              </p>
              <p className="mb-6 md:mb-7.5">
                Several of the short documentaries were cut down into shorter
                films to nurture online viewership and much of the raw footage
                was published in the course of time to create a knowledge
                repository on select Indian handlooms.
              </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

      <Testimonials
        // type='semi'
        testimonialData={[
          {
            key: 3,
            quote:
              'It has been a pleasure to work with the Makerrs team on Project Loom. They are a unique platform that works with a range of directors and cinematographers to produce content across multiple languages and locations. This makes them nimble and effective.',
            name: 'SHOBA NARAYAN',
            designation: 'FOUNDER',
            company: 'PROJECT LOOMS',
            image: {
              srcSet:
                '/img/testimonials/shoba-narayan.webp 533w, /img/testimonials/shoba-narayan.webp 1066w',
              sizes: '(max-width:768px) 533px, 1066px',
            },
          }
        ]}
        className="py-7.5 md:py-15 "
      />

      {/* <SimilarPosts
        tag="explore our case studies"
        className="py-15 md:pb-30"
        posts={similarPostsData}
      /> */}
    </>
  )
}
Taneira.PageLayout = SCSLayout
export default Taneira
