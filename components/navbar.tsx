"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="KopiKita Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold text-amber-800">KopiKita</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium">
              Beranda
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-amber-600 font-medium">
              Menu
            </Link>
            <Link href="/tentang" className="text-gray-700 hover:text-amber-600 font-medium">
              Tentang Kami
            </Link>
            <Link href="/lokasi" className="text-gray-700 hover:text-amber-600 font-medium">
              Lokasi
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-amber-600 font-medium">
              Blog
            </Link>
            <Link href="/kontak" className="text-gray-700 hover:text-amber-600 font-medium">
              Kontak
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/keranjang" className="text-gray-700 hover:text-amber-600" aria-label="Keranjang">
              <ShoppingBag size={20} />
            </Link>
            <Link
              href="/pesan-online"
              className="hidden md:block bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Pesan Online
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-amber-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/menu"
                className="text-gray-700 hover:text-amber-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/tentang"
                className="text-gray-700 hover:text-amber-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                href="/lokasi"
                className="text-gray-700 hover:text-amber-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Lokasi
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-amber-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/kontak"
                className="text-gray-700 hover:text-amber-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
              <Link
                href="/pesan-online"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Pesan Online
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
