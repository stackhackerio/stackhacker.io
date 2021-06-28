import 'tailwindcss/tailwind.css'
import '@fontsource/inter/400.css'
import '@fontsource/source-code-pro/400.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
