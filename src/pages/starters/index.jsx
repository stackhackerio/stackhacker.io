import Link from 'next/link'
import Layout from '../../components/Layout'
import { fetchPosts } from '../../utils/mdxUtils'

export default function Index({ posts }) {
  return (
    <Layout>
      <h1>Starter</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              as={`/posts/${post.slug}`}
              href={`/posts/[slug]`}
            >
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
