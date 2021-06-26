import Link from 'next/link'

import Layout from '@/components/layout'
import { fetchPosts } from '@/utils/mdx/posts'

export default function Index({ posts }) {
  return (
    <Layout>
      <h1>Posts</h1>
      <Link href="/">
        <a>👈 Go back home</a>
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = fetchPosts().sort((a, b) =>
    a.data.date < b.data.date ? 1 : -1
  )

  return { props: { posts } }
}
