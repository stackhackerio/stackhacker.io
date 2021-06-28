type Props = {
  title: string
  description: string
  demo: string
  github: string
}

export default function Title({ title, description, demo, github }: Props) {
  return (
    <div className="pt-10 sm:pt-14 bg-gray-50">
      <div className="max-w-screen-xl mx-auto pb-12 px-4 text-center sm:pb-18 sm:px-6 lg:px-8 lg:flex lg:justify-between lg:items-center lg:text-left">
        <div className="mt-6 sm:max-w-2xl">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-gray-500">{description}</p>
        </div>
        <div className="mt-5 lg:mt-0 max-w-md mx-auto sm:flex sm:justify-center lg:mx-0">
          <a
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            target="_blank"
            href={demo}
            rel="noreferrer"
          >
            デモをみる
          </a>
          <a
            className="inline-flex items-center px-6 py-3 ml-4 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            target="_blank"
            href={github}
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  )
}
