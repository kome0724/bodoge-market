const webpack = require("webpack");

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'bodoge-market',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/animate.css',
    '@/assets/css/bootstrap.css',
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/carousel.css',
    '@/assets/css/custom.css',
    '@/assets/css/dark.css',
    '@/assets/css/flexslider.css',
    '@/assets/css/glasscase.css',
    '@/assets/css/jquery-ui.css',
    '@/assets/css/menu-alt.css',
    '@/assets/css/prettyPhoto.css',
    '@/assets/css/simple-line-icons.css',
    '@/assets/css/style.css',
    "~/node_modules/bootstrap/dist/css/bootstrap.css",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/bootstrap.js',
    '~plugins/carousel.js',
    '~plugins/contact.js',
    '~plugins/countdown.js',
    '~plugins/custom.js',
    '~plugins/fitvid.js',
    '~plugins/flexslider.js',
    '~plugins/icons-lte-ie7.js',
    '~plugins/imagesloaded.pkgd.js',
    '~plugins/isotope.js',
    '~plugins/jquery-ui.js',
    '~plugins/jquery.glasscase.min.js',
    '~plugins/jquery.min.js',
    '~plugins/jquery.prettyPhoto.js',
    '~plugins/masonry-one.js',
    '~plugins/menu-alt.js',
    '~plugins/parallax.js',
    '~plugins/progress.js',
    '~plugins/retina.js',
    '~plugins/wan-spinner.js',
    '~plugins/wow.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
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
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
}
