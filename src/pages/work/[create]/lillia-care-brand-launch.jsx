import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  PostContent,
  PressSection,
  SimilarPosts,
  StatsContainer,
  Testimonials,
  WorkHeroSection,
  SEO,
  testimonialsDefault,
} from '@/components/shared'

import { ccs, similarPosts } from '@/utils/dummy'
import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router'
// import { createTestimonialData } from '@/pages/services/create'

const lilliaPost = [
  {
    key: 0,
    name: 'Crafting a Symbol of Success in Hospitality',
    image: '/img/case-study/medalio_thumbnail.webp',
    company: 'Medalio',
    alt: 'Medalio',
    tabs: ['Design'],
    tags: ['Hospitality', 'Brand Identity', 'Logo Design'],
    href: '/work/b2b-brand-design-agency/medalio-hospitality-brand-identity',
  },
  {
    key: 1,
    name: 'A Design Gallery on Sustainability',
    image: '/img/works/infosys-living-labs-gallery.jpg',
    company: 'Infosys',
    alt: 'infosys-living-labs-gallery',
    tabs: ['featured', 'Design', 'videos'],
    tags: [
      'Technology',
      'Integrated Design Services',
      'Brand Experience',
      'ESG',
    ],
    case_study_title: 'infosys-sustainability-design-gallery',
    href: '/work/b2b-brand-design-agency/infosys-sustainability-design-gallery',
  },
  {
    key: 2,
    name: 'Branding for an Indulgent Dessert Café',
    image: '/img/case-study/pudingding-thumbnail.jpg',
    company: 'P.U. Dingding',
    alt: 'P.U. Dingding',
    tags: ['F&B', 'Cafe', 'Brand Identity', 'Launch Video'],
    href: '/work/b2b-brand-design-agency/pu-dingding-dessert-cafe-branding',
  },
]
const lilliaCareData = [
  {
    key: 0,
    quote: (
      <>
        Makerrs brought a unique blend of clarity and creativity—translating
        complex healthcare concepts into a simple brand identity system that was
        &apos;full of heart&apos;. They also created a cohesive website
        experience within incredibly tight deadlines. Their efficiency and
        understanding of our needs were pivotal in successfully launching our
        brand.
      </>
    ),
    name: 'Rinku Agarwal Basu',
    designation: 'COO',
    company: 'Lillia Care',
    image: {
      srcSet:
        '/img/testimonials/rinku-agarwal.png 533w, /img/testimonials/rinku-agarwal.png 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

const pageData = {
  logo: {
    src: '/img/logos/lillia_logo.png',
    width: '150',
    height: '90',
  },
  specifyWidth: 'md:!w-[130px] !w-[110px]',
  tags: [
    'Healthtech',
    'Brand Identity',
    'Website Design',
    'Website Development',
  ],
  image: '/img/case-study/lillia_banner.jpg',
  featured: {
    src: '/img/works/ccs_2x.webp',
    width: '2880',
    height: '1544',
  },
  commercials: {
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '1078232265/a073385a89',
        name: 'AI-powered Healthcare',
        company: 'LILLIA CARE',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/lillia-video-thumbanail.jpg',
        },
      },
    ],
  },
}

