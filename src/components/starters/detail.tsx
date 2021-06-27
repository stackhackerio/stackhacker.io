import Title from './title'
import Preview from './preview'
import Content from './content'

export default function Detail({ starter }) {
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
