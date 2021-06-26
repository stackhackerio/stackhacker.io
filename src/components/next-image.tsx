import Image from 'next/image'
import Link from 'next/link'

const NextImg = ({ src, alt, slug, content = 'posts' }) => {
  const i = require(`../contents/${content}/${slug}/${src}`).default

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '25em',
        marginBottom: '1.75em',
        backgroundColor: '#fffff',
      }}
    >
      <Link href={i}>
        <a target="_blank">
          <Image layout="fill" objectFit="contain" alt={alt} src={i} />
        </a>
      </Link>
    </div>
  )
}

export default NextImg
