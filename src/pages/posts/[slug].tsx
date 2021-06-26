import Head from 'next/head'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkUnwrapImages from 'remark-unwrap-images'

import Layout from '@/components/layout'
import CustomLink from '@/components/mdx/custom-link'
import RemarkImg from '@/components/mdx/remark-img'
import Code from '@/components/mdx/code'
import { getPost, fetchSlugs } from '@/utils/mdx/posts'

const components = ({ slug }: { slug: string }) => ({
  Head,
  a: CustomLink,
  img: ({ src, alt }) => {
    const i = require(`../../contents/posts/${slug}/${src}`).default
    return RemarkImg({ src: i, alt })
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

export default function PostPage({ source, frontMatter, slug }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/posts">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components({ slug })} />
      </main>
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
