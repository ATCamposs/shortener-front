import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js')
    }
  },
  modules: [
    '@intlify/nuxt3'
  ],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'pt-BR',
      fallbackLocale: 'en'
    }
  },
  publicRuntimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
  },
  privateRuntimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
  }
})
