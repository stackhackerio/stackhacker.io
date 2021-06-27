import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'
import Top from '../components/top'
import StarterIndex from '@/components/starters'
import { fetchStarters } from '@/utils/mdx/starters'

const config = {
  title: 'Home',
}

export default function Index({ starters }) {
  return (
    <Layout>
      <NextSeo {...config} />
      <Top />
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
