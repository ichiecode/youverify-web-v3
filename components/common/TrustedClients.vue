<template>
  <section
    class="grid gap-6 sm:gap-8 lg:gap-10 mt-4 sm:mt-10 lg:mt-12 grid-cols-2 md:grid-cols-5 lg:grid-cols-6 py-12"
  >
    <figure v-for="logo in logos" :key="logo" class="h-12 flex gray">
      <LazyImage
        :src="require(`~/assets/images/logos/trusted/${logo}`)"
        alt=""
        class=""
      />
    </figure>
  </section>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        "Bolt_logo (1).png",
        "fidelity (1).jpeg",
        "leadway (1).png",
        "wema-bank-plc-logo-vector (1).png",
        "Standard_Chartered_(2021).svg (1).png",
        "sterling-logo-balanced (1).png",
      ],
    };
  },
};
</script>


<style scoped>
.gray {
  filter: grayscale(95%);
}
</style>