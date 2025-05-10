import type { Metadata } from "next"
import Image from "next/image"
import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Pesan Online - KopiKita",
  description: "Pesan kopi dan makanan favorit Anda secara online dari KopiKita",
}

export default function OrderOnlinePage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-800">Pesan Online</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-amber-800">Menu</h2>

              {/* Category Tabs */}
              <div className="flex overflow-x-auto space-x-4 mb-6 pb-2">
                <button className="px-4 py-2 bg-amber-600 text-white rounded-md whitespace-nowrap">Semua</button>
                <button className="px-4 py-2 bg-amber-100 text-amber-800 rounded-md whitespace-nowrap hover:bg-amber-200">
                  Kopi
                </button>
                <button className="px-4 py-2 bg-amber-100 text-amber-800 rounded-md whitespace-nowrap hover:bg-amber-200">
                  Makanan
                </button>
                <button className="px-4 py-2 bg-amber-100 text-amber-800 rounded-md whitespace-nowrap hover:bg-amber-200">
                  Minuman Non-Kopi
                </button>
              </div>

              {/* Menu Items */}
              <div className="space-y-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex border-b pb-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-amber-800">{item.name}</h3>
                        <span className="font-bold text-amber-600">Rp {item.price.toLocaleString()}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <button className="flex items-center text-amber-600 hover:text-amber-800 text-sm font-medium">
                        <Plus size={16} className="mr-1" /> Tambahkan ke Keranjang
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center mb-4">
                <ShoppingBag className="text-amber-600 mr-2" size={24} />
                <h2 className="text-2xl font-semibold text-amber-800">Keranjang Anda</h2>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <button className="p-1 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200">
                        <Plus size={14} />
                      </button>
                      <span className="mx-2">2</span>
                      <button className="p-1 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200">
                        <Minus size={14} />
                      </button>
                    </div>
                    <span>Kopi Susu Aren</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">Rp 56.000</span>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <button className="p-1 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200">
                        <Plus size={14} />
                      </button>
                      <span className="mx-2">1</span>
                      <button className="p-1 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200">
                        <Minus size={14} />
                      </button>
                    </div>
                    <span>Croissant Almond</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">Rp 32.000</span>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>Rp 88.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Biaya Pengiriman</span>
                  <span>Rp 10.000</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span className="text-amber-600">Rp 98.000</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium transition-colors">
                Lanjutkan ke Pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Data contoh untuk menu pesan online
const orderItems = [
  {
    id: "o1",
    name: "Kopi Susu Aren",
    description: "Espresso, susu segar, dan gula aren asli Indonesia",
    price: 28000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "o2",
    name: "Cappuccino",
    description: "Espresso dengan susu dan foam yang lembut",
    price: 28000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "o3",
    name: "Croissant Almond",
    description: "Croissant renyah dengan topping almond dan gula bubuk",
    price: 32000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "o4",
    name: "Sandwich Tuna",
    description: "Sandwich dengan isian tuna, selada, dan mayones",
    price: 35000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "o5",
    name: "Matcha Latte",
    description: "Teh hijau matcha dengan susu steamed",
    price: 30000,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
]
