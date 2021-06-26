import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'

const POSTS_PATH = path.join(process.cwd(), 'src/contents/posts')

const getSlug = (filePath) => {
  const a = filePath.split(path.sep)
  return a[a.length - 2]
}

export const fetchPosts = () => {
  const filePaths = glob.sync(path.join(POSTS_PATH, '/**/*.mdx'))
  const posts = filePaths.map((filePath) => {
    const slug = getSlug(filePath)
    const source = fs.readFileSync(filePath)
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
      slug
    }
  })

  return posts
}

export const fetchSlugs = () => {
  const filePaths = glob.sync(path.join(POSTS_PATH, '/**/*.mdx'))
  return filePaths.map((filePath) => getSlug(filePath))
}

export const getPost = (slug) => {
  console.log(slug)
  const postFilePath = path.join(POSTS_PATH, slug, 'index.mdx')
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  return {
    content,
    data
  }
}
