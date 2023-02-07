<template>
  <section class="bg-blue-100 py-10">
    <div class="px-4 md:px-8 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-white rounded-3xl py-12 px-6 lg:px-10"
      >
        <img :src="require(`~/assets/images/icons/feature-${index + 1}.svg`)" />
        <h1 class="text-2xl mt-4 md:mt-8 font-semibold">
          {{ feature.title }}
        </h1>
        <p class="mt-4 text-sm">
          {{ feature.note }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    features: {},
  },
};
</script>
