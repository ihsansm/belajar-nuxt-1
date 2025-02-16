export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.directive('debug', {
        mounted: (el) => console.log('debug -->', el.innerHTML),
    });
});