import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import rangeParser from 'parse-numeric-range'
import css from 'styled-jsx/css'

import { copyToClipboard } from '@/lib/clipboard/copy-to-clipboard'
import Copy from '@/components/icons/copy'

const calculateLinesToHighlight = (meta: string) => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const a = RE.exec(meta)
    const strlineNumbers = a && a[1]
    const lineNumbers = rangeParser(strlineNumbers!)
    return (index: number) => lineNumbers!.includes(index + 1)
  } else {
    return () => false
  }
}

const lineNum = (meta: string) => {
  const RE = /\{lineNum\}/
  return RE.test(meta)
}

const filename = (meta: string) => {
  const RE = /\{filename:\s+(.+)\}/
  if (RE.test(meta)) {
    const a = RE.exec(meta)
    const name = a && a[1]
    return name
  } else {
    return null
  }
}

const styles = css`
  .highlight-line {
    background-color: rgb(53, 59, 69);
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.3em solid #f99;
  }
`
type Props = {
  codeString: string
  language: Language
  metastring?: string
}

export default function Code({ codeString, language, ...props }: Props) {
  const handleClick = () => {
    copyToClipboard(codeString)
  }
  const shouldHighlightLine =
    props.metastring && calculateLinesToHighlight(props.metastring)

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <>
          <style jsx>{styles}</style>
          <pre className="font-code overflow-x-auto relative" style={style}>
            <div className="h-8">
              {props.metastring && filename(props.metastring) && (
                <span className="absolute text-sm text-gray-300 p-1 -mt-4 -ml-2 bg-gray-600 rounded-br rounded-bl border-l border-b border-r border-gray-600">
                  {filename(props.metastring)}
                </span>
              )}
              <button
                className="absolute -mt-2 right-2 p-1 text-base rounded bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:ring-offset-2"
                onClick={handleClick}
              >
                <Copy />
              </button>
            </div>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              lineProps.className = `${lineProps.className} leading-5`
              if (shouldHighlightLine && shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }
              return (
                <div key={i} {...lineProps}>
                  {props.metastring && lineNum(props.metastring) && (
                    <span className="inline-block w-8 opacity-50">{i + 1}</span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>
        </>
      )}
    </Highlight>
  )
}
