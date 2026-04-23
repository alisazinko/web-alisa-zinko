'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function FloatingNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm shadow-lg shadow-black/10 rounded-full px-2 py-2 border border-gray-100">
        <Link
          href="/#hero"
          className="px-4 py-1.5 text-sm text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-50 transition-all"
        >
          Home
        </Link>
        <Link
          href="/#servicios"
          className="px-4 py-1.5 text-sm text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-50 transition-all"
        >
          Servicios
        </Link>
        <Link
          href="/#sistemas"
          className="px-4 py-1.5 text-sm text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-50 transition-all"
        >
          Sistemas
        </Link>
        <Link
          href="/contacto"
          className="px-5 py-1.5 text-sm text-white bg-[#5B58D6] hover:bg-[#4a47c0] rounded-full transition-all font-medium"
        >
          Contacto
        </Link>
      </div>
    </nav>
  )
}
