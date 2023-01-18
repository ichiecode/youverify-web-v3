<template>
  <div class="shadow rounded">
    <LazyImage
      :src="guide.coverImage.formats.small.url"
      :alt="guide.title"
      class="object-cover align-middle border-0 h-60 w-full"
    />
    <div class="py-5 px-9">
      <header class="flex flex-col flex-grow mb-6">
        <div class="flex align-center gap-6 mb-5">
          <p class="bg-blue-100 uppercase text-blue py-2 px-6 text-xs">
            {{ guide.category }}
          </p>
          <p class="text-grey">
            {{ formatPublishedDate(guide.published_at) }}
          </p>
        </div>
        <h1 class="text-xl mb-4 font-medium">
          <nuxt-link
            :to="`/global-compliance-guides/${guide.slug}`"
            class="hover:text-blue-300 transition-colors text-blue capitalize"
          >
            {{ guide.title }}</nuxt-link
          >
        </h1>
        <p class="text-grey leading-6">{{ guide.about }}</p>
      </header>
      <nuxt-link
        :to="`/global-compliance-guides/${guide.slug}`"
        class="
          box-border
          outline-0
          select-none
          whitespace-nowrap
          rounded
          transition-colors
          hover:text-blue-300
          text-blue
          capitalize
          border-0
        "
      >
        read more &nbsp; &RightArrow;
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import formatDate from "@/helpers/formatDate.js";

export default {
  props: {
    guide: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  methods: {
    formatPublishedDate(date) {
      return formatDate(date);
    },
  },
};
</script>
