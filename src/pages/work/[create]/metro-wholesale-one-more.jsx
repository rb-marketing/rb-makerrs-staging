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
    src: '/img/logos/metro-wholesale.webp',
    alt:'metro wholesale ad',
    width: '260',
    height: '105',
  },
  image: '/img/works/metro-wholesale-one-minute-banner.webp',
   tags: [
      'Retail', 'TV Campaign', 'Ad Film'

    ],
  commercials: {
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '788200014',
        name: 'One Minute Please Campaign Film',
        company: 'Swiggy',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/works/metro-video-1.webp',
        },
      },

       {
        key: 1,
        duration: 15,
        vimeoId: '1092717645',
        name: ' Not a Mistake Campaign Film',
        company: 'Swiggy',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/works/metro-video-2.webp',
        },
      }
    ],
  },
}


function MetroWholeOneMinute() {
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
        title="Case Study: Metro Wholesale - One Minute"
        description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
        url="https://www.makerrs.com/work/brand-campaign/metro-wholesale-one-more"
      />
      <WorkHeroSection
        title={"Campaign: When you can't resist buying more"}
        logo={logo}
        socials={socials}
        tags={tags}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
        image={image}
      />
        <section className="bg-white overflow-hidden md:pb-30 pb-15">
        <div className="container ">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">


              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
            Some deals appear too good to be true, but they actually are. Metro Wholesale&apos;s 17th anniversary sale offered surprisingly low prices to its B2B customers - kirana retailers, SMEs, restaurateurs and more. Our campaign films played into this disbelief and the delight that followed when the fact hit home.
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
 MetroWholeOneMinute.PageLayout = SCSLayout
export default  MetroWholeOneMinute