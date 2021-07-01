import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="pt-2 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Accelarate</span>
                  <span className="block text-gray-400">
                    Your business with a modern tech stack
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  stackhackerはモダンなテック・スタックであなたのビジネスを加速します。スターターによる迅速なローンチ、継続的なプロダクトづくりを実現します。
                </p>
                <div className="mt-10 sm:mt-12">
                  <div className="sm:flex">
                    <div className="mt-3 sm:mt-0 sm:ml-3 text-center">
                      <Link href="/about">
                        <a className="block w-full py-3 px-4 rounded-md shadow bg-gray-500 text-white font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 focus:ring-offset-gray-900">
                          もっと詳しく
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/cloud-illustration-indigo-400.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
