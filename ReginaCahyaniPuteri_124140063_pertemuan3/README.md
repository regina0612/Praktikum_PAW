# Aplikasi Manajemen Buku Pribadi

Aplikasi Manajemen Buku Pribadiku merupakan aplikasi berbasis web yang dikembangkan menggunakan React untuk membantu pengguna mencatat, mengelola, dan memantau koleksi buku secara praktis.

## Fitur Aplikasi

- Menambahkan buku beserta judul, nama penulis, dan status buku.
- Mengedit informasi buku.
- Menghapus buku dari daftar koleksi.
- Mencari buku berdasarkan judul atau nama penulis.
- Memfilter buku berdasarkan status.
- Menampilkan statistik jumlah buku.
- Menyimpan data menggunakan `localStorage`.
- Memvalidasi formulir sebelum buku ditambahkan.

## Teknologi yang Digunakan

- React
- JavaScript
- Vite
- React Router DOM
- PropTypes
- HTML dan CSS
- Vitest
- React Testing Library

## Cara Menjalankan Aplikasi

git clone https://github.com/USERNAME/Manajemen-Buku.git
Ganti `USERNAME` dengan username GitHub pemilik repository.
cd Manajemen-Buku
npm install
npm run dev

Setelah server berjalan, buka alamat localhost yang muncul di terminal, biasanya `http://localhost:5173/`.

## Dokumentasi Hasil Aplikasi

### 1. Hasil Menjalankan Aplikasi di Terminal

Berikut merupakan dokumentasi terminal ketika aplikasi dijalankan menggunakan Vite dan berhasil menyediakan alamat localhost.

![Hasil Terminal Localhost](screenshots/terminal-localhost.png)

### 2. Halaman Utama Aplikasi

Halaman utama menampilkan formulir untuk menambahkan buku, fitur pencarian, filter status, serta daftar koleksi buku yang dapat dikelola oleh pengguna.

![Halaman Utama Manajemen Buku](screenshots/halaman-utama.png)

### 3. Halaman Statistik Buku

Halaman statistik menampilkan ringkasan koleksi, meliputi total buku, buku yang sudah dimiliki, buku yang sedang dibaca, dan buku yang ingin dibeli.

![Halaman Statistik Buku](screenshots/halaman-statistik.png)

## Pengujian Aplikasi

Pengujian dilakukan menggunakan Vitest dan React Testing Library untuk memeriksa fungsi utama aplikasi.

Menjalankan pengujian:
npm run test
Memeriksa build aplikasi:
npm run build


## Penyimpanan Data

Aplikasi menggunakan `localStorage` pada browser untuk menyimpan data buku sehingga data tetap tersedia setelah halaman dimuat ulang pada browser yang sama. Data tidak otomatis tersinkronisasi ke perangkat atau browser lain.

## Tujuan Pengembangan

Proyek ini bertujuan menerapkan konsep pengembangan aplikasi berbasis React, seperti komponen, props, state, hooks, Context API, navigasi halaman, penyimpanan data lokal, serta pengujian aplikasi.

## Pengembang

**Regina Cahyani Puteri**  
Mahasiswi Teknik Informatika  
Institut Teknologi Sumatera (ITERA)
