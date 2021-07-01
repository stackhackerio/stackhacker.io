import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'

const config = {
  title: 'About',
}

export default function About() {
  return (
    <Layout>
      <NextSeo {...config} />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-gray-600 font-semibold tracking-wide uppercase">
                Introducing
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                このサイトについて
              </span>
            </h1>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <figure>
              <Image
                className="w-full rounded-lg"
                src="/logo-full.png"
                alt=""
                width="1310"
                height="873"
                quality={100}
              />
            </figure>
            <p>
              stackhackerはモダンなテック・スタックでのプロダクトづくりをお手伝いします。
            </p>
            <p>
              スターターにより、迅速なローンチと、継続的なプロダクトづくりを実現します。当面は、日本語環境でも利用できるように、ローカライズしたスターターをメインに提供します。オリジナルのスターターも準備しており、順次提供して参ります。
            </p>
            <p>
              ブログでは、モダンなテック・スタックのTipsやチュートリアルなど、テック・スタックを使いことすための情報を提供します。
            </p>
            <p>
              また、モダンなテック・スタックに関してのご相談やプロダクト開発の依頼も承っています。
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">モダンなテック・スタックへ</span>
            <span className="block">アップグレード</span>
          </h2>
          <div className="mt-4 text-lg leading-6 text-gray-200">
            <p>
              モダンなテック・スタックを使った新しいプロダクトづくり、またはレガシーな環境からモダンなテック・スタックへの移行をお手伝いします。
            </p>
            <p>お気軽にお問い合わせください。</p>
          </div>
          <Link href="/contact">
            <a className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-gray-50 sm:w-auto">
              お問い合わせ
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
