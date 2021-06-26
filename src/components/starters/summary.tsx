type Props = {
  tags: [string]
  offerings: [string]
}

export default function Summary({ tags, offerings }: Props) {
  return (
    <>
      <div className="mt-6 border-t border-gray-200 pt-6 space-y-5">
        <ul className="space-y-4">
          {offerings &&
            offerings.map((offering) => (
              <li key={offering} className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    data-todo-x-description="Heroicon name: check-circle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700 font-medium">
                  {offering}
                </p>
              </li>
            ))}
        </ul>
      </div>
      <div className="inline-flex flex-wrap text-gray-700 border-t border-gray-200 pt-4">
        {tags &&
          tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 items-center px-3 py-0.5 rounded-full text-sm mr-1 my-2"
            >
              {tag}
            </span>
          ))}
      </div>
      <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
        <div className="">
          <h2 className="text-sm font-medium text-gray-500">作者</h2>
          <ul className="mt-3 space-y-3">
            <li className="flex justify-start">
              <a
                className="flex items-center space-x-3"
                target="_blank"
                href="https://stackhacker.io/"
                rel="noreferrer"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-5 w-5 rounded-full"
                    alt="stackhacker avatar"
                    src="/logo-dark.svg"
                  />
                </div>
                <div className="text-sm font-medium text-gray-900">
                  stackhacker
                </div>
              </a>
              {` `}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
