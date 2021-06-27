import { NextSeo } from 'next-seo'

import Author from '@/components/ui/author'
import Mdx from '@/components/mdx'
import Background from './background'

const config = {
  title: 'hoge',
}

export default function Detail({ post }) {
  const { source, slug, data } = post
  const { title, date, readingTime } = data

  return (
    <>
      <NextSeo {...config} />
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
            <Mdx source={source} content={'posts'} slug={slug} />
          </div>
        </div>
      </div>
    </>
  )
}
