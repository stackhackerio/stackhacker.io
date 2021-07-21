import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'
import { serialize } from 'next-mdx-remote/serialize'
import remarkUnwrapImages from 'remark-unwrap-images'

import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

const POSTS_PATH = path.join(process.cwd(), 'src/contents/posts')

const filePaths: string[] = glob.sync(path.join(POSTS_PATH, '/**/*.mdx'))

export type Post = {
  slug: string
  content: string
  filePath: string
  data: { [key: string]: any }
  source?: MDXRemoteSerializeResult
}

const getSlug = (filePath: string) => {
  const a = filePath.split(path.sep)
  return a[a.length - 2]
}

export const fetchPosts = (): Post[] => {
  const posts = filePaths.map((filePath) => {
    const slug = getSlug(filePath)
    const file = fs.readFileSync(filePath)
    const { content, data } = matter(file)

    // 600 characters/min
    Object.assign(data, { readingTime: Math.floor(content.length / 600) })

    return {
      slug,
      content,
      filePath,
      data,
    }
  })

  return posts
}

export const fetchSlugs = () => {
  return filePaths.map((filePath) => getSlug(filePath))
}

export const getPost = async (slug: string): Promise<Post> => {
  const filePath = path.join(POSTS_PATH, slug, 'index.mdx')
  const file = fs.readFileSync(filePath)

  const { content, data } = matter(file)
  const source = await getSource({ content, data })

  return {
    slug,
    content,
    filePath,
    data,
    source,
  }
}

const getSource = async ({
  content,
  data,
}: {
  content: string
  data: { [key: string]: any }
}) => {
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages],
      rehypePlugins: [],
    },
    scope: data,
  })

  return source
}
