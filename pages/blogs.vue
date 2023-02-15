<template>
  <div>
    <div class="flex items-center justify-start pt-80">
      <section class="max-w-screen-xl mx-auto px-8">
        <div
          data-v-131cfc00=""
          class="text-center w-full mb-12 sm:mb-16 lg:mb-20"
        >
          <header>
            <div><h1 class="text-blue-900">Welcome to our blog</h1></div>
            <p class="text-blue text-5xl mt-10 font-bold">Highlights</p>
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
          <article
            is="nuxt-link"
            :to="`/blog/${blog.slug}`"
            class="mb-40 flex group hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
            v-for="blog in blogs.slice(0, 1)"
            :key="blog.id"
          >
            <header class="relative">
              <div class="h-80">
                <img
                  :alt="blog.image.caption"
                  class="h-full object-cover"
                  :src="blog.image.url"
                />
              </div>
            </header>
            <div class="px-10 py-10 flex flex-col items-start">
              <div
                class="bg-blue-150 text-blue text-sm rounded w-fit px-5 py-2"
              >
                {{
                  blog.blog_categories
                    ? blog.blog_categories[0].categoriesName
                    : "Youverify"
                }}
              </div>
              <div class="my-10 flex items-center space-x-5">
                <span class="text-blue-300 font-semibold">
                  {{ blog.author }}</span
                >
                <span class="bg-blue w-3 h-3 rounded-full"></span>
                <span class="text-blue">{{ blog.date | formatDate }}</span>
              </div>
              <NuxtLink :to="`/blog/${blog.slug}`"
                ><h4 class="text-2xl text-blue-300 font-semibold">
                  {{ blog.title }}
                </h4>
              </NuxtLink>
            </div>
          </article>

          <div class="mb-40 flex items-center space-x-6">
            <div
              class="border h-16 border-grey px-3 py-2 rounded-lg w-full flex gap-2.5 items-center"
            >
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.658 2.359C4.731 2.359 2.359 4.729 2.359 7.651C2.359 10.574 4.731 12.944 7.658 12.944C9.118 12.944 10.44 12.355 11.399 11.4C12.362 10.441 12.957 9.116 12.957 7.651C12.957 4.729 10.585 2.359 7.658 2.359ZM1.333 7.651C1.333 4.161 4.166 1.333 7.658 1.333C11.151 1.333 13.983 4.161 13.983 7.651C13.983 9.215 13.414 10.646 12.472 11.749L14.516 13.791C14.717 13.991 14.717 14.316 14.517 14.516C14.317 14.717 13.992 14.717 13.791 14.517L11.745 12.473C10.643 13.406 9.216 13.969 7.658 13.969C4.166 13.969 1.333 11.141 1.333 7.651Z"
                  fill="#6E7E82"
                />
              </svg>
              <input
                type="text"
                placeholder="Search the blog"
                class="w-full focus:outline-none text-sm"
              />
            </div>
            <app-button class="w-40 h-16" text="Search" href="/vforms-demo">
            </app-button>
          </div>

          <div class="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 lg:gap-10 mb-20">
            <article
              is="nuxt-link"
              :to="`/blog/${blog.slug}`"
              class="group hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
              v-for="blog in blogs"
              :key="blog.id"
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
                <div
                  class="bg-blue-150 text-blue text-sm rounded w-fit px-5 py-2"
                >
                  {{
                    blog.blog_categories
                      ? blog.blog_categories[0].categoriesName
                      : "Youverify"
                  }}
                </div>
                <div class="my-4 flex items-center space-x-5">
                  <span class="text-blue-300 font-semibold">
                    {{ blog.author }}</span
                  >
                  <span class="bg-blue w-3 h-3 rounded-full"></span>
                  <span class="text-blue">{{ blog.date | formatDate }}</span>
                </div>
                <NuxtLink :to="`/blog/${blog.slug}`"
                  ><h4
                    class="text-grey hover:text-blue-300 text-xl font-semibold"
                  >
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
    <div class="mt-20">
      <know-more></know-more>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import KnowMore from "@/components/common/KnowMore";

export default {
  name: "blogPost",
  components: {
    KnowMore,
  },
  head() {
    return {
      title: "Blog Post | Youverify Articles",
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
      await this.getBlogPosts({
        currentPage: this.page,
        limit: 9
      });
      this.fetchingNextPage = false;
    },
  },
};
</script>
