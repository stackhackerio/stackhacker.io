import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Language } from 'prism-react-renderer'
import CustomLink from './custom-link'
import RemarkImg from './remark-img'
import Code from './code'
import InlineCode from './inline-code'

interface Children {
  props: {
    className: string
    parentName: string
    originalType: string
    mdxType: string
    children: string
  }
}
const components = ({ content, slug }: { content: string; slug: string }) => ({
  a: CustomLink,
  img: ({ src, alt }: { src: string; alt: string }) => {
    if (/^https:\/\//.test(src)) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />
    } else {
      const i = require(`../../contents/${content}/${slug}/${src}`).default
      return RemarkImg({ src: i, alt })
    }
  },
  pre: function remarkCode({ children: { props } }: { children: Children }) {
    const { className, children, mdxType } = props
    const language = className && className.replace(`language-`, ``)
    const codeString = children.trim()

    if (mdxType === `code`) {
      return (
        <Code
          codeString={codeString}
          language={language as Language}
          {...props}
        />
      )
    } else {
      return <span>{props.children}</span>
    }
  },
  inlineCode: function remarkInlineCode({ children }: { children: string }) {
    return <InlineCode codeString={children} />
  },
})

interface Props {
  source: MDXRemoteSerializeResult
  content: string
  slug: string
}

export default function Index({ source, content, slug }: Props) {
  return <MDXRemote {...source} components={components({ content, slug })} />
}
