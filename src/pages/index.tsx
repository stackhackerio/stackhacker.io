import Link from 'next/link'

import Layout from '@/components/layout'

export default function Index({ posts }) {
  return (
    <Layout>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/starters">Starters</Link>
        </li>
      </ul>
    </Layout>
  )
}
