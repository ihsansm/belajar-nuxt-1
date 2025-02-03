export default defineNuxtRouteMiddleware((to, from) => {
    console.log('named middleware!', { to, from });
});