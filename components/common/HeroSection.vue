<template>
  <div
    class="flex flex-col-reverse md:flex-row justify-between gap-12 md:gap-10 pb-12 pt-12"
  >
    <div class="md:w-3/5 lg:w-1/2 flex flex-col items-center md:items-start">
      <div
        style="background-color: #c2e2e9"
        class="py-2 px-5 font-semibold text-blue rounded capitalize"
      >
        {{ tag }}
      </div>
      <h1
        class="font-bold text-blue-300 text-2xl text-center md:text-left md:text-3xl lg:text-5xl mt-5"
      >
        {{ title }}
      </h1>

      <p class="font-medium text-center md:text-left my-8">
        {{ intro }}
      </p>

      <slot name="buttons" />
    </div>
    <div class="h-72 md:h-auto md:w-2/5 lg:w-1/2">
      <LazyImage
        class="h-full md:ml-auto"
        :src="require(`~/assets/images/illustrations/${illustration}`)"
      />
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
  },
};
</script>
