import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  Testimonials,
  WorkHeroSection,
  SEO,
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router'



const lilliaCareData = [
  {
    key: 0,
    quote:
      <>Makerrs brought a unique blend of clarity and creativity—translating complex healthcare concepts into a simple brand identity system that was &apos;full of heart&apos;. They also created a cohesive website experience within incredibly tight deadlines. Their efficiency and understanding of our needs were pivotal in successfully launching our brand.
      </>,
    name: 'Rinku Agarwal Basu',
    designation: 'COO',
    company: 'Lillia Care',
    image: {
      srcSet:

        '/img/testimonials/rinku-agarwal.png 533w, /img/testimonials/rinku-agarwal.png 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  }
]

const pageData = {
  logo: {
    src: '/img/logos/ti_logo.png',
    width: '150',
    height: '90',
  },
specifyWidth: 'md:!w-[220px] !w-[200px]',
 tags: ['Semiconductor Manufacturing', 'Employer Branding', 'Corporate Commuication', 'Culture Video'],
  image: '/img/case-study/ti_banner_visual.png',
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
        vimeoId: '1120782071/fb236bd4ef', 
        name: 'Shashank Kulkarni',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/shashank_kulkarni.png',
        },
      },
      {
        key: 1,
        duration: 15,
        vimeoId: '1120784753/44cb3c362a', 
        name: 'Kavithaa Rajagopalan',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/kavithaa_ti.png',
        },
      },
      {
        key: 2,
        duration: 15,
        vimeoId: '1120787775/4a221d01fe', 
        name: 'Akshat Aggarwal',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/akshath_ti.png',
        },
      }

    ],
  },

}



function Lilliacare() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.asPath}`
  const { logo, tags, featured, commercials, stats, press, image, specifyWidth } = pageData
  const socials = [
    // {
    //   key: 0,
    //   href: '/',
    //   color: '#25D366',
    //   icon: <Whatsapp />,
    // },
    {
      key: 1,
      href: `https://twitter.com/intent/tweet?text=${articleUrl}`,
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
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}`,
      color: '#006699',
      icon: <Linkedin />,
      type: 'linkedin',
    },
  ]
  return (
    <>
      <SEO
        title="People-First Brand Films for TI | Makerrs"
        description="A deep dive into how we crafted people-driven stories for Texas Instruments India, blending engineering culture, employee insights, and global brand identity."
        url="https://www.makerrs.com/work/video-production/culture-videos-texas-instruments"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        featured={featured}
        title='Stories of Innovation & Impact at Texas instruments India'
        image={image}
        specifyWidth={specifyWidth}
      />

      <section className="bg-white  md:pb-[84px] pb-[24px]  overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">

            <div className="mt-9 md:mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Background & Brief
              </LineHeading>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                Texas Instruments has a long-standing engineering presence in India, with the subcontinent contributing to some 
                of the company&apos;s most important analog and embedded products used across the world. As Texas Instruments
                grew its presence in the region, strengthening communications around its culture and the career opportunities 
                it offered engineers became a key priority for attracting and retaining great talent.
              </p>
            </div>

            <div className="mt-9 md:mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                The Opportunity 
              </LineHeading>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                Globally, Texas Instruments had a successful IP - a series called “I Am a TIer” that 
                highlighted its people and culture through videos featuring employees and the solutions 
                they were shaping. The series had gained traction in Europe and USA with stories which reflected 
                how the company worked in these regions.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                For the India region, the opportunity was to craft people-first stories that felt true to its 
                engineering culture and aligned with the company’s global identity.
              </p>
            </div>

             <div className="mt-9 md:mt-9 md:mb-[80px]">
              <LineHeading className="mb-6 md:mb-9">
                Our Approach
              </LineHeading>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                In partnership with The Practice, Texas Instruments’ communications agency in India, we shaped 
                the India leg of the “I am a TIer” series, blending the local context, talent insights and brand nuances.
              </p>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                Our video narratives were crafted to resonate with the audience: people within the company and potential 
                employees. Each video focused on the things that shaped the individual’s  engineering career and experience 
                at Texas Instruments India.
              </p>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px]">
                Our process began with in-depth conversations with select employees, which uncovered clear thematic anchors:
              </p>
              <p className="mb-6">
                <ul className="list-disc pl-6 leading-7 mb-[24px]">
                  <li className="list-disc pl-6 leading-7 mb-[24px]">
                    What first led them to engineering
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[24px]">
                    The problems they solve at Texas Instruments
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[24px]">
                    The learning and mentorship that shape their growth
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[24px]">
                    The impact they are creating and the pride they take in it
                  </li>
                </ul>
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[24px] md:mb-[30px]">
                These insights were woven into authentic videos in which employees shared not just what they did, but why their work mattered.  
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] ">
                Every video retained the brand’s global “I am a TIer” sign-off, in-line with the global IP.  
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
Lilliacare.PageLayout = SCSLayout
export default Lilliacare