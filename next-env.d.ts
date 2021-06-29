/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

declare module 'tiny-segmenter'
declare module '@tailwindcss/aspect-ratio'
declare module '@tailwindcss/typography'
declare module '@tailwindcss/colors'
declare module '@tailwindcss/forms'
declare module '@tailwindcss/defaultTheme'

interface Window {
  gtag(type: 'config', googleAnalyticsId: string, { page_path: string })
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string
      event_category: string
      value?: string
    }
  )
}
