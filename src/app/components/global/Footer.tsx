'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '../../icons/logoWhite.svg'
import Link from 'next/link'
import { dancingScript } from '../../fonts'

export default function Footer() {
  const pathname = usePathname()
  return pathname.startsWith('/studio') ? null : (
    <footer className="bg-green text-white">
      <div className="mx-auto w-full max-w-7xl md:px-16 px-6 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image src={Logo} width={60} alt="logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2
                className={` mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white`}
              >
                Följ oss
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link className="hover:underline" href="/">
                    Instagram
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:underline" href="/">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2
                className={` mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white`}
              >
                Hitta hit
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link
                    className="hover:underline"
                    href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x464ff3c1f0d39f75:0x7e0636afaffaa80e?sa=X&ved=1t:8290&ictx=111"
                  >
                    Sveagatan 29, 413 14 Göteborg
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className=" mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
                Öppettider
              </h2>
              <ul>
                <li className="mb-4">
                  <h3 className="font-bold">Mån - Fre</h3>
                  <p>16 - 01</p>
                </li>
                <li className="mb-4">
                  <h3 className="font-bold">Mån - Fre</h3>
                  <p>16 - 01</p>
                </li>
                <li className="mb-4">
                  <h3 className="font-bold">Mån - Fre</h3>
                  <p>16 - 01</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
