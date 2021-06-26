import { MDXRemote } from 'next-mdx-remote'

import CustomLink from '@/components/mdx/custom-link'
import RemarkImg from '@/components/mdx/remark-img'
import Code from '@/components/mdx/code'
import Author from '@/components/ui/author'
import Background from './background'

const components = ({ slug }: { slug: string }) => ({
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

export default function Detail({ slug, source, frontmatter }) {
  const { title, date, readingTime } = frontmatter

  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <Background />

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto mb-6">
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {title}
          </h1>
          <div className="mt-6 flex items-center">
            {readingTime && (
              <Author date={date} readingTime={readingTime.toString()} />
            )}
          </div>
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto mb-6">
          <MDXRemote {...source} components={components({ slug })} />
        </div>
      </div>
    </div>
  )
}
