import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  SEO,
  SimilarPosts,
  WorkHeroSection,
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router';

export const similarPostsData = [
  {
    key: 0,
    name: 'An ode to the Security Personnel who Guard our Homes',
    company: 'MyGate',
    image: '/img/works/heros-mygate.jpg',
    alt:'heros at mygate ad',
    tags: ['Digital Campaign', 'Video Content', 'B2C SAAS'],
    href: '/work/case-study/mygate-case-study',
  },
  {
    key: 1,
    name: "Campaign films: Season's EXTRA Earnings",
    company: 'Swiggy',
    image: '/img/works/Swiggy_NYE.png',
    alt: 'Swiggy NYE',
  tags: ['Digital Campaign', 'Ad Film', 'Quick Commerce'],
    href: '/work/case-study/swiggy-extra-earning-case-study',
  },
  {
    key: 2,
    name: 'Never sweat the first game Campaign Films',
    company: ' My 11 Circle',
    image: '/img/works/my-11-circle.jpg',
    alt:'my 11 circle ',
   tags: ['Digital Campaign', 'Ad Film', 'Fantasy Games'],
    href: '/work/case-study/my11circle-case-study',
  },

]

const pageData = {
  logo: {
    src: '/img/logos/zivame.webp',
    alt:'metro wholesale ad',
    width: '300px',
    height: '60',
  },
  image: '/img/case-study/zivame_banner.webp',
  tags: ['Digital Campaign', 'Product Video', 'Video Content', 'E-commerce'],
//   desktopVideo: '/img/works/metro-wholesale-big2.mp4',
//   mobileVideo: '/img/works/metro-wholesale.mp4',
  featured: {
    src: '/img/works/ccs_2x.webp',
    width: '2880',
    height: '1544',
  },
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
        duration: 15,
        vimeoId: '1075932681/24c44fbea1',
        name: 'Sensitive Skin',
        company: 'ZIVAME',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/zivame_ensitive_skin.webp',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '1075932706/aa80b55f4f',
        name: 'Front Open',
        company: 'ZIVAME',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/zivame_front_open.webp',
        },
      },
      {
        key: 2,
        duration: 128,
        vimeoId: '1075933265/7d6030f6f8',
        name: 'Sleepwear',
        company: 'ZIVAME',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/zivame_sleepwear.webp',
        },
      },
      {
        key: 3,
        duration: 128,
        vimeoId: '1075933467/87233819f9',
        name: 'Posture Correction',
        company: 'ZIVAME',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/zivame_posture_correction.webp',
        },
      },
    ],
  },
}

function Zivame() {
      const router = useRouter();
    const fullUrl = `https://www.makerrs.com${router.asPath}`;
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
      title="Case Study: zivame | Makerrs" 
      url="https://www.makerrs.com/work/brand-campaign/zivame-lingerie"
      />
      <WorkHeroSection
      title={'Campaign on Inclusive Lingerie'}
        logo={logo}
        socials={socials}
        tags={tags}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-30 pb-15">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
              Our #TrulyInclusiveTrulyZivame campaign celebrates the Zivame&apos;s social
            consciousness and forward thinking. From their adaptive innerwear for women 
            with mobility issues to posture correction bras for women who work long hours
            and anti-microbial innerwear for women with sensitive skin - the brand had 
            thought of it all. It was time now to launch these products in a meaningful
            and fun campaign. We made several 20-second films to help Zivame kick off
            a digital campaign around inclusive lingerie. The campaign brought out the
            beautiful diversity of women and their unique lingerie needs, and advocated
            for Zivame&apos;s inclusive lingerie.
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
Zivame.PageLayout = SCSLayout
export default Zivame
