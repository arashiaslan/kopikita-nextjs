import type { Metadata } from "next"
import Image from "next/image"
import { Coffee, Utensils, IceCream } from "lucide-react"

export const metadata: Metadata = {
  title: "Menu - KopiKita",
  description: "Jelajahi menu kopi, makanan, dan minuman di KopiKita",
}

export default function MenuPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-800">Menu Kami</h1>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#kopi"
            className="flex items-center gap-2 px-6 py-3 bg-amber-100 hover:bg-amber-200 rounded-full text-amber-800 font-medium transition-colors"
          >
            <Coffee size={20} />
            <span>Kopi</span>
          </a>
          <a
            href="#makanan"
            className="flex items-center gap-2 px-6 py-3 bg-amber-100 hover:bg-amber-200 rounded-full text-amber-800 font-medium transition-colors"
          >
            <Utensils size={20} />
            <span>Makanan</span>
          </a>
          <a
            href="#minuman"
            className="flex items-center gap-2 px-6 py-3 bg-amber-100 hover:bg-amber-200 rounded-full text-amber-800 font-medium transition-colors"
          >
            <IceCream size={20} />
            <span>Minuman Non-Kopi</span>
          </a>
        </div>

        {/* Coffee Section */}
        <section id="kopi" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Coffee size={28} className="text-amber-600" />
            <h2 className="text-3xl font-bold text-amber-800">Kopi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={item.imageUrl || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-amber-800">{item.name}</h3>
                    <span className="text-amber-600 font-bold">Rp {item.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Food Section */}
        <section id="makanan" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Utensils size={28} className="text-amber-600" />
            <h2 className="text-3xl font-bold text-amber-800">Makanan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={item.imageUrl || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-amber-800">{item.name}</h3>
                    <span className="text-amber-600 font-bold">Rp {item.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Non-Coffee Drinks Section */}
        <section id="minuman" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <IceCream size={28} className="text-amber-600" />
            <h2 className="text-3xl font-bold text-amber-800">Minuman Non-Kopi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drinkItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={item.imageUrl || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-amber-800">{item.name}</h3>
                    <span className="text-amber-600 font-bold">Rp {item.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

// Data contoh untuk menu kopi
const coffeeItems = [
  {
    id: "c1",
    name: "Espresso",
    description: "Kopi hitam pekat dengan crema yang kaya",
    price: 20000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "c2",
    name: "Americano",
    description: "Espresso dengan tambahan air panas",
    price: 23000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "c3",
    name: "Cappuccino",
    description: "Espresso dengan susu dan foam yang lembut",
    price: 28000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "c4",
    name: "Latte",
    description: "Espresso dengan susu steamed dan sedikit foam",
    price: 28000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "c5",
    name: "Kopi Susu Aren",
    description: "Espresso, susu segar, dan gula aren asli Indonesia",
    price: 28000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "c6",
    name: "V60 Aceh Gayo",
    description: "Kopi single origin dari Aceh dengan metode seduh V60",
    price: 35000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
]

// Data contoh untuk menu makanan
const foodItems = [
  {
    id: "f1",
    name: "Croissant Almond",
    description: "Croissant renyah dengan topping almond dan gula bubuk",
    price: 32000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "f2",
    name: "Pisang Goreng Crispy",
    description: "Pisang goreng crispy dengan saus karamel",
    price: 25000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "f3",
    name: "Sandwich Tuna",
    description: "Sandwich dengan isian tuna, selada, dan mayones",
    price: 35000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "f4",
    name: "Nasi Goreng Kampung",
    description: "Nasi goreng dengan telur mata sapi dan kerupuk",
    price: 40000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "f5",
    name: "Kentang Goreng",
    description: "Kentang goreng renyah dengan saus pilihan",
    price: 25000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "f6",
    name: "Roti Bakar Cokelat",
    description: "Roti bakar dengan selai cokelat dan taburan meses",
    price: 22000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
]

// Data contoh untuk menu minuman non-kopi
const drinkItems = [
  {
    id: "d1",
    name: "Teh Tarik",
    description: "Teh susu khas Malaysia yang creamy",
    price: 20000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "d2",
    name: "Matcha Latte",
    description: "Teh hijau matcha dengan susu steamed",
    price: 30000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "d3",
    name: "Cokelat Panas",
    description: "Cokelat panas dengan whipped cream",
    price: 25000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "d4",
    name: "Lemon Tea",
    description: "Teh dengan perasan lemon segar dan madu",
    price: 22000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "d5",
    name: "Smoothie Buah",
    description: "Smoothie dengan campuran buah-buahan segar",
    price: 30000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "d6",
    name: "Es Jeruk",
    description: "Jus jeruk segar dengan es batu",
    price: 18000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
]
