import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Twitter, Linkedin } from '@/components/icons'
import {
  SEO,
  WorkHeroSection,
  StatsSection,
  Testimonials,
  PressSection,
} from '@/components/shared'
import { useRouter } from 'next/router'
import { getPlayWorks, getPlayWorkDetails } from '@/utils/graphql'
import { formatPlayPosts } from '@/utils/formate'
import { CommercialSection } from '@/components/pages/work'
import { buildVideoSchema } from '@/components/schema/case-study-videos'

const HERO_VIDEOS = {
  'my11circle-digital-ad-film': {
    desktop: '/img/works/My11Cicrle-hero.mp4',
    mobile: '/img/works/my-11-circle.mp4',
  },
  'poetic-video-mygate': {
    desktop: '/img/works/MyGate-hero.mp4',
    mobile: '/img/works/heros-mygate.mp4',
  },
}

const LOGO_WIDTHS = {
  'pudingding-cafe-design-launch': { desktop: 120, mobile: 120 },
  'indeed-india-radhika-apte': { desktop: 260, mobile: 150 },
  'csr-video-infosys-street-child': {
    desktop: 150,
    mobile: 150,
    src: '/img/logos/infosys-logo.webp',
  },
  'interactive-explainer-slb': {
    desktop: 150,
    mobile: 150,
    src: '/img/logos/slb-logo-new.webp',
  },
  'exicom-ev-charger-rebrand': {
    desktop: 150,
    mobile: 150,
    src: '/img/logos/exicom_logo.webp',
  },
  'tata-inclusion-auto-comp': {
    desktop: 150,
    mobile: 150,
    src: '/img/logos/tata-logo.svg',
  },
  'abstract-animation-video-infosys-cobalt-launch': {
    src: '/img/logos/infosys-cobalt.svg',
  },
}

const PRESS_DATA = {
  'poetic-video-mygate': {
    title: "Security agency MyGate's campaign is an ode to security guards",
    image: { src: '/img/works/mygate-campign-thumb.webp', width: 642, height: 428 },
    content: "MyGate has come up with a campaign, which is an ode to the security guards. The film has been created by Makerrs. It highlights the hard work put in by the security guards, which often go unappreciated",
  },
}

