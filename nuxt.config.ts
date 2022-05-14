import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: 'https://unpkg.com/nes.css@2.3.0/css/nes.min.css' }
            ]
        },
    },
    privateRuntimeConfig: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || ''
    },
})
