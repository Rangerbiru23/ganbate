'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Globe } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
                <span className="text-gray-900 px-3 py-2 text-sm font-medium">Privacy</span>
                <Link href="/terms" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Terms</Link>
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
              <span className="text-gray-900 block px-3 py-2 text-base font-medium">Privacy</span>
              <Link href="/terms" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
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
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Privasi Anda adalah prioritas kami. Pelajari bagaimana <span className="font-bold">GANBATTE SUKSES INDONESIA</span> melindungi data pribadi Anda.
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
                <Eye className="h-6 w-6 mr-3 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                Selamat datang di <span className="font-semibold text-blue-600">GANBATTE SUKSES INDONESIA</span>. 
                Kami memahami bahwa privasi dan keamanan data pribadi Anda sangat penting. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                melindungi, dan membagikan informasi pribadi Anda saat Anda menggunakan layanan 
                pelatihan kerja pariwisata dan perhotelan kami.
              </p>
              <p>
                Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam 
                kebijakan ini. Jika Anda tidak setuju dengan praktik kami, harap jangan 
                menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Database className="h-6 w-6 mr-3 text-purple-600" />
                Informasi yang Kami Kumpulkan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nama lengkap dan identitas resmi</li>
                    <li>Nomor telepon dan alamat email</li>
                    <li>Alamat lengkap sesuai KTP</li>
                    <li>Tanggal lahir dan usia</li>
                    <li>Pendidikan terakhir</li>
                    <li>Pengalaman kerja</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Informasi Pelatihan</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Program pelatihan yang diikuti</li>
                    <li>Progress pembelajaran</li>
                    <li>Hasil evaluasi dan sertifikasi</li>
                    <li>Kehadiran dan partisipasi</li>
                    <li>Feedback dan testimoni</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Alamat IP dan jenis perangkat</li>
                    <li>Browser dan sistem operasi</li>
                    <li>Data penggunaan platform</li>
                    <li>Cookie dan data tracking</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Lock className="h-6 w-6 mr-3 text-green-600" />
                Penggunaan Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                Kami menggunakan informasi yang kami kumpulkan untuk tujuan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Penyediaan Layanan:</strong> Untuk menyediakan program pelatihan yang sesuai dengan kebutuhan Anda</li>
                <li><strong>Administrasi:</strong> Untuk mengelola pendaftaran, penjadwalan, dan sertifikasi</li>
                <li><strong>Peningkatan Layanan:</strong> Untuk menganalisis dan meningkatkan kualitas program pelatihan</li>
                <li><strong>Komunikasi:</strong> Untuk mengirimkan informasi penting tentang pelatihan dan jadwal</li>
                <li><strong>Keamanan:</strong> Untuk memastikan keamanan platform dan mencegah penyalahgunaan</li>
                <li><strong>Legal:</strong> Untuk mematuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-blue-600" />
                Perlindungan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-blue-600">GANBATTE SUKSES INDONESIA</span> 
                berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas untuk otorisasi personil</li>
                <li>System monitoring dan audit reguler</li>
                <li>Backup data yang aman dan terenkripsi</li>
                <li>Update keamanan sistem secara berkala</li>
                <li>Tindakan cepat untuk mengatasi insiden keamanan</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <UserCheck className="h-6 w-6 mr-3 text-purple-600" />
                Hak Anda sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                Sebagai pengguna layanan kami, Anda memiliki hak:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Akses:</strong> Mengakses data pribadi yang kami simpan tentang Anda</li>
                <li><strong>Koreksi:</strong> Memperbaiki data yang tidak akurat atau tidak lengkap</li>
                <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda (dengan batasan tertentu)</li>
                <li><strong>Portabilitas:</strong> Meminta transfer data ke pihak ketiga</li>
                <li><strong>Pembatasan:</strong> Membatasi pemrosesan data pribadi Anda</li>
                <li><strong>Keberatan:</strong> Menolak pemrosesan data untuk tujuan tertentu</li>
              </ul>
            </CardContent>
          </Card>

          {/* Third Party Sharing */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Globe className="h-6 w-6 mr-3 text-green-600" />
                Berbagi Data dengan Pihak Ketiga
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
                untuk tujuan komersial. Kami hanya akan membagi data Anda dalam situasi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Partner Industri:</strong> Dengan persetujuan Anda, untuk penempatan kerja</li>
                <li><strong>Penyedia Layanan:</strong> Untuk penyediaan layanan teknis dan administratif</li>
                <li><strong>Otoritas Hukum:</strong> Jika diwajibkan oleh hukum atau peraturan</li>
                <li><strong>Perlindungan Hak:</strong> Untuk melindungi hak, properti, atau keselamatan kami</li>
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
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin 
                menggunakan hak Anda sebagai pengguna, silakan hubungi kami:
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
                  <span className="ml-2 text-gray-600">privacy@ganbattesukses.co.id</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Update Info */}
          <div className="text-center py-8">
            <p className="text-gray-500">
              Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-gray-500 mt-2">
              Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan akan 
              diberitahukan melalui website atau email.
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
                <li><span className="text-gray-400">Kebijakan Privasi</span></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
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