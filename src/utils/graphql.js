const WP_HOST = process.env.NEXT_PUBLIC_WORDPRESS

const AUTHOR_QUERY = `
  node {
    firstName
    lastName
    description
    avatar {
      url
      width
      height
    }
  }
`

const FEATURED_IMAGE_QUERY = `
node {
  sourceUrl        
  srcSet
  altText
}    
`

// WPGraphQL for ACF v2 turned image fields into connections, so logo/banner
// resolve to AcfMediaItemConnectionEdge and the media lives under `node`.
// Asking for the old flat shape makes the WHOLE query fail validation — WP
// answers 200 with {errors:[...]} and no data, which silently emptied
// getStaticPaths and 404'd every case study. Read these via acfMedia().
const WORK_DETAILS_QUERY = `
  workJson
  logo {
    node {
      sourceUrl
      mediaDetails {
        width
        height
      }
    }
  }
  banner {
    node {
      sourceUrl
      mediaDetails {
        width
        height
      }
    }
  }
  seoTitle
  seoDesc
`

const TAXANOMY_QUERY = `
    nodes {
        name
        slug
    }
`

const WORK_PLAY_DETAILS = `
title
content
companies {
  ${TAXANOMY_QUERY}
}
tags {
  ${TAXANOMY_QUERY}
}
usage {
  ${TAXANOMY_QUERY}
}
videoDetails {
    width
    height
    aspectRatio
    duration
    fps
    publish
}
categories {
  ${TAXANOMY_QUERY}
}
workDetails {
 ${WORK_DETAILS_QUERY}
}
`
const WORK_POST_QUERY = `
    nodes {
      title
      slug
      featuredImage {
        ${FEATURED_IMAGE_QUERY}
      }
      categories {
        ${TAXANOMY_QUERY}
      }
      tags {
        ${TAXANOMY_QUERY}
      }
      companies {
        ${TAXANOMY_QUERY}
      }   
      workDetails {
        ${WORK_DETAILS_QUERY}
      }   
    }
   
`

const GLOBAL_LP_POST_QUERY = `
    nodes {
      title
      slug
      featuredImage {
        ${FEATURED_IMAGE_QUERY}
      }
      categories {
        ${TAXANOMY_QUERY}
      }
      tags {
        ${TAXANOMY_QUERY}
      }
      companies {
        ${TAXANOMY_QUERY}
      }
      globalLp {
        customTitle
        globalLpVideo
      }
           
    }
`

const POST_QUERY = `
slug
title
excerpt
date
featuredImage {
  ${FEATURED_IMAGE_QUERY}
}
author {  
  ${AUTHOR_QUERY}  
}
categories {
  ${TAXANOMY_QUERY}
}
tags {
  ${TAXANOMY_QUERY}
}
blogAdditionalData {
  seoDesc
  seoTitle
}
`

// A build fans ~75 case study queries at WordPress at once, and detail queries
// have been measured at 5s+ under that concurrency — close enough to the old
// 10s abort that builds routinely lost a random subset of pages. Every loss
// used to become a permanent 404, so give WP room and retry before giving up.
const WP_TIMEOUT_MS = 30000
const WP_MAX_RETRIES = 2

const getWpQuery = async (query, variables) => {
  let options = {}
  if (variables) {
    options.variables = variables
  }
  const resBody = {
    status: 'error',
    data: null,
  }

  for (let attempt = 0; attempt <= WP_MAX_RETRIES; attempt++) {
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), WP_TIMEOUT_MS)
      const result = await fetch(WP_HOST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          ...options,
        }),
        signal: controller.signal,
      })
      clearTimeout(timeout)
      if (result.ok) {
        const payload = await result.json()
        // GraphQL reports schema/validation failures as HTTP 200 with an
        // `errors` array and no `data`. Treating that as success is what let a
        // WordPress plugin update silently empty every works query — the build
        // then prerendered zero case studies and 404'd the lot. Fail instead.
        if (payload?.errors?.length || !payload?.data) {
          console.log(
            `WP GraphQL errors at : ${WP_HOST}`,
            JSON.stringify(payload?.errors || 'no data returned').slice(0, 500)
          )
        } else {
          resBody.status = 'success'
          resBody.data = payload.data
          return resBody
        }
      } else {
        console.log(`WP query HTTP ${result.status} at : ${WP_HOST}`)
      }
    } catch (error) {
      console.log(`Error at : ${WP_HOST}`, error?.name || String(error))
    }

    resBody.status = 'error'
    resBody.data = null

    if (attempt < WP_MAX_RETRIES) {
      await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)))
    }
  }

  return resBody
}

export const getPlayWorks = (tags) => {
  return getWpQuery(
    tags
      ? `
query MyQuery($tags:[String]) {
  works(first:200, where: {tagSlugIn: $tags,orderby: {field: DATE, order: DESC}}) {
      ${WORK_POST_QUERY}
  }
}
`
      : `
query MyQuery {
    works(first:200, where: {orderby: {field: DATE, order: DESC}}) {
        ${WORK_POST_QUERY}
    }
  }
`,
    tags ? { tags } : null
  )
}

