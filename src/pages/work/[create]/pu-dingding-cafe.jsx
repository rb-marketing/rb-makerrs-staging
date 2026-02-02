import { SCSLayout } from '@/components/Layout'
import { Telegram, Whatsapp, Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  PostContent,
  PressSection,
  SEO,
  SimilarPosts,
  StatsContainer,
  Testimonials,
  FeaturedWorkSection,
  WorkHeroSection,
} from '@/components/shared'
import { useRouter } from 'next/router'
import { CommercialSection } from '@/components/pages/work'

const similarPostsData = [
  {
    key: 2,
    name: 'Launching an AI-powered healthcare brand in record time',
    company: 'Lillia Care',
    image: '/img/works/lillia_img.jpg',
    alt: 'Lillia Care',
    tags: [
      'Healthtech',
      'Brand Identity',
      'Website Design',
      'Website Development',
    ],
    tabs: ['Design', 'Featured', 'Technology'],

    href: '/work/b2b-brand-design-agency/lillia-care-brand-launch',
  },

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
]
const pageData = {
  logo: {
    src: '/img/logos/puding.png',
    width: '150',
    height: '30',
  },
  specifyWidth: 'md:!w-[100px] !w-[80px]',
  tags: ['F&B', 'Cafe', 'Brand Identity', 'Launch Video'],
  image: '/img/case-study/puding-banner-3.jpg',
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
        vimeoId: '1065134907',
        name: 'Brand Film',
        company: 'P.U. Dingding',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/puding-thumbnail.png',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '1065140520',
        name: 'Founders Film',
        company: 'P.U. Dingding',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/puding-thumbnail_1.png',
        },
      },
    ],
  },
}

