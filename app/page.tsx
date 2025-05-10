import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Coffee, MapPin, Clock, CalendarCheck } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-cafe.jpg?height=1080&width=1920"
            alt="KopiKita Cafe"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">KopiKita</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Nikmati pengalaman kopi autentik Indonesia dengan suasana yang nyaman dan hangat
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/menu"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Lihat Menu <ArrowRight size={18} />
            </Link>
            <Link
              href="/reservasi"
              className="bg-white hover:bg-gray-100 text-amber-800 px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Reservasi Meja <CalendarCheck size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">Mengapa Memilih KopiKita?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="text-amber-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Biji Kopi Pilihan</h3>
              <p className="text-gray-600">Kami hanya menggunakan biji kopi terbaik dari petani lokal Indonesia</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-amber-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Lokasi Strategis</h3>
              <p className="text-gray-600">Terletak di pusat kota dengan suasana yang nyaman dan tenang</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-amber-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Buka Setiap Hari</h3>
              <p className="text-gray-600">Kami buka setiap hari dari jam 08.00 hingga 22.00 untuk melayani Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Menu Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-amber-800">Menu Favorit</h2>
            <Link href="/menu" className="text-amber-600 hover:text-amber-800 font-medium flex items-center gap-1">
              Lihat Semua <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularMenuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={item.imageUrl || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-amber-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <p className="text-amber-600 font-bold">Rp {item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ingin Mencoba Kopi Kami?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pesan online atau kunjungi kafe kami untuk pengalaman kopi terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pesan-online"
              className="bg-white hover:bg-gray-100 text-amber-800 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Pesan Online
            </Link>
            <Link
              href="/lokasi"
              className="bg-transparent hover:bg-amber-700 border-2 border-white text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Temukan Lokasi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// Data contoh untuk menu favorit
const popularMenuItems = [
  {
    id: "1",
    name: "Kopi Susu Aren",
    description: "Espresso, susu segar, dan gula aren asli Indonesia",
    price: 28000,
    imageUrl: "/kopsu-aren.jpg",
  },
  {
    id: "2",
    name: "V60 Aceh Gayo",
    description: "Kopi single origin dari Aceh dengan metode seduh V60",
    price: 35000,
    imageUrl: "/v60.jpg",
  },
  {
    id: "3",
    name: "Croissant Almond",
    description: "Croissant renyah dengan topping almond dan gula bubuk",
    price: 32000,
    imageUrl: "/almond-croissant.jpg",
  },
  {
    id: "4",
    name: "Pisang Goreng Crispy",
    description: "Pisang goreng crispy dengan saus karamel",
    price: 25000,
    imageUrl: "/pisgor.jpg",
  },
]
