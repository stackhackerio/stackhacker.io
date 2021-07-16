import { NextSeo } from 'next-seo'

import defaultConfig from '../../../next-seo.config'
import Layout from '@/components/layout'
import Detail from '@/components/starters/detail'
import { getStarter, fetchSlugs } from '@/lib/mdx/starters'

import type { Starter } from '@/lib/mdx/starters'

const {
  openGraph: { url },
} = defaultConfig

const coverUrl = ({ slug, coverFull }: { slug: string; coverFull: string }) => {
  const i = require(`@/contents/starters/${slug}/${coverFull}`).default
  return `${url}${i}`
}

const ogUrl = ({ slug }: { slug: string }) => {
  return `${url}/starters/${slug}`
}

interface Props {
  starter: Starter
}

export default function StarterPage({ starter }: Props) {
  const {
    slug,
    data: { title, description, coverFull },
  } = starter

  const config = {
    title: title,
    openGraph: {
      url: ogUrl({ slug }),
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

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
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
