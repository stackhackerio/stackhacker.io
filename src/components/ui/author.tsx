type Props = {
  date: string
  readingTime: string | null
}

export default function Author({ date, readingTime }: Props) {
  return (
    <>
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src="/logo-dark.svg"
          alt="stackhacker"
        />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">stackhacker</p>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime={date}>{date}</time>
          {readingTime && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>読了時間{readingTime}分</span>
            </>
          )}
        </div>
      </div>
    </>
  )
}
