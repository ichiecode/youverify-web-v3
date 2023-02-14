<template>
  <section class="pt-24">
    <h2
      class="text-3xl md:text-5xl font-semibold text-blue-300 text-center max-w-4xl mx-auto capitalize"
    >
      {{ title }}
    </h2>

    <div>
      <div
        v-for="(offer, index) in offers"
        :key="index"
        class="py-24"
        :class="index % 2 !== 0 ? 'bg-blue-100' : 'bg-white'"
      >
        <div
          class="flex flex-col justify-between items-center gap-12 px-4 md:px-8 max-w-screen-xl mx-auto"
          :class="index % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
        >
          <div class="w-full">
            <LazyImage :class="index % 2 == 0 ? 'mx-auto md:ml-auto': 'mx-auto md:mr-auto'"
              :src="
                require(`~/assets/images/illustrations/${offer.illustration}.svg`)
              "
            />
          </div>
          <div class="w-full">
            <h3 class="capitalize font-semibold text-3xl">
              {{ offer.title }}
            </h3>
            <p class="mt-3 md:mt-7">
              {{ offer.note }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    offers: {},
  },
};
</script>
