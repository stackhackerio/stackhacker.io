import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'
import About from '@/components/about'

const config = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <Layout>
      <NextSeo {...config} />
      <About />
    </Layout>
  )
}
