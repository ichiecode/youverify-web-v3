<template>
  <div>
    <div class="flex items-center justify-start pt-48">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <div
          data-v-131cfc00=""
          class="text-center w-full mb-12 sm:mb-16 lg:mb-20"
        >
          <header>
			  <h1 class="hidden"></h1>
            <span
              class="
                text-blue
                tracking-widest
                px-4
                py-2
                uppercase
                sm:text-sm
                text-xs
                rounded
                mb-3
                leading-none
                inline-block
                bg-blue-100
              "
              >Latest Article</span
            >
            <div><h2>Blog Post</h2></div>
            <p><i>by</i> Youverify</p>
          </header>
        </div>
        <section class="grid sm:grid-cols-3 grid-cols-1 gap-10 mb-20">
          <content-placeholders
            v-show="loading"
            v-for="index in 3"
            :key="index"
            style="width: 390px"
          >
            <content-placeholders-heading :img="true" />
            <content-placeholders-text :lines="3" />
          </content-placeholders>

          <article v-show="!loading" v-for="blog in blogs" :key="blog.id">
            <header class="relative mb-6 border">
              <div class="rounded w-full sm:h-72 h-60">
                <img
                  width="880"
                  class="h-full object-cover rounded"
                  :src="blog.image.url"
				  alt="blog-img"
                />
              </div>
              <span class="absolute top-3 left-3 text-sm"
                ><span
                  class="
                    text-blue
                    tracking-widest
                    px-4
                    py-2
                    uppercase
                    sm:text-sm
                    text-xs
                    rounded
                    mb-3
                    leading-none
                    inline-block
                    bg-blue-100
                  "
                  >{{ blog.blog_categories[0].categoriesName }} |
                  {{ blog.date | formatDate }}</span
                ></span
              >
            </header>
            <div>
              <NuxtLink :to="`/blog/${blog.slug}`"
                ><h3 class="hover:text-blue-300">
                  {{ blog.title }}
                </h3>
              </NuxtLink>
              <p class="mt-1">by {{ blog.author }}</p>
            </div>
          </article>
        </section>
      </section>
    </div>

    <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
      <section class="items-center my-20 max-w-screen-md text-center mx-auto">
        <a
          aria-current="page"
          class="
            inline-block
            px-3
            py-2
            rounded
            leading-none
            bg-blue-100
            text-blue
            font-bold
          "
          href="/blogs/#"
          >1</a
        >
      </section>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "blogPost",
  methods: {
    async getAllBlogPost() {
      const allBlogPost = await this.$store.dispatch("blogs/getBlogs");
      const totalBlog = await this.$store.dispatch("blogs/getTotalBlogPost");
    },
  },
  mounted() {
    this.getAllBlogPost();
  },
  computed: {
    ...mapState({
      blogs: (state) => state.blogs.blogs,
      loading: (state) => state.blogs.loading,
      total: (state) => state.blogs.total,
    }),
  },
};
</script>

<style></style>
