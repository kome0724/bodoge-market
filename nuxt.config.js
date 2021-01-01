const webpack = require("webpack");

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'bodoge-market',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'description', content: ''},
      { name: 'author', content: ''},
      { name: 'keywords', content: ''},
      { hid: 'description', name: 'description', content: '' },
    ],

    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/animate.css',
    '~/assets/css/bootstrap.css',
    '~/assets/css/carousel.css',
    '~/assets/css/custom.css',
    '~/assets/css/flexslider.css',
    '~/assets/css/glasscase.css',
    '~/assets/css/jquery-ui.css',
    '~/assets/css/menu-alt.css',
    // '~/assets/css/prettyPhoto.css',
    '~/assets/css/simple-line-icons.css',
    '~/assets/css/style.css',
    "~/node_modules/bootstrap/dist/css/bootstrap.css",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    { src: '~/plugins/carousel.js', mode: 'client' },
    { src: '~/plugins/contact.js', mode: 'client' },
    { src: '~/plugins/countdown.js', mode: 'client' },
    { src: '~/plugins/custom.js', mode: 'client' },
    { src: '~/plugins/fitvid.js', mode: 'client' },
    { src: '~/plugins/flexslider.js', mode: 'client' },
    { src: '~/plugins/icons-lte-ie7.js', mode: 'client' },
    { src: '~/plugins/imagesloaded.pkgd.js', mode: 'client' },
    { src: '~/plugins/isotope.js', mode: 'client' },
    { src: '~/plugins/jquery-ui.js', mode: 'client' },
    { src: '~/plugins/jquery.glasscase.min.js', mode: 'client' },
    { src: '~/plugins/jquery.min.js', mode: 'client' },
    { src: '~/plugins/jquery.prettyPhoto.js', mode: 'client' },
    { src: '~/plugins/masonry-one.js', mode: 'client' },
    { src: '~/plugins/menu-alt.js', mode: 'client' },
    { src: '~/plugins/parallax.js', mode: 'client' },
    { src: '~/plugins/progress.js', mode: 'client' },
    { src: '~/plugins/retina.js', mode: 'client' },
    { src: '~/plugins/wan-spinner.js', mode: 'client' },
    { src: '~/plugins/wow.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],


  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /**
     * add external plugins
     */
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
  }
}
