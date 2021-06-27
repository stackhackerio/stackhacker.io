import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'
import { serialize } from 'next-mdx-remote/serialize'
import remarkUnwrapImages from 'remark-unwrap-images'

const STARTERS_PATH = path.join(process.cwd(), 'src/contents/starters')

const filePaths: [string] = glob.sync(path.join(STARTERS_PATH, '/**/*.mdx'))

const getSlug = (filePath: string) => {
  const a = filePath.split(path.sep)
  return a[a.length - 2]
}

export const fetchStarters = () => {
  const starters = filePaths.map((filePath) => {
    const slug = getSlug(filePath)
    const file = fs.readFileSync(filePath)
    const { content, data } = matter(file)

    return {
      content,
      data,
      slug,
    }
  })

  return starters
}

export const fetchSlugs = () => {
  return filePaths.map((filePath) => getSlug(filePath))
}

export const getStarter = async (slug: string) => {
  const filePath = path.join(STARTERS_PATH, slug, 'index.mdx')
  const file = fs.readFileSync(filePath)

  const { content, data } = matter(file)
  const source = await getSource({ content, data })

  return {
    slug,
    source,
    content,
    data,
  }
}

const getSource = async ({ content, data }) => {
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages],
      rehypePlugins: [],
    },
    scope: data,
  })
  return source
}
