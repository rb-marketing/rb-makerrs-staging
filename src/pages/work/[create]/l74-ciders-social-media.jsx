import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  WorkHeroSection,
  SEO,
  Testimonials,
  RollupNumber
} from '@/components/shared'
import { VideoGallery } from '@/components/pages/work/VideoGallery'
import styles from '@/styles/sections/StatsSection.module.scss'
import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router';
const createTestimonialData = [
  {
    key: 1,
    quote:
      'Working with Makerrs has been an excellent experience. Their team was able to effortlessly transform our communication needs into a well-crafted campaign. They have been perceptive in understanding our needs as a business, this is what I believe allowed them to come up with creative ideas for our campaign.',
    name: 'Kalp Patel & Ayush Patel',
    designation: 'Founders',
    company: 'Wild Harvest Brewing Company (Craft Cider - L74)',
    image: {
      srcSet:
        '/img/testimonials/kalp-patel_ayush-patel.jpg 533w, /img/testimonials/kalp-patel_ayush-patel.jpg 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },

]

const pageData = {
  logo: {
    src: '/img/case-study/l74/l74-logo.jpeg',
    width: 'auto',
    alt: 'L74',
    width: '100px',
  },
  title: 'Trip Different with L74 Ciders',
  specifyWidth: 'md:!w-[100px] !w-[80px]',
  image: '/img/case-study/l74/l74_case_study_banner_visual_new.jpg',
  tags: ['Brand Strategy', ' Brand Postioning', 'Brand Launch Strategy', 'Digital Campaign', 'Social Media Content', 'Alcobev'],
  presstitle: 'Campaign',
  press: {
    // title: (
    //   <div>
    //     Trip Different : <br />Here’s how we brought our strategic solution to life through the creative campaign for L74.
    //   </div>
    // ),
    image: {
      src: '/img/case-study/l74/manifesto-reel.mp4',
      width: '820px',
      height: '430px',
      bgColor: '#000000',
    },

    href: '#!',
    type: 'projectLoom',
    thumbnail: '/img/case-study/l74/manifesto-thumbnail-100.jpg',
    readmore: false,
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '1027634347',
        url: 'https://vimeo.com/1027634347',
        name: 'Pack, Pop, Trip Different',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/l74/suitcase_reel_thumbnail_1.jpg',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '1027634505',
        url: 'https://vimeo.com/1027634505',
        name: 'Ready, Set, Trip Different!',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/l74/fridge_reel_thumbnail_2.jpg',
        },
      },
      {
        key: 2,
        duration: 128,
        vimeoId: '1027634616',
        url: 'https://vimeo.com/1027634616',
        name: 'Trip Different with L74',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/l74/backpack_reel_thumbnails_1.jpg',
        },
      },
      {
        key: 3,
        duration: 128,
        vimeoId: '1028366703',
        url: 'https://vimeo.com/1028366703',
        name: 'Bored of Beer?',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/l74/trip_different_from_beer_thumbnail_3.jpg',
        },
      },
      {
        key: 4,
        duration: 15,
        vimeoId: '1027634673',
        url: 'https://vimeo.com/1027634673',
        name: 'Craft Apple Cider',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/l74/craft_pple_cider_thumbnail.jpg',
        },
      },
      {
        key: 5,
        duration: 128,
        vimeoId: '1027634760',
        url: 'https://vimeo.com/1027634760',
        name: 'Craft Citrus Cider',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/l74/craft_citrus_cider_thumbnail.jpg',
        },
      },
      {
        key: 6,
        duration: 128,
        vimeoId: '1027634827',
        url: 'https://vimeo.com/1027634827',
        name: 'Craft Coffee Cider',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/l74/craft_coffee_cider_thumbnail.jpg',
        },
      },
      {
        key: 7,
        duration: 128,
        vimeoId: '1027634931',
        url: 'https://vimeo.com/1027634931',
        name: ' For Adventurers, Dreamers, Wanderers',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/l74/manifesto_reel_thumbnail.jpg',
        },
      }
    ],

  }
}

