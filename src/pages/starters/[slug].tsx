import Head from 'next/head'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkUnwrapImages from 'remark-unwrap-images'

import Layout from '@/components/layout'
import CustomLink from '@/components/custom-link'
import NextImg from '@/components/next-image'
import Code from '@/components/code'
import { getStarter, fetchSlugs } from '@/utils/mdx/starters'

const components = ({ slug }: { slug: string }) => ({
  a: CustomLink,
  Head,
  img: ({ src, alt }) => {
    return NextImg({ src, alt, slug, content: 'starters' })
  },
  pre: ({ children: { props } }) => {
    const { className, children, mdxType } = props
    const language = className && className.replace(`language-`, ``)
    const codeString = children.trim()

    if (mdxType === `code`) {
      return <Code codeString={codeString} language={language} {...props} />
    } else {
      return <span>{props.children}</span>
    }
  },
})

export default function StarterPage({ source, frontMatter, slug }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/starters">
            <a>👈 Go back list</a>
          </Link>
        </nav>
      </header>
      <h1>{frontMatter.title}</h1>
      {frontMatter.description && (
        <p className="description">{frontMatter.description}</p>
      )}
      <main>
        <MDXRemote {...source} components={components({ slug })} />
      </main>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const { content, data } = getStarter(params.slug)
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
      frontMatter: data,
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
