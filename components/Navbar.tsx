'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo-light.png" alt="AlisaZinko" width={140} height={36} className="h-8 w-auto" priority />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href="/contacto"
            className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
            disponible para trabajar
          </Link>
          <span className="text-gray-300">|</span>
          <a
            href="https://www.linkedin.com/in/alisa-zinchenko/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded border border-gray-200 hover:border-gray-400 transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
