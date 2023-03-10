const axios = require("axios");

export default {
  ssr: true,
  head: {
    titleTemplate: "%s - Youverify",
    title: "KYC Automation for Banks and Startups",
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

  generate: {
    // routes: async () => {
    //   let { data: industriesData } = await axios.get(
    //     `https://cms.dev.youverify.co/industries`
    //   );
    //   const industriesArray = industriesData.map((v) => `/use-case/${v.slug}`);

    //   let { data: blogData } = await axios.get(
    //     `https://cms.dev.youverify.co/blogs`
    //   );
    //   const blogArray = blogData.map((v) => `/blog/${v.slug}`);

    //   let { data: reportData } = await axios.get(
    //     `https://cms.dev.youverify.co/reports`
    //   );
    //   const reportsArray = reportData.map((v) => `/industry/reports/${v.slug}`);

    //   let { data: guidesData } = await axios.get(
    //     `https://cms.dev.youverify.co/compliance-guides`
    //   );
    //   const guidesArray = guidesData.map((v) => `/compliance-guides?slug=${v.slug}`);

    //   return [...industriesArray, ...blogArray, ...reportsArray, ...guidesArray];
    // },
  },

  loading: { color: "#0F808C", height: "3px" },

  css: ['vue-slick-carousel/dist/vue-slick-carousel.css'],

  env: {
    baseUrl: "https://cms.dev.youverify.co" || "http://localhost:1337",
  },

  plugins: [
    "@plugins/filters.js",
    "@plugins/vue-placeholders.js",
    "@/plugins/vue-lazysizes.client.js",
    "@/plugins/reuseable-component.js",
    "@/plugins/vue-slick-carousel.js",
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
    // routes: async () => {
    //   let { data: industriesData } = await axios.get(
    //     `https://cms.dev.youverify.co/industries`
    //   );
    //   const industriesArray = industriesData.map((v) => `/use-case/${v.slug}`);

    //   let { data: blogData } = await axios.get(
    //     `https://cms.dev.youverify.co/blogs`
    //   );
    //   const blogArray = blogData.map((v) => `/blog/${v.slug}`);

    //   let { data: reportData } = await axios.get(
    //     `https://cms.dev.youverify.co/reports`
    //   );
    //   const reportsArray = reportData.map((v) => `/industry/reports/${v.slug}`);

    //   let { data: guidesData } = await axios.get(
    //     `https://cms.dev.youverify.co/compliance-guides`
    //   );
    //   const guidesArray = guidesData.map((v) => `/compliance-guides?slug=${v.slug}`);

    //   return [...industriesArray, ...blogArray, ...reportsArray, ...guidesArray];
    // },
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