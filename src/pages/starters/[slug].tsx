import Layout from '@/components/layout'
import Detail from '@/components/starters/detail'
import { getStarter, fetchSlugs } from '@/utils/mdx/starters'

export default function Starter({ starter }) {
  return (
    <Layout>
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
