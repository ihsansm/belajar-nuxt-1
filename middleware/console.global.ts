export default defineNuxtRouteMiddleware((to,from)=>{
  console.log('middleware!',{to, from});
});

// gunakan format contoh: 01.console.global.ts untuk membuat playlist/ file yang akan dieksekusi terlebih dahulu sesuai angka urutannya. 