function Lilliacare() {
  const router = useRouter()
  const fullUrl = `https://www.makerrs.com${router.asPath}`
  const {
    logo,
    tags,
    featured,
    commercials,
    stats,
    press,
    image,
    specifyWidth,
  } = pageData
  const socials = [
    // {
    //   key: 0,
    //   href: '/',
    //   color: '#25D366',
    //   icon: <Whatsapp />,
    // },
    {
      key: 1,
      href: `https://twitter.com/intent/tweet?text=${fullUrl}`,
      color: '#1DA1F2',
      icon: <Twitter />,
    },
    // {
    //   key: 2,
    //   href: '/',
    //   color: '#0088cc',
    //   icon: <Telegram />,
    // },
    {
      key: 3,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}`,
      color: '#006699',
      icon: <Linkedin />,
      type: 'linkedin',
    },
  ]
  return (
    <>
      <SEO
        title="Lillia Care AI-powered Healthcare Brand Launch | Makerrs"
        description="We partnered with Lillia Care AI to design a brand identity and website in 5 weeks, delivering trust, precision, and a standout presence for AI in healthcare."
        url="https://www.makerrs.com/work/brand-designs/lillia-care-brand-launch"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        featured={featured}
        title="Launching an AI-powered Healthcare Brand in record time"
        image={image}
        specifyWidth={specifyWidth}
      />

      <section className="bg-white  md:pb-[48px] pb-[36px]  overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background and Challenge
              </LineHeading>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                The healthcare sector is undergoing a paradigm shift, with
                AI-powered solutions revolutionizing patient disease management.
                Lillia Care is at the forefront of that revolution, building an
                AI-powered platform that enables patients to manage chronic
                conditions like diabetes.
              </p>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                Our challenge was two-pronged :
              </p>
              <p className="mb-6 md:mb-7.5 ">
                <ul className="list-disc pl-6 leading-7 mb-[30px]">
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    Create a brand identity that conveys trust, intelligence,
                    and care.
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">
                    Develop and roll out a high-impact brand and website in
                    record time—five weeks from idea to launch.
                  </li>
                </ul>
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] ">
                We set out to build a brand and experience that reflected the
                duality of the latest AI technology along with a genuine human
                touch to make Lillia Care stand out in the category. And we had
                just 5 weeks to do it!
              </p>
            </div>
            <div className="mt-9 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Strategic Approach
              </LineHeading>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] md:mb-9">
                Our approach was rooted in the duality of AI precision and human
                empathy. We framed Lillia Care&apos;s brand story on the concept
                of an AI Digital Twin—a virtual companion that assists in the
                management of chronic diseases with precision and individualized
                care. Each design decision, from logo to website interface, was
                thoughtfully executed to support this underlying vision.
              </p>
            </div>
            <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
              <img
                src="/img/case-study/lillia-banner-1.jpg"
                alt="lilliacare"
                srcset=""
              />
            </div>
            <div className="mt-9 md:mt-20  bg-white  ">
              {/* Left Side */}

              <div className="">
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  Logo
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                Lillia Care&apos;s logo captures the idea of an &apos;AI digital
                twin&apos;: reflecting the integration of sophisticated
                AI-powered monitoring and the deeply human aspect of chronic
                care. Born out of LilliaCare&apos;s focus on diabetes
                management, we took inspiration from a sugar graph tracker. We
                designed a logo with a double-wave symbol, subtly playing on the
                two &apos;L&apos;s of Lillia. This dynamic visual concept
                represents continuous health tracking and personalized
                care—positioning Lillia as a pioneer in intelligent, proactive
                healthcare.
              </p>
            </div>

            <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)] md:w-[78.7rem] -mx-4 md:mx-0 md:my-[4rem] mt-8">
              <video
                src="/img/case-study/lilliacare-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              ></video>
            </div>
            <div className="mt-9 md:mt-20   bg-white">
              {/* Left Side */}

              <div className="">
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  Typography & Colour Palette
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                Soft, rounded typography exudes warmth, approachability, and
                care. A palette of peaches and purples evokes a sense of
                healing, positivity, and trust—striking the right balance
                between medical technology and an empathetic health partner.
              </p>
            </div>
            <div className="mt-9 md:mt-20  bg-white ">
              {/* Left Side */}

              <div className="">
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  Visual imagery
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                A blend of human-centered imagery establishes credibility while
                maintaining a human, relatable feel. We carefully picked imagery
                that showed real people leading active, fulfilling lives;
                reinforcing Lillia’s promise of empowering patients through
                AI-driven care.
              </p>
            </div>

            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[79.7rem]  md:my-16 ">
              <img
                src="/img/case-study/lillia-6.jpg"
                alt="lilliacare 1"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/lillia-7.jpg"
                alt="lilliacare 2"
                className="w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/lillia-8.jpg"
                alt="lilliacare 3"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/lillia-9.jpg"
                alt="lilliacare 4"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/lillia-10.jpg"
                alt="lilliacare 5"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
              <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/lillia-8.jpg"
                />
              </div>

              <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/lillia-6.jpg"
                />
              </div>
              <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/lillia-9.jpg"
                />
              </div>

              <div className="row-start-5 row-span-2 col-start-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/lillia-10.jpg"
                />
              </div>
              <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/lillia-7.jpg"
                />
              </div>
            </div>

            <div className="mt-9 md:mt-20  bg-white ">
              <LineHeading className="mb-0 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                Website Experience
              </LineHeading>

              {[
                {
                  heading: 'Positioning: Trust + Tech',
                  content:
                    'Lillia Care’s website had to instantly establish credibility while differentiating itself from traditional health-tech competitors. We designed a clean, modern, and impact-driven interface that mirrored the platform’s intelligence, usability, and care-centric approach.',
                },
                {
                  heading: 'B2B2C Strategy',
                  content:
                    'Unlike typical direct-to-consumer health solutions, Lillia Care operates at the intersection of B2B and B2C. Our website strategy positioned Lillia as an implementation partner for doctors and clinics—highlighting how its AI-driven model enhances patient adherence and delivers measurable health outcomes.',
                },
                {
                  heading: 'Brand voice & content',
                  content:
                    'Lillia Care’s digital persona needed to feel like a concerned but highly intelligent aunt—caring, informed, and always offering good advice. Balancing empathy with knowledge. We developed a brand voice that balances expert guidance with genuine care, making the website’s messaging both engaging and credible.',
                },
              ].map((item, index) => (
                <div key={index}>
                  <p className="  text-xl md:!text-2xl !font-bold !text-rb-black leading-snug mb-6  mt-9  ">
                    {item.heading}
                  </p>

                  <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center hidden md:block md:flex space-x-4 md:w-[79.7rem] md:my-16">
              <video
                src="/img/case-study/lillia-1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-[15rem] object-cover rounded-lg shadow-md"
              />
              <video
                src="/img/case-study/lillia-2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-[15rem] object-cover rounded-lg shadow-md"
              />
              <video
                src="/img/case-study/lillia-3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-[15rem] object-cover rounded-lg shadow-md"
              />
              <video
                src="/img/case-study/lillia-4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-[15rem] object-cover rounded-lg shadow-md"
              />
              <video
                src="/img/case-study/lillia-5.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-[15rem] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
              <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                <video
                  src="/img/case-study/lillia-3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                <video
                  src="/img/case-study/lillia-1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                <video
                  src="/img/case-study/lillia-4.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="row-start-5 row-span-2 col-start-1 relative">
                <video
                  src="/img/case-study/lillia-5.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                <video
                  src="/img/case-study/lillia-2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="mt-9 md:mt-20  bg-white ">
              {/* Left Side */}

              <div className="">
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  Website Principles
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6">
                <strong className="md:text-xl !text-rb-black !leading-[170%]">
                  Compelling storytelling :
                </strong>{' '}
                Clearly articulates Lillia’s vision, unique value proposition,
                and real-world impact stories.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6">
                <strong className="md:text-xl !text-rb-black !leading-[170%]">
                  Seamless UX :
                </strong>{' '}
                Intuitive navigation ensures an effortless user journey.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-6">
                <strong className="md:text-xl !text-rb-black !leading-[170%]">
                  SEO-optimized copy :{' '}
                </strong>{' '}
                Keyword integration for enhanced discoverability.
              </p>
              <p className="md:text-xl  !leading-[170%] mb-6">
                <strong className="md:text-xl !text-rb-black !leading-[170%]">
                  Deployment & performance :
                </strong>{' '}
                A lightweight, responsive site optimized for speed,
                accessibility, and conversion.
              </p>
            </div>

            <div className="mt-9 md:my-20   items-start  bg-white">
              {/* Left Side */}

              <div className="">
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  The Outcome
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                In just five weeks, Makerrs transformed Lillia Care from a bold
                idea into a fully realized brand with a striking visual
                identity, powerful brand voice, and an intuitive, high-impact
                digital presence. Along with a compelling website that
                effectively communicates Lillia’s impact, driving engagement
                among healthcare providers and patients. We established Lillia
                as a leader in AI-driven chronic care. Delivering a launch-ready
                brand that stands out in the rapidly evolving health-tech space.
              </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

      <Testimonials
        title={'WHAT CLIENTS SAY'}
        className="pb-[60px] md:pb-[120px]"
        testimonialData={lilliaCareData}
      />
    </>
  )
}
Lilliacare.PageLayout = SCSLayout
export default Lilliacare
