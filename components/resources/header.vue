<template>
  <section
    class="mt-28 mb-16 md:my-32 max-w-4xl mx-auto flex flex-col items-center"
  >
    <div
      style="background-color: #c2e2e9"
      class="py-2 px-4 text-sm font-medium mb-8 text-blue rounded"
    >
      {{ tag }}
    </div>
    <h1
      class="md:text-4xl text-2xl mb-4 md:mb-6 font-semibold text-center text-blue-300"
    >
      {{ title }}
    </h1>
    <p class="md:text-2xl font-medium text-blue text-center">
      {{ description }}
    </p>
  </section>
</template>

<script>
export default {
  props: {
    tag: String,
    title: String,
    description: String,
  },
};
</script>
