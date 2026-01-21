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
  image: '/img/works/xiaomi-bread-trimmer-banner.webp',
    tags: [
      'Consumer Electronics', 'Ad Film', 'Digital Campaign', 'Product Launch Campaign'
    ],
  commercials: {
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '867138400',
        name: 'Xiaomi Beard Trimmer 2C',
        company: 'Xiaomi',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/works/xiaomi-video-thumbnail-1.webp',
        },
      },
    
    ],
  },
}


function XiaomiBreadTrimmer() {
  const router = useRouter();
  const fullUrl = `https://www.makerrs.com${router.asPath}`;
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
        title="Case Study: Xiaomi Beard Trimmer 2C"
        description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
        url="https://www.makerrs.com/work/brand-campaign/xiaomi-beard-trimmer"
      />
      <WorkHeroSection
        title={'A Trimmer Launch Campaign that’s as Sharp as the Product'}
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
              Xiaomi&apos;s Beard Trimmer 2C is the must-have tool for a stylish beard. To launch the product, our 60-second digital ad film set in a cricket dressing room shows how the trimmer easily grooms and shapes facial hair for a polished look.
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
XiaomiBreadTrimmer.PageLayout = SCSLayout
export default XiaomiBreadTrimmer
