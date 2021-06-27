import Mdx from '@/components/mdx'
import Summary from './summary'

type Props = {
  source: any
  slug: string
  tags: [string]
  offerings: [string]
}

export default function Content({ source, slug, tags, offerings }: Props) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 xl:max-w-7xl xl:grid xl:grid-cols-3">
        <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            概要
          </h2>
          <aside className="mt-8 xl:hidden">
            <h2 className="sr-only">サマリー</h2>
            <Summary tags={tags} offerings={offerings} />
          </aside>
          <div className="border-t border-gray-200 space-y-4 mt-4">
            <div className="prose prose-lg text-gray-500 mt-6 prose-quoteless">
              <Mdx source={source} content={'starters'} slug={slug} />
            </div>
          </div>
        </div>
        <aside className="hidden xl:block xl:pl-8">
          <h2 className="sr-only">サマリー</h2>
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <span className="font-display text-4xl font-extrabold text-cool-indigo-600">
                無料
              </span>
            </div>
            <Summary tags={tags} offerings={offerings} />
          </div>
        </aside>
      </div>
    </div>
  )
}
