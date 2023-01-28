<template>
  <section class="py-40 md:flex justify-between items-center gap-6">
    <div>
      <h1>More</h1>
      <h1>Youverify</h1>
      <div
        class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 mt-6 lg:mt-12"
      >
        <a
          v-for="(social, index) in socials"
          :key="index"
          :href="social.link"
          target="_blank"
          class="border-2 border-blue-300 rounded-2xl p-2 md:p-3.5 flex items-center gap-2.5"
        >
          <img
            :src="
              require(`~/assets/images/icons/social/${social.icon}-stroke.svg`)
            "
            :alt="social.name"
          />
          <span class="font-medium text-lg text-blue-200">{{
            social.name
          }}</span>
        </a>
      </div>
    </div>

    <div class="space-y-7 mt-7 md:mt-0 md:max-w-xl w-full">
      <button
        is="nuxt-link"
        :to="nav.link"
        v-for="(nav, index) in navs"
        :key="index"
        class="rounded-2xl shadow-md cursor-pointer flex justify-between items-center gap-3.5 p-9"
      >
        <div class="">
          <div class="flex items-center gap-5">
            <img
              :src="require(`~/assets/images/icons/${nav.icon}.svg`)"
              :alt="nav.name"
            />
            <h1 class="font-semibold text-2xl">{{ nav.name }}</h1>
          </div>
          <p class="font-medium text-xl mt-3.5 max-w-sm">
            {{ nav.description }}
          </p>
        </div>
        <svg
          width="28px"
          height="28px"
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#115766"
        >
          <path
            d="M15.4 14L12.177 10.492a0.717 0.717 0 0 1 0 -1.005 0.7 0.7 0 0 1 0.994 0l3.93 4.01a0.714 0.714 0 0 1 0 1.004l-3.93 4.01a0.697 0.697 0 0 1 -0.994 0 0.714 0.714 0 0 1 0 -1.004L15.4 14zM14 0.56a13.44 13.44 0 0 1 13.44 13.44c0 7.424 -6.017 13.44 -13.44 13.44S0.56 21.424 0.56 14A13.44 13.44 0 0 1 14 0.56zm0 25.136a11.696 11.696 0 1 0 0 -23.393 11.696 11.696 0 0 0 0 23.393z"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: "facebook",
          name: "Facebook",
          link: "https://www.facebook.com/youverifyID",
        },
        {
          icon: "linkedin",
          name: "LinkedIn",
          link: "https://www.linkedin.com/company/youcheckonline",
        },
        {
          icon: "twitter",
          name: "Twitter",
          link: "https://twitter.com/YoucheckOnline",
        },
        {
          icon: "instagram",
          name: "Instagram",
          link: "https://instagram.com/youcheckonline",
        },
      ],
      navs: [
        {
          icon: "career",
          name: "Careers",
          description:
            "Want to be a part of our team? Find out what it takes to join us, search for open positions, or send us your CV.",
          link: "/company/careers",
        },
        {
          icon: "blog",
          name: "Our Blog",
          description:
            "Catchup with everything you need to know about the latest industry trends, updates and best practices from our experts.",
          link: "/blogs",
        },
      ],
    };
  },
};
</script>
