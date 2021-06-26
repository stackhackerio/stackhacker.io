import React, { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import rangeParser from 'parse-numeric-range'
import { copyToClipboard } from '@/utils/copy-to-clipboard'

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

type Props = {
  codeString: string
  language: Language
  metastring?: string
}

export const Code: FC<Props> = ({ codeString, language, ...props }) => {
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
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          <pre
            className="font-code rounded overflow-x-auto relative"
            style={style}
          >
            <button
              className="absolute right-2 p-1 rounded bg-gray-600 hover:bg-gray-500 focus:ring-2 focus:ring-offset-2"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            </button>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              lineProps.className = `${lineProps.className} leading-5`
              if (shouldHighlightLine && shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }
              return (
                <div key={i} {...lineProps}>
                  <span className="inline-block w-8 opacity-50">{i + 1}</span>
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

export default Code
