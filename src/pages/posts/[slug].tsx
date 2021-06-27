import { serialize } from 'next-mdx-remote/serialize'
import remarkUnwrapImages from 'remark-unwrap-images'

import Layout from '@/components/layout'
import Detail from '@/components/posts/detail'
import { getPost, fetchSlugs } from '@/utils/mdx/posts'

export default function Post({ post }) {
  return (
    <Layout>
      <Detail post={post} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)

  return {
    props: { post },
  }
}

export const getStaticPaths = async () => {
  const paths = fetchSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
