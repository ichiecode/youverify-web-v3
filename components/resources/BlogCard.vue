<template>
  <div>
    <article
      is="nuxt-link"
      :to="`/blog/${blog.slug}`"
      class="group hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
    >
      <header class="relative">
        <div class="rounded w-full sm:h-72 h-60">
          <img
            width="880"
            :alt="blog.image.caption"
            class="h-full object-cover rounded-t-2xl"
            :src="blog.image.url"
          />
        </div>
      </header>
      <div class="px-4 py-6">
        <div class="bg-blue-150 text-blue text-sm rounded w-fit px-5 py-2">
          {{
            blog.blog_categories
              ? blog.blog_categories[0].categoriesName
              : "Youverify"
          }}
        </div>
        <div class="my-4 flex items-center space-x-5">
          <span class="text-blue-300 font-semibold"> {{ blog.author }}</span>
          <span class="bg-blue w-3 h-3 rounded-full"></span>
          <span class="text-blue">{{ blog.date | formatDate }}</span>
        </div>
        <NuxtLink :to="`/blog/${blog.slug}`"
          ><h4 class="text-grey hover:text-blue-300 text-xl font-semibold">
            {{ blog.title }}
          </h4>
        </NuxtLink>

        <div
          class="font-semibold outline-0 transition-colors duration-200 group-hover:text-blue-300 text-grey mt-3"
        >
          Read more &nbsp; &RightArrow;
        </div>
        <!-- <p>by {{ blog.author }}</p> -->
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    blog: Object,
  },
};
</script>
