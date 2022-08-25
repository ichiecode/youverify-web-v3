const axios = require("axios");

export default {
  head: {
    title: "Youverify",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Africa’s No 1 Identity verification service for businesses to ease customer onboarding, Know your customer (KYC), address verification, KYC crypto, CTF, and AML compliance. ",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-32x32.png" }],
    script: [
      {
        charset: "utf-8",
        src: "https://d3js.org/d3.v5.min.js",
      },
      {
        src: "https://d3js.org/d3-queue.v3.min.js",
      },
      {
        src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
      },
    ],
  },

  loading: { color: "#0F808C", height: "3px" },

  ssr: false,

  loading: { color: "#0F808C", height: '3px' },
  // loading: '~/components/LoadingBar.vue'
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  env: {
    baseUrl: "https://cms.dev.youverify.co" || "http://localhost:1337",
  },

  plugins: [
    "@plugins/filters.js",
    "@plugins/vue-placeholders.js",
    "@/plugins/vue-lazysizes.client.js",
  ],

  axios: {},

  components: true,

  buildModules: ["@nuxtjs/tailwindcss"],
  serverMiddleware: ['~/api/index'],

  modules: ["@nuxtjs/axios", "@nuxtjs/sitemap", "@nuxtjs/robots", 'vue-social-sharing/nuxt'],
  
  sitemap: {
    hostname: "https://youverify.co",
    gzip: true,
    exclude: ["/secret", "/admin/**"],
    routes: async () => {

      let { data: industriesData } = await axios.get(`https://cms.dev.youverify.co/industries`);
      const industriesArray = industriesData.map(v => `/use-case/${v.slug}`)

      let { data: blogData } = await axios.get(`https://cms.dev.youverify.co/blogs`);
      const blogArray = blogData.map(v => `/blog/${v.slug}`)

      return [...industriesArray, ...blogArray]
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: '/admin',
    Allow: '/'
  },

  build: {
    extend(config, { isClient, isDev, loaders: { vue } }) {
      vue.transformAssetUrls.LazyImage = ["src"];
    },
  },
}
