import Image from 'next/image'
import Link from 'next/link'

const RemarkImg = ({ src, alt }) => {
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
      <Link href={src}>
        <a target="_blank">
          <Image layout="fill" objectFit="contain" alt={alt} src={src} />
        </a>
      </Link>
    </div>
  )
}

export default RemarkImg
