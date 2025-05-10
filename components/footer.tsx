import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">KopiKita</h3>
            <p className="mb-4">
              Kafe kopi autentik Indonesia yang menyajikan kopi berkualitas dengan suasana yang nyaman dan hangat.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-white">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/karir" className="hover:text-white">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pesan-online" className="hover:text-white">
                  Pesan Online
                </Link>
              </li>
              <li>
                <Link href="/reservasi" className="hover:text-white">
                  Reservasi Meja
                </Link>
              </li>
              <li>
                <Link href="/catering" className="hover:text-white">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-white">
                  Program Membership
                </Link>
              </li>
              <li>
                <Link href="/gift-card" className="hover:text-white">
                  Gift Card
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Jl. Kopi No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@kopikita.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} KopiKita. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
