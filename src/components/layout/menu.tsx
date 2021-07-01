import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { MenuMobileStatus } from './header'

export default function Menu() {
  const { isOpen, setIsOpen } = useContext(MenuMobileStatus)

  return (
    <div className="bg-gray-900 py-4">
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <a>
                <span className="sr-only">stackhacker</span>
                <Image
                  className="h-8 w-auto sm:h-10"
                  width={40}
                  height={40}
                  src="/logo.svg"
                  alt="Logo"
                />
              </a>
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden space-x-8 md:flex md:ml-10">
            <Link href="/">
              <a className="text-base font-medium text-white hover:text-gray-300">
                ホーム
              </a>
            </Link>
            <Link href="/starters">
              <a className="text-base font-medium text-white hover:text-gray-300">
                スターター
              </a>
            </Link>
            <Link href="/posts">
              <a className="text-base font-medium text-white hover:text-gray-300">
                ブログ
              </a>
            </Link>
            <Link href="/about">
              <a className="text-base font-medium text-white hover:text-gray-300">
                このサイトについて
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/contact">
            <a className="inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
              コンタクト
            </a>
          </Link>
        </div>
      </nav>
    </div>
  )
}