function L74() {
  const router = useRouter();
  const fullUrl = `https://www.makerrs.com${router.asPath}`;
  const { logo, title, tags, image, press, specifyWidth } = pageData
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
  const stats = [
    {
      id: 0,
      countUpProps: {
        value: 8,
        suffix: (
          <div className="inline-flex">
            {/* <span className="text-rb-red">+</span> */}
          </div>
        ),
      },
      text: (
        <span className="md:max-w-[188px]">
          films produced
        </span>
      ),
    },
    {
      id: 1,
      countUpProps: {
        value: 2.6,
        suffix: (
          <div className="inline-flex">
            M <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: <>
        views on <br />
        manifesto film

      </>,
    },
    {
      id: 2,
      countUpProps: {
        value: 4,
        suffix: (
          <div className="inline-flex">
            M <span className="text-rb-red">+</span>
          </div>
        ),
      },
      text: (
        <>
          total views <br />
          on instagram
        </>
      ),
    },

  ]
  return (

    <>
      <SEO title="Case Study | L74" 
      url="https://www.makerrs.com/work/brand-campaign/l74-ciders-social-media"
      />
      <WorkHeroSection
        logo={logo}
        title={title}
        socials={socials}
        tags={tags}
        image={image}
        specifyWidth={specifyWidth}
      />

      <section className="bg-white overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">

            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                Challenge
              </LineHeading>

              <div className='text-xl md:text-[32px] text-black mb-4 font-medium lg:leading-10'>With beer reigning supreme in the Indian market, it’s challenging for cider to make a mark.
              </div>

              <div className="text-base md:text-xl text-rb-black/80 mt-8">
                <p className='leading-7 mb-[30px]'>The Indian beer and cider market is an absolute jungle, with well-established beer brands dominating the scene. Non-craft beer accounts for 98.8% of the market, leaving only 1.2% for craft beer, cider, and other alternatives combined.* </p>
                <p className='leading-7 mb-[30px]'>Cider, in particular, has barely made a dent in the market. Low consumer awareness, overwhelming preference for beer, and confusion between craft beer and cider are all factors that take the fizz out of new product adoption.

                </p>
                <p className='leading-7 mb-[30px]'>*2022 Euromonitor Report</p>
              </div>
            </div>


            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Building on the Brand Identity
              </LineHeading>

              {/* <div className='text-xl md:text-[32px] text-black mb-4 font-medium lg:leading-10'>We crafted a fun strategy to position cider as the better alternative to beer.</div> */}

              <div className="text-base md:text-xl text-rb-black/80 mt-8">
                <p className='leading-7 mb-[30px]'>L74 already had a strong foundation with its existing messaging, The Bright Cider Life. Our goal was to take it up a notch, differentiating L74 in the market and establishing it as more than just another cider brand. With its distinctive branding and visually striking design, we had the opportunity to push creative boundaries and craft a campaign that fully captured the adventurous and refreshing experience, as well as the premium taste L74’s ciders offer.
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Our Approach
              </LineHeading>


              <div className="text-base md:text-xl text-rb-black/80 mt-8">
                <p className='leading-7 mb-[30px]'>We crafted a fun strategy to position cider as the better alternative to beer. By leveraging the unique attributes of cider over beer, we inspired our audience to view L74 cider as a cooler, tastier, more refreshing alternative. With beer painted as the “been there, done that” option, the switch to cider was not just a change but an upgrade.
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                The Proposition
              </LineHeading>

              <div className='text-xl md:text-[32px] text-black mb-4 font-medium lg:leading-10'>Explore a new &#x2018;cider&#x2019; you.</div>

              <div className="text-base md:text-xl text-rb-black/80 mt-8">
                <p className='leading-7 mb-[30px]'>This proposition encouraged consumers to embrace new experiences and refresh their perspectives. By going against category conventions and making consumers reconsider their choices, this approach leveraged storytelling to bring the product’s vibrant, bubbly personality and superior taste offering to life.
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Campaign
              </LineHeading>

              <div className='text-xl md:text-[32px] text-black mb-4 font-medium lg:leading-10'>Trip Different
              </div>

              <div className="text-base md:text-xl text-rb-black/80 mt-8">
                <p className='leading-7 mb-[30px]'>While most travelers are content with the usual sightseeing spots, lounging in shacks with a beer, or hitting up the same old clubs, there are those who crave something different. L74 Cider is crafted for dreamers and explorers who crave a refreshingly different trip down to the last drop. We encapsulated this idea using short-form content, making snackable and memorable videos for the brand’s social media.</p>

                <p className='leading-7 mb-[30px]'>To bring ‘Trip Different’ to life, we created eight films that captured the essence of the concept, making L74 an essential companion to any adventure. These films were designed to be visually compelling, creatively engaging, and strategically structured to resonate with the audience.</p>
                <ul className="list-disc pl-6 leading-7 mb-[30px]">
                  <li className="list-disc pl-6 leading-7 mb-[30px]">The campaign kicked off with a brand manifesto film that established the core messaging of ‘Trip Different.’ This film set the tone for the storytelling approach and positioned L74 as the go-to cider for those seeking unique experiences.
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">We followed it up with three films dedicated to showcasing L74’s distinct flavors, highlighting how each one offered a unique taste experience.</li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">The remaining three films focused on the lifestyle associated with L74 – capturing the spirit of spontaneity, adventure, and breaking away from the ordinary.
                  </li>
                  <li className="list-disc pl-6 leading-7 mb-[30px]">All films were executed in a studio shoot to maintain high production quality while ensuring they remained short, snappy, and engaging for Instagram’s fast-paced format.


                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


            <div className="container">
          <LineHeading className="mb-6 md:mb-7.5">IMPACT</LineHeading>
          <div className="flex flex-col lg:flex lg:flex-row grid-cols-2 md:justify-start lg:relative lg:right-16 gap-x-5 md:gap-x-[124px] gap-y-8 md:gap-y-6 max-w-full md:max-w-none">
            {stats.map((s, i) => (
              <div
                className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.statline}`}
                key={s.id}
              >
                <div className={`lg:w-fit flex lg:flex lg:flex-col lg:mx-auto ${s.id === 1 ? 'md:!ml-12' : ''} ${s.id === 0 ? 'md:!ml-32' : ''} ${s.id === 2 ? 'md:!ml-12' : ''}`}>
                  <div>
                    <RollupNumber {...s.countUpProps} />
                  </div>
                  <div className={`text-xl mt-[20px] lg:mt-0 lg:ml-0 leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 font-medium font-everett
                      ${s.id === 0 ? 'ml-36' : ''}
                      ${s.id === 1 ? 'ml-9' : ''}
                      ${s.id === 2 ? 'ml-19' : ''}
                      `
                  }>
                    {s.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



      <div >
        <VideoGallery sources={press?.sources} type={press?.type} />
      </div>

       <Testimonials
        title={'WHAT OUR CLIENT SAYS'}
        testimonialData={createTestimonialData}
        className="pt-30 md:pt-[10rem] md:pb-30 pb-15"
      />

      </section>

      {/* <StatsSection
        tag="RESULTS"
        className="pt-6 md:pt-20 pb-9 md:pb-15"
        data= {stats}
      /> */}
   
    


        {/* <CommercialSection
          sources={press?.sources}
          type={press?.type}
        /> */}
 
      {/* 
      <PressSection
        className="bg-rb-torch-red mt-14"
        title={press?.title}
        content={press?.content}
        type={'videogallery'}
        readmore={press?.readmore}
        sources={press?.sources}
        presstitle={pageData?.presstitle}
      /> */}

     
    </>


  )
}
L74.PageLayout = SCSLayout
export default L74