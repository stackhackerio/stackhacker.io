import useSWR, { SWRResponse } from 'swr'
import Link from 'next/link'

interface Props {
  href: string
}

type Meta = {
  title?: string
  description?: string
  url: string
  image?: string
  logo?: string
  author?: string
}

async function fetcher(url: string): Promise<Meta | null> {
  const response = await fetch(url)
  return response.json()
}

export default function LinkCard({ href }: Props) {
  const params = new URLSearchParams({ href })
  const { data }: SWRResponse<Meta | null, any> = useSWR(
    '/api/metascrape?' + params,
    fetcher
  )

  if (!data) {
    return null
  }

  return (
    <Link href={data.url}>
      <a target="_blank" className="flex" style={{ textDecoration: `none` }}>
        <div
          className="h-28 w-28 md:h-40 md:w-40 border-l border-t border-b flex-none bg-cover rounded-t-none rounded-l text-center overflow-hidden bg-center"
          style={{
            backgroundImage: `url(${data?.image}), url(/noimage.png)`,
          }}
        ></div>
        <div className="flex-grow border-r border-l-0 border-t border-b bg-white hover:bg-gray-50 rounded-r p-3 md:p-4 flex flex-col justify-between leading-normal h-28 md:h-40">
          <div>
            <div className="text-black text-gray-800 text-sm md:text-lg font-bold line-clamp-1 md:line-clamp-2">
              {data?.title}
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-0 md:mt-1 line-clamp-2">
              {data?.description}
            </div>
          </div>
          <div className="flex items-center mt-1">
            <img
              className="w-4 h-4 rounded-full"
              src={data?.logo}
              alt="Avatar of Jonathan Reinink"
              style={{ marginTop: `0px`, marginBottom: `0px` }}
            />
            <div className="text-sm ml-2">
              <span className="text-gray-400 leading-none">{data?.author}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
