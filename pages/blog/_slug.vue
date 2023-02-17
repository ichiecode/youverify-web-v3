<template>
  <div>
    <div class="text-center min-h-header pt-56" v-if="loading">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <content-placeholders :rounded="true">
          <content-placeholders-img />
          <content-placeholders-heading />
          <content-placeholders-text :lines="4" />
        </content-placeholders>
      </section>
    </div>

    <div v-else>
      <article class="text-center min-h-header mt-40">
        <div class="bg-blue-300">
          <header class="p-6 md:p-40">
            <span
              class="text-blue tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block bg-blue-100"
              >{{
                formattedPost.blog_categories
                  ? formattedPost.blog_categories[0].categoriesName
                  : "Youverify"
              }}
            </span>
            <span class="my-8 block text-white md:text-xl">
              Published {{ formattedPost.createdAt | formatDate }}
            </span>
            <a :href="`/blog/${formattedPost.slug}`"
              ><h1 class="text-white text-2xl md:text-4xl">
                {{ formattedPost.title }}
              </h1></a
            >
            <p class="mt-8 text-white md:text-xl">
              <i>by</i> {{ formattedPost.author }}
            </p>
          </header>
        </div>
        <section class="max-w-screen-xl mx-auto sm:px-8 px-6 md:-mt-32">
          <div
            class="w-full object-cover object-center rounded-xl block mt-10 mb-20"
          >
            <img
              :src="formattedPost.image ? formattedPost.image.url : ''"
              class="h-120 w-full object-cover"
              :alt="formattedPost.image ? formattedPost.image.caption : ''"
            />
          </div>
        </section>
      </article>
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <section class="flex sm:flex-nowrap flex-wrap sm:mb-40">
          <div
            class="sm:w-36 w-full flex-grow-0 flex-shrink-0 sticky sm:top-40 block h-16 sm:mt-0"
          >
            <div class="mt-4 flex flex-col space-y-10 justify-between">
              <a
                target="_blank"
                :href="`http://twitter.com/share?text=${formattedPost.title}`"
              >
                <img
                  class="w-10 h-10"
                  src="@/assets/images/icons/social/twitter-color.svg"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                :href="`https://facebook.com/sharer/sharer.php?u=${formattedPost.title}`"
              >
                <img
                  class="w-10 h-10"
                  src="@/assets/images/icons/social/facebook-color.svg"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                :href="`https://www.linkedin.com/shareArticle?title=${formattedPost.title}`"
              >
                <img
                  class="w-10 h-10"
                  src="@/assets/images/icons/social/linkedin-color.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <article class="article-body">
            <section v-html="formattedPost.content"></section>
          </article>
        </section>
        <hr class="my-20" />
        <div class="container">
          <aside class="">
            <h3 class="mb-20 text-center">Related Articles</h3>
            <section class="mb-20">
              <content-placeholders
                v-show="loading"
                v-for="index in 3"
                :key="index"
                style="width: 390px"
              >
                <content-placeholders-heading :img="true" />
                <content-placeholders-text :lines="3" />
              </content-placeholders>
              <div
                class="grid sm:grid-cols-3 grid-cols-1 gap-10"
                v-show="!loading"
              >
                <article
                  v-for="blog in formattedRelatedBlogs.slice(0, 3)"
                  :key="blog.id"
                  class="group hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
                >
                  <header class="relative">
                    <div class="rounded w-full sm:h-72 h-60">
                      <img
                        width="880"
                        class="h-full object-cover rounded-t-2xl"
                        :src="blog.image.url"
                        :alt="blog.image.caption"
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
                      <span class="text-blue-300"> {{ blog.author }}</span>
                      <span class="bg-blue w-3 h-3 rounded-full"></span>
                      <span class="text-blue">{{
                        blog.date | formatDate
                      }}</span>
                    </div>
                    <NuxtLink :to="`/blog/${blog.slug}`"
                      ><h4
                        style="font-size: 32px; line-height: 44px"
                        class="text-grey hover:text-blue-300"
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

                <p v-if="formattedRelatedBlogs.length === 0">
                  No related articles
                </p>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </div>

    <div class="mt-20">
      <know-more></know-more>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SEO from "~/mixins/SEO.js";
import KnowMore from "@/components/common/KnowMore";

export default {
  mixins: [SEO],
  name: "singleBlogPost",
  data() {
    return {};
  },
  components: {
    KnowMore,
  },

  async asyncData({ store, params }) {
    try {
      const blogDetails = await store.dispatch(
        "blogs/getSingleBlogPost",
        params.slug
      );
      await store.dispatch(
        "blogs/getRelatedBlogs",
        blogDetails[0].blog_categories[0].slug
      );
      return {
        blogDetails,
      };
    } catch (e) {}
  },
  head() {
    return {
      title: this.$data.blogDetails[0].title,
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: this.$data.blogDetails[0].title,
        },
        {
          hid: "description",
          property: "description",
          content: this.$data.blogDetails[0].teaser,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { hid: "twitter:site", name: "twitter:site", content: "@nuxt_js" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: `https://youverify.co/blog/${this.$data.blogDetails[0].slug}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$data.blogDetails[0].title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$data.blogDetails[0].teaser,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.$data.blogDetails[0].image.url,
        },

        // Open Graph
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Youverify website",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://youverify.co/blog/${this.$data.blogDetails[0].slug}`,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$data.blogDetails[0].title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$data.blogDetails[0].teaser,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.$data.blogDetails[0].image.url,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: this.$data.blogDetails[0].image.url,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.$data.blogDetails[0].image.name,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      singlePost: (state) => state.blogs.singleblogPost,
      loading: (state) => state.blogs.loading,
      relatedBlogs: (state) => state.blogs.relatedBlogs,
    }),
    formattedPost() {
      return this.singlePost ? this.singlePost[0] : [];
    },
    formattedRelatedBlogs() {
      return this.relatedBlogs
        ? this.relatedBlogs[0].blogs.filter(
            (item) => this.formattedPost.title !== item.title
          )
        : [];
    },
  },
};
</script>

<style scoped>
.article-body h1 {
  display: none;
}
h2 {
  font-size: 30px !important;
}
</style>
