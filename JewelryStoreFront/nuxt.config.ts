/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "definePiniaStore","storeToRefs"],
      },
    ],
    ["@nuxtjs/tailwindcss"],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Vazirmatn: true,
          Inter: [400, 700],
          "Josefin+Sans": true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100],
          },
        },
      },
    ],
  ],

  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primeicons/primeicons.css",
  ],

  build: {
    transpile: ["primevue"],
  },

  imports:{
    dirs:['store'],
  }
});
