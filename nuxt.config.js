const axios = require('axios');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Storyblok + Nuxt == <3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An awesome blog about the life, with Nuxt and Storyblok' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700'}
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
    ['storyblok-nuxt', {accessToken: process.env.NODE_ENV == "production"
    ? 'wF2oQcBMHL5oAJQObPLnkQtt'
    : 'FthQCWZ1OjKhBS7s1Tykrwtt',
    cacheProvider: 'memory'}]
  ],

  generate: {
    routes: function() {
      return axios.get("https://api.storyblok.com/v1/cdn/stories?version=published&token=wF2oQcBMHL5oAJQObPLnkQtt&starts_with=blog&cv=" + Math.floor(Date.now() / 1e3))
      .then(res => {
        const blogPosts = res.data.stories.map(bp => bp.full_slug);
        return [
          '/',
          '/blog',
          '/blog',
          ...blogPosts

        ]
      });
    }

  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
