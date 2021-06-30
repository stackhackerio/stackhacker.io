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
          className="h-36 w-36 md:h-40 md:w-40 border-l border-t border-b flex-none bg-cover rounded-t-none rounded-l text-center overflow-hidden bg-center"
          style={{
            backgroundImage: `url(${data?.image}), url(/noimage.png)`,
          }}
          title="Woman holding a mug"
        ></div>
        <div className="border-r border-l-0 border-t border-b bg-white hover:bg-gray-50 rounded-r p-4 flex flex-col justify-between leading-normal h-36 md:h-40">
          <div>
            <div className="text-black text-gray-800 font-bold">
              {data?.title}
            </div>
            <div className="text-base text-gray-600 mt-2">
              {data?.description}
            </div>
          </div>
          <div className="flex items-center">
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
