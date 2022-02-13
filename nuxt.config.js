export default {
  /**
   * @global page headers
   * @link - https://go.nuxtjs.dev/config-head
   */
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'}
    ]
  },

  /**
   * @global CSS to use everywhere
   * @link - https://go.nuxtjs.dev/config-css
   */
  css: [
    '~/assets/styles/app.scss'
  ],

  /**
   * @global SCSS to use in components, like mixins, variables etc.
   * @link - https://www.npmjs.com/package/@nuxtjs/style-resources
   */
  styleResources: {
    scss: [
      '~/assets/styles/utilities/_mixins.scss',
      '~/assets/styles/utilities/_variables.scss',
    ]
  },

  /**
   * @plugins to run before rendering page
   * @link - https://go.nuxtjs.dev/config-plugins
   */
  plugins: [
    '~/assets/scripts/app.js'
  ],

  /**
   * @auto import these components
   * @link - https://go.nuxtjs.dev/config-components
   */
  components: [
    '~/components',
    { path: '~/components/forms', extensions: ['vue'] },
    { path: '~/components/includes', extensions: ['vue'] }
  ],

  /**
   * @server middleware allows on the same port
   * @link - https://nuxtjs.org/docs/configuration-glossary/configuration-servermiddleware/
   */
   serverMiddleware: {
    '/api': '~/api/index.js'
  },

  /**
   * @define the server connection variables for your application inside
   * @link - https://nuxtjs.org/docs/configuration-glossary/configuration-server/
   */
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000
  },

  /**
   * @build configuration
   * @link - https://go.nuxtjs.dev/config-build
   */
  build: {
    analyze: false
  },

  /**
   * @modules for development before build
   * @link - https://go.nuxtjs.dev/config-modules
   */
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
  ],

  /**
   * @modules for production build
   * @link - https://go.nuxtjs.dev/config-modules
   */
  modules: [
    /**
     * #modules for web optimization
     */
    '@nuxt/image',

    /**
     * #modules for features
     */
    'nuxt-stripe-module',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    
    /**
     * #modules for analytics
     */
    '@nuxtjs/google-adsense',
    '@nuxtjs/gtm',

    /**
     * #modules for SEO
     */
    '@nuxtjs/redirect-module',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  auth: {
    strategies: {
      local: { /* ... */ },
      github: { /* ... */ },
    }
  },

  dotenv: {
    filename: '.env'
  },

  stripe: {
    /* module options */
  },

  robots: {
    /* module options */
  },

  redirect: [
    /* module options */
  ],

  googleAnalytics: {
    /* module options */
  },

  'google-adsense': {
    /* module options */
  },

  axios: {
    baseURL: process.env.APP_BASE_URL || 'http://localhost:3000/api'
  },
}
