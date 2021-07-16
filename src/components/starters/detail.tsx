import Title from './title'
import Preview from './preview'
import Content from './content'
import type { Starter } from '@/lib/mdx/starters'

interface Props {
  starter: Starter
}

export default function Detail({ starter }: Props) {
  const { source, data, slug } = starter
  const { title, description, github, demo, tags, offerings, preview } = data

  return (
    <>
      <Title
        title={title}
        description={description!}
        github={github!}
        demo={demo!}
      />
      <Preview slug={slug} src={preview} />
      <Content
        source={source}
        slug={slug}
        tags={tags as [string]}
        offerings={offerings as [string]}
      />
    </>
  )
}
