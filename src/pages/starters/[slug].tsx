import { NextSeo } from 'next-seo'
import path from 'path'

import defaultConfig from '../../../next-seo.config'
import Layout from '@/components/layout'
import Detail from '@/components/starters/detail'
import { getStarter, fetchSlugs } from '@/utils/mdx/starters'

const coverUrl = ({ slug, coverFull }) => {
  const {
    openGraph: { url },
  } = defaultConfig

  const i = require(`@/contents/starters/${slug}/${coverFull}`).default
  return path.join(url, i)
}

export default function Starter({ starter }) {
  const {
    slug,
    data: { title, description, coverFull },
  } = starter

  const config = {
    title: title,
    openGraph: {
      description: description,
      images: [
        {
          url: coverUrl({ slug, coverFull }),
        },
      ],
    },
  }

  return (
    <Layout>
      <NextSeo {...config} />
      <Detail starter={starter} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const starter = await getStarter(params.slug)

  return {
    props: { starter },
  }
}

export const getStaticPaths = async () => {
  const paths = fetchSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
