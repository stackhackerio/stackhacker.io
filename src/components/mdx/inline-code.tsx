type Props = {
  codeString: string
}

export default function InlineCode({ codeString }: Props) {
  return (
    <span className="font-code text-base py-0.5 px-2 mx-1 bg-gray-100 rounded">
      {codeString}
    </span>
  )
}
