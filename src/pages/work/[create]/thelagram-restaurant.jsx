import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  SEO,
  SimilarPosts,
  Testimonials,
  WorkHeroSection,
} from '@/components/shared'
import { VideoGallery } from '@/components/pages/work/VideoGallery'
import { useRouter } from 'next/router'

export const similarPostsData = [
  {
    key: 0,
    name: 'Crafting a Symbol of Success in Hospitality',
    image: '/img/works/medalio_thumbnail.webp',
    company: 'Meladio',
    alt: 'Medalio',
    tags: [' Brand Visual Identity', 'Hospitality'],
    href: '/work/brand-design-agency-india/medalio',
  },
  {
    key: 20,
    name: 'Branding for an Indulgent Dessert Café',
    company: 'P.U. Dingding',
    image: '/img/case-study/pudingding-thumbnail.jpg',
    tags: [
      'Brand Identity',
      'Design Collateral',
      'Film & Video Content',
      'F&B',
    ],

    tabs: ['Design'],
    case_study_title: 'pudingding',
    href: '/work/brand-design-agency-india/pudingding',
  },
]
const thelagramData = [
  {
    key: 0,
    quote: (
      <>
        <div>
          Makerrs was especially impressive with their creative strategy, design
          and copy. They took the colors, the quirky and iconic signages, and
          the energy of the local markets, and transformed them into a fresh,
          modern expression for our brand. Our customers are drawn to the unique
          identity, and it&apos;s translated into a love for the food itself.
        </div>
      </>
    ),
    name: 'KUNCHERIA MARATTUKALAM',
    designation: 'FOUNDER & DIRECTOR',
    company: 'Maratt Group',
    image: {
      srcSet:
        '/img/testimonials/kuncheria_marattukalam.jpg 533w, /img/testimonials/kuncheria_marattukalam.jpg 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

const pageData = {
  logo: {
    src: '/img/logos/thelagram.png',
    alt: 'Thelagram logo',
    width: '120',
    height: '50',
  },
  specifyWidth: 'md:!w-[80px] !w-[60px]',
  image: '/img/case-study/thelagram_thumbanil.jpg',
  tags: [
    'Brand Visual Identity',
    'Pacakaging Design',
    'Logo Design',
    'Wall Branding',
    'Digital Campaign',
    'F&B',
  ],
  commercials: {
    type: 'projectLoom',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '1077932754',
        name: 'Brand Book Promo',
        company: 'JEWELS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/brand_book_promo.jpg',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '1077934400',
        name: 'Brand Identity Film',
        company: 'JEWELS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/case_study_video.jpg',
        },
      },
      {
        key: 2,
        duration: 128,
        vimeoId: '1077934450',
        name: ' Food Spotlight Reel 1',
        company: 'JEWELS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/food_spotlight_1.jpg',
        },
      },
      {
        key: 3,
        duration: 128,
        vimeoId: '1077938473',
        name: 'Food Spotlight Reel 2',
        company: 'JEWELS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/food_spotlight_2.jpg',
        },
      },
      {
        key: 4,
        duration: 128,
        vimeoId: '1077938858',
        name: 'Food Spotlight Reel 3',
        company: 'JEWELS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/food_spotlight.jpg',
        },
      },
      {
        key: 5,
        duration: 128,
        vimeoId: '1077939388',
        name: ' Brand Logo Reveal',
        company: 'JEWELS',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/logo_reveal.jpg',
        },
      },
    ],
  },
}

