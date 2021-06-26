import Link from 'next/link'
import Image from 'next/image'

import Layout from '@/components/layout'
import { fetchPosts } from '@/utils/mdx/posts'

const requireCover = (post) => {
  if (!post.slug || !post.data.cover) throw new Error()
  return require(`@/contents/posts/${post.slug}/${post.data.cover}`).default
}

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
            <Image
              width={512}
              height={192}
              src={requireCover(post)}
              layout="intrinsic"
              alt="preview"
              objectFit="cover"
            />
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
