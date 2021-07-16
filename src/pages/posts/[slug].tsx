import { NextSeo } from 'next-seo'

import defaultConfig from '../../../next-seo.config'
import Layout from '@/components/layout'
import Detail from '@/components/posts/detail'
import { getPost, fetchSlugs } from '@/lib/mdx/posts'

import type { Post } from '@/lib/mdx/posts'

const {
  openGraph: { url },
} = defaultConfig

const coverUrl = ({ slug, coverFull }: { slug: string; coverFull: string }) => {
  const i = require(`@/contents/posts/${slug}/${coverFull}`).default
  return `${url}${i}`
}

const ogUrl = ({ slug }: { slug: string }) => {
  return `${url}/posts/${slug}`
}

interface Props {
  post: Post
}

export default function PostPage({ post }: Props) {
  const {
    slug,
    data: { title, description, coverFull },
  } = post

  const config = {
    title: title,
    openGraph: {
      url: ogUrl({ slug }),
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

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
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
