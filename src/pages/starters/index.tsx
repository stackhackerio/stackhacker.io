import Link from 'next/link'

import Layout from '@/components/layout'
import { fetchStarters } from '@/utils/mdx/starters'

export default function Index({ starters }) {
  return (
    <Layout>
      <h1>Starters</h1>
      <Link href="/">
        <a>👈 Go back home</a>
      </Link>
      <ul>
        {starters.map((starter) => (
          <li key={starter.slug}>
            <Link as={`/starters/${starter.slug}`} href={`/starters/[slug]`}>
              <a>{starter.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export function getStaticProps() {
  const starters = fetchStarters().sort((a, b) =>
    a.data.date < b.data.date ? 1 : -1
  )

  return { props: { starters } }
}
