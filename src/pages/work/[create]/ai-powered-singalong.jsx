import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  SEO,
  Testimonials,
  WorkHeroSection,
  SimilarPosts,
  LineHeading,
} from '@/components/shared'
import { useRouter } from 'next/router'
import { CommercialSection } from '@/components/pages/work'

const pageData = {
  logo: {
    src: '/img/logos/infosys-logo.png',
    width: '150',
    height: '70',
  },
  image: '/img/case-study/singalong-2.jpg',
  tags: [
    'Technology',
    'AI',
    'Digital Campaign',
    'Hyper-Personalized Campaign',
    'Global Video Production',
  ],
  // desktopVideo: '/img/works/metro-wholesale-big.mp4',
  // mobileVideo: '/img/works/metro-wholesale.mp4',
  // featured: {
  //   src: '/img/works/ccs_2x.webp',
  //   width: '2880',
  //   height: '1544',
  // },
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
        duration: 130,
        vimeoId: '1109566317/27f96fcf81',
        name: 'AI Powered Campaign',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/singalong-1.jpg',
        },
      },
    ],
  },
}

function InfosysSingalong() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.asPath}`

  const { logo, tags, commercials, desktopVideo, mobileVideo, image } = pageData
  const socials = [
    {
      key: 0,
      href: `https://twitter.com/intent/tweet?text=${articleUrl}`,
      color: '#000',
      icon: <Twitter />,
    },
    {
      key: 1,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`,
      color: '#006699',
      icon: <Linkedin />,
      type: 'linkedin',
    },
  ]
  return (
    <>
      <SEO
        title="Infosys AI-powered Engagement Campaign | Makerrs"
        description="See how Infosys ran an AI-powered Singalong campaign where employees starred in personalized videos, driving global participation and lasting impact."
        url="https://www.makerrs.com/work/brand-campaign/ai-powered-singalong"
      />
      <WorkHeroSection
        // logo={logo}
        socials={socials}
        tags={tags}
        title="AI‑powered Singalong campaign that united a global workforce"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-[56px] pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Context</LineHeading>
              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                One of our Fortune 500 clients, with a deeply diverse and global
                workforce, sought to boost employee engagement across
                continents. The challenge was clear: how do you bring thousands
                of employees worldwide together in a way that feels personal,
                participative and entirely shareable?
              </p>
            </div>

            <div className=" md:mb-20">
              <LineHeading className="mb-6 md:mb-9">The Challenge</LineHeading>

              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                We had to conceptualize an employer‑branding campaign unlike any
                other. One that would actively involve employees, not just
                entertain them. In short, not just something to watch; but
                something to be a part of.
              </p>
            </div>
            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">Our Approach</LineHeading>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                We knew exactly what to do to achieve this goal - a global
                Singalong. A high-energy, AI-powered campaign, built around a
                music video, celebrating the organization’s values and purpose.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                And then we added a dash of AI magic. We developed AI‑based
                face‑swap tech that enabled employees to insert their own faces
                into the video, singing along, and starring in the story.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                This approach served a dual purpose. Firstly, it showcased our
                client’s AI-first capabilities, and secondly, it also showcased
                the organization as a forward‑thinking employer that celebrates
                its people just as innovatively as it serves its customers.
              </p>
            </div>

            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">The Campaign</LineHeading>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                First, we cast and filmed real employees (plus a sprinkling of
                actors to add that extra energy and vibe) to star in a
                lip-synced music video. Next, we launched a microsite where
                employees could log in, upload a selfie, and instantly face‑swap
                into the video. A few clicks later, they could generate,
                download, and share a personalized version of the Singalong
                video!
              </p>
            </div>

            <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Results & Impact
              </LineHeading>
              <p className="!leading-[150%]">
                The response was unprecedented. Employees sang, swapped and
                shared.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Across the world, thousands of employees engaged with the
                campaign and the music video generated over a million
                impressions.
              </p>
              <p className='!leading-[150%]'>
                Within days, the Singalong campaign had turned into a global
                movement.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                One that redefined employee engagement. And reimagined the
                possibilities of AI-first content solutions!
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
InfosysSingalong.PageLayout = SCSLayout
export default InfosysSingalong
