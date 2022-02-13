<template>
  <button
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    v-on="$listeners"
    :class="[
      {
        'inline-flex items-center justify-center font-medium disabled:curs  bg-blue-300 text-white py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-1sm rounded-md mr-4 my-2 outline-none focus:outline-none hover:outline-none transition-all cursor-pointer box-border group flex-shrink-0':
          darkbluebutton,
      },

      {
        'inline-flex items-center justify-center font-medium disabled:curs  bg-gray-100 text-black py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-1sm rounded-md mr-4 my-2 outline-none focus:outline-none hover:outline-none transition-all cursor-pointer box-border group flex-shrink-0':
          whitebutton,
      },
      {
        'inline-flex items-center justify-center font-medium disabled:curs  bg-blue text-white py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-1sm rounded-md mr-4 my-2 outline-none focus:outline-none hover:outline-none transition-all cursor-pointer box-border group flex-shrink-0':
          bigbluebutton,
      },
      {
        'bg-blue text-white rounded py-3 sm:mb-0 mb-4 px-8': bluebutton,
      },
      {
        'bg-transparent text-blue rounded py-2 sm:mb-0 mb-4 px-0':
          textbluebutton,
      },
      {
        ' sm:text-base lg:text-base font-bold inline-flex items-center hover:text-black':
          textgraybutton,
      },

      { 'h-8 text-sm px-4': size === 'sm' },
      { 'h-10 px-6': size === 'md' },
      { 'h-12 text-lg  px-32': size === 'lg' },
      { 'rounded-lg': round },
      { rounded: rounded },
    ]"
  >
    <slot name="prepend"></slot>
    <slot name="default">{{ buttonText }} </slot>
    <slot name="append"></slot>
    <!-- <slot>{{ buttonText }}</slot> -->
  </button>
</template>

<script>
export default {
  data() {
    return {
      sizes: ["lg", "md", "sm"],
    };
  },
  props: {
    buttonText: {
      type: String,
      default: "Label",
    },
    buttoncolor: {
      type: String,
      default: "Label",
    },
    size: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    rounded: Boolean,
    round: Boolean,
  },

  computed: {
    darkbluebutton() {
      return this.buttoncolor === "darkbluebutton";
    },
    whitebutton() {
      return this.buttoncolor === "whitebutton";
    },
    bluebutton() {
      return this.buttoncolor === "bluebutton";
    },
    textbluebutton() {
      return this.buttoncolor === "textbluebutton";
    },
    textgraybutton() {
      return this.buttoncolor === "textgraybutton";
    },
    bigbluebutton() {
      return this.buttoncolor === "bigbluebutton";
    },
    error() {
      return this.buttoncolor === "error";
    },
  },
};
</script>

<style lang="scss" scoped></style>
