// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig, NuxtPage } from 'nuxt/schema'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
  ],

  hooks: {
    'pages:extend'(pages) {
      function setMiddleware(pages:NuxtPage[]){
        for(const page of pages) {
          if(page.path === '/aout'){
            page.meta||={}
            page.meta.middleware =['Named']
          }
        }
      }
      setMiddleware(pages)
    }
},
// berikut hasil penjelasan Copilot vscode

// Hooks dalam Nuxt.js adalah cara untuk mengeksekusi kode pada berbagai titik dalam siklus hidup aplikasi Nuxt. Mereka memungkinkan Anda untuk menambahkan logika khusus atau memodifikasi perilaku default Nuxt pada berbagai tahap, seperti saat halaman sedang diperluas, saat build sedang berlangsung, atau saat server sedang dimulai.
// Dalam contoh kode yang Anda berikan, hook pages:extend digunakan untuk memodifikasi daftar halaman yang dihasilkan oleh Nuxt. Fungsi ini dipanggil dengan parameter pages, yang merupakan array dari objek halaman Nuxt. Di dalam hook ini, ada fungsi setMiddleware yang menambahkan middleware bernama Named ke halaman dengan path /aout.
// hooks: Objek yang mendefinisikan berbagai hook yang ingin Anda gunakan.
// 'pages:extend': Nama hook yang dipanggil saat daftar halaman sedang diperluas.
// pages: Parameter yang berisi array dari objek halaman Nuxt.
// setMiddleware: Fungsi yang menambahkan middleware ke halaman tertentu.
// page.path === '/aout': Kondisi untuk memeriksa apakah path halaman adalah /aout.
// page.meta ||= {}: Inisialisasi objek meta jika belum ada.
// page.meta.middleware = ['Named']: Menambahkan middleware Named ke halaman.

    imports: {
        dirs: [
            'composables',
            'composables/**',
        ]
    },
    // 'composables': Direktori composables akan diimpor secara otomatis.
    // 'composables/**': Semua subdirektori di dalam composables juga akan diimpor secara otomatis.
    // Dengan menggunakan pengaturan ini, Anda dapat mengimpor modul atau file dari direktori composables dan subdirektorinya tanpa perlu menuliskan pernyataan impor di setiap file.

    plugins: [
      '~/plugins/foo/my-plugin.ts'
    ],
  })

