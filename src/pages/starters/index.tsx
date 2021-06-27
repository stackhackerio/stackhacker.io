import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'
import StarterIndex from '@/components/starters'
import { fetchStarters } from '@/utils/mdx/starters'

const config = {
  title: 'Starters',
}

export default function Index({ starters }) {
  return (
    <Layout>
      <NextSeo {...config} />
      <StarterIndex starters={starters} />
    </Layout>
  )
}

export function getStaticProps() {
  const starters = fetchStarters().sort((a, b) =>
    a.data.date < b.data.date ? 1 : -1
  )

  return { props: { starters } }
}
