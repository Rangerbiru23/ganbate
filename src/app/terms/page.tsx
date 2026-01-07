'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, Users, CreditCard, Shield, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  GANBATTE SUKSES INDONESIA
                </h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Beranda</Link>
                <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Tentang</Link>
                <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Layanan</Link>
                <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Kontak</Link>
                <Link href="/privacy" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Privacy</Link>
                <span className="text-gray-900 px-3 py-2 text-sm font-medium">Terms</span>
              </div>
            </div>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link href="/" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">Beranda</Link>
              <Link href="/" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">Tentang</Link>
              <Link href="/" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">Layanan</Link>
              <Link href="/" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">Kontak</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">Privacy</Link>
              <span className="text-gray-900 block px-3 py-2 text-base font-medium">Terms</span>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ketentuan penggunaan layanan pelatihan <span className="font-bold">GANBATTE SUKSES INDONESIA</span>
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <FileText className="h-6 w-6 mr-3 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                Selamat datang di <span className="font-semibold text-blue-600">GANBATTE SUKSES INDONESIA</span>. 
                Syarat dan Ketentuan ini mengatur penggunaan layanan pelatihan kerja pariwisata dan perhotelan 
                yang kami sediakan. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk 
                terikat oleh syarat dan ketentuan ini.
              </p>
              <p>
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                harap jangan menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Users className="h-6 w-6 mr-3 text-purple-600" />
                Layanan Pelatihan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Program yang Tersedia</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Digital Marketing Hotel:</strong> Program 3 bulan dengan fokus pada Meta Ads dan marketing digital</li>
                  <li><strong>Hospitality Management:</strong> Program 6 bulan untuk manajemen perhotelan lengkap</li>
                  <li><strong>Tourism Marketing Pro:</strong> Program 4 bulan untuk pemasaran pariwisata</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Kriteria Peserta</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Usia minimal 17 tahun</li>
                  <li>Pendidikan minimal SMA/SMK sederajat</li>
                  <li>Memiliki motivasi tinggi untuk belajar</li>
                  <li>Sehat jasmani dan rohani</li>
                  <li>Bersedia mengikuti seluruh program pelatihan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Registration */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
                Pendaftaran dan Pendaftaran Ulang
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Proses Pendaftaran</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mengisi formulir pendaftaran online dengan data yang valid</li>
                  <li>Menyediakan dokumen pendukung (KTP, ijazah, pas foto)</li>
                  <li>Melakukan pembayaran biaya pendaftaran</li>
                  <li>Mengikuti tes seleksi (jika diperlukan)</li>
                  <li>Melakukan pembayaran biaya pelatihan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Verifikasi Data</h3>
                <p>
                  Peserta bertanggung jawab atas kebenaran data yang diberikan. 
                  <span className="font-semibold text-blue-600"> GANBATTE SUKSES INDONESIA</span> 
                  berhak membatalkan pendaftaran jika data yang diberikan tidak valid.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <CreditCard className="h-6 w-6 mr-3 text-purple-600" />
                Pembayaran dan Biaya
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Struktur Biaya</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Biaya Pendaftaran:</strong> Rp 500.000 (non-refundable)</li>
                  <li><strong>Digital Marketing Hotel:</strong> Rp 2.500.000</li>
                  <li><strong>Hospitality Management:</strong> Rp 3.500.000</li>
                  <li><strong>Tourism Marketing Pro:</strong> Rp 2.000.000</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Metode Pembayaran</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Transfer bank ke rekening resmi kami</li>
                  <li>Pembayaran tunai di kantor</li>
                  <li>Pembayaran cicilan (syarat dan ketentuan berlaku)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Kebijakan Pengembalian</h3>
                <p>
                  Biaya pendaftaran tidak dapat dikembalikan. Biaya pelatihan dapat 
                  dikembalikan 50% jika pembatalan dilakukan maksimal 7 hari sebelum 
                  program dimulai dengan alasan yang sah.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Responsibilities */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-blue-600" />
                Hak dan Kewajiban
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Kewajiban Peserta</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Mengikuti seluruh jadwal pelatihan dengan disiplin</li>
                    <li>Menghormati mentor dan sesama peserta</li>
                    <li>Memelihara fasilitas dan peralatan pelatihan</li>
                    <li>Menyelesaikan semua tugas dan proyek yang diberikan</li>
                    <li>Mematuhi peraturan dan tata tertib yang berlaku</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Hak Peserta</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Mendapatkan materi pelatihan yang berkualitas</li>
                    <li>Mendapatkan sertifikat setelah menyelesaikan program</li>
                    <li>Mendapatkan bantuan penempatan kerja</li>
                    <li>Mengakses fasilitas pelatihan yang tersedia</li>
                    <li>Memberikan feedback untuk perbaikan program</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Kewajiban Kami</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Menyediakan mentor yang berpengalaman</li>
                    <li>Memberikan materi pelatihan yang relevan</li>
                    <li>Menyediakan fasilitas pelatihan yang memadai</li>
                    <li>Menerbitkan sertifikat yang sah</li>
                    <li>Memberikan dukungan karir setelah pelatihan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-purple-600" />
                Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                Semua materi pelatihan, modul, video, dan konten lainnya yang 
                disediakan oleh <span className="font-semibold text-blue-600">GANBATTE SUKSES INDONESIA</span> 
                adalah milik intelektual kami dan dilindungi oleh hukum hak cipta.
              </p>
              <p>
                Peserta diperbolehkan menggunakan materi untuk keperluan pembelajaran 
                pribadi selama program berlangsung. Dilarang keras mendistribusikan, 
                menyalin, atau menggunakan materi untuk tujuan komersial tanpa izin tertulis.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <AlertCircle className="h-6 w-6 mr-3 text-red-600" />
                Pembatalan dan Penghentian
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Pembatalan oleh Peserta</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pembatalan lebih dari 7 hari: pengembalian 50%</li>
                  <li>Pembatalan 3-7 hari: pengembalian 25%</li>
                  <li>Pembatalan kurang dari 3 hari: tidak ada pengembalian</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Penghentian oleh Kami</h3>
                <p>
                  Kami berhak menghentikan partisipasi peserta jika:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Melanggar peraturan dan tata tertib secara berulang</li>
                  <li>Terbukti melakukan kecurangan atau plagiarisme</li>
                  <li>Mengganggu ketertiban dan kenyamanan belajar</li>
                  <li>Tidak memenuhi kriteria kehadiran minimal 75%</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <AlertCircle className="h-6 w-6 mr-3 text-orange-600" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-blue-600">GANBATTE SUKSES INDONESIA</span> 
                tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Keberhasilan peserta mendapatkan pekerjaan setelah pelatihan</li>
                <li>Kerugian tidak langsung yang timbul dari penggunaan layanan</li>
                <li>Keterlambatan atau pembatalan karena force majeure</li>
                <li>Kerusakan peralatan pribadi peserta</li>
                <li>Informasi yang tidak akurat dari pihak ketiga</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, 
                silakan hubungi kami:
              </p>
              <div className="bg-white p-6 rounded-lg space-y-3">
                <div>
                  <strong className="text-gray-900">Nama Perusahaan:</strong>
                  <span className="ml-2 text-gray-600">GANBATTE SUKSES INDONESIA</span>
                </div>
                <div>
                  <strong className="text-gray-900">Alamat:</strong>
                  <span className="ml-2 text-gray-600">
                    Jalan Tlogosari Raya Nomor 1, Desa/Kelurahan Tlogosari Kulon, 
                    Kec. Pedurungan, Kota Semarang, Provinsi Jawa Tengah
                  </span>
                </div>
                <div>
                  <strong className="text-gray-900">Telepon:</strong>
                  <span className="ml-2 text-gray-600">085285703582</span>
                </div>
                <div>
                  <strong className="text-gray-900">Email:</strong>
                  <span className="ml-2 text-gray-600">legal@ganbattesukses.co.id</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Update Info */}
          <div className="text-center py-8">
            <p className="text-gray-500">
              Syarat dan Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-gray-500 mt-2">
              Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. 
              Perubahan akan diberitahukan melalui website atau email.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                GANBATTE SUKSES INDONESIA
              </h3>
              <p className="text-gray-400">
                Pelatihan Kerja Pariwisata dan Perhotelan Swasta dengan sertifikasi Meta Ads
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Program</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing Hotel</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hospitality Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tourism Marketing Pro</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><span className="text-gray-400">Syarat & Ketentuan</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>085285703582</li>
                <li>info@ganbattesukses.co.id</li>
                <li className="text-sm">
                  Jl. Tlogosari Raya No. 1, Tlogosari Kulon, Pedurungan, Semarang
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GANBATTE SUKSES INDONESIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}