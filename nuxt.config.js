const axios = require("axios");

export default {
  ssr: true,
  head: {
    titleTemplate: '%s - Youverify',
    title: 'KYC Automation for Banks and Startups',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: "description",
        name: "description",
        content:
          "Africa’s No 1 Identity verification service for businesses to ease customer onboarding, Know your customer (KYC), address verification, KYC crypto, CTF, and AML compliance. ",
      },
      { name: 'theme-color', content: '#46B2C8' },
      { name: 'author', content: 'Youverify Inc' },
      {
        hid: 'developer',
        name: 'developer',
        content: 'Youverify Engineering team',
      },
      { hid: 'copyright', name: 'copyright', content: 'Youverify Inc' },
     
      // facebook, linkedln tags
      { hid: 'og:url', property: 'og:url', content: 'https://youverify.co/' },
      { hid: 'og:type', property: 'og:type', content: 'verification' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Youverify - KYC Automation for Banks and Startups.',
      },
      { hid: 'og:type', property: 'og:type', content: 'verification' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Youverify Inc',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Africa’s No 1 Identity verification service for businesses to ease customer onboarding, Know your customer (KYC), address verification, KYC crypto, CTF, and AML compliance. "
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://os.youverify.co/img/logos/logo.svg',
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en_US',
      },
      // twitter meta tags
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        name: 'card',
        content: 'summary',
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        name: 'twitter:creator',
        content: '@YoucheckOnline',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        name: 'title',
        content: 'Youverify - KYC Automation for Banks and Startups.',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        name: 'description',
        content: "Africa’s No 1 Identity verification service for businesses to ease customer onboarding, Know your customer (KYC), address verification, KYC crypto, CTF, and AML compliance. "
     
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        name: 'image',
        content:
          'https://os.youverify.co/img/logos/logo.svg',
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        name: 'image',
        content: '@YoucheckOnline',
      },
      { 'http-equiv': 'expires', content: '43200' },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-32x32.png" }],
    script: [
      {
        charset: "utf-8",
        defer: true,
        src: "https://d3js.org/d3.v5.min.js",
      },
      {
        defer: true,
        src: "https://d3js.org/d3-queue.v3.min.js",
      },
      {
        defer: true,
        src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
      },
    ],
  },

  loading: { color: "#0F808C", height: "3px" },

  css: [],

  env: {
    baseUrl: "https://cms.dev.youverify.co" || "http://localhost:1337",
  },

  plugins: [
    "@plugins/filters.js",
    "@plugins/vue-placeholders.js",
    "@/plugins/vue-lazysizes.client.js",
    "@/plugins/reuseable-component.js",
  ],

  
  buildModules: ["@nuxtjs/tailwindcss"],
  serverMiddleware: ["~/api/index"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "vue-social-sharing/nuxt",
  ],

  sitemap: {
    hostname: "https://youverify.co",
    routes: async () => {
      let { data: industriesData } = await axios.get(
        `https://cms.dev.youverify.co/industries`
      );
      const industriesArray = industriesData.map((v) => `/use-case/${v.slug}`);

      let { data: blogData } = await axios.get(
        `https://cms.dev.youverify.co/blogs`
      );
      const blogArray = blogData.map((v) => `/blog/${v.slug}`);

      return [...industriesArray, ...blogArray];
    },
  },

  robots: {
    UserAgent: "*",
    Disallow: "",
    Allow: "/",
    Sitemap: "https://youverify.co/sitemap.xml",
  },

  build: {
    extend(config, { isClient, isDev, loaders: { vue } }) {
      vue.transformAssetUrls.LazyImage = ["src"];
    },
  },
};
