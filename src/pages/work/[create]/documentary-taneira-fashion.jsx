import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
    LineHeading,
    SEO,
    Testimonials,
    WorkHeroSection,
} from '@/components/shared'

import { VideoGallery } from '@/components/pages/work/VideoGallery'
import { useRouter } from 'next/router';

export const createTestimonialData = [
    {
        key: 0,
        quote:
          'It has been a pleasure to work with the Makerrs team on Project Loom. They are a unique platform that works with a range of directors and cinematographers to produce content across multiple languages and locations. This makes them nimble and effective.',
        name: 'SHOBA NARAYAN',
        designation: 'FOUNDER',
        company: 'PROJECT LOOMS',
        image: {
          srcSet:
            '/img/testimonials/shoba-narayan.webp 533w, /img/testimonials/shoba-narayan.webp 1066w',
          sizes: '(max-width:768px) 533px, 1066px',
        }
    }
  
  ]


const pageData = {
    logo: {
        src: '/img/case-study/project-loom/taneira_homepage.png',
        alt: 'project-loom-logo',
        width: '260px',
        height: '105px'
    },
    tags: ['Digital Campaign', 'Video Content', 'Textile &  Apparel'],
    image: '/img/case-study/project-loom/project_loom_image.png',
    commercials: {
        type: 'projectLoom',
        sources: [

            {
                key: 0,
                duration: 15,
                // vimeoId: '866815060',
                name: 'Jamdani',
                company: 'INDEED',
                thumbnail: {
                    width: 642,
                    height: 430,
                    src: '/img/case-study/project-loom/jamdani.jpg',
                },
                url: "https://youtu.be/ku3sQX8VI0U"
            },
            {
                key: 1,
                duration: 15,
                // vimeoId: '866815060',
                name: 'Kanchipuram',
                company: 'INDEED',
                thumbnail: {
                    width: 642,
                    height: 430,
                    src: '/img/case-study/project-loom/kanchipuram_pattu.jpg',
                },
                url: "https://youtu.be/GJ7XGKU2tys"
            },
            {
                key: 2,
                duration: 15,
                // vimeoId: '866815060',
                name: 'Khadi',
                company: 'INDEED',
                thumbnail: {
                    width: 642,
                    height: 430,
                    src: '/img/case-study/project-loom/khadi.jpg',
                },
                url: "https://youtu.be/OD1hut59HTo"
            },
            {
                key: 3,
                duration: 15,
                // vimeoId: '866815060',
                name: 'Patan Patola',
                company: 'INDEED',
                thumbnail: {
                    width: 642,
                    height: 430,
                    src: '/img/case-study/project-loom/patan_patola.jpg',
                },
                url: "https://youtu.be/eC4tWBc0ixY"
            },
            {
                key: 4,
                duration: 15,
                // vimeoId: '866815060',
                name: 'Chanderi',
                company: 'INDEED',
                thumbnail: {
                    width: 642,
                    height: 430,
                    src: '/img/case-study/project-loom/chanderi.jpg',
                },
                url: "https://youtu.be/wR1yN_HXwxc"
            }
        ],
    },
}

function ProjectLoom() {
        const router = useRouter();
    const fullUrl = `https://www.makerrs.com${router.asPath}`;
    const { logo, tags, commercials, image } = pageData
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
                title="Documentaries: Traditional Indian Handlooms and Weavers"
                url="https://www.makerrs.com/work/video-production/documentary-taneira-fashion"
            />
            <WorkHeroSection
                title={'Documentaries: Traditional Indian Handlooms and Weavers'}
                logo={logo}
                socials={socials}
                tags={tags}
                image={image}
            />
            <section className="bg-white overflow-hidden">
                <div className="container">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-9 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Background & Objective
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-8">
                                In the rich fabric of India&apos;s handloom traditions, Project LooM, led by author and journalist Shoba Narayan, emerges as a beacon for artisans working tirelessly in anonymity. Commissioned by Taniera, a Titan company, the project aims to elevate the art of handloom craftsmanship, shedding light on the history and culture woven into each fabric.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-8">
                                Shoba presented a unique challenge to us: how do you make consumers more aware and appreciative of the artistry in their hands? The mission extended to inspire a deeper understanding and value for the craftsmanship involved. The trickiest part? Creating these stories across the country - with each having their own flavour, inspired by the handloom and the region.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-20 md:mb-20">
                            <LineHeading className="mb-6 md:mb-9">
                                Creative approach
                            </LineHeading>

                            <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-[30px]">
                                Our approach was a deep dive into the world of Indian handloom, working closely with Shoba Narayan to understand the heart of these traditions. We embarked on a journey of discovery - meeting artisans and art historians, asking questions, and capturing the history of the weaves as well as the essence of their unique creative processes.
                            </p>
                            <p className="text-base md:text-2xl text-rb-black/80 leading-7 mb-[30px]">
                                The result was a series of six visually stunning short documentary films, each unravelling a unique intricate handloom process from inception to completion. We traversed locations that have a rich history of weaving traditions and weaver collectives, bringing to life the untold stories of India’s weaving traditions and the handlooms that today’s consumers cherish.
                            </p>

                        </div>
                    </div>
                </div>
                <div className='md:pb-0 pb-30'>
                    <VideoGallery sources={commercials?.sources} type={commercials?.type} />
                </div>
                <Testimonials
                    title={'WHAT OUR CLIENT SAYS'}
                    testimonialData={createTestimonialData}
                    className="-pt-2 md:pt-40 md:pb-30 pb-15"
                />

            </section>
        </>
    )
}
ProjectLoom.PageLayout = SCSLayout
export default ProjectLoom