const testimonialsDesign = [
  {
    key: 0,
    quote:
      'From hand-drawn mascots to quirky doodles, and delicious copy that weaves in witty puns from popular song lyrics—every element of our new brand feels fun, indulgent, and effortlessly us. Makerrs has given us a brand bursting with character and joy!',
    name: 'NAKUL KULKARNI',
    designation: ' CO-FOUNDER',
    company: 'P.U. DINGDING',
    image: {
      srcSet:
        '/img/testimonials/nakul_1.jpg 533w, /img/testimonials/nakul_1.jpg 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

function Colearn() {
  const router = useRouter()
  const articleUrl = `https://www.makerrs.com${router.pathname}`

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
        title="P.U. Dingding Dessert Café Branding | Makerrs"
        description="We designed a joyful brand identity for P.U. Dingding dessert café, uniting mascots, design, and storytelling to grow loyalty and spark community."
        url="https://www.makerrs.com/work/brand-designs/pu-dingding-cafe"
      />
      <WorkHeroSection
        logo={logo}
        socials={socials}
        tags={tags}
        image={image}
        title="Branding for an Indulgent Dessert Café"
        // desktopVideo={desktopVideo}
        // mobileVideo={mobileVideo}
        specifyWidth={specifyWidth}
      />
      <section className="bg-white overflow-hidden md:pb-[76px] pb-9">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-9 md:mb-20">
              <LineHeading className="mb-6 md:mb-9">
                The Opportunity
              </LineHeading>

              <p className=" mb-6 md:mb-7.5 !leading-[150%]">
                With India’s dessert industry growing at nearly{' '}
                <a
                  href="https://www.indianretailer.com/restaurant/article/what-s-trending-in-desserts-for-2025-a-sweet-revolution-ahead.12118"
                  className="underline"
                >
                  double-digit CAGRs
                </a>
                , standing out is no cakewalk. DBS Ventures saw an opportunity
                to create more than just another dessert cafe, they wanted to
                redefine the experience into something more playful, personal,
                and full of flavour, both on and off the plate. Not just a place
                to grab a bite, but a space that sparks joy, builds community,
                and makes you want to stay long after the last bite. A brand
                that doesn’t just compete on taste, but wins hearts through
                taste, storytelling, and soul.
              </p>
            </div>
            <div className="mt-9 md:mb-16">
              <LineHeading className="mb-6 md:mb-9">
                Creative Approach
              </LineHeading>

              <p className="mb-6 md:mb-7.5 !leading-[150%]">
                Enter P.U. Dingding — a brand dreamt up to serve joy by the
                slice and brew. The brainchild of Kuncheria Marattukalam, the
                one who envisioned a space where desserts, coffee, and good
                vibes come together, he brought together pastry chef Nakul
                Kulkarni and coffee farmer-curator Aiyappa KT — two creative
                forces with wildly different personalities but a shared love for
                cake, coffee, and chaos (the good kind!). The result? A warm and
                unique space that brings joy and an irresistible dopamine rush.
                Think lazy Sunday afternoons chilling with friends and family.
                Singing loudly. Swapping stories. Gentle squabbles. Insider
                jokes. Stealing the last bite of cake. Living the good life.
              </p>
            </div>
            <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mt-16">
              <img
                src="/img/case-study/puding-banner-2.jpg"
                alt="lilliacare"
                srcset=""
              />
            </div>

            <div className="mt-9 md:mt-20 md:mb-16 ">
              {/* Left Side */}

              <div className="">
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  Name and Logo
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                The name P.U. Dingding is a playful misspelling of ‘pudding’
                with a twist. ‘Dingding’ evokes the sound of a bell, a game show
                win, or an ice cream truck jingle—to cue feelings of joy and
                indulgence. The name immediately conveys lightheartedness and an
                invitation to play.
              </p>

              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                To bring that same energy to life, we whipped up a logo inspired
                by a cupcake: stacked, sweet, and topped with a cherry for good
                measure. It&apos;s soft, double-decker form has just the right
                mix of structure and silliness, like a dessert that’s both fancy
                and fun. With a dash of childlike charm and a whole lot of
                personality, it’s designed to feel instantly familiar. It’s the
                kind of logo that will bring an instant smile to your face.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-6 md:mt-12 md:w-[78.7rem] mt-9">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <img
                    src="/img/case-study/padingding-right.gif"
                    alt="Puding GIF 2"
                    className="md:h-[28rem] md:w-[41rem]"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="/img/case-study/pudingding-left.gif"
                    alt="Puding GIF"
                    className="md:h-[28rem] md:w-[41rem]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-9 md:mt-20 md:mb-16 ">
              <div className="">
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  Brand Mascots
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                Cakehead and Cuphead — the brand mascots of P.U. Dingding
                represent the two co-founders with polar-opposite personalities.
                Cakehead is a globe-trotting, extroverted pastry chef with a
                gift of gab. He’ll tell you all about the tea parties he’s
                hosted for the Queen, desserts he’s crafted for the BAFTA
                dinner, or how he’s buddies with Brian Lara. Cuphead, on the
                other hand, is the opposite—a quiet coffee farmer from Kodagu
                who thrives in nature and enjoys his own company, literally
                serenading and sensing plants and animals. What they have in
                common is their culinary passion and a lust for life.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                Cakehead’s got a cupcake for a head and is always caught in a
                whirlwind of whisks, sugar swirls, and plated desserts. Cuphead,
                with a coffee cup for a head, is usually busy sniffing beans,
                pouring the perfect brew, or just vibing with his plants.
                Together, they bring the brand’s flavour to life, one pastry and
                pour at a time.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                Visually, these illustrations served a variety of functions in
                most delightful ways: carrying the brand’s joyful spirit, adding
                flavor to the storytelling, and making our mascots instantly
                recognisable. But more importantly, they gave the brand a
                beating heart, turning two culinary creators into characters
                people connect with.
              </p>
            </div>
            <div className="mt-6 w-full ">
              <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem] ">
                <img
                  src="/img/case-study/mascot1.jpg"
                  alt="Mascot 1"
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
                <img
                  src="/img/case-study/mascot2.jpg"
                  alt="Mascot 2"
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
                <img
                  src="/img/case-study/mascot3.jpg"
                  alt="Mascot 3"
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
                <img
                  src="/img/case-study/mascot4.jpg"
                  alt="Mascot 4"
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
                <img
                  src="/img/case-study/mascot5.jpg"
                  alt="Mascot 5"
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
                <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                  <img
                    alt=""
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/mascot3.jpg"
                  />
                </div>

                <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                  <img
                    alt=""
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/mascot1.jpg"
                  />
                </div>
                <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                  <img
                    alt=""
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/mascot4.jpg"
                  />
                </div>

                <div className="row-start-5 row-span-2 col-start-1 relative">
                  <img
                    alt=""
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/mascot5.jpg"
                  />
                </div>
                <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                  <img
                    alt=""
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/mascot2.jpg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-9 md:mt-20 md:mb-16 ">
              <div className="">
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  Brand Identity
                </LineHeading>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                The design system was crafted to feel expressive, flavorful, and
                distinct — like a visual sugar rush you want to indulge in.
                Typography played a key role in setting the tone. We paired
                Stinger — with its bouncy, animated curves — with Inter, a crisp
                sans-serif that kept things clear and grounded. Together, they
                let us dance between loud, energetic headlines and warm,
                friendly copy, all while staying on-brand.
              </p>

              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                The core color palette kept things simple but sunny: classic
                black and white, plus a punchy yellow that radiates good vibes.
                Then came the flavour pops, a supporting cast of colours
                inspired by desserts themselves. Think caramel swirl browns,
                candy crush reds, to strawberry kiss pinks, sprinkled into
                product-focused storytelling.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                Visually, the dynamic identity comprises many parts –
                illustrated mascots, whimsical doodle-icons of cafe and bakery
                tools, spill-&-drip motifs that mimicked icing, froth, and
                drizzle— paired with drool-bait imagery, and a bank of remixed
                song lyrics with fun puns.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                Sitting contrary in this sugar-free, diet-watching era of
                restraint, P.U. Dingding champions indulgence. The brand is
                always coaxing you to jam and binge.
              </p>
            </div>
            <div className="mt-6 w-full  mx-auto">
              {/* Image Layout - Different Heights for Staggered Look */}
              <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem] ">
                <img
                  src="/img/case-study/identity2.jpg"
                  alt="identity 1"
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
                <img
                  src="/img/case-study/identity5.jpg"
                  alt="identity 2"
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
                <img
                  src="/img/case-study/identity4.jpg"
                  alt="identity 3"
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
                <img
                  src="/img/case-study/identity3.jpg"
                  alt="identity 4"
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
                <img
                  src="/img/case-study/identity1.jpg"
                  alt="identity 5"
                  className="w-[15rem] object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
                <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                  <img
                    alt=""
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/identity4.jpg"
                  />
                </div>

                <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                  <img
                    alt=""
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/identity2.jpg"
                  />
                </div>
                <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                  <img
                    alt=""
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/identity3.jpg"
                  />
                </div>

                <div className="row-start-5 row-span-2 col-start-1 relative">
                  <img
                    alt=""
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/identity1.jpg"
                  />
                </div>
                <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                  <img
                    alt=""
                    loading="lazy"
                    className=" w-[15rem] object-cover rounded-lg shadow-md"
                    src="/img/case-study/identity5.jpg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-9 md:mt-20 md:mb-16">
              {/* Left Side */}

              <div className="">
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  The Experience
                </LineHeading>
              </div>
              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                The real magic of P.U. Dingding came alive at the cafe itself,
                where people could see, touch, taste, and truly feel the brand
                in action. We wanted every little detail in the space to echo
                the same joy and warmth we’d baked into the identity.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                The cafe was designed to be a burst of happiness within a larger
                space, with illustrated accent walls, cheerful messaging, and
                cheeky signage that made the whole setup feel full of
                personality. Everything customers came in contact with, coasters
                and menus, staff uniforms, badges, and flyers, was designed to
                carry the same cheerful energy. Packaging got extra love, of
                course. With punny one-liners and vibrant visuals, unboxing a
                dessert from P.U. Dingding felt like unwrapping a present — a
                sweet little ritual you’d want to repeat again and again (and
                again and again).
              </p>

              <div className="my-9 md:my-16 w-full  mx-auto ">
                {/* Heading */}
                {/* Image Row - 1440 x 280 px */}
                <div className="hidden md:block md:flex justify-center space-x-4 md:w-[78.7rem] mx-auto relative  mb-9 md:mb-16">
                  <img
                    src="/img/case-study/experience1.jpg"
                    alt="Mascot 1"
                    className="w-[15rem] object-cover rounded-lg shadow-md"
                  />
                  <img
                    src="/img/case-study/experience2.jpg"
                    alt="Mascot 2"
                    className="w-[15rem] object-cover rounded-lg shadow-md"
                  />
                  <img
                    src="/img/case-study/experience3.jpg"
                    alt="Mascot 3"
                    className="w-[15rem] object-cover rounded-lg shadow-md"
                  />
                  <img
                    src="/img/case-study/experience4.jpg"
                    alt="Mascot 4"
                    className="w-[15rem] object-cover rounded-lg shadow-md"
                  />
                  <img
                    src="/img/case-study/experience5.jpg"
                    alt="Mascot 5"
                    className="w-[15rem] object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr]  aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[10rem] gap-x-[2rem] gap-y-[9rem]">
                  <div className="!row-start-3 col-start-1 row-span-2 md:row-span-1 relative">
                    <img
                      alt=""
                      loading="lazy"
                      className=" w-[15rem] object-cover rounded-lg shadow-md"
                      src="/img/case-study/experience3.jpg"
                    />
                  </div>

                  <div className="row-start-1 row-span-2 md:col-start-3 md:row-span-3 relative">
                    <img
                      alt=""
                      loading="lazy"
                      className=" w-[15rem] object-cover rounded-lg shadow-md"
                      src="/img/case-study/experience1.jpg"
                    />
                  </div>
                  <div className="row-start-4 md:row-start-3 col-start-2 row-span-2  relative">
                    <img
                      alt=""
                      loading="lazy"
                      className=" w-[15rem] object-cover rounded-lg shadow-md"
                      src="/img/case-study/experience4.jpg"
                    />
                  </div>

                  <div className="row-start-5 row-span-2 col-start-1 relative">
                    <img
                      alt=""
                      loading="lazy"
                      className=" w-[15rem] object-cover rounded-lg shadow-md"
                      src="/img/case-study/experience5.jpg"
                    />
                  </div>
                  <div className="row-start-2 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                    <img
                      alt=""
                      loading="lazy"
                      className=" w-[15rem] object-cover rounded-lg shadow-md"
                      src="/img/case-study/experience2.jpg"
                    />
                  </div>
                </div>
              </div>

              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-6">
                Online, the P.U. Dingding universe just kept growing. Instagram
                became our little corner of the internet where desserts and
                coffees looked too good to scroll past, mascots made mischief,
                and behind-the-scenes moments felt like a peek into the kitchen.
                The feed was a mix of drool-worthy shots, pun-filled captions,
                and reels that told sweet stories (and often sparked cravings).
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[150%] mb-9 md:mb-20">
                The result? More than just coffee and cake, the cafe is earning
                brand love for its generous servings of nostalgia, connection,
                and feel-good moments that keep people coming back for more. In
                fact, fans are so smitten with the brand identity, they’re
                asking for merchandise to take home! Thanks to the success of
                the launch, P.U. Dingding is all set to level up, with
                standalone stores and celebration cakes planned in the next 2
                years.
              </p>
            </div>
          </div>
        </div>
        {/* <div className='md:pb-18 pb-4 text-white md:pt-20 pt-10'>
                    <CommercialSection
                        sources={commercials?.sources}
                        type={commercials?.type}
                        isWhiteText={false}
                        showHeading={true}
                        className={`mt-24 `}
                    />
                </div> */}
        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

      <Testimonials
        title="what our client says"
        testimonialData={testimonialsDesign.filter(
          (t) => t.name === 'NAKUL KULKARNI'
        )}
        className="pb-15 md:pb-30"
      />

      {/* <SimilarPosts
                tag="explore more case studies"
                className="py-15 md:pb-[7.5rem]  "
                posts={similarPostsData}
            /> */}
    </>
  )
}
Colearn.PageLayout = SCSLayout
export default Colearn
