<template>
  <section class="py-24">
    <div
      class="bg-blue-900 py-32 px-8 max-w-screen-xl mx-auto relative flex items-center"
      style="height: 650px"
    >
      <img
        class="absolute left-10 -top-7"
        src="~/assets/images/icons/quotation.svg"
        alt=""
      />
      <div class="flex">
        <h2 class="text-white font-semibold text-3xl max-w-xs">
          What our Customers Have to Say Will Convince You
        </h2>
        <div
          class="absolute -right-10 top-1/2 transform -translate-y-1/2 flex gap-2"
        >
          <!-- <VueSlickCarousel v-bind="settings"> -->
            <div
              v-for="n in 3"
              :key="n"
              class="w-72 rounded-2xl overflow-hidden"
            >
              <LazyImage
                class="h-36 w-full object-cover"
                src="~/assets/images/temp/anita-1.png"
              />
              <div class="h-3 bg-blue"></div>
              <div class="text-center p-8 bg-white">
                <p style="font-size: 10px">
                  Since using the platform, we have successfully improved our
                  KYC & address verification by 80%. Their platform is
                  user-friendly and they provide prompt and concise verification
                </p>

                <span class="mt-6 text-blue text-xs font-semibold"
                  >Mercy Dada</span
                >
                <p class="text-blue text-xs">Risk Manager at Sycamore</p>
              </div>
            </div>
          <!-- </VueSlickCarousel> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        dots: true,
        // focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
      },
    };
  },
};
</script>
