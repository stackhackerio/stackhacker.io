import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'
import PostIndex from '@/components/posts'
import { fetchPosts } from '@/utils/mdx/posts'

import type { Post } from '@/utils/mdx/posts'

const config = {
  title: 'Posts',
}

interface Props {
  posts: Post[]
}

export default function Index({ posts }: Props) {
  return (
    <Layout>
      <NextSeo {...config} />
      <PostIndex posts={posts} />
    </Layout>
  )
}

export function getStaticProps() {
  const posts = fetchPosts().sort((a, b) =>
    a.data.date < b.data.date ? 1 : -1
  )

  return { props: { posts } }
}
