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
    src: '/img/logos/mumbai-indians.png',
    alt:'metro wholesale ad',
    width: '180px',
    height: '10px',
  },
  specifyWidth: 'md:!w-[100px] !w-[80px]',
  image: '/img/case-study/mumbai_indians_banner.webp',
  tags: ['Sports', 'Animated Video', 'Logo Reveal'],
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
        vimeoId: '1043072192',
        name: 'MI 3D Billboard Animation',
        company: 'Bajaj Auto',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/mumbai_thumbnail.webp',
        },
      }
    ],
  },
}

function MumbaiIndian() {
 const router = useRouter();
 const fullUrl = `https://www.makerrs.com${router.asPath}`;
  const { logo, tags, commercials, image, specifyWidth } = pageData
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
      title="Case Study: MI 3D Billboard | Makerrs" 
      url="https://www.makerrs.com/work/video-content-production-agency-india/mumbai-indian"
      />
      <WorkHeroSection
      title={'Launching a Sports Brand logo with a 3D Billboard'}
        logo={logo}
        socials={socials}
        tags={tags}
        image={image}
        specifyWidth={specifyWidth}
      />
      <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                Using a cutting–edge suite of 3D animation tools, we created a stunning 3D billboard animation 
                for Mumbai Indians that pushes creative boundaries. Set against the Gateway of India for amplified 
                emotional recall, the animation elevates the logo as a bold, three–dimensional spectacle with 
                photorealistic water simulations, and dynamic camera movements. Optimized for high–impact 
                visibility, this innovation sets a new benchmark for immersive logo–led storytelling.
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
MumbaiIndian.PageLayout = SCSLayout
export default MumbaiIndian
