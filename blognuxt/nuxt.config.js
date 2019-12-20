
export default {
  server: {
    port: 8080, // default: 3000,修改为了3002
    host: 'localhost', // default: localhost
},
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: "~plugins/server_site/index.js", ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
   // transpile: [/^element-ui/],
    build:{
      vendor:['element-ui','axios']
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  proxy: [
    ['/api', { target: 'http://localhost:8081' }],
    ['/images', { target: 'http://localhost:8081' }],
    // ['/api', { target: 'http://123.206.33.109:8081' }],
    //['/images', { target: 'http://123.206.33.109:8081' }],
  ]
}
