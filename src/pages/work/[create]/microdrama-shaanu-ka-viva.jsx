import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  SEO,
  WorkHeroSection,
  Testimonials,
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router'
import { VideoGallery } from '@/components/pages/work/VideoGallery'
const pageData = {
  logo: {
    src: '/img/logos/redbangle.png',
    alt: 'redbangle',
    width: '80',
    height: '50',
  },
  specifyWidth: 'md:!w-[70px] !w-[50px]',
  image: '/img/case-study/copy-of-banner.jpg',
  tags: ['Gen AI Videos', 'Short-form Content', 'Digital Storytelling'],
  commercials: {
    type: 'projectLoom',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '1104052700/0557aba876',
        name: 'Episode 1',
        company: 'Makerrs',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/episode-1.png',
        },
      },
      {
        key: 0,
        duration: 15,
        vimeoId: '1104054925/9577a7810f',
        name: 'Episode 2',
        company: 'Makerrs',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/episode-2.png',
        },
      },
      {
        key: 0,
        duration: 15,
        vimeoId: '1106110249/6bd07928bd',
        name: 'Episode 3',
        company: 'Makerrs',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/episode-3.png',
        },
      },
    ],
  },
}

const testimonialsDefault = [
  {
    key: 0,
    quote:
      'We partnered with Makerrs to create video content for our internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends and are always experimental and open to feedback. They’re an amazing lot to work with!',
    name: 'Lissa Smith',
    designation: 'Marketing Manager',
    company: 'FORTUNE 100 ITES ENTERPRISE',
    image: {
      srcSet:
        '/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

function XiaomiBuds() {
  const router = useRouter()
  const fullUrl = `https://www.makerrs.com${router.asPath}`
  const { logo, tags, commercials, desktopVideo, mobileVideo, image, specifyWidth } = pageData

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
        title="Case Study: Shaanu ka Viva"
        description="Explore how Makerrs, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
        url="https://www.makerrs.com/work/video-production/microdrama-shaanu-ka-viva"
      />
      <WorkHeroSection
        title={'Shaanu Ka Viva - A GenAI Microdrama for Bharat'}
        logo={logo}
        socials={socials}
        tags={tags}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
        image={image}
        logodimension={true}
        specifyWidth={specifyWidth}
      />
      <section className="bg-white overflow-hidden md:pb-30 pb-15">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            {/* <div className="mt-6">
              <LineHeading className="mb-6 md:mb-9">
                Microdramas for the scroll generation
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                India has always loved drama. From saas-bahu serials to masala
                movies to gully cricket commentary. And today’s young India -
                Bharat - wants it faster, funnier and scrollable.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                In this new internet-first world, a fresh format has quietly
                taken over the feed: the microdrama. Short, self-contained
                stories under a minute long, they borrow the structure of
                classic TV serials, shrink it, and remix it for the algorithm.
                And while microdramas can take many forms, the ones that stick
                for the Bharat audience often have a familiar flavour - a touch
                of entertainment, cultural nuance, and local relatability.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                The rise of this format is no surprise in a country where over a
                billion smartphones are in use, nearly 900 million people are
                online, and almost two-thirds of the population is under 35.
                Together, this scale of connectivity and a young, mobile-first
                audience has created the perfect conditions for{' '}
                <a
                  href="https://www.deccanherald.com/opinion/are-bite-sized-dramas-the-next-big-thing-in-india-3341363"
                  target="_blank"
                  className="text-blue-500"
                >
                  bite-sized stories to flourish
                </a>
                .
              </p>
            </div> */}
            <div className="mt-9 md:mb-20">
              {/* <LineHeading className="mb-6 md:mb-9">
                Making a microdrama series with GenAI
              </LineHeading> */}

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                As an agency constantly experimenting with emerging tools, we
                were already deep in the world of generative AI. But most AI
                content floating around felt like a demo reel — interesting, but
                not the most engaging. So, we thought to ourselves - what if we
                used GenAI to create a micro drama series? Something funny,
                scroll-worthy, and full of desi drama.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                That’s how Shaanu Ka Viva came to life. A school-based
                microdrama series built using GenAI - but rooted in the kind of
                local humour and familiarity that makes Bharat laugh.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                Explore our inspirations and complete GenAI workflow in this
                <a
                  href="https://www.makerrs.com/blog/shaanu-ka-viva-a-genai-microdrama-for-bharat"
                  target="_blank"
                  className="text-black underline hover:text-rb-link-green"
                >
                  {' '}
                  blog post
                </a>
                .
              </p>
            </div>
            {/* <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-[64px]">
              <img
                src="/img/case-study/copy-of-banner-2.png"
                alt="shaanu ka viva"
                srcset=""
              />
            </div>
            <div className="mt-9 md:mt-[80px]">
              <LineHeading className="mb-6 md:mb-9">
                Building the world of Shaanu ka Viva
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                We wanted something small, repeatable, and funny. So we built a
                world that was easy to return to, and even easier to relate to.
                A small town school. A likeable teacher. And an over smart
                student.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                Shaanu is every overconfident student you’ve met. He talks big,
                studies little, and thinks reels are a valid source of science.
                Sitting across from him is his exhausted teacher, still holding
                onto the hope that one day, Shaanu might get something right. In
                each episode, Shaanu is put through a viva, and somehow, always
                manages to give the wrong answer, delivered with full confidence
                and zero doubt.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                We chose this duo and a viva situation because their chemistry
                taps into a deeply desi memory: the classroom and the exams.
                Every Indian has lived some version of it. Plus, from an AI
                production lens, it gave us the right kind of constraints: a
                recurring classroom, two characters and a simple format. That
                made it easier to maintain visual consistency and focus more on
                the jokes. Each episode was under 1 minute, designed to land
                like a punchline. We kept the language Hindi for mass appeal,
                and to stay true to the world we were building.
              </p>
            </div>
            <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-[64px]">
              <img
                src="/img/case-study/copy-of-banner-1.png"
                alt="shaanu ka viva"
                srcset=""
              />
            </div>
            <div className="mt-9 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Designing an AI Production Process
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                We treated AI like any other craft, with intention and
                precision. Cracking the look of Shaanu and Sir took the most
                time. For a series like this, the humour rests considerably on
                expressions, body language, and relatability. But the biggest
                issue with GenAI was consistency. You’d get one good frame, and
                then the next one would have a completely different facial
                features, or a new hairstyle.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                We spent days experimenting with prompt structures, reference
                inputs, and image variations to get Shaanu’s “confident but
                clueless” face and Sir’s “perpetually disappointed” look just
                right. However, generating these looks was one thing. Keeping
                them consistent was another. This meant layering tools, manually
                retouching key frames, and building a master visual template to
                ensure continuity. Here’s the what the process evolved to:
              </p>
              <div
                className="pl-0  mb-[30px] space-y-[30px] "
                style={{ letterSpacing: '-0.4px' }}
              >
                <div className="text-base md:text-xl text-rb-black/80 !leading-[150%]">
                  <strong>1. Character Definition</strong>
                  <br />
                  Mapping out each character’s look, expressions, and quirks to
                  carry the humour without it feeling generic
                </div>

                <div className="text-base md:text-xl text-rb-black/80 !leading-[150%]">
                  <strong>2. Prompt Experimentation</strong>
                  <br />
                  Testing different prompts and references to achieve consistent
                  faces and body language frame after frame
                </div>

                <div className="text-base md:text-xl text-rb-black/80 !leading-[150%]">
                  <strong>3. Visual Reference System</strong>
                  <br />
                  Creating a master reference library to lock the characters’
                  appearance across all episodes
                </div>

                <div className="text-base md:text-xl text-rb-black/80 !leading-[150%]">
                  <strong>4. Base Image Generation</strong>
                  <br />
                  Producing core images for every scene, angle, and expression
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-6 md:my-16 md:w-[78.7rem] mt-[32px]">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <img
                    src="/img/case-study/copy-1.png"
                    alt="shaanu ka viva"
                    className="md:h-[28rem] md:w-[41rem]"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="/img/case-study/copy-2.png"
                    alt="shaanu ka viva"
                    className="md:h-[28rem] md:w-[41rem]"
                  />
                </div>
              </div>
            </div>
            <div
              className="pl-0 leading-7 mb-[30px] mt-[30px] md:mt-9 space-y-[30px] "
              style={{ letterSpacing: '-0.4px' }}
            >
              <div className="text-base md:text-xl text-rb-black/80 !leading-[150%]">
                <strong c>5. Lip-sync and Animation</strong>
                <br />
                Applying basic animation to bring dialogues to life and keep the
                storytelling dynamic
              </div>

              <div className="text-base md:text-xl text-rb-black/80 !leading-[150%]">
                <strong>6. Manual Clean-up</strong>
                <br />
                Retouching frames to fix inconsistencies and sharpen details
              </div>

              <div className="text-base md:text-xl text-rb-black/80 !leading-[150%]">
                <strong>7. Voice Recording</strong>
                <br />
                Used real voice actors to deliver timing and energy that AI
                audio couldn’t replicate
              </div>

              <div className="text-base md:text-xl text-rb-black/80 !leading-[150%]">
                <strong>8. Sound and Music Design</strong>
                <br />
                Layering sound effects and background scores to enrich the
                humour and pace
              </div>

              <div className="text-base md:text-xl text-rb-black/80 !leading-[150%]">
                <strong>9. Editing for Scroll</strong>
                <br />
                Cutting episodes into tight, punchy videos optimised for
                short-form, mobile-first viewing
              </div>
            </div>

            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem] mt-16 ">
              <img
                src="/img/case-study/student-1.png"
                alt="student 1"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/student-2.png"
                alt="student 2"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/student-3.png"
                alt="student 3"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/student-4.png"
                alt="student 4"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/student-5.png"
                alt="student 5"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr] gap-5 aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[9rem] gap-x-[2rem] gap-y-[9rem]">
              <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/student-3.png"
                />
              </div>

              <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/student-1.png"
                />
              </div>
              <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/student-4.png"
                />
              </div>

              <div className="row-start-5 row-span-2 col-start-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/student-5.png"
                />
              </div>
              <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/student-2.png"
                />
              </div>
            </div>

            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem] my-16 ">
              <img
                src="/img/case-study/teacher-1.png"
                alt="teacher 1"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/teacher-2.png"
                alt="teacher 2"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/teacher-3.png"
                alt="teacher 3"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/teacher-4.png"
                alt="teacher 4"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/teacher-5.png"
                alt="teacher 5"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr] gap-5 aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[9rem] gap-x-[2rem] gap-y-[9rem]">
              <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/teacher-3.png"
                />
              </div>

              <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/teacher-1.png"
                />
              </div>
              <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/teacher-4.png"
                />
              </div>

              <div className="row-start-5 row-span-2 col-start-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/teacher-5.png"
                />
              </div>
              <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/teacher-2.png"
                />
              </div>
            </div>

            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                The Tools We Used
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                <a
                  href="https://openart.ai/home?utm_source=google&utm_medium=cpc&utm_campaign=Ser_Global_Brand&utm_content=Brand_Top_Terms&utm_source=google&utm_medium=cpc&utm_campaign=21853310611&utm_term=openart.ai&gad_source=1&gad_campaignid=21853310611&gbraid=0AAAAAp6wzGS0kpwbh3sUTfS-tkLSvo1wn&gclid=CjwKCAjwg7PDBhBxEiwAf1CVu6i51KpUiErmoFByCqEcU-A2vXr92pleO5Mc84uNv0BlBDKBZEuIBRoCVuEQAvD_BwE"
                  target="_blank"
                  className="text-blue-500"
                >
                  OpenArt AI
                </a>
                : For generating character visuals and styles
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                <a
                  href="https://app.klingai.com/global/?gad_source=1&gad_campaignid=22428399262&gbraid=0AAAAA_AcKMkNdC2lDQi0z3dSvcCzXjTTc"
                  target="_blank"
                  className="text-blue-500"
                >
                  Kling AI
                </a>
                : For lip-syncing and basic animation
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                <a
                  href="https://www.topazlabs.com/?srsltid=AfmBOorA2OVgWjfORNa-fYBEsB1lTizujqPAlzPPs4_Jpx0xV9bo2OfS"
                  target="_blank"
                  className="text-blue-500"
                >
                  Topaz AI
                </a>
                : For upscaling visuals to a clean final output
              </p>
            </div>
            <div className="mt-9 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Making AI work for storytelling
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]  mb-[30px]">
                Making Shaanu Ka Viva gave us a clear sense of where AI adds
                real value in a content workflow. Some parts - like keeping
                characters consistent across frames or landing jokes in Hindi -
                still need time and a human touch. It’s not magic. But once
                those pieces were in place, the rest moved fast.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                With the right setup, we could go from script to final cut in
                just a few days. AI helped us cut down production time, reduce
                dependencies, and keep costs lean, without losing on quality or
                relatability. For brand teams looking to create more contextual,
                high-frequency content, that’s a big unlock.
              </p>
            </div> */}
          </div>
        </div>

        <div>
          <VideoGallery
            sources={commercials?.sources}
            type={commercials?.type}
          />
        </div>
      </section>
    </>
  )
}
XiaomiBuds.PageLayout = SCSLayout
export default XiaomiBuds
