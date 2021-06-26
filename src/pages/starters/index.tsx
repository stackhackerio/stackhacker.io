import Link from 'next/link'
import Image from 'next/image'

import Layout from '@/components/layout'
import { fetchStarters } from '@/utils/mdx/starters'

const requireCover = (starter) => {
  if (!starter.slug || !starter.data.cover) throw new Error()
  return require(`@/contents/starters/${starter.slug}/${starter.data.cover}`)
    .default
}

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
            <Image
              width={512}
              height={192}
              src={requireCover(starter)}
              layout="intrinsic"
              alt="preview"
              objectFit="cover"
            />
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
