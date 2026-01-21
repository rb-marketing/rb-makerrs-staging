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
    alt:'my 11 circle ',
    tags: ['Digital Campaign', 'Ad Film', 'Fantasy Games'],
    href: '/work/brand-campaign-agency-india/my11circle-case-study',
  },

]

const pageData = {
  logo: {
    src: '/img/logos/metro-wholesale.webp',
    alt:'metro wholesale ad',
    width: '260',
    height: '105',
  },
  tags: [' Retail', 'TV Campaign', 'Ad Film'],
  desktopVideo: '/img/works/metro-wholesale-big2.mp4',
  mobileVideo: '/img/works/metro-wholesale.mp4',
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
        vimeoId: '866815060',
        name: 'RANGE IN LUGGAGE',
        company: 'METRO WHOLESALE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/metro-thumb1.jpg',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '866814993',
        name: 'QUALITY  IN KITCHENWARE',
        company: 'METRO WHOLESALE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/metro-thumb2.jpg',
        },
      },
      {
        key: 2,
        duration: 128,
        vimeoId: '866814885',
        name: 'QUALITY IN ELECTRONICS',
        company: 'METRO WHOLESALE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/metro-thumb3.jpg',
        },
      },
      {
        key: 3,
        duration: 128,
        vimeoId: '869199397',
        name: 'RANGE IN HOME ESSENTIALS',
        company: 'METRO WHOLESALE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/metro-thumb4.jpg',
        },
      },
    ],
  },
}

function MetroWholesale() {
  const router = useRouter();
  const fullUrl = `https://www.makerrs.com${router.asPath}`;
  const { logo, tags, commercials, desktopVideo, mobileVideo } = pageData
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
      title="Case Study: Metro Wholesale | Creative Advertising & Digital Marketing Campaign | Makerrs" 
      description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
      url="https://www.makerrs.com/work/brand-campaign/metro-wholesale-5-star-quality"
      />
      <WorkHeroSection
      title={'5 Star Quality at Wholesale Prices'}
        logo={logo}
        socials={socials}
        tags={tags}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
      />
      <section className="bg-white overflow-hidden md:pb-30 pb-15">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background & Brief
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                METRO Wholesale India pioneered India’s cash-and-carry B2B wholesale model in 2003. Today, it serves kirana owners, HoReCa  and other SME businesses, offering thousands of high-quality products at transparent wholesale prices.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
              To fuel growth among its B2B audience, METRO Wholesale needed a campaign that would challenge a deeply held market perception: that a corporate or organised wholesaler with physical stores may not offer high quality products at low prices. 
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                The objective was to reinforce METRO’s position as the one-stop shop for small businesses, while making its value proposition - superior product quality at attractive wholesale prices - both compelling and impossible to ignore.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                We were tasked with creating four TVCs - featuring a celebrity cast - which could deliver this message in a way that was sharp, credible, and relevant to a discerning, value-driven audience.
              </p>
            </div>
            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Our Approach
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                We began with the audience: business owners who were knowledgeable, price-aware, and rarely swayed by exaggerated claims. To earn their trust, the campaign needed to speak their language - grounded in fact, respectful of their business acumen, and worth their attention.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                In India, “5 star” is a familiar cultural shorthand for top quality, used well beyond the world of hospitality. We saw an opportunity to harness this instant association with excellence and pair it with METRO Wholesale’s core promise of wholesale pricing. The creative twist was to present prices so low they seemed like a mistake - creating a moment of surprise that would spark curiosity and draw people in to see for themselves.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                We produced four TVCs featuring Namit Das, chosen for his strong relatability in Tier II cities and his rising recognition following the success of the OTT series A Suitable Boy. In the series, he played Haresh Khanna - a grounded, self-made businessman - a role that aligned naturally with METRO’s core audience of hardworking, value-hunting business owners. His presence brought both familiarity and credibility to the campaign, helping the message resonate more deeply. 
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                The films were shot inside a live METRO store to showcase the real shopping experience and add authenticity to the brand’s value proposition. Filming in an operational store, however, came with its own challenges. It meant shooting overnight and wrapping up just as the store opened for customers at 6 a.m.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                For distribution, the campaign focused on regional news channels, chosen for their credibility and strong engagement with METRO’s core B2B audience, particularly in Tier I and Tier II markets. To ensure the creative landed with equal impact across these regions, we dubbed the films into eight regional languages, making the message accessible and relatable to viewers.
              </p>
            </div>
             <div className="mt-6 md:mt-20 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Impact
              </LineHeading>

              <div className="text-base md:text-xl !text-rb-black/80 mt-8">
                <p className='!leading-[150%] mb-[30px] !text-[#111010ed]'>The campaign delivered strong, measurable results in its opening month:</p>
                 <ul className="list-disc pl-6 !leading-[150%] mb-[30px] !text-[#111010ed]">
                  <li className="list-disc pl-6 !leading-[150%] mb-[30px] !text-[#111010ed]">Footfall rose by 36%, signaling a successful shift in perception and desire to visit.</li>
                  <li className="list-disc pl-6 !leading-[150%] mb-[30px] !text-[#111010ed]">Continued month-on-month sales growth, showing the campaign’s sustained influence.</li>
                  <li className="list-disc pl-6 !leading-[150%] mb-[30px] !text-[#111010ed]">Sales teams reported smoother customer journeys, as TVCs had already established credibility before in-store engagement.</li>
                </ul>
                <p className='!leading-[150%] mb-[30px] !text-[#111010ed]'>Beyond these tangible outcomes, the campaign elevated METRO Wholesale’s positioning. It reframed quality at low cost from a sceptical perception into a trusted expectation.</p>
              </div>
            </div>
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
MetroWholesale.PageLayout = SCSLayout
export default MetroWholesale
