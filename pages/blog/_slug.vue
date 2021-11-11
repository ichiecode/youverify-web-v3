<template>
  <div>
    <article class="text-center min-h-header pt-40">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <header>
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
            >{{
              formattedPost.blog_categories
                ? formattedPost.blog_categories[0].categoriesName
                : "Youverify"
            }}
            | {{ formattedPost.date | formatDate }}</span
          ><a href="/blog/#"
            ><h2>
              {{ formattedPost.title }}
            </h2></a
          >
          <p><i>by</i> {{ formattedPost.author }}</p>
        </header>
        <div
          data-gatsby-image-wrapper=""
          class="
            gatsby-image-wrapper
            w-full
            object-cover object-center
            rounded-xl
            block
            sm:h-96
            h-72
            mt-6
            mb-20
          "
        >
          <div
            aria-hidden="true"
            data-placeholder-image=""
            style="
              opacity: 0;
              transition: opacity 500ms linear 0s;
              background-color: rgb(200, 200, 200);
              position: absolute;
              inset: 0px;
              object-fit: cover;
            "
          ></div>
          <img
            :src="formattedPost.image ? formattedPost.image.url : ''"
            class="w-full"
            alt="A Definitive Guide to Avoiding Identity Theft and Fraud in the Digital Age"
            style="object-fit: cover; opacity: 1; height: 350px"
          />
        </div>
      </section>
    </article>
    <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
      <section class="flex sm:flex-nowrap flex-wrap sm:mb-40 mb-20">
        <div
          class="
            sm:w-48
            w-full
            flex-grow-0 flex-shrink-0
            sticky
            sm:top-40
            block
            h-16
            sm:mt-0
            -mt-12
          "
        >
          <p class="text-xs uppercase font-semibold">Share this Article</p>
          <div class="flex mt-4 justify-between sm:w-2/4 w-2/5">
            <a href="#!"
              ><span
                ><svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5342 0.384948C16.7728 0.92202 15.9298 1.33279 15.0376 1.60145C14.5587 1.05085 13.9223 0.660603 13.2144 0.483482C12.5066 0.306361 11.7614 0.350915 11.0796 0.611117C10.3979 0.87132 9.81253 1.33462 9.40269 1.93835C8.99284 2.54208 8.77831 3.25712 8.78809 3.98675V4.78185C7.39081 4.81808 6.00625 4.50819 4.75774 3.87977C3.50922 3.25135 2.43549 2.32391 1.63219 1.18005C1.63219 1.18005 -1.54821 8.33595 5.60769 11.5163C3.9702 12.6279 2.01953 13.1852 0.0419922 13.1065C7.19789 17.082 15.944 13.1065 15.944 3.9629C15.9433 3.74142 15.922 3.5205 15.8804 3.30296C16.6919 2.50269 17.2645 1.49229 17.5342 0.384948V0.384948Z"
                    fill="#0B4B58"
                  ></path>
                </svg> </span></a
            ><a href="#!"
              ><span
                ><svg
                  width="10"
                  height="17"
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.31177 0.589844H6.92647C5.8721 0.589844 4.86092 1.00869 4.11537 1.75424C3.36982 2.49979 2.95097 3.51097 2.95097 4.56534V6.95064H0.565674V10.131H2.95097V16.4918H6.13137V10.131H8.51667L9.31177 6.95064H6.13137V4.56534C6.13137 4.35447 6.21514 4.15223 6.36425 4.00312C6.51336 3.85401 6.7156 3.77024 6.92647 3.77024H9.31177V0.589844Z"
                    fill="#0B4B58"
                  ></path>
                </svg> </span></a
            ><a href="#!"
              ><span
                ><svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8042 5.36133C13.0694 5.36133 14.2828 5.86394 15.1775 6.7586C16.0722 7.65326 16.5748 8.86668 16.5748 10.1319V15.6976H13.3944V10.1319C13.3944 9.71018 13.2268 9.30571 12.9286 9.00749C12.6304 8.70927 12.2259 8.54173 11.8042 8.54173C11.3824 8.54173 10.9779 8.70927 10.6797 9.00749C10.3815 9.30571 10.214 9.71018 10.214 10.1319V15.6976H7.03357V10.1319C7.03357 8.86668 7.53618 7.65326 8.43085 6.7586C9.32551 5.86394 10.5389 5.36133 11.8042 5.36133V5.36133Z"
                    fill="#0B4B58"
                  ></path>
                  <path
                    d="M3.85313 6.15625H0.672729V15.6974H3.85313V6.15625Z"
                    fill="#0B4B58"
                  ></path>
                  <path
                    d="M2.26293 3.77024C3.14117 3.77024 3.85313 3.05829 3.85313 2.18004C3.85313 1.3018 3.14117 0.589844 2.26293 0.589844C1.38469 0.589844 0.672729 1.3018 0.672729 2.18004C0.672729 3.05829 1.38469 3.77024 2.26293 3.77024Z"
                    fill="#0B4B58"
                  ></path>
                </svg> </span
            ></a>
          </div>
        </div>
        <article>
          <section v-html="formattedPost.content"></section>
        </article>
      </section>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SEO from "~/mixins/SEO.js";

export default {
  mixins: [SEO],
  name: "singleBlogPost",
  methods: {
    async getSingleBlogPost() {
      const singleBlogPost = await this.$store.dispatch(
        "blogs/getSingleBlogPost",
        this.$route.params.slug
      );
    },
  },
  mounted() {
    this.getSingleBlogPost();
  },
  computed: {
    ...mapState({
      singlePost: (state) => state.blogs.singleblogPost,
    }),
    formattedPost() {
      return this.singlePost ? this.singlePost[0] : [];
    },
  },
};
</script>

<style></style>
