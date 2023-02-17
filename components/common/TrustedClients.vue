<template>
  <VueSlickCarousel v-bind="settings" class="py-12">
    <figure v-for="logo in logos" :key="logo" class="h-12 flex gray">
      <LazyImage
        :src="require(`~/assets/images/logos/trusted/${logo}`)"
        alt=""
        class=""
      />
    </figure>
  </VueSlickCarousel>
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
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
      },
    };
  },
};
</script>

<style scoped>
.gray {
  filter: grayscale(95%);
}
</style>
