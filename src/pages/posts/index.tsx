import Layout from '@/components/layout'
import PostIndex from '@/components/posts'
import { fetchPosts } from '@/utils/mdx/posts'

export default function Index({ posts }) {
  return (
    <Layout>
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
