<template>
  <div :class="`p-2 ${colors[currentSlide]}`">
    <slot :slide="currentSlide"></slot>

    <div class="flex items-center justify-center w-full mt-2 gap-2">
      <template v-for="(slide, i) in slidesCount">
        <span
          :key="i"
          v-if="currentSlide === i"
          class="border-2 border-white cursor-normal w-3 h-3 rounded-full shadow bg-transparent'"
          @click="jumpToSlide(i)"
        >
        </span>
        <span
          :key="i"
          v-else
          class="cursor-pointer w-3 h-3 rounded-full shadow bg-white"
          @click="jumpToSlide(i)"
        >
        </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    slidesCount: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      autoplay: null,
      currentSlide: 0,
      colors: ['bg-blue', 'bg-grey', 'bg-pink-default', 'bg-orange-default'],
    }
  },
  methods: {
    jumpToSlide(index) {
      this.currentSlide = index
    },
    autoplaySlides() {
      this.autoplay = setInterval(() => {
        if (this.currentSlide === this.slidesCount - 1) {
          this.currentSlide = 0
          return
        }
        this.currentSlide += 1
      }, 5000);
    }
  },
  mounted() {
    this.autoplaySlides()
  },
  beforeDestroy() {
    clearInterval(this.autoplay)
  }
}
</script>

<style>

</style>
