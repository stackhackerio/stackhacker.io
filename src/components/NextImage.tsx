import React from 'react'
import Image from 'next/image'

type NextImageProps = {
  src: string
  alt?: string
}

export const NextImage: React.FC<NextImageProps> = ({ src, alt, ...props }) => (
  <div
    style={{
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '16em',
      marginBottom: '1.75em',
      backgroundColor: '#f7fafc',
    }}
  >
    <Image
      {...props}
      src={src}
      alt={alt || src}
      layout="fill"
      objectFit="contain"
    />
  </div>
)
