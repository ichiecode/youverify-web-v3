<template>
  <header
    class="bg-blue-200 transition-all duration-500 ease-in-out"
    :class="scrollingDown ? 'py-2' : 'py-4'"
  >
    <NuxtLink
      to="/blog/youverify-makes-2023-regtech100-list"
      class="max-w-screen-xl mx-auto px-6 flex gap-2 sm:gap-4 items-center justify-center"
    >
      <div
        class="transition-all duration-500 ease-in-out"
        :class="scrollingDown ? 'w-7' : 'w-14'"
      >
        <img class="w-full" src="@/assets/images/regtech100.png" alt="" />
      </div>

      <div>
        <h1
          class="text-center text-blue-100 transition-all duration-500 ease-in-out"
          :class="scrollingDown ? 'text-base sm:text-lg' : 'text-lg sm:text-2xl'"
        >
          Youverify is a 2023 RegTech100 Company
        </h1>
      </div>

      <div>
        <svg
          slot="append"
          viewBox="0 0 20 20"
          fill="none"
          :class="scrollingDown ? 'w-7' : 'w-8'"
        >
          <path
            d="M6 10H14"
            stroke="#EFF8F9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 6L14 10L10 14"
            stroke="#EFF8F9"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </NuxtLink>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      scrollingDown: false,
    };
  },
  methods: {
    handleScroll() {
      const currentScroll = window.scrollY;

      if (currentScroll < this.scrollPosition) {
        this.scrollingDown = false;
      } else {
        this.scrollingDown = true;
      }

      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
