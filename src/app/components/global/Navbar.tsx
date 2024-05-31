'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../icons/logo.svg'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return pathname.startsWith('/studio') ? null : (
    <>
      <div className="absolute w-full h-full z-10 opacity-30 pointer-events-none" />
      <header className="py-6  border-zinc-800 z-30 md:mb-28 mb-20">
        <div className="md:px-16 px-6 max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={Logo} width={60} alt="logo" />
          </Link>
          <nav>
            <ul className="flex items-center gap-x-8">
              <li>
                <Link href="/" className=" hover:text-purple-400 duration-300">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/om" className="hover:text-purple-400 duration-300">
                  Om
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
