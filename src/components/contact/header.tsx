export default function Header() {
  return (
    <>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        お問い合わせ
      </h2>
      <p className="mt-4 text-lg leading-6 text-gray-500">
        サイトに関する感想、要望や質問など、なんでもお聞かせください。
        <br />
        また、お仕事の相談や依頼も承ります。
        <br />
        下記のフォーム、または
        <a
          className="underline"
          href="https://twitter.com/stackhackerio"
          target="_blank"
          rel="noreferrer"
        >
          TwitterのDM
        </a>
        よりお問い合わせください。
      </p>
    </>
  )
}
