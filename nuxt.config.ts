// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {    
    '/:path/**': {      
      redirect: {        
        to: 'https://gmdilb.pages.dev/',        
        statusCode: 301       
      }    
    }  
  },
  devtools: { enabled: true },
  hub: {
    cache: true
  },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
        SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID
    }
},

  modules: ["@nuxt/image"],

})
