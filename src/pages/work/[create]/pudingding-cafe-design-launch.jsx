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

const pageData = {
  logo: {
    src: '/img/logos/puding.png',
    alt: 'pu dingding logo',
    width: '120',
    height: '50',
  },
  specifyWidth: 'md:!w-[100px] !w-[80px]',
  image: '/img/case-study/pdd_integrated_banner.jpg',
  tags: [
    'F&B',
    'Brand Visual Identity',
    'Launch Campaign',
    'Social Media Content',
  ],
  commercials: {
    type: 'projectLoom',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '1095004658',
        name: 'Introducing the Founders',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/puding-thumbnail-1.png',
        },
      },
      {
        key: 1,
        duration: 128,
        vimeoId: '1095004694',
        name: ' Launching P.U. Dingding at Kaavu',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/pdd_integrated_thumbnail.png',
        },
      },
    ],
  },
}

function PDDIntegrated() {
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
      <SEO title="Case Study: PDD Integrated " 
      url="https://www.makerrs.com/work/brand-campaign/pudingding-cafe-design-launch"
      />
      <WorkHeroSection
        title={'Branding and Launch Campaign for a Dessert Cafe'}
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
              <LineHeading className="mb-6 md:mb-9">
                The Opportunity
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                India’s F&B scene is{' '}
                <a
                  href="https://www.indianretailer.com/restaurant/article/what-s-trending-in-desserts-for-2025-a-sweet-revolution-ahead.12118"
                  className="text-blue-600 hover:text-blue-800" target='_blank'
                >
                  {' '}
                  buzzing
                </a>
                , with dessert cafes and coffee spots becoming the new hangout
                for a generation that loves to eat, click, and share. DBS
                Ventures spotted the perfect opportunity to jump in, but not
                with just another dessert cafe. The vision was to build
                something more: a dessert and coffee brand that people wouldn’t
                just visit, but fall for. The kind of place they’d want to come
                back to, rave about, and tag their friends in. But, in a world
                where everyone’s already selling great cakes and coffees, the
                real challenge was creating an experience that sticks long after
                the last bite.
              </p>
            </div>

            <div className="mt-9 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative Approach
              </LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-7.5">
                At the heart of this brand were the dream team: Kuncheria
                Marattukalam, the brain behind the business, and co-founders
                Nakul Kulkarni and Aiyappa KT, the creative minds with
                contrasting personalities that share a love for their craft.
                Nakul, a global-trotting pastry chef, brought fun, flair, and
                the kind of dessert that makes people drool. Aiyappa, a grounded
                coffee farmer from Kodagu, brought the richness of his roots and
                a deep love for coffee that’s strong, soulful, and brewed with
                care.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-7.5">
                The contrast between their personalities, one expressive and
                experimental, the other grounded and introspective, offered the
                perfect starting point for the brand narrative. Our task was to
                translate that dynamic into a cohesive identity and bring it to
                life in a way that was engaging and memorable, especially on
                digital platforms, where first impressions are make or break.
              </p>
            </div>
            <div className="relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)]  md:w-[78.7rem] -mx-4 md:mx-0 md:mb-[1.875rem] mt-7.5 md:mt-16">
              <img
                src="/img/case-study/pdd_integrated_banner_1.jpg"
                alt="pdd-integrated"
                srcset=""
              />
            </div>

            <div className="mt-9 md:mt-20 bg-white">
              <div>
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[450px]">
                  The Brand Identity
                </LineHeading>
              </div>
              <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-7.5">
                P.U. Dingding wasn’t just built on cakes and coffees – it was
                built on the bliss of a slow Sunday morning with your favorite
                people – cozy, nostalgic, and filled with laughter over sips of
                coffee, shared desserts, and inside jokes. It was designed to
                feel like comfort with character; familiar yet fresh, indulgent,
                joyful, but never over-the-top.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-7.5">
                When it came to brand identity, we wanted to strike a sweet
                balance between structure and play. Cakehead and Cuphead, the
                brand mascots inspired by Nakul and Aiyappa, became the soul of
                the brand, helping us share their stories, showcase their
                passions (on a plate and in a cup), and bring their delightful
                contrast to life, one swirl and sip at a time.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-7.5">
                Visually, we wanted P.U. Dingding to feel like a sugar rush;
                full of whimsy, vibrancy, and just a little bit of mess (in the
                best way). Think doodles of whisks and coffee cups, cheeky
                dessert icons, and playful drips and swirls that looked like
                icing, froth, or a rogue spoonful of meringue. Every element,
                from coasters to menus to takeaway boxes, felt like it belonged
                in a world where fun was baked into every detail.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-[30px]">
                And the voice? Confident, casual, and never afraid of a pun or
                two. From “Another one bites the crust” to “Brewhemian
                Rhapsody”, we wanted to serve a smile along with sugar caffeine.
              </p>
            </div>
            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem] mt-16 ">
              <img
                src="/img/case-study/brand_identity_1.jpg"
                alt="brand_identity"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/brand_identity_2.jpg"
                alt="brand_identity"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/brand_identity_3.jpg"
                alt="brand_identity"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/brand_identity_4.jpg"
                alt="brand_identity"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/brand_identity_5.jpg"
                alt="brand_identity"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr] gap-5 aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[9rem] gap-x-[2rem] gap-y-[9rem]">
              <div className="row-start-1 col-start-1 row-span-2 md:row-span-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/brand_identity_1.jpg"
                />
              </div>

              <div className="row-start-2 col-start-2 row-span-2 md:col-start-3 md:row-span-3 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/brand_identity_2.jpg"
                />
              </div>
              <div className="row-start-3 col-start-1 md:row-start-3 row-span-2  relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/brand_identity_3.jpg"
                />
              </div>

              <div className="row-start-4 col-start-2 row-span-2 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/brand_identity_4.jpg"
                />
              </div>
              <div className="row-start-5 col-start-1 md:col-start-4  relative row-span-2 md:-translate-y-6">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/brand_identity_5.jpg"
                />
              </div>
            </div>

            <div className="mt-9 md:mt-20 bg-white ">
              <div>
                <LineHeading className="mb-6 md:mb-9 text-primary-red uppercase tracking-wide text-sm md:text-base md:w-[500px]">
                  The Social Media Launch Campaign
                </LineHeading>
              </div>
              <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-7.5">
                To launch P.U. Dingding, we treated social media as our main
                stage, our digital tasting table. We wanted to build buzz, turn
                heads, and drive curiosity. The goal was clear: boost brand
                visibility, spark engagement, and tempt dessert lovers to check
                us out in person. Through a visually rich content strategy, we
                showcased the star players: the desserts, the coffee, and the
                quirky, inviting space, all designed to catch attention, create
                craving, and convert scrolling into footfall.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-7.5">
                To do this, we whipped up a digital campaign that introduced the
                brand in a way that was impossible to scroll past. At the heart
                of it were Cakehead and Cuphead, our mascots. Through them, we
                didn’t just tell a brand story, we built a whole dessert cafe
                universe. Our animated launch reel whisked viewers straight into
                their world of swirls, beans, sugar highs, and friendly banter,
                setting the tone for a feed full of flavour and personality.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-7.5">
                We brought the in-cafe experience to the feed with candid
                reactions from customers trying the desserts and coffee for the
                first time, a reel that captured genuine smiles, full mouths,
                and that “OMG” moment after taking the first bite.
              </p>
              <p className="md:text-xl text-rb-black/70 !leading-[170%] mb-0">
                Signature dishes were also given their moment to shine, each one
                showcased with drool-worthy visuals and chef notes that made
                them feel less like products and more like personal
                recommendations.
              </p>
            </div>

            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem]  mt-16  md:h-[375px] mb-[30px]">
              <img
                src="/img/case-study/social_media_1.jpg"
                alt="social_media"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/social_media_2.jpg"
                alt="social_media"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/social_media_3.jpg"
                alt="social_media"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/social_media_5.jpg"
                alt="social_media"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/social_media_4.jpg"
                alt="social_media"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr] gap-5 aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[9rem] gap-x-[2rem] gap-y-[9rem]">
              <div className="row-start-1 col-start-1 row-span-2 md:row-span-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/social_media_1.jpg"
                />
              </div>

              <div className="row-start-2 col-start-2 row-span-2 md:col-start-3 md:row-span-3 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/social_media_2.jpg"
                />
              </div>
              <div className="row-start-3 col-start-1 md:row-start-3 row-span-2  relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/social_media_3.jpg"
                />
              </div>

              <div className="row-start-5 col-start-1 row-span-2  relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/social_media_4.jpg"
                />
              </div>
              <div className="row-start-4 col-start-2 md:col-start-4  relative row-span-2 md:-translate-y-6">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/social_media_5.jpg"
                />
              </div>
            </div>
            <p className="md:text-xl md:mt-16 text-rb-black/70 !leading-[170%] mb-0">
              Even the packaging got a spotlight. We captured the little joys, a
              pun tucked inside a box, an illustration wrapping around a coffee
              cup, showing how the experience extended beyond the cafe and into
              people’s hands.
            </p>
            <div className="flex justify-center  hidden md:block md:flex  space-x-4 md:w-[78.7rem] mt-16 md:h-[375px] mb-[30px]">
              <img
                src="/img/case-study/launch_campaign_1.jpg"
                alt="launch_campaign"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/launch_campaign_2.jpg"
                alt="launch_campaign"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/launch_campaign_3.jpg"
                alt="launch_campaign"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/launch_campaign_4.jpg"
                alt="launch_campaign"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
              <img
                src="/img/case-study/launch_campaign_5.jpg"
                alt="launch_campaign"
                className=" w-[15rem] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="block md:hidden grid grid-rows-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] grid-cols-2 md:grid-rows-[0.15fr_0.28fr_0.37fr_0.20fr] md:grid-cols-[0.17fr_0.25fr_0.333fr_0.247fr] gap-5 aspect-[343/586] md:aspect-[1260/787] w-full mt-[70px] mb-[9rem] gap-x-[2rem] gap-y-[9rem]">
              <div className="row-start-1 col-start-1 row-span-2 md:row-span-1 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/launch_campaign_1.jpg"
                />
              </div>

              <div className="row-start-2 col-start-2 row-span-2 md:col-start-3 md:row-span-3 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/launch_campaign_2.jpg"
                />
              </div>
              <div className="row-start-3 col-start-1 md:row-start-3 row-span-2  relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/launch_campaign_3.jpg"
                />
              </div>

              <div className="row-start-4 col-start-2 row-span-2 relative">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/launch_campaign_4.jpg"
                />
              </div>
              <div className="row-start-5 col-start-1 md:col-start-4  relative row-span-2 md:-translate-y-6">
                <img
                  alt=""
                  loading="lazy"
                  className=" w-[15rem] object-cover rounded-lg shadow-md"
                  src="/img/case-study/launch_campaign_5.jpg"
                />
              </div>
            </div>
            <p className="md:text-xl md:mt-16 text-rb-black/70 !leading-[170%] mb-[30px]">
              This campaign did more than just introduce P.U. Dingding, it gave
              the brand a personality people could instantly connect with. In a
              space full of sameness, it carved out a voice that felt fresh,
              fun, and unmistakably its own. And the best part? People who met
              the brand online didn’t just double-tap — they showed up, craving
              the experience in real life.
            </p>
          </div>
        </div>

        <div className="md:pb-30 pb-15">
          <VideoGallery
            sources={commercials?.sources}
            type={commercials?.type}
            showHeading={true}
          />
        </div>
      </section>
    </>
  )
}
PDDIntegrated.PageLayout = SCSLayout
export default PDDIntegrated
