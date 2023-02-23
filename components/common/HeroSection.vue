<template>
  <div :class="lightBlue ? 'bg-blue-100' : white ? 'bg-white' : 'bg-blue-300'" class="pt-12 pb-20">
    <div
      class="px-8 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-28"
    >
      <div class="md:w-3/5 flex flex-col items-center md:items-start">
        <div
          style="background-color: #c2e2e9"
          class="py-2 px-5 font-medium text-blue rounded capitalize"
        >
          {{ tag }}
        </div>
        <h1
          :class="white ? 'text-blue-300' : 'text-white'"
          class="font-bold text-2xl text-center md:text-left md:text-3xl lg:text-5xl mt-4"
        >
          {{ title }}
        </h1>

        <p
          :class="white ? '' : 'text-white'"
          class="text-center md:text-left my-6"
        >
          {{ intro }}
        </p>

        <slot name="buttons" />
      </div>
      <div class="h-72 md:h-auto md:w-2/5">
        <LazyImage
          class="h-full md:ml-auto"
          :src="require(`~/assets/images/illustrations/${illustration}`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: String,
    title: String,
    intro: String,
    illustration: String,
    white: {
      typeof: Boolean,
      default: true,
    },
    lightBlue: {
      typeof: Boolean,
      default: false
    }
  },
};
</script>
