export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
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
        src: "https://d3js.org/d3-queue.v3.min.js"
      },
      {
        src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      }
    ],
  },

  // https://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@github.com/YouverifyHQ/youverify-web.git

  ssr: false,
  
  loading: { color: "#0F808C", height: '3px' },
  // loading: '~/components/LoadingBar.vue'
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  env: {
    baseUrl: 'https://cms.dev.youverify.co' || "http://localhost:1337",
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@plugins/filters.js", "@plugins/vue-placeholders.js", '@/plugins/vue-lazysizes.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
	extend(config, { isClient, isDev, loaders: { vue } }) {
		vue.transformAssetUrls.LazyImage = ["src"]; 
	 }
  },
};
