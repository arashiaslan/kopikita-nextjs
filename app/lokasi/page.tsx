import { MapPin, Phone, Clock, Wifi, Coffee, Utensils, Users } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "KopiKita Menteng",
    address: "Jl. Kopi Nusantara No. 15, Menteng, Jakarta Pusat",
    phone: "(021) 5553-7890",
    hours: "Senin - Jumat: 07.00 - 22.00 WIB\nSabtu - Minggu: 08.00 - 23.00 WIB",
    image: "/api/placeholder/800/500",
    features: ["Wifi Gratis", "Ruang Meeting", "Outdoor Seating"],
    description: "Cabang flagship kami di jantung Jakarta dengan suasana klasik dan nyaman, cocok untuk pertemuan bisnis atau bersantai.",
    mapUrl: "https://maps.google.com/?q=KopiKita+Menteng",
    isNew: false,
  },
  {
    id: 2,
    name: "KopiKita Kemang",
    address: "Jl. Kemang Raya No. 88, Kemang, Jakarta Selatan",
    phone: "(021) 5557-1234",
    hours: "Setiap hari: 08.00 - 24.00 WIB",
    image: "/api/placeholder/800/500",
    features: ["Wifi Gratis", "Live Music", "Board Games"],
    description: "Cabang dengan nuansa artsy dan santai, sering mengadakan pertunjukan live music di akhir pekan.",
    mapUrl: "https://maps.google.com/?q=KopiKita+Kemang",
    isNew: false,
  },
  {
    id: 3,
    name: "KopiKita Senopati",
    address: "Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan",
    phone: "(021) 5559-8765",
    hours: "Senin - Minggu: 07.00 - 23.00 WIB",
    image: "/api/placeholder/800/500",
    features: ["Co-working Space", "Ruang Meeting", "Buku & Perpustakaan"],
    description: "Desain interior minimalis modern dengan fokus pada ruang kerja yang nyaman untuk para profesional dan kreator.",
    mapUrl: "https://maps.google.com/?q=KopiKita+Senopati",
    isNew: false,
  },
  {
    id: 4,
    name: "KopiKita Bintaro",
    address: "Jl. Bintaro Utama Sektor 9, Tangerang Selatan",
    phone: "(021) 5551-4321",
    hours: "Senin - Jumat: 07.30 - 21.30 WIB\nSabtu - Minggu: 08.00 - 22.00 WIB",
    image: "/api/placeholder/800/500",
    features: ["Area Bermain Anak", "Parkir Luas", "Pet Friendly"],
    description: "Konsep kafe ramah keluarga dengan area bermain anak dan taman outdoor yang luas.",
    mapUrl: "https://maps.google.com/?q=KopiKita+Bintaro",
    isNew: true,
  }
];

const FeatureIcon = ({ feature }) => {
  switch (feature) {
    case "Wifi Gratis":
      return <Wifi className="h-4 w-4" />;
    case "Ruang Meeting":
      return <Users className="h-4 w-4" />;
    case "Outdoor Seating":
      return <Coffee className="h-4 w-4" />;
    case "Live Music":
      return <Users className="h-4 w-4" />;
    case "Board Games":
      return <Users className="h-4 w-4" />;
    case "Co-working Space":
      return <Users className="h-4 w-4" />;
    case "Buku & Perpustakaan":
      return <Users className="h-4 w-4" />;
    case "Area Bermain Anak":
      return <Users className="h-4 w-4" />;
    case "Parkir Luas":
      return <MapPin className="h-4 w-4" />;
    case "Pet Friendly":
      return <Utensils className="h-4 w-4" />;
    default:
      return <Coffee className="h-4 w-4" />;
  }
};

export default function Lokasi() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative h-full w-full bg-[url('/api/placeholder/1200/600')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Lokasi KopiKita</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Temukan KopiKita terdekat dan nikmati pengalaman kopi autentik Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Cabang KopiKita</h2>
          <p className="text-gray-600 mb-4">
            KopiKita terus berkembang dengan membuka beberapa cabang di berbagai lokasi strategis. 
            Setiap cabang kami dirancang dengan konsep unik namun tetap mempertahankan kualitas kopi 
            dan pelayanan yang menjadi standar KopiKita.
          </p>
          <p className="text-gray-600">
            Silakan kunjungi cabang KopiKita terdekat untuk merasakan pengalaman menikmati kopi 
            Indonesia terbaik dalam suasana yang nyaman dan penuh kehangatan.
          </p>
        </div>
      </section>

      {/* Locations Listing */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="border rounded-lg overflow-hidden shadow-md bg-white">
              <div className="relative h-56 w-full">
                <div className="w-full h-full bg-[url('{location.image}')] bg-cover bg-center"></div>
                {location.isNew && (
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Baru Dibuka
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                
                <div className="flex items-start space-x-3 mb-3">
                  <MapPin className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{location.address}</p>
                </div>
                
                <div className="flex items-start space-x-3 mb-3">
                  <Phone className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{location.phone}</p>
                </div>
                
                <div className="flex items-start space-x-3 mb-4">
                  <Clock className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 whitespace-pre-line">{location.hours}</p>
                </div>
                
                <div className="mb-5">
                  <h4 className="font-medium text-gray-800 mb-2">Fasilitas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm"
                      >
                        <FeatureIcon feature={feature} />
                        <span className="ml-1">{feature}</span>
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={location.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-md font-medium transition-colors"
                >
                  Lihat di Peta
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Find Another Location */}
      <section className="py-12 px-4 md:px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Tidak menemukan lokasi terdekat?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            KopiKita terus berkembang dan membuka cabang baru di berbagai lokasi. 
            Jika Anda tidak menemukan KopiKita di dekat Anda, jangan khawatir! 
            Kami terus berupaya untuk membawa pengalaman kopi autentik Indonesia lebih dekat dengan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-md font-medium transition-colors">
              Hubungi Kami
            </button>
            <button className="bg-white border border-amber-700 text-amber-700 hover:bg-amber-50 py-2 px-6 rounded-md font-medium transition-colors">
              Usulkan Lokasi Baru
            </button>
          </div>
        </div>
      </section>

      {/* Franchise Information */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Franchise Opportunity</h2>
              <p className="text-gray-600 mb-4">
                Tertarik untuk membuka cabang KopiKita di kota Anda? Kami membuka kesempatan kerjasama 
                franchise untuk para entrepreneur yang memiliki passion di bidang kopi dan ingin menjadi 
                bagian dari keluarga KopiKita.
              </p>
              <p className="text-gray-600 mb-6">
                Dapatkan dukungan penuh mulai dari training barista, supplai biji kopi berkualitas, 
                hingga sistem operasional yang telah teruji. Bergabunglah bersama kami untuk 
                mengembangkan kopi Indonesia!
              </p>
              <button className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-md font-medium transition-colors">
                Info Franchise
              </button>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[url('/api/placeholder/600/500')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}