

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  vite: {
    define: {
      'process.env': {}
    }
  }
  
})



