// Tipe data untuk kategori menu
export interface Category {
  id: string
  name: string // Contoh: "Kopi", "Makanan Ringan", "Dessert"
  description: string
  imageUrl: string
}

// Tipe data untuk item menu
export interface MenuItem {
  id: string
  categoryId: string
  name: string // Contoh: "Kopi Susu", "Croissant"
  description: string
  price: number
  imageUrl: string
  isAvailable: boolean
  isPopular: boolean
  ingredients: string[]
  nutritionInfo?: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
  allergens?: string[]
}

// Tipe data untuk pesanan
export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  status: "pending" | "processing" | "completed" | "cancelled"
  totalAmount: number
  createdAt: Date
  deliveryAddress?: string
  deliveryTime?: Date
  paymentMethod: string
  paymentStatus: "pending" | "paid" | "failed"
}

// Tipe data untuk item pesanan
export interface OrderItem {
  menuItemId: string
  name: string
  price: number
  quantity: number
  notes?: string
}

// Tipe data untuk pengguna
export interface User {
  id: string
  name: string
  email: string
  phone: string
  address?: string
  loyaltyPoints: number
  orders: Order[]
}

// Tipe data untuk reservasi
export interface Reservation {
  id: string
  userId: string
  name: string
  email: string
  phone: string
  date: Date
  time: string
  numberOfGuests: number
  specialRequests?: string
  status: "pending" | "confirmed" | "cancelled"
}
