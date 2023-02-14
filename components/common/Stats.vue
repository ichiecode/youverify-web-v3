<template>
  <div class="bg-blue py-16 md:py-20 relative">
    <div class="hidden md:block absolute inset-x-0 bottom-8">
      <img src="~/assets/images/illustrations/element-2.svg" alt="" />
    </div>
    <div
      class="flex flex-col md:flex-row justify-between gap-4 px-4 md:px-8 relative z-10 max-w-6xl mx-auto space-y-8 md:space-y-0"
    >
      <div v-for="stat in stats" :key="stat.name" class="text-center">
        <h2 class="font-bold text-4xl md:text-5xl lg:text-6xl text-white">{{ stat.figure }}</h2>
        <p class="mt-1 md:mt-4 font-medium text-lg text-white mx-auto" style="max-width: 275px">{{ stat.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stats: Array,
  },
};
</script>
