import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'
import Contact from '@/components/contact'

const config = {
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <Layout>
      <NextSeo {...config} />
      <Contact />
    </Layout>
  )
}