function Thelagram() {
  const router = useRouter()
  const fullUrl = `https://www.makerrs.com${router.asPath}`
  const {
    logo,
    tags,
    commercials,
    desktopVideo,
    mobileVideo,
    image,
    specifyWidth,
  } = pageData
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
        title="Case Study: Thelagram"
        url="https://www.makerrs.com/work/brand-design/thelagram-restaurant"
      />
      <WorkHeroSection
        title={'Desi Branding for a Street Food Restaurant'}
        logo={logo}
        socials={socials}
        tags={tags}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
        image={image}
        specifyWidth={specifyWidth}
      />
      <section className="bg-white overflow-hidden">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-6">The Challenge</LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                Bengaluru is a food lover’s paradise. But a casual, all-day
                dining restaurant that elevates Indian street food with rooted
                design, warm hospitality, and a thoughtfully curated experience?
                That’s rare. Thelagram set out to change that—celebrating street
                culture, bringing the thrill of street eats and the warmth of a
                vibrant desi neighborhood into one unforgettable space. A place
                where chai meets chatter, chaats meet camaraderie, and flavors
                meet nostalgia.
              </p>
            </div>

            <div className="mt-9 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">The Solution</LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                Drawing inspiration from iconic Indian street elements, we
                designed a brand identity that celebrates the vocabulary,
                flavours, and eccentricities of Indian street culture. We
                created a brand that wasn’t just about food but instead an
                immersive cultural experience – A melting pot of India’s iconic
                street sights, sounds, and flavors—reimagined for today’s crowd.
              </p>
            </div>
            <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mb-[1.875rem]">
              <img
                src="/img/case-study/thelagram-2.jpg"
                alt="thelagram"
                srcset=""
              />
            </div>

            <div className="mt-9 md:mb-16 md:mt-20  bg-white  ">
              {/* Left Side */}

              <div>
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  Logo
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                We created a fusion emblem with a custom desi type, that borrows
                from rubber stamps and is also reminiscent of the &apos;National
                Permit&apos; symbol commonly seen on trucks.
              </p>
              <p className=" md:text-xl text-rb-black/70 !leading-[170%] mt-4">
                At the heart of the emblem is a hybrid wordmark: Roman letter T
                fused with a Devanagari &apos;Maatra&apos; (glyph). This hybrid
                &apos;T&apos; visually imbibes street style — creating its own
                entity through eccentric juxtaposition.
              </p>
            </div>
            <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mb-[1.875rem] md:mt-[1.875rem] mt-6">
              <img
                src="/img/case-study/thelagram_19.jpg"
                alt="thelagram"
                srcset=""
              />
            </div>
            <div className="mt-9 md:mt-20   bg-white">
              {/* Left Side */}

              <div>
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  Street Icons and New Hybrids
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                We curated an exhaustive bank of iconic street motifs. This
                included posters, stamps, matchboxes, road signs, shop signs,
                tickets, slogans, packaging, and collectibles. We then remixed
                or reimagined some elements to produce new-age hybrids, to
                resonate with the current generation. Some slogans and symbols
                were preserved in their original form, celebrating them as
                nostalgic street gems.
              </p>
            </div>
            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem] mt-12 ">
              <img
                src="/img/case-study/thelagram_1.jpg"
                alt="thelagram 1"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram_2.jpg"
                alt="thelagram 2"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram_3.jpg"
                alt="thelagram 3"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram_4.jpg"
                alt="thelagram 4"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram_5.jpg"
                alt="thelagram 5"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr] gap-5 aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[9rem] gap-x-[2rem] gap-y-[9rem]">
              <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram_3.jpg"
                />
              </div>

              <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram_1.jpg"
                />
              </div>
              <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram_4.jpg"
                />
              </div>

              <div className="row-start-5 row-span-2 col-start-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram_5.jpg"
                />
              </div>
              <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram_2.jpg"
                />
              </div>
            </div>
            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px] mt-16 ">
              For our menu, the dish names were curated and retained in their
              local avatar - Chilli Bhajji, Puchka, Shikanji, etc. Each of the
              hero dishes on the cover had its own motif to champion its flavour
              metaphorically. While the visual grid was inspired by bus tickets,
              the content was designed to feel like a local flyer listing out
              must-try popular dishes.As a final touch, we created &apos;Thank
              You&apos; notes styled as vintage bus tickets, that were handed
              out to customers, post billing, as a nostalgic keepsake.
            </p>
            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem] mt-16 md:h-[440px]">
              <img
                src="/img/case-study/thelagram-6.jpg"
                alt="thelagram 1"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram-7.jpg"
                alt="thelagram 2"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram-8.jpg"
                alt="thelagram 3"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram-9.jpg"
                alt="thelagram 4"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram-10.jpg"
                alt="thelagram 5"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr] gap-5 aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[10rem]">
              <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram-8.jpg"
                />
              </div>

              <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram-6.jpg"
                />
              </div>
              <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram-9.jpg"
                />
              </div>

              <div className="row-start-5 row-span-2 col-start-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram-10.jpg"
                />
              </div>
              <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram-7.jpg"
                />
              </div>
            </div>

            <div className="mt-9 md:mt-20   bg-white ">
              <div>
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  Wall Art
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                To give the interiors an authentic street-aesthetic, we went old
                school. Convincing the client to switch from framed digital
                posters to earthy, hand-painted motifs on the wall. We
                collaborated with the architects to source a local street
                painter, who hand painted our slogans and motifs directly onto
                the walls, using street-style printing techniques. We also
                proposed a cement finish for the walls, and metal as the primary
                material for signage, to introduce grunge accents, integral to
                the street palette.
              </p>
            </div>

            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem]  mt-16  md:h-[440px]">
              <img
                src="/img/case-study/thelagram_11.jpg"
                alt="thelagram 1 "
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram_12.jpg"
                alt="thelagram 2"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram_13.jpg"
                alt="thelagram 3"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram_14.jpg"
                alt="thelagram 4"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/thelagram_15.jpg"
                alt="thelagram 5"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr] gap-5 aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[10rem]">
              <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram_13.jpg"
                />
              </div>

              <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram_11.jpg"
                />
              </div>
              <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram_14.jpg"
                />
              </div>

              <div className="row-start-5 row-span-2 col-start-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram_15.jpg"
                />
              </div>
              <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/thelagram_12.jpg"
                />
              </div>
            </div>

            <div className="mt-9 md:mt-20 bg-white  md:mb-20">
              {/* Left Side */}

              <div>
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  Brand Identity
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[170%]">
                Drawing inspiration from iconic street elements like art, signs,
                spelling, slogans, slang — we created Thelagram’s unique remixed
                desi identity, and a brand voice derived from the banter of desi
                neighbourhoods, connecting everyone through humour, gossip,
                nostalgia, love of street food and shared vernacular history.
              </p>
              <p className=" md:text-xl text-rb-black/70 !leading-[170%]  md:mb-0 mb-[12px] mt-4">
                The result? A distinctive brand that deeply resonates with
                audiences, transporting them to a melting pot of Indian street
                culture.
              </p>
            </div>
          </div>
        </div>

        <div className="md:pb-0 pb-[64px]">
          <VideoGallery
            sources={commercials?.sources}
            type={commercials?.type}
            showHeading={true}
          />
        </div>

        <Testimonials
          title={'WHAT OUR CLIENT SAYS'}
          testimonialData={thelagramData}
          className="pt-14 md:pt-40 md:pb-30 pb-15"
        />
      </section>
      {/* <SimilarPosts
                tag="EXPLORE MORE CASE STUDIES"
                className="py-15 md:pt-0  md:pb-30"
                posts={similarPostsData}
            /> */}
    </>
  )
}
Thelagram.PageLayout = SCSLayout
export default Thelagram
