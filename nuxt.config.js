export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ivus',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/icons/all.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/default.scss'
  ],

  // Global SCSS used for mixins, variables
  styleResources: {
    scss: [
      '~assets/styles/_mixins.scss',
      '~assets/styles/_variables.scss',
      '~assets/styles/_animation.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/includes', extensions: ['vue'] },
    { path: '~/components/inputs', extensions: ['vue'] },
    { path: '~/components/partials', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.APP_BASE_URL || 'http://localhost:3000/api'
  },

  // Server middleware allows on the same port
  serverMiddleware: {
    '/api': '~/api/index.js'
  },

  server: {
    port: process.env.PORT || 3000
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
