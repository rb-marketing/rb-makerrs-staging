import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  SEO,
  Testimonials,
  WorkHeroSection,
  RollupNumber,
  LineHeading,
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router'


const pageData = {
  logo: {
    src: '/img/logos/taneria.png',
    alt: 'taneria sanganeri',
    width: '260',
    height: '105',
  },
  image: '/img/works/taneira_banner_visual.png',
  tags: ['Textile and Apparel', 'Documentary Film'],
  commercials: {
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '1096504782',
        name: 'Story of Sanganeri Craft',
        company: 'Taneira',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/works/taneira_sanganeri_video_thumbnail.png',
        },
      },
    ],
  },
}

function TaneiraSanganeri() {
  const router = useRouter()
  const fullUrl = `https://www.makerrs.com${router.asPath}`
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
        title="Case Study: Taneira Sanganeri Print"
        description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
        url="https://www.makerrs.com/work/video-production/fashion-taneira-sanganeri"
      />
      <WorkHeroSection
        title={'Capturing the Story of Sanganeri Craft with Taneira'}
        logo={logo}
        socials={socials}
        tags={tags}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
        <div className="container">
          <div className="cs-content max-w-[914px] md:mb-20">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background & Brief
              </LineHeading>
              <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-7.5">
                Sanganeri block printing, with its delicate floral motifs and
                400-year legacy, remains one of India’s most treasured crafts.
                Rooted in the migration stories of the Chippa community and
                enriched by royal patronage, Sanganeri textiles are celebrated
                for their intricate Buta, Buti, Bel, and Jaal patterns.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 leading-7">
                Taneira, known for championing Indian weaves and techniques,
                wanted to showcase the heritage, history, and cultural context
                of Sanganeri printing in detail, while also showing how
                Taneira’s design thinking, sustainable practices, and
                collaborations with artisans are helping reimagine the craft for
                contemporary India.
              </p>
            </div>
            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">Our Approach</LineHeading>
              <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-7.5">
                The film focused on the craft itself. Its rich history and
                evolution, along with detailed sequences of block carving, dye
                preparation, pinning, printing, and finishing. Guided by
                Taneira’s designer Priyanka, her narration brought a personal
                perspective on what makes Sanganeri prints special and how
                designing with them feels like a collaboration across time. It
                also highlighted how Taneira sustains this heritage through fair
                collaboration with artisans, sustainable practices, and design
                interventions that keep Sanganeri prints relevant for today’s
                customers.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-7.5">
                With a lean crew and a tight one-day schedule, the project was
                directed virtually - an approach that kept production agile
                without compromising on detail or warmth. Each frame was planned
                to feel rich and inviting, capturing intricate textures,
                gestures, and the atmosphere of the workshops. Because we were
                filming artisans immersed in their work, the team took care to
                keep the process smooth and unobtrusive, allowing authentic
                moments to unfold naturally.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 leading-7">
                A warm folk score layered with natural sounds of the printing
                process made the experience feel both immersive and
                contemporary. We filmed on location in Sanganer and at Taneira’s
                Bangalore store to connect heritage with the brand’s modern
                retail story.
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
TaneiraSanganeri.PageLayout = SCSLayout
export default TaneiraSanganeri
