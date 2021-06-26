import Title from './title'
import Content from './content'

export default function Detail({ slug, source, frontmatter }) {
  const { title, description, github, demo, tags, offerings } = frontmatter

  return (
    <>
      <Title
        title={title}
        description={description!}
        github={github!}
        demo={demo!}
      />
      <Content
        source={source}
        slug={slug}
        tags={tags as [string]}
        offerings={offerings as [string]}
      />
    </>
  )
}
