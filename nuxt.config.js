export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: 3000
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'axiliquint',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'axiliquint' },
      { name: 'og:title', content: 'axiliquint' },
      { name: 'og:description', content: 'Meet axiliquint, a Full Stack Web Developer and Video Editor.' },
      { name: 'og:url', content: 'https://axiliquint.vercel.app' },
      { name: 'og:image', content: '/favicons/favicon-180-precomposed.png'},
      { name: 'theme-color', content: '#00D6FF' },
      { name: 'twitter:name', content: 'axiliquint' },
      { name: 'twitter:description', content: 'Meet axiliquint, a Full Stack Web Developer and Video Editor.' },
      { name: 'twitter:url', content: 'https://axiliquint.vercel.app' },
      // For IE10 Metro
      { name: 'msapplication-TitleImage', content: '/favicons/favicon-180-precomposed.png' },
    ],
    link: [
      // Old IEs
      { rel: 'shortcut icon',  href: '/favicons/favicon.ico' },
      
      // New browsers
      { rel: 'icon', type: 'image/x-icon', sizes: '16x16 32x32', href: '/favicons/favicon.ico'},
      
      // iPad with high-resolution Retina display running iOS >= 7
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/favicon-152-precomposed.png'},
      
      // For iPad with high-resolution Retina display running iOS <= 6
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/favicon-144-precomposed.png'},
      
      // For iPhone with high-resolution Retina display running iOS >= 7
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/favicon-120-precomposed.png'},

      // For iPhone with high-resolution Retina display running iOS 6 <=
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/favicon-144-precomposed.png'},

      // For iPhone 6+
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/favicon-180-precomposed.png'},
      
      // For first- and second-generation iPad
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/favicon-72-precomposed.png'},
      
      // For non-Retina iPhone, iPod Touch, and Android 2.1+ devices
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/favicon-57.png'},

      // For Old Chrome
      { rel: 'icon', sizes: '32x32', href: '/favicons/favicon-32.png'},

      // Chrome for Android
      { rel: 'manifest', href: '/manifest.json'},
      { rel: 'icon', sizes: '192x192', href: '/favicons/favicon-192.png'}

    ],
    script: [
      { src: 'https://kit.fontawesome.com/f2775ba51e.js', crossorigin: 'anonymous', async: true},
      { src: 'https://cdn.panelbear.com/analytics.js?site=3jh78gth4tH', async: true }
    ]
  },

  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/panelbear.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    jit: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
