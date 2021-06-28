import { MDXRemote } from 'next-mdx-remote'

import CustomLink from './custom-link'
import RemarkImg from './remark-img'
import Code from './code'
import InlineCode from './inline-code'

const components = ({ content, slug }: { content: string; slug: string }) => ({
  a: CustomLink,
  img: ({ src, alt }) => {
    if (/^https:\/\//.test(src)) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />
    } else {
      const i = require(`../../contents/${content}/${slug}/${src}`).default
      return RemarkImg({ src: i, alt })
    }
  },
  pre: function remarkCode({ children: { props } }) {
    const { className, children, mdxType } = props
    const language = className && className.replace(`language-`, ``)
    const codeString = children.trim()

    if (mdxType === `code`) {
      return <Code codeString={codeString} language={language} {...props} />
    } else {
      return <span>{props.children}</span>
    }
  },
  inlineCode: function remarkInlineCode({ children }) {
    return <InlineCode codeString={children} />
  },
})

export default function Index({ source, content, slug }) {
  return <MDXRemote {...source} components={components({ content, slug })} />
}
