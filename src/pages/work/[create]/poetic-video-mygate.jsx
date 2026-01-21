import { SCSLayout } from '@/components/Layout'
import {
  Twitter,
  Linkedin,
} from '@/components/icons'
import {
  LineHeading,
  PressSection,
  SEO,
  SimilarPosts,
  WorkHeroSection,
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { ccsPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import { useRouter } from 'next/router';

const pageData = {
  logo: {
    src: '/img/logos/mygate-logo-1.png',
    alt: 'mygate',
      width: '200',
        height: '105',
  },
  tags: ['Digital Campaign', 'Video Content', 'B2C SAAS'],
  desktopVideo: '/img/works/MyGate-hero.mp4',
  mobileVideo: '/img/works/heros-mygate.mp4',
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
        vimeoId: '866814464',
        name: 'HEROES AT MYGATE',
        company: 'MYGATE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/mygate_video_thumbnail.png',
        },
      },
    ],
  },

  press: {
    title: 'Security agency MyGate’s campaign is an ode to security guards',
    image: {
      src: '/img/works/mygate-campign-thumb.webp',
      alt: 'mygate campign',
      width: '820',
      height: '486',
    },
    content:
      'MyGate has come up with a campaign, which is an ode to the security guards. The film has been created by Makerrs. It highlights the hard work put in by the security guards, which often go unappreciated',
    href: '#!',
  },
}

export const similarPostsData = [
  {
    key: 0,
    name: 'Never sweat the first game Campaign Films',
    company: ' My 11 Circle',
    image: '/img/works/my-11-circle.jpg',
    alt: 'my 11 circle ',
   tags: ['Digital Campaign', 'Ad Film', 'Fantasy Games'],
    href: '/work/video-content-production-agency-india/my11circle-case-study',
  },
  {
    key: 1,
    name: '5 Star Campaigns for a Wholesale Brand',
    company: 'Metro Wholesale',
    image: '/img/works/metro-wholesale.jpg',
    alt: 'metro wholesale ad',
    tags: ['TV Campaign', 'Ad Film', 'Retail'],
    href: '/work/video-content-production-agency-india/metro-wholesale-case-study',
  },
  {
    key: 2,
    name: "Campaign films: Season's EXTRA Earnings",
    company: 'Swiggy',
    image: '/img/works/Swiggy_NYE.png',
    alt: 'Swiggy NYE',
     tags: ['Digital Campaign', 'Ad Film', 'Quick Commerce'],
    href: '/work/video-content-production-agency-india/swiggy-extra-earning-case-study',
  },
]

function MyGate() {
    const router = useRouter();
    const fullUrl = `https://www.makerrs.com${router.asPath}`;
  const { logo, tags, commercials, press, desktopVideo, mobileVideo } = pageData
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
      title="Case Study - Heroes at MyGate | Content Strategy, Creative Ad Campaign, Digital Marketing Campaign | Makerrs"
      description="Explore how Makerrs - Holistic Marketing Agency, crafted an impactful marketing campaign for MyGate with strategic b2c marketing insights. " 
      url="https://www.makerrs.com/work/video-production/poetic-video-mygate"
      />
      <WorkHeroSection
        title={'An ode to the Security Personnel who Guard our Homes'}
        logo={logo}
        socials={socials}
        tags={tags}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
      />
      <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background &amp; objective
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                MyGate is a smart, technology-forward security solution that
                helps gated communities manage their security needs including
                visitor entry and exit, household help and more.
              </p>

              <p className='text-base md:text-2xl text-rb-black/80 !leading-[150%]'>
                However, there was a lack of enthusiasm amongst security guards
                around the new technology. With the onground security forces
                forming an important part of the user group, MyGate needed to
                build a positive association between its app and the security
                guards.
              </p>
            </div>
            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative Solution
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                Typically, security guards in India are from smaller towns, work
                long hours, are an ignored support system and are not tech
                savvy. They saw the MyGate app as yet another chore - when in
                fact it was also built to make their work easier.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                With security guards being integral to product adoption, it was
                crucial that MyGate create a positive association with this user
                group, drive app usage and demonstrate app effectiveness.
                Therefore, the first step was to acknowledge their contributions
                and restore social respect. This led to the creation of the
                central idea, #HeroesatMyGate, which aimed to recognize the
                sacrifices that guards make to ensure our safety and well-being.
                The marketing campaign illustrated authentic scenarios within
                apartment complexes, highlighting the treatment of security
                guards. We seamlessly integrated MyGate&apos;s brand name into
                the campaign message.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                The campaign humanized security guards and highlighted their
                importance, resulting in a positive response from both security
                guards and apartment residents. The guards also began to
                perceive MyGate as their partner, which led to an improved
                adoption of the app.
              </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />

        <PressSection
          className="mt-15 md:mt-0"
          title={press?.title}
          content={press?.content}
          image={press?.image}
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
MyGate.PageLayout = SCSLayout
export default MyGate
