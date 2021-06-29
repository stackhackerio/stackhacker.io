import { useRouter } from 'next/router'
import { useForm } from '@formspree/react'

export default function Form() {
  const endPoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!

  const [state, handleSubmit] = useForm(endPoint)
  const router = useRouter()

  if (state.succeeded) {
    router.push('/thankyou')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <div className="sm:col-span-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          氏名
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
            required={true}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          会社名
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="company"
            id="company"
            className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          メールアドレス
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
            required={true}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          内容
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="py-3 px-4 block w-full shadow-sm focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
            required={true}
          ></textarea>
        </div>
      </div>
      <div className="sm:col-span-2 mt-2">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          送信
        </button>
      </div>
    </form>
  )
}
