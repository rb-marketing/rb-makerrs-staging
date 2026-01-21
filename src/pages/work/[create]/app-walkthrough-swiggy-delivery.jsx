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
    src: '/img/logos/swiggy-logo.webp',
    alt:'swiggy logo',
    width: '260',
    height: '105',
  },
  image: '/img/works/swiggy-de-banner.webp',
   tags: [
      'Quick Commerce', 'Product Demo Video', 'Internal Communication'

    ],
  commercials: {
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '867137156',
        name: 'Swiggy’s Support App for Delivery Executives',
        company: 'Swiggy',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/works/swiggy-de-video-thubnail.webp',
        },
      },
    
    ],
  },
}


function SwiggyDeliveryExecutiveSupport() {
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
        title="Case Study: Swiggy Delivery Support Executive Support App"
        description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
        url="https://www.makerrs.com/work/brand-campaign/app-walkthrough-swiggy-delivery"
      />
      <WorkHeroSection
        title={'Anywhere chat support for Delivery Executives'}
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
             Swiggy launched an innovative “Outside Order Support” chat for its delivery partners. Now, delivery partners are busy people. So, what better way to guide them through this new feature, than a live-action video explainer featuring a delivery partner? Watch on!
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
SwiggyDeliveryExecutiveSupport.PageLayout = SCSLayout
export default SwiggyDeliveryExecutiveSupport