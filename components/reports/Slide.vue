<template>
  <div class="flex items-center">
    <div v-if="report.image" class="w-40 bg-transparent">
      <LazyImage
        :src="report.image.formats.thumbnail.url"
        :alt="report.image.alternativeText || report.title"
        class="object-cover w-full h-full align-middle border-0"
      />
    </div>
    <div class="py-3 ml-3 w-80">
      <h1 class="font-medium text-lg tracking-wide text-white mb-3 capitalize whitespace-normal">
        {{ report.title }}
      </h1>
      <NuxtLink :to="`/industry/reports/${report.slug}`" class="text-white capitalize hover:cursor-pointer underline">
        View the report &raquo;
      </NuxtLink>
    </div>
  </div>
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
