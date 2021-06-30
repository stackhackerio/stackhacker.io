import 'tailwindcss/tailwind.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/source-code-pro/400.css'
import '@fontsource/source-code-pro/700.css'
import '@fontsource/noto-sans-jp/400.css'
import '@fontsource/noto-sans-jp/700.css'

import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import usePageView from '@/hooks/usePageView'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
