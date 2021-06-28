import Link from 'next/link'
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions'

const requireCover = (starter) => {
  if (!starter.slug || !starter.data.cover) throw new Error()
  return require(`@/contents/starters/${starter.slug}/${starter.data.cover}`)
    .default
}

export default function Index({ starters }) {
  const { observe, width, height } = useDimensions<HTMLDivElement | null>()

  console.log(width)
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-gray-600 uppercase">
            Starter
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            プロダクトづくりを加速
          </p>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
            スターターにより迅速なローンチを実現します。モダンな技術スタックのスターターをカスタマイズしてより使いやすく、また日本語環境で安心して使えるようにローカライズしたスターターを提供します。
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {starters.map((starter) => (
            <div
              key={starter.slug}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0" ref={observe}>
                <Image
                  className="object-cover"
                  src={requireCover(starter)}
                  layout="responsive"
                  alt="preview"
                  width={900}
                  height={450}
                  quality={100}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">
                    {starter.data.category}
                  </p>
                  {starter.slug && (
                    <Link
                      as={`/starters/${starter.slug}`}
                      href={`/starters/[slug]`}
                    >
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {starter.data.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {starter.data.description}
                        </p>
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
