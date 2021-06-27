import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'
import PostIndex from '@/components/posts'
import { fetchPosts } from '@/utils/mdx/posts'

const config = {
  title: 'Posts',
}

export default function Index({ posts }) {
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
