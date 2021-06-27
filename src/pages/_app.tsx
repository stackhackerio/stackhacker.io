import 'tailwindcss/tailwind.css'
import '@fontsource/inter/400.css'
import '@fontsource/source-code-pro/400.css'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
