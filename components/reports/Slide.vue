<template>
  <!-- <transition name="slide"> -->
    <div class="flex items-center">
      <div class="w-40 bg-transparent">
        <LazyImage
          :src="report.image"
          :alt="report.title"
          class="object-cover w-full h-full align-middle border-0"
        />
      </div>
      <div class="py-3 ml-3 w-80">
        <h1 class="font-medium text-lg tracking-wide text-white mb-3 capitalize whitespace-normal">
          {{ report.title }}
        </h1>
        <NuxtLink :to="report.link" class="text-white capitalize hover:cursor-pointer underline">
          View the report &raquo;
        </NuxtLink>
      </div>
    </div>
  <!-- </transition> -->
</template>

<script>
export default {
  name: "ReportSlide",
  props: {
    report: {
      type: Object,
      default: {},
      required: true
    },
  },
}
</script>

<style scoped>
/* .slide-enter-active{
  transition: transform 300 ease-out
}

.slide-leave-active {
  transition: transform 300 ease-in
}

.slide-enter-from
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
} */
</style>