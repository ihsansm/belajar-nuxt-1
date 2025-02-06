export default defineNuxtPlugin((nuxtApp)=>{
    console.log('nuxtApp: ', nuxtApp);
    return{
        provide: {
            hello : (msg:string)=> `Hello ${msg}`,
            consoleIt:(data:any)=> console.log('consoleIt :',data)
        }
    }
})