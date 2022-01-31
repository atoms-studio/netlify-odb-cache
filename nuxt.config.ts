import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  nitro: {
    output: {
      dir: '{{ _nuxt.rootDir }}/.output',
      publicDir: '{{ _nuxt.rootDir }}/dist',
    },
    preset: 'netlify_builder'
  }
})
