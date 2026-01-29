import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  SEO,
  SimilarPosts,
  WorkHeroSection,
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router'

export const similarPostsData = [
  {
    key: 0,
    name: 'An ode to the Security Personnel who Guard our Homes',
    company: 'MyGate',
    image: '/img/works/heros-mygate.jpg',
    alt: 'heros at mygate ad',
    tags: ['Digital Campaign', 'Video Content', 'B2C SAAS'],
    href: '/work/brand-campaign-agency-india/mygate-case-study',
  },
  {
    key: 1,
    name: "Campaign films: Season's EXTRA Earnings",
    company: 'Swiggy',
    image: '/img/works/Swiggy_NYE.png',
    alt: 'Swiggy NYE',
    tags: ['Digital Campaign', 'Ad Film', 'Quick Commerce'],
    href: '/work/brand-campaign-agency-india/swiggy-extra-earning-case-study',
  },
  {
    key: 2,
    name: 'Never sweat the first game Campaign Films',
    company: ' My 11 Circle',
    image: '/img/works/my-11-circle.jpg',
    alt: 'my 11 circle ',
    tags: ['Digital Campaign', 'Ad Film', 'Fantasy Games'],
    href: '/work/brand-campaign-agency-india/my11circle-case-study',
  },
]

const pageData = {
  logo: {
    src: '/img/logos/xiaomi-logo.webp',
    alt: 'Xiaomi Redmi Buds 5C',
    width: '260',
    height: '105',
  },
  tags: [
    'Consumer Electronics',
    'Ad Film',
    'Digital Campaign',
    'Product Launch Campaign'
  ],
  image: '/img/case-study/xiaomi_buds_banner_visual.webp',
  featured: {
    src: '/img/works/ccs_2x.webp',
    width: '2880',
    height: '1544',
  },
  commercials: {
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '1075654763/8a9b3f855b',
        name: 'Redmi Buds 5C',
        company: 'XIAOMI',
        thumbnail: {
          width: 642,
          height: 430,
          src: '/img/case-study/xiaomi_buds_video_thumbnail.webp',
        },
        // url: 'https://vimeo.com/1075654763/8a9b3f855b?share=copy',
      },
    ],
  },
}

function Xiaomi() {
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
        title="Case Study: Xiaomi Redmi Buds 5C | Red Bangle"
        description="Explore how Red Bangle, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
        url="https://www.makerrs.com/work/brand-campaign/xiaomi-buds-5c"
      />
      <WorkHeroSection
        title={'Launch Campaign for Redmi Buds 5C'}
        logo={logo}
        socials={socials}
        tags={tags}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              {/* <LineHeading className="mb-6 md:mb-9">
                Background & Objectives
              </LineHeading> */}

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                To communicate the power of the Redmi Earbuds 5C’s noise
                cancellation, we created a high-energy film that follows our
                protagonists as they cut out the noise and get transported to
                their own happy worlds while listening to music. Set in a
                variety of bustling environments, the film shows just how well
                the product lets the user enjoy the freedom of shutting out the
                noise anytime, anywhere. This 50-second film was further edited
                into multiple cuts, zeroing in on specific use cases and key
                features.
              </p>
            </div>
            {/* <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative approach
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-[30px]">
                We took a close look at the real challenges associated with
                network- and community-based hiring. And we decided, not only
                was it every SMB entrepreneur’s problem, but that the reality of
                it all was a bit funny and frustrating - for everyone involved!
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-[30px]">
                Armed with our cultural insights, we crafted a dialogue-rich
                culturally-relevant quirky script, and cast a celebrity
                protagonist as well as a popular second character - the
                all-important right-hand-man. With clean app graphics integrated
                for Indeed - our campaign film not only positioned Indeed as the
                answer to SMB hiring challenges, but also as an enabler for SMB
                growth ambitions.
              </p>
            </div> */}
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

      {/* <SimilarPosts
        tag="EXPLORE MORE CASE STUDIES"
        className="py-15 md:pb-30"
        posts={similarPostsData}
      /> */}
    </>
  )
}
Xiaomi.PageLayout = SCSLayout
export default Xiaomi
