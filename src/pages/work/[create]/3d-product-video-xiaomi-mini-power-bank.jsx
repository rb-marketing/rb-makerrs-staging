import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  SEO,
  Testimonials,
  WorkHeroSection,
  RollupNumber
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router';


const pageData = {
  logo: {
    src: '/img/logos/xiaomi-logo.webp',
    alt: 'Xiaomi Redmi Buds 5C',
    width: '260',
    height: '105',
  },
  image: '/img/works/xiaomi-banner-1.webp',
    tags: [
      'Consumer Electronics', 'Ad Film', 'Digital Campaign', 'Product Launch Campaign'
    ],
  commercials: {
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '1075658436/e6f277e7ce',
        name: 'Xiaomi Pocket Power Bank',
        company: 'Xiaomi',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/works/xiaomi-video-thumbnail.webp',
        },
      },
    
    ],
  },
}


function XiaomiPocketPowerBank() {
  const router = useRouter();
  const fullUrl = `https://www.b2c.makerrs.com${router.asPath}`;
  const { logo, tags, commercials, desktopVideo, mobileVideo, image } = pageData
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
        title="Case Study: Xiaomi Pocket Power Bank"
        description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
        url="https://www.makerrs.com/work/video-production/3d-product-video-xiaomi-mini-power-bank"
      />
      <WorkHeroSection
        title={'A Campaign film for Xiaomi Pocket Power Bank'}
        logo={logo}
        socials={socials}
        tags={tags}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
        image={image}
      />
        <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
        <div className="container ">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">


              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
              The Xiaomi Pocket Power Bank launch film takes a playful, Western-inspired approach, where two characters face off on whose battery charges the fastest - showcasing the product’s compact, pocket-sized design and fast charging. This 60-second film was further edited into multiple cuts, each focusing on specific product features and benefits.
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
XiaomiPocketPowerBank.PageLayout = SCSLayout
export default XiaomiPocketPowerBank
