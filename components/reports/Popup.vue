<template>
  <transition name="slide-in">
    <section v-if="showReportPopup" class="box-shadow hidden md:flex fixed left-0 flex-nowrap items-center bottom-6 overflow-hidden rounded-tr w-128 rounded-br z-20">
      <slot></slot>
      <div class="top-1 right-2 absolute">
        <button type="button" class="p-1.5 leading-none transition-colors text-blue-100 hover:cursor-pointer hover:bg-blue-200 font-bold border-0 box-border outline-0 m-0 select-none bg-transparent rounded-sm" @click="closePopup">X</button>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: "ReportsPopup",
  data() {
    return {
      showReportPopup: false,
      observer: null,
    }
  },
  created() {
    this.observer = new IntersectionObserver(
      this.onElementObserved,
      {
        root: null,
        threshold: 0.01,
      }
    );
  },
  mounted() {
    const el = document.getElementById('target')
    this.observer.observe(el)
  },
  methods: {
    closePopup() {
      this.showReportPopup = false
      this.observer.disconnect();
    },
    onElementObserved(entries) {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.showReportPopup = true;
        } else {
          this.showReportPopup = false;
        }
      });
    },
  },
}
</script>

<style>
.slide-in-enter-active, .slide-in-leave-active {
  transition: transform .3s ease-out;
}
.slide-in-enter, .slide-in-leave-to {
  transform: translateX(-512px);
}
</style>
