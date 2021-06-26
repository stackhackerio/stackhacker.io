import Image from 'next/image'
import Link from 'next/link'

const HogeImg = ({ src, alt, slug, ...otherProps }) => {
  const i = require(`../contents/posts/${slug}/${src}`).default

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
          <Image layout='fill' objectFit='contain' alt={alt} src={i} />
        </a>
      </Link>
    </div>
  )
}

export default HogeImg