export const getGlobalWorks = (tags) => {
  return getWpQuery(
    tags
      ? `
query MyQuery($tags:[String]) {
  works(first:200, where: {tagSlugIn: $tags,orderby: {field: DATE, order: DESC}}) {
      ${GLOBAL_LP_POST_QUERY}
  }
}
`
      : `
query MyQuery {
    works(first:200, where: {orderby: {field: DATE, order: DESC}}) {
        ${GLOBAL_LP_POST_QUERY}
    }
  }
`,
    tags ? { tags } : null
  )
}

export const getAllBlogs = () => {
  return getWpQuery(
    `
    query getAllBlogs{
      posts(first:200){
        nodes{
          slug
        }
      }
    }
  `,
    {}
  )
}

export const getBlogs = (after = null, first = 1) => {
  return getWpQuery(
    `
  query BlogPosts($first: Int!, $after: String) {
    posts(
      first: $first
      after: $after
      where: {orderby: {field: DATE, order: DESC}}
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ${POST_QUERY}
        }
      }
    }
  }
  `,
    { first, after }
  )
}
export const getBlog = (slug) => {
  return getWpQuery(
    `
  query Blog($slug: ID!) {
    post(id: $slug, idType: SLUG) {
        content
        ${POST_QUERY}
    }
  }
  `,
    { slug }
  )
}
export const getPlayWorkDetails = (slug) => {
  return getWpQuery(
    `query PlayWorkDetailQuery($slug: ID!) {
        work(id: $slug, idType: SLUG) {              
            ${WORK_PLAY_DETAILS}
        }
    }`,
    {
      slug,
    }
  )
}

export const getAllTags = () => {
  return getWpQuery(`
    query workTags {
      tags(first:200) {
        nodes {
          name
          slug      
        }
      }
    }
  `)
}
export const getRelatedBlogs = async (slug, tagSlug) => {
  const { data: latestData } = await getWpQuery(`
  query getLatestBlogs {
    posts(first:4, where: {orderby: {field: DATE, order: DESC}}) {
      nodes{
        ${POST_QUERY}
      }
    }
  }
  `)

  let similarData = null
  if (tagSlug?.length) {
    ;({ data: similarData } = await getWpQuery(
      `
  query getBlogsByTag($tagSlug: [String]) {
    posts(first:4, where: {tagSlugIn: $tagSlug, orderby: {field: DATE, order: DESC}}) {
      nodes{
        ${POST_QUERY}
      }
    }
  }
  `,
      { tagSlug }
    ))
  }

  const relatedBlogs = [
    ...(latestData?.posts?.nodes ?? []),
    ...(similarData?.posts?.nodes ?? []),
  ]
    .filter((blog) => blog.slug != slug)
    .slice(0, 3)

  return relatedBlogs
}

export const getPlaySliderData = () =>
  getWpQuery(
    `
query getWorkPlaySliderData($tags:[String]) {
  works(first:4, where: {tagSlugIn: $tags, orderby: {field: DATE, order: DESC}}) {
    nodes{
      title
      slug
      featuredImage {
        ${FEATURED_IMAGE_QUERY}
      }
      companies {
        ${TAXANOMY_QUERY}
      }
      workDetails {        
        previewLink {
          mediaDetails{
            width
            height
          }
          mediaItemUrl
        }
      }
    }
  }
}
`,
    { tags: ['featured-work'] }
  )
export const getFeaturedPlayWorks = () =>
  getWpQuery(
    `
query getFeaturedPlayWorks($tags:[String]) {
  works(first:8, where: {tagSlugIn: $tags, orderby: {field: DATE, order: DESC}}) {
    nodes{
      title
      slug
      featuredImage {
        ${FEATURED_IMAGE_QUERY}
      }
      companies {
        ${TAXANOMY_QUERY}
      }      
    }
  }
}
`,
    {
      tags: ['featured-work'],
    }
  )

// Curated for the homepage blog section (not literally "latest" — client asked
// for these 3 specific posts, in this order) — see HOMEPAGE_ARTICLE_SLUGS.
const HOMEPAGE_ARTICLE_SLUGS = ['podcast-strategy', 'winning-brand-strategy', 'corporate-video-case-studies']

export const getLatestArticle = async () => {
  const result = await getWpQuery(`
  query getAllBlogs{
    posts(where: {nameIn: ${JSON.stringify(HOMEPAGE_ARTICLE_SLUGS)}}){
      nodes{
        slug
        title
        date
        excerpt
        author {
          ${AUTHOR_QUERY}
        }
        featuredImage {
          ${FEATURED_IMAGE_QUERY}
        }
        tags {
          ${TAXANOMY_QUERY}
        }
      }
    }
  }
  `)

  // WPGraphQL's nameIn doesn't preserve input order — re-sort to match
  // HOMEPAGE_ARTICLE_SLUGS so the section renders in the order requested.
  const nodes = result?.data?.posts?.nodes
  if (nodes) {
    nodes.sort((a, b) => HOMEPAGE_ARTICLE_SLUGS.indexOf(a.slug) - HOMEPAGE_ARTICLE_SLUGS.indexOf(b.slug))
  }

  return result
}
