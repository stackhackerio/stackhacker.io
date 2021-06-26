import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'

const STARTERS_PATH = path.join(process.cwd(), 'src/contents/starters')

const getSlug = (filePath) => {
  const a = filePath.split(path.sep)
  return a[a.length - 2]
}

export const fetchStarters = () => {
  const filePaths = glob.sync(path.join(STARTERS_PATH, '/**/*.mdx'))
  const starters = filePaths.map((filePath) => {
    const slug = getSlug(filePath)
    const source = fs.readFileSync(filePath)
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
      slug,
    }
  })

  return starters
}

export const fetchSlugs = () => {
  const filePaths = glob.sync(path.join(STARTERS_PATH, '/**/*.mdx'))

  return filePaths.map((filePath) => getSlug(filePath))
}

export const getStarter = (slug) => {
  const filePath = path.join(STARTERS_PATH, slug, 'index.mdx')
  const source = fs.readFileSync(filePath)

  const { content, data } = matter(source)

  return {
    content,
    data,
  }
}
