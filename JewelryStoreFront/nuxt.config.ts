/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
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
    "@fortawesome/fontawesome-svg-core/styles.css",
    "primevue/resources/themes/lara-light-blue/theme.css"
  ],

  build: {
		transpile: ["primevue"]
	}
  
});
