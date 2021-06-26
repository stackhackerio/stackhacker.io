import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'

const STARTERS_PATH = path.join(process.cwd(), 'src/contents/starters')

const filePaths: [string] = glob.sync(path.join(STARTERS_PATH, '/**/*.mdx'))

const getSlug = (filePath: string) => {
  const a = filePath.split(path.sep)
  return a[a.length - 2]
}

export const fetchStarters = () => {
  const starters = filePaths.map((filePath) => {
    const slug = getSlug(filePath)
    const source = fs.readFileSync(filePath)
    const { content, data } = matter(source)

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

export const getStarter = (slug: string) => {
  const filePath = path.join(STARTERS_PATH, slug, 'index.mdx')
  const source = fs.readFileSync(filePath)

  const { content, data } = matter(source)

  return {
    content,
    data,
  }
}
