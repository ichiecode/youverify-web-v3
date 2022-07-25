<template>
  <article class="flex my-8 w-full">
    <nuxt-link :to="`/reports/${article.slug}`" class="flex-grow pr-2">
      <h1 class="text-sm font-semibold hover:text-blue-200 text-gray-800">
        {{ article.title}}
      </h1>
      <small class="text-grey">
        {{ article.date}}
      </small>
      <span class="text-grey">
        &nbsp;|&nbsp;
      </span>
      <small class="text-grey">
        {{ article.readTime/60 }} mins
      </small>
    </nuxt-link>
    <nuxt-link :to="`/reports/${article.slug}`" class="w-32 h-auto">
      <LazyImage
        :src="article.image"
        :alt="article.title"
        class="object-cover w-full h-full align-middle border-0"
      />
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>

</style>
