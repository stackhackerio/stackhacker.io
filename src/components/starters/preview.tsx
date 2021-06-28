import Image from 'next/image'

export default function Preview({ slug, src }) {
  const i = require(`@/contents/starters/${slug}/${src}`).default

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 bg-gray-50"></div>
          <div className="flex-1 w-full"></div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-lg shadow-lg w-full h-auto object-cover object-top">
            <Image
              width={1280}
              height={790}
              layout="responsive"
              objectFit="cover"
              alt="プレビュー"
              src={i}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