const ArticleSingle = ({ article }) => {
  const blogRef = useRef()
  const router = useRouter()
  let workJsonObj = {}
  try {
    workJsonObj = JSON.parse(article?.workDetails?.workJson || '{}')
  } catch {
    workJsonObj = {}
  }
  const stats = workJsonObj?.stats_data || []

  const heroVideo = HERO_VIDEOS[router.query.slug]
  const desktopVideo = workJsonObj?.desktopVideo || heroVideo?.desktop || null
  const mobileVideo = workJsonObj?.mobileVideo || heroVideo?.mobile || null
  const SPLIT_MARKER = '<!-- more -->'
  const [contentBefore, contentAfter] = useMemo(() => {
    const raw = article?.content || ''
    const idx = raw.indexOf(SPLIT_MARKER)
    if (idx === -1) return [raw, '']
    return [raw.slice(0, idx), raw.slice(idx + SPLIT_MARKER.length)]
  }, [article?.content])
  const articleUrl = `https://www.makerrs.com${router.asPath}`
  const logo = useMemo(() => {
    const override = LOGO_WIDTHS[router.query.slug?.toLowerCase()]
    return {
      src: override?.src ?? article?.workDetails?.logo?.sourceUrl,
      width:
        override?.desktop ??
        Math.min(article?.workDetails?.logo?.mediaDetails?.width ?? 150, 150),
      mobileWidth: override?.mobile ?? null,
      height: article?.workDetails?.logo?.mediaDetails?.height ?? 70,
    }
  }, [article, router.query.slug])
  const tags = useMemo(() => {
    return article?.categories?.nodes?.map((cat) => cat.name) || []
  }, [])
  const banner = useMemo(() => {
    return {
      src: article?.workDetails?.banner?.sourceUrl,
      width: article?.workDetails?.banner?.mediaDetails?.width || 1600,
      height: article?.workDetails?.banner?.mediaDetails?.height || 900,
    }
  }, [])
  const tocTrigger = () => {
    settoc((state) => !state)
  }

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

  useEffect(() => {
    const headings = [...blogRef.current?.querySelectorAll('h2[id]')]
    const figcaption = [...blogRef.current?.querySelectorAll('figcaption')]
    const img_center = [...blogRef.current?.querySelectorAll('.wp-image-1064')]
    const tableFigures = [
      ...blogRef.current?.querySelectorAll('.wp-block-table'),
    ]
    const images = [...blogRef.current?.querySelectorAll('.wp-block-image img')]
    const figures = [
      ...blogRef.current?.querySelectorAll('figure.wp-block-image'),
    ]

    figures.forEach((figure) => {
      figure.style.setProperty('width', '78.8rem', 'important')
      figure.style.setProperty('max-width', '78.8rem', 'important')
    })

    images.forEach((img) => {
      img.style.setProperty('width', '100%', 'important')
      img.style.setProperty('max-width', '100%', 'important')
    })

    const scroll = () => {
      const windowScrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      const actives = []
      if (headings.length) {
        actives.push(headings[0].id)
      }

      tableFigures.forEach((tableWrapper) => {
        const table = tableWrapper.querySelector('table')
        if (!table) return
        table.style.border = '1px solid black'
        table.style.borderCollapse = 'collapse'
        table.style.width = '100%'
        table.style.marginBottom = '24px'
        table.style.tableLayout = 'fixed'
        table.style.wordWrap = 'break-word'
        table.style.overflowWrap = 'break-word'
        const isMobile = window.innerWidth <= 768
        const fontSize = isMobile ? '13px' : '16px'
        const cellPadding = isMobile ? '3px' : '12px'
        table.querySelectorAll('th').forEach((th) => {
          th.style.border = '1px solid black'
          th.style.padding = cellPadding
          th.style.fontSize = fontSize
        })
        table.querySelectorAll('td').forEach((td) => {
          td.style.border = '1px solid black'
          td.style.padding = cellPadding
          td.style.verticalAlign = 'top'
          td.style.fontSize = fontSize
        })
      })

      figcaption.forEach((figcaption) => {
        figcaption.style.textAlign = 'center'
        figcaption.classList.add('relative', 'bottom-5')
      })

      img_center.forEach((img) => {
        img.classList.add('relative', 'left-[13%]')
      })

      headings.forEach((h) => {
        h.style.paddingTop = '28px'
        if (
          windowScrollTop + 50 >
          h.getBoundingClientRect().top + windowScrollTop
        ) {
          if (actives.indexOf(h.id) === -1) {
            actives.push(h.id)
          }
        }
      })
      if (actives.length) setActiveToc(actives[actives.length - 1])
    }
    if (headings.length) setActiveToc(headings[0].id)
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])
  const seoUrl = `https://www.makerrs.com${router.asPath}`
  const videoSchema = buildVideoSchema(router.query.slug)

  return (
    <>
      <SEO
        title={article?.workDetails?.seoTitle}
        description={article?.workDetails?.seoDesc}
        image={
          article?.featuredImage?.src ??
          'https://www.makerrs.com/img/makerrs-og.jpg'
        }
        url={seoUrl}
      />
      <WorkHeroSection
        title={article?.title}
        logo={logo}
        socials={socials}
        tags={tags}
        image={banner}
        desktopVideo={desktopVideo}
        mobileVideo={mobileVideo}
      />
      <section
        className={`bg-white overflow-hidden pb-[60px] ${workJsonObj && workJsonObj?.testimonials?.length > 0 ? 'md:!pb-[120px]' : 'md:!pb-[56px] !pb-[24px]'}`}
      >
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div
              ref={blogRef}
              className="work-content-main max-w-[914px]"
              dangerouslySetInnerHTML={{ __html: contentBefore }}
            ></div>
          </div>
        </div>
        {stats?.length > 0 && (
          <StatsSection
            tag={workJsonObj?.stats_title}
            className="mt-6 md:mt-20"
            data={stats}
            // Evenly-distributed row is opt-in for this case study only; the
            // other stat sections stay on the original layout.
            evenRow={router.query.slug === 'case-study-videos-infosys-wsj'}
            gridClassName={
              router.query.slug === 'case-study-videos-infosys-wsj'
                ? ''
                : router.query.slug === 'global-employer-branding'
                  ? 'md:right-[2em]'
                  : 'md:right-[4em]'
            }
          />
        )}
        {contentAfter && (
          <div className="container mt-10 md:mt-16">
            <div
              className="work-content-main max-w-[914px]"
              dangerouslySetInnerHTML={{ __html: contentAfter }}
            />
          </div>
        )}
        <div className="md:mt-20">
          <CommercialSection
            sources={workJsonObj.sources}
            type={workJsonObj.commercials_type}
          />
        </div>
        {workJsonObj?.testimonials && workJsonObj?.testimonials?.length > 0 && (
          <Testimonials
            title={workJsonObj?.testimonial_title}
            className="md:pt-[48px] pt-[36px]"
            testimonialData={workJsonObj?.testimonials}
          />
        )}
      </section>
      {PRESS_DATA[router.query.slug] && (
        <PressSection
          {...PRESS_DATA[router.query.slug]}
        />
      )}
      {videoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}
    </>
  )
}
export const getStaticPaths = async () => {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes || [])
  const paths = (works || []).map(({ case_study_title, workDetails }) => {
    const tag = workDetails?.url || 'featured'
    return {
      params: { create: tag, slug: case_study_title },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const { slug, create } = params
  const { data, status } = await getPlayWorkDetails(slug)

  if (!data?.work) {
    return { notFound: true }
  }

  let workJson = {}

  try {
    workJson = JSON.parse(data?.work?.workDetails?.workJson || '{}')
  } catch {
    workJson = {}
  }

  const actualTag = workJson?.url || 'featured'

  if (actualTag.toLowerCase() !== create.toLowerCase()) {
    return { notFound: true }
  }

  if (status !== 'success') {
    return {
      redirect: {
        destination: `/${create}`,
        permanent: false,
      },
    }
  }

  return {
    props: {
      article: data.work,
    },
  }
}

export default ArticleSingle
