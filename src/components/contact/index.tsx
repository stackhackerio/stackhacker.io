import Pattern from '@/components/icons/pattern'
import Header from './header'
import Form from './form'

export default function Contact() {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <Pattern />
        <div className="text-center">
          <Header />
        </div>
        <div className="mt-12">
          <Form />
        </div>
      </div>
    </div>
  )
}
