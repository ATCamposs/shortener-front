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
  }
})
