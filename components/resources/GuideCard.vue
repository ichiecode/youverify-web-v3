<template>
  <div
    @click="router.push(`/global-compliance-guides/${guide.slug}`)"
    class="group hover:shadow-md transition-shadow duration-300 rounded-t-2xl overflow-hidden cursor-pointer"
  >
    <LazyImage
      :src="guide.coverImage.formats.small.url"
      :alt="guide.title"
      class="object-cover align-middle h-52 w-full"
    />
    <div class="py-6 px-4 flex flex-col items-start">
      <div
        class="py-2 px-5 bg-blue bg-opacity-30 font-semibold text-blue rounded uppercase"
      >
        {{ guide.category }}
      </div>
      <h1 class="text-blue-300 text-2xl font-semibold my-5">
        {{ guide.title }}
      </h1>
      <p
        class="text-lg font-medium transition-colors duration-200 text-grey group-hover:text-blue-300 h-20 ellipsis"
      >
        {{ guide.about }}
      </p>
      <div
        class="font-semibold outline-0 transition-colors duration-200 group-hover:text-blue-300 text-grey mt-3"
      >
        Read more &nbsp; &RightArrow;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guide: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
