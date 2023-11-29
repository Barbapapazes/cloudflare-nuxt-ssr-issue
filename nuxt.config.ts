// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/', '/api/data.json'],
    }
  },
  devtools: { enabled: true }
})
