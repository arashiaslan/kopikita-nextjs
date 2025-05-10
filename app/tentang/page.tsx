import Image from "next/image";
import { Coffee, Users, Award, MapPin, Clock } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative h-full w-full bg-[url('/api/placeholder/1200/600')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tentang Kami</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Mengenal lebih dekat dengan KopiKita dan perjalanan kami menghadirkan kopi autentik Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Cerita Kami</h2>
            <p className="text-gray-600 mb-4">
              KopiKita bermula dari sebuah mimpi sederhana untuk menghadirkan kelezatan kopi Indonesia kepada seluruh pecinta kopi. Didirikan pada tahun 2018 oleh sekumpulan sahabat yang memiliki passion terhadap kopi nusantara, KopiKita hadir sebagai ruang untuk menikmati kopi berkualitas dalam suasana yang nyaman dan hangat.
            </p>
            <p className="text-gray-600 mb-4">
              Kami percaya bahwa Indonesia memiliki kekayaan kopi yang luar biasa, dengan berbagai karakteristik unik dari tiap daerah penghasil kopi. Dari Aceh hingga Papua, setiap biji kopi memiliki cerita dan rasa yang khas yang layak untuk diapresiasi.
            </p>
            <p className="text-gray-600">
              Misi kami adalah mengenalkan dan melestarikan kekayaan kopi Indonesia, sekaligus memberikan pengalaman menikmati kopi yang autentik, edukatif, dan menyenangkan bagi semua pengunjung KopiKita.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <div className="w-full h-full bg-[url('/api/placeholder/600/800')] bg-cover bg-center"></div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-amber-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Coffee className="h-12 w-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Kualitas Tanpa Kompromi</h3>
              <p className="text-gray-600 text-center">
                Kami hanya menggunakan biji kopi pilihan terbaik yang disangrai dengan hati-hati untuk memberikan pengalaman kopi yang sempurna.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Komunitas Yang Inklusif</h3>
              <p className="text-gray-600 text-center">
                KopiKita adalah ruang bagi semua orang, dari pemula hingga penikmat kopi berpengalaman, untuk berbagi dan belajar bersama.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Keberlanjutan</h3>
              <p className="text-gray-600 text-center">
                Kami berkomitmen mendukung petani kopi lokal dan praktik pertanian berkelanjutan untuk masa depan kopi Indonesia yang lebih baik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Tim Kami</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Andi Wibowo", role: "Pendiri & CEO" },
            { name: "Sari Pertiwi", role: "Head Barista" },
            { name: "Budi Santoso", role: "Coffee Sourcer" },
            { name: "Maya Kusuma", role: "Manager Operasional" }
          ].map((person, index) => (
            <div key={index} className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 bg-gray-100">
                <div className="w-full h-full bg-[url('/api/placeholder/160/160')] bg-cover bg-center"></div>
              </div>
              <h3 className="font-semibold text-lg">{person.name}</h3>
              <p className="text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Apa Kata Mereka</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dewi Lestari",
                text: "KopiKita adalah tempat favorit saya untuk bekerja sambil menikmati secangkir kopi. Suasananya nyaman dan kopinya luar biasa!"
              },
              {
                name: "Rendra Wijaya",
                text: "Sebagai penggemar kopi, saya sangat mengapresiasi pengetahuan barista KopiKita tentang asal-usul kopi yang mereka sajikan."
              },
              {
                name: "Ayu Setiawati",
                text: "Saya selalu merasa seperti di rumah ketika berkunjung ke KopiKita. Pelayanannya ramah dan kopinya selalu konsisten enak."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Kunjungi Kami</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-96 rounded-lg overflow-hidden bg-gray-200">
            <div className="w-full h-full bg-[url('/api/placeholder/600/600')] bg-cover bg-center"></div>
          </div>
          <div>
            <div className="flex items-start space-x-4 mb-6">
              <MapPin className="h-6 w-6 text-amber-700 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Kopi Nusantara No. 15<br />
                  Menteng, Jakarta Pusat<br />
                  DKI Jakarta 10310
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-6">
              <Clock className="h-6 w-6 text-amber-700 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Jam Operasional</h3>
                <p className="text-gray-600">
                  Senin - Jumat: 07.00 - 22.00 WIB<br />
                  Sabtu - Minggu: 08.00 - 23.00 WIB
                </p>
              </div>
            </div>
            <p className="text-gray-600 mt-6">
              Kami juga menerima reservasi untuk acara khusus, workshop kopi, dan kunjungan grup. Silakan hubungi kami untuk informasi lebih lanjut.
            </p>
            <button className="mt-6 bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-md font-medium transition-colors">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}