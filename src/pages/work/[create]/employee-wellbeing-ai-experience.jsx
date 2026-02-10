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
  image: '/img/case-study/infosys_thrive_banner_visual_new.jpg',
  tags: ['Technology', 'AI', 'Digital Campaign', 'Hyper-Personalized Campaign'],
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
        vimeoId: '1133371230/190832434f',
        name: 'A Campaign to Revolutionize Employee Wellness',
        company: 'Infosys',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/infosys_thrive_video_thumbnail_new.jpg',
        },
      },

    ],
  },
}

function AIPoweredCampaign() {
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
        title="Infosys Thrive AI-Powered Campaign | Makerrs"
        description="See how we used AI to personalize wellness for employees at Infosys - driving global engagement and transforming HR program into an impactful experience."
        url="https://www.makerrs.com/work/brand-campaign/employee-wellbeing-ai-experience"
      />
      <WorkHeroSection
        // logo={logo}
        socials={socials}
        tags={tags}
        title="AI-Powered Campaign That Inspires Employees To Imagine Their Best Selves"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        image={image}
        titleStyle="!mt-0"
      />
      <section className="bg-white overflow-hidden md:pb-[56px] pb-[24px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Context
              </LineHeading>
              <p className=" mb-9 md:mb-7.5 !leading-[150%]">
                Our client, a Fortune 500 company with a diverse global workforce of 200,000 people, had recently launched Flourish - an organisation-wide employee wellness program. Flourish had a few key pillars under it - balance, opportunity, potential, etc - all focused on enabling individual employees to unlock their best careers and life with the organisation.
              </p>

            </div>

            <div className=" md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                The Challenge
              </LineHeading>

              <p className=" mb-9 md:mb-7.5 !leading-[150%]">
                Create engagement around the organisation-wide program using AI. Make it belong with every single individual and not just the employer branding and communications teams.
              </p>

            </div>
              <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                The Campaign
              </LineHeading>
              <p className="mb-[30px] md:mb-7.5 !leading-[150%]">
                We created <span className='font-bold text-[#111010]'>Imagine Me Flourish</span>, an AI-powered campaign that wrapped the Flourish program around every employee’s dreams and pursuits. We designed and developed an AI image generator and invited every employee to visit a dedicated campaign microsite to generate their Flourish moment with just a few clicks and a selfie.
              </p>
              <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
                <img src="/img/case-study/thrive_campaign.jpg" alt="lilliacare" srcset="" />
              </div>
            </div>
            <div className="md:mb-6 mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                The Content
              </LineHeading>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                We didn’t want to give employees a generic, one-size-fits-all Flourish image. Therefore, we carefully crafted seven unique scenarios for each of the four Flourish pillars.
              </p>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                <ul className="list-disc pl-6 leading-7 mb-9 md:mb-0">
                  <li className="list-disc pl-6 leading-7 mb-[24px] md:mb-[30px]">
                    <span className='font-bold text-[#111010]'>Wellness:</span> Employees could picture themselves meditating in nature, finding time for fitness, and focusing on their physical & mental wellness.
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[24px] md:mb-[30px]">
                   <span className='font-bold text-[#111010]'>Potential:</span> This captured the joy of employees being celebrated for their achievements at the company - from leading a team to mastering a new skill or chasing a big idea.
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[24px] md:mb-[30px]">
                   <span className='font-bold text-[#111010]'>Balance:</span> Employees could see themselves pursuing their hobbies and finding harmony between work and life.
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[24px] md:mb-[30px]">
                   <span className='font-bold text-[#111010]'>Opportunity:</span> This depicted scenarios where employees could seize the opportunity to upskill in their careers by exploring a new role or broadening their horizons with global exposure.
                  </li>
                </ul>
              </p>
            </div>
            <div className="mt-6 md:mt-[80px] md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                The AI Model
              </LineHeading>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                We then trained and fine-tuned the AI model to ensure accuracy and compliance with data privacy standards. We optimized the AI to generate the right attires and visually rich backgrounds for all of the 28 scenarios under these pillars. 
              </p>
              <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[79.7rem]  md:my-16 ">
                <img src="/img/case-study/thrive_img_1.jpg" alt="thrive_img 1" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                <img src="/img/case-study/thrive_img_3.jpg" alt="thrive_img 3" className="w-[15rem] object-cover rounded-lg shadow-md" />
                <img src="/img/case-study/thrive_img_5.jpg" alt="thrive_img 2" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                <img src="/img/case-study/thrive_img_2.jpg" alt="thrive_img 4" className=" w-[15rem] object-cover rounded-lg shadow-md" />
                <img src="/img/case-study/thrive_img_4.jpg" alt="thrive_img 5" className=" w-[15rem] object-cover rounded-lg shadow-md" />
              </div>
              <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
                <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                  <img
                    alt="thrive"
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/thrive_img_5.jpg"
                  />
                </div>

                <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                  <img
                    alt="thrive"
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/thrive_img_1.jpg"
                  />
                </div>
                <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                  <img
                    alt="thrive"
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/thrive_img_2.jpg"
                  />
                </div>

                <div className="row-start-5 row-span-2 col-start-1 relative">
                  <img
                    alt="thrive"
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/thrive_img_4.jpg"
                  />
                </div>
                <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                  <img
                    alt="thrive"
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/thrive_img_3.jpg"
                  />
                </div>
              </div>
            </div>
            
             <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                The Experience
              </LineHeading>
              <p className="mb-9 md:mb-7.5 !leading-[150%]">
                When employees visited the dedicated Imagine Me Flourish microsite, they could choose a Flourish pillar, click a selfie and instantly generate a personalized AI image of their Flourish moment. This could be participating in a pottery class, enjoying me-time in a Parisian café, or being recognized for professional growth. Employees could download the images, and share them on social media - all in just a few clicks.
              </p>

            </div>

             <div className="mt-6 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                The Outcome
              </LineHeading>
              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                More than a campaign, Imagine Me Flourish turned awareness into ownership. Employees rushed to the dedicated Flourish microsite as soon as it went live, embracing the program as their own and sharing their Flourish moments with the world. 
              </p>
               <p className="mb-9 md:mb-7.5 !leading-[150%]">
                For the brand, our AI-first campaign transformed Flourish from an HR program into an employee-driven experience. We gave Flourish what every company-wide initiative needs to succeed: personal relevance and emotional engagement.
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
AIPoweredCampaign.PageLayout = SCSLayout
export default AIPoweredCampaign
