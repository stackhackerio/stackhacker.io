import Image from 'next/image'
import Link from 'next/link'

import Background from './background'

export default function About() {
  return (
    <>
      <div className="relative py-16 bg-white overflow-hidden">
        <Background />
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
              クラウドアプリケーションの開発と、ウェブの付加価値の多くは、ユーザーに最も近い場所として、フロントエンドへ移りつつあります。
            </p>
            <p>
              stackhackerは、デベロッパーがフロントエンドに集中できるように、Next.jsを中心に、オープンソースのテック・スタックをベースにしたスターターを提供します。
            </p>
            <p>
              ブログでは、テック・スタックの紹介や、Tipsやチュートリアルなど、テック・スタックを使いことすための情報を提供します。
            </p>
            <p>
              また、Next.jsを使ったプロダクト開発の依頼やご相談も承っています。
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">真のユーザ体験を</span>
            <span className="block">追い求めて</span>
          </h2>
          <div className="mt-4 text-lg leading-6 text-gray-200">
            <p>
              Next.jsを使った新しいプロダクトづくり、またはレガシーな環境からモダンなテック・スタックへの移行をお手伝いします。
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
    </>
  )
}
