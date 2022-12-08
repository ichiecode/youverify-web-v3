<template>
  <div>
    <div class="flex items-center justify-start pt-56">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <div
          data-v-131cfc00=""
          class="text-center w-full mb-12 sm:mb-16 lg:mb-20"
        >
          <header>
            <span
              class="text-blue tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block bg-blue-100"
              >Latest Article</span
            >
            <div><h1>Blog Post</h1></div>
            <p><i>by</i> Youverify</p>
          </header>
        </div>
        <div
          v-if="loading && page < 1"
          class="flex items-center justify-center my-4"
        >
          <content-placeholders
            v-for="index in 3"
            :key="index"
            style="width: 300px"
          >
            <content-placeholders-heading :img="true" />
            <content-placeholders-text :lines="3" />
          </content-placeholders>
        </div>
        <div v-else-if="error" class="w-full">
          <h2 class="text-2xl text-center text-gray-500">
            Oops! An error has occured.
          </h2>
        </div>
        <section v-else>
          <div class="grid sm:grid-cols-3 grid-cols-1 gap-10 mb-20">
            <article v-for="blog in blogs" :key="blog.id">
              <header class="relative mb-6 border">
                <div class="rounded w-full sm:h-72 h-60">
                  <img
                    width="880"
                    :alt="blog.image.caption"
                    class="h-full object-cover rounded"
                    :src="blog.image.url"
                  />
                </div>
                <span class="absolute top-3 left-3 text-sm"
                  ><span
                    class="text-blue px-4 leading-widest py-2 uppercase sm:text-sm text-xs rounded mb-3 font-semibold leading-none inline-block bg-blue-100"
                    >{{ blog.blog_categories[0].categoriesName }}</span
                  ></span
                >
              </header>
              <div>
                <NuxtLink :to="`/blog/${blog.slug}`"
                  ><h3 class="hover:text-blue-300">
                    {{ blog.title }}
                  </h3>
                </NuxtLink>
                <p class="mt-1">
                  {{ blog.author }} | {{ blog.date | formatDate }}
                </p>
                <!-- <p>by {{ blog.author }}</p> -->
              </div>
            </article>
          </div>
          <div
            v-if="hasNextPage"
            size="large"
            class="w-full mb-4 flex justify-center"
          >
            <LoadingSpinners />
          </div>
          <div v-else-if="!hasNextPage" class="w-full mb-4">
            <p class="text-center font-medium text-lg text-gray-500">
              No more articles.
            </p>
          </div>
          <div id="sentinel"></div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "blogPost",
  head() {
    return {
      title: "Blog Post",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Learn about Online identity verification for your business and how to store and manage your personal data on our blog.",
        },
      ],
    };
  },
  data() {
    return {
      observer: null,
      page: 0,
      fetchingNextPage: false,
    };
  },
  computed: {
    ...mapGetters({
      error: "blogs/error",
      loading: "blogs/loading",
      total: "blogs/total",
      blogs: "blogs/blogs",
      hasNextPage: "blogs/hasNextPage",
    }),
  },
  async mounted() {
    await this.getTotalBlogPost();
    await this.getBlogPosts();
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: null,
      threshold: 1,
    });
    const el = document.getElementById("sentinel");
    this.observer.observe(el);
  },
  methods: {
    ...mapActions({
      getBlogPosts: "blogs/getBlogs",
      getTotalBlogPost: "blogs/getTotalBlogPost",
    }),
    onElementObserved(entries) {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting && this.hasNextPage) {
          this.fetchNextPage();
        }
      });
    },
    async fetchNextPage() {
      this.fetchingNextPage = true;
      this.page += 1;
      await this.getBlogPosts(this.page);
      this.fetchingNextPage = false;
    },
  },
};
</script>
