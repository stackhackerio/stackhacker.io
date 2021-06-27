//const Span = styled.span`
//  padding: 0.2em 0.4em;
//  margin: 0;
//  font-size: 85%;
//  border-radius: 6px;
//  background-color: rgba(27, 31, 35, 0.05);
//  font-family: 'Source Code Pro';
//`

type Props = {
  codeString: string
}

export default function InlineCode({ codeString }: Props) {
  return (
    <span className="font-code text-base py-0.5 px-2 bg-gray-100 rounded">
      {codeString}
    </span>
  )
}
