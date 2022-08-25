<template>
  <article class="flex my-8 w-full">
    <nuxt-link :to="`/industry/reports/${article.slug}`" class="flex-grow pr-2">
      <h1 class="text-sm font-semibold hover:text-blue-200 text-gray-800">
        {{ article.title}}
      </h1>
      <small class="text-grey">
        {{ formatDate(article.published_at) }}
      </small>
      <span class="text-grey">
        &nbsp;|&nbsp;
      </span>
      <small class="text-grey">
        {{ computeReadTime(article.word_count) }} mins
      </small>
    </nuxt-link>
    <nuxt-link v-if="article.image" :to="`/reports/${article.slug}`" class="w-32 h-auto">
      <LazyImage
          :src="article.image.formats.thumbnail.url"
          :alt="article.image.alternativeText || article.title"
        class="object-cover w-full h-full align-middle border-0"
      />
    </nuxt-link>
  </article>
</template>

<script>
import { computeReadTime } from "@/helpers/readTime.js"

export default {
  props: {
    article: {
      type: Object,
      required: true,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString("en-US", options)
    },
  }
}
</script>
