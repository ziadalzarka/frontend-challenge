import colors from 'vuetify/es5/util/colors'
import locales from './locales'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: colors.teal.base },
  /*
   ** Global CSS
   */
  css: ['~/global.css'],
  /*
   ** Router custom configuration
   */
  router: {
    middleware: ['auth']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/axe', ssr: false },
    { src: '~/plugins/vee-validate', ssr: true },
    '~/plugins/i18n',
    '~/plugins/infinite-scroll'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'nuxt-i18n'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseUrl: 'http://pushbots-fend-challenge.herokuapp.com',
    browserBaseURL: 'http://pushbots-fend-challenge.herokuapp.com',
    https: true
  },
  /*
   ** Authorization module configuration
   */
  auth: {
    rewriteRedirects: true,
    watchLoggedIn: true,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'https://pushbots-fend-challenge.herokuapp.com/login',
            method: 'post',
            propertyName: 'token'
          },
          user: {
            url: 'https://pushbots-fend-challenge.herokuapp.com/api/me',
            method: 'get',
            propertyName: false
          },
          logout: false
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/'
    },
    token: {
      // prefix: '$'
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.teal.base
        }
      }
    },
    icons: {
      iconfront: 'md'
    }
  },
  /*
   ** i18n
   */
  i18n: {
    defaultLocale: 'en',
    locales,
    lazy: true,
    langDir: 'locales/'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['vee-validate'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Environment variables
   */
  env: {
    // API_URL: 'http://pushbots-fend-challenge.herokuapp.com',
    WCAG: process.env.WCAG || false
  }
}
