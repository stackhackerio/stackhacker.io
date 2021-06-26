import { serialize } from 'next-mdx-remote/serialize'
import remarkUnwrapImages from 'remark-unwrap-images'

import Layout from '@/components/layout'
import Detail from '@/components/posts/detail'
import { getPost, fetchSlugs } from '@/utils/mdx/posts'

export default function Post({ source, frontmatter, slug }) {
  return (
    <Layout>
      <Detail slug={slug} source={source} frontmatter={frontmatter} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const { content, data } = getPost(params.slug)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      frontmatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = fetchSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
