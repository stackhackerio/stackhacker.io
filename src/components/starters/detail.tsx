import Title from './title'
import Preview from './preview'
import Content from './content'

export default function Detail({ slug, source, frontmatter }) {
  const { title, description, github, demo, tags, offerings, preview } =
    frontmatter

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
