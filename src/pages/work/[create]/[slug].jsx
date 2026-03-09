import React, { useEffect, useMemo, useRef, useState } from 'react'
import { LineArrow, Twitter, Whatsapp, Linkedin } from '@/components/icons'
import { Button } from '@/components/ui'
import { SEO, WorkHeroSection } from '@/components/shared'
import { TOC } from '@/components/shared/TOC'
import { useLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/router'
import { getPlayWorks, getPlayWorkDetails } from '@/utils/graphql'
import { formatPlayPosts } from '@/utils/formate'

const ArticleSingle = ({ article }) => {
  const blogRef = useRef()
  const router = useRouter()

  const articleUrl = `https://www.makerrs.com${router.asPath}`
  const logo = useMemo(()=>{
    return {
      src: article?.workDetails?.logo?.sourceUrl,
      width: 150,
      height: 70,
    }
  },[])
  const tags = useMemo(() => {
    return article?.categories?.nodes?.map(cat => cat.name) || [];
  }, []);
  const banner = useMemo(()=>{
    return {
      src: article?.workDetails?.banner?.sourceUrl,
      width: 150,
      height: 70,
    }
  },[])
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
    const sub_headings = [...blogRef.current?.querySelectorAll('.wp-block-heading')]
    const img_center = [...blogRef.current?.querySelectorAll('.wp-image-1064')]
    const tableFigures = [...blogRef.current?.querySelectorAll('.wp-block-table')];

   sub_headings.forEach((sub_heading) => {
      sub_heading.style.paddingTop = '28px';
      sub_heading.style.paddingBottom = '10px';

      // add required classes
      sub_heading.classList.add('uppercase','text-rb-black','!text-sm','md:!text-xl','!font-semibold',
        'flex','items-center','!font-opensans');

      // prevent duplicate span
      if (!sub_heading.querySelector('.heading-line')) {
        const line = document.createElement('span');
        line.className = 'heading-line h-px w-7.5 md:w-headingLine block mr-3 bg-rb-black';
        sub_heading.prepend(line);
      }
    });

    const scroll = () => {
      const windowScrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      const actives = []
      if (headings.length) {
        actives.push(headings[0].id)
      }

      tableFigures.forEach((tableWrapper) => {
        const table = tableWrapper.querySelector('table');
        if (!table) return;
        table.style.border = '1px solid black';
        table.style.borderCollapse = 'collapse';
        table.style.width = '100%';
        table.style.marginBottom = '24px';
        table.style.tableLayout = 'fixed';
        table.style.wordWrap = 'break-word';
        table.style.overflowWrap = 'break-word';
        const isMobile = window.innerWidth <= 768;
        const fontSize = isMobile ? '13px' : '16px';
        const cellPadding = isMobile ? '3px' : '12px';
        table.querySelectorAll('th').forEach((th) => {
          th.style.border = '1px solid black';
          th.style.padding = cellPadding;
          th.style.fontSize = fontSize;
        });
        table.querySelectorAll('td').forEach((td) => {
          td.style.border = '1px solid black';
          td.style.padding = cellPadding;
          td.style.verticalAlign = 'top';
          td.style.fontSize = fontSize;
        });
      });
      
      figcaption.forEach((figcaption) => {
        figcaption.style.textAlign = 'center'
        figcaption.classList.add('relative', 'bottom-5')
      })

      img_center.forEach((img) => {
        img.classList.add('relative', 'left-[13%]');
      });

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


  return (
    <>
      <SEO
        title={article?.seoTitle}
        description={article?.seoDesc}
        image={ article?.featuredImage?.src ?? 'https://www.makerrs.com/img/makerrs-og.jpg'}
        url={seoUrl}
      />
       <WorkHeroSection
        title={'Launching a Sports Brand logo with a 3D Billboard'}
          logo={logo}
          socials={socials}
          tags={tags}
          image={banner}
          // specifyWidth={specifyWidth}
        />
      <article>
        <section className="pb-10 pt-3 md:pt-0 md:pb-20">
          <div className="container">
            <div className="flex -mx-4 flex-wrap">
              <div className="w-full md:w-3/4 px-4">
                <div
                  ref={blogRef}
                  className="blog-content-main max-w-[914px]"
                  dangerouslySetInnerHTML={{ __html: article?.content }}
                ></div>
              </div>
            </div>
          </div>

          <div className="fixed bottom-12 left-0 right-0 flex justify-center md:hidden">
            <Button onClick={tocTrigger}>Table of Contents</Button>
          </div>
        </section>
      </article>
    </>
  )
}
export const getStaticPaths = async () => {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes)
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

  const workJson = JSON.parse(data?.work?.workDetails?.workJson || "{}")

  const actualTag = workJson?.url || "featured"

  if (actualTag.toLowerCase() !== create.toLowerCase()) {
    return { notFound: true }
  }

  if (status !== "success") {
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

