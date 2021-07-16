import Link from 'next/link'
import Image from 'next/image'

import Author from '../ui/author'
import type { Post } from '@/utils/mdx/posts'

const requireCover = (post: Post) => {
  if (!post.slug || !post.data.cover) throw new Error()
  return require(`@/contents/posts/${post.slug}/${post.data.cover}`).default
}

interface Props {
  posts: Post[]
}

export default function Index({ posts }: Props) {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-gray-600 uppercase">
            Blog
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            テック・スタックのお役立ち情報
          </p>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
            テック・スタックの紹介や、使いこなしのためのTipsやチュートリアルをお届けします。
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full object-cover">
                <Image
                  src={requireCover(post)}
                  layout="fill"
                  alt="preview"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">
                    {post.data.category}
                  </p>
                  {post.slug && (
                    <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.data.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.data.description}
                        </p>
                      </a>
                    </Link>
                  )}
                </div>
                <div className="mt-6 flex items-center">
                  <Author
                    date={post.data.date}
                    readingTime={post.data.readingTime}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
