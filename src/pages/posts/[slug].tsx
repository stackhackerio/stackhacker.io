import { NextSeo } from 'next-seo'
import path from 'path'

import defaultConfig from '../../../next-seo.config'
import Layout from '@/components/layout'
import Detail from '@/components/posts/detail'
import { getPost, fetchSlugs } from '@/utils/mdx/posts'

const coverUrl = ({ slug, coverFull }) => {
  const {
    openGraph: { url },
  } = defaultConfig

  const i = require(`@/contents/posts/${slug}/${coverFull}`).default
  return path.join(url, i)
}

export default function Post({ post }) {
  const {
    slug,
    data: { title, description, coverFull },
  } = post

  const config = {
    title: title,
    openGraph: {
      description: description,
      images: [
        {
          url: coverUrl({ slug, coverFull }),
        },
      ],
    },
  }

  return (
    <Layout>
      <NextSeo {...config} />
      <Detail post={post} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)

  return {
    props: { post },
  }
}

export const getStaticPaths = async () => {
  const paths = fetchSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
