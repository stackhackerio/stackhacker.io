import Link from 'next/link'

interface Props {
  as: string
  href: string
}

export default function CustomLink({ as, href, ...otherProps }: Props) {
  return (
    <Link as={as} href={href}>
      <a target="_blank" {...otherProps} />
    </Link>
  )
}
