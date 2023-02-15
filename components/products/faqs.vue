<template>
  <section class="py-24 px-4 md:px-8 max-w-screen-xl mx-auto">
    <h2 class="font-semibold text-2xl md:text-5xl text-center">
      Frequently Asked Questions
    </h2>

    <div class="mt-12 md:mt-28">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        @click="toggleFaq(index)"
        class="py-10"
        :class="
          currentIndex === index
            ? 'border-b-4 border-blue-300'
            : 'border-b border-blue'
        "
      >
        <div class="flex justify-between cursor-pointer text-blue">
          <h3 class="text-lg md:text-2xl font-medium">
            {{ faq.question }}
          </h3>
          <div>
            <svg
              v-if="currentIndex === index"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                stroke-width="0.3px"
                d="M12 0.75C5.787 0.75 0.75 5.787 0.75 12S5.787 23.25 12 23.25 23.25 18.213 23.25 12 18.213 0.75 12 0.75ZM18.894 18.894a9.715 9.715 0 1 1 2.09 -3.1A9.719 9.719 0 0 1 18.894 18.894Z"
                class="ci-primary"
              />
              <path
                stroke="currentColor"
                stroke-width="0.3px"
                points="272.112 314.481 272.112 128 240.112 128 240.112 314.481 165.059 239.429 142.432 262.056 256.112 375.736 369.793 262.056 347.166 239.429 272.112 314.481"
                class="ci-primary"
                d="M12.755 14.741L12.755 6L11.255 6L11.255 14.741L7.737 11.223L6.676 12.284L12.005 17.613L17.334 12.284L16.273 11.223L12.755 14.741Z"
              />
            </svg>
            <svg
              v-else
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                stroke-width="0.3px"
                d="M12 0.75C5.787 0.75 0.75 5.787 0.75 12S5.787 23.25 12 23.25 23.25 18.213 23.25 12 18.213 0.75 12 0.75ZM18.894 18.894a9.715 9.715 0 1 1 2.09 -3.1A9.719 9.719 0 0 1 18.894 18.894Z"
                class="ci-primary"
              />
              <path
                stroke="currentColor"
                stroke-width="0.3px"
                points="142.319 241.027 164.947 263.654 240 188.602 240 376 272 376 272 188.602 347.053 263.654 369.681 241.027 256 127.347 142.319 241.027"
                class="ci-primary"
                d="M6.671 11.298L7.732 12.359L11.25 8.841L11.25 17.625L12.75 17.625L12.75 8.841L16.268 12.359L17.329 11.298L12 5.969L6.671 11.298Z"
              />
            </svg>
          </div>
        </div>
        <div
          @click.stop=""
          class="mt-3 md:mt-8"
          :class="currentIndex === index ? 'block' : 'hidden'"
        >
          <p class="text-xl max-w-4xl">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    faqs: Array,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    toggleFaq(index) {
      this.currentIndex === index
        ? (this.currentIndex = null)
        : (this.currentIndex = index);
    },
  },
};
</script>
