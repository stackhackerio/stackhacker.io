import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'

const config = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <Layout>
      <NextSeo {...config} />
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              お問い合わせ
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              サイトに関する感想、要望や質問など、なんでもお聞かせください。
              <br />
              また、お仕事の相談や依頼も承ります。
              <br />
              下記のフォーム、または
              <a
                className="underline"
                href="https://twitter.com/stackhackerio"
                target="_blank"
                rel="noreferrer"
              >
                TwitterのDM
              </a>
              よりお問い合わせください。
            </p>
          </div>
          <div className="mt-12">
            <form
              name="contact"
              action="/thankyou"
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  氏名
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                    required={true}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  会社名
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  メールアドレス
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                    required={true}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  内容
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
                    required={true}
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
