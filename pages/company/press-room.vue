<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="News room"
      title="Explore the Youverify Newsroom"
      intro="Welcome! Find the latest press release, news features and industry media information."
      illustration="hero-press-room.svg"
      :lightBlue="true"
    >
      <div slot="buttons">
        <AppButton text="Contact team" />
      </div>
    </HeroSection>

    <section class="py-20 px-8 max-w-screen-xl mx-auto">
      <h2 class="text-2xl md:text-4xl">Press Releases</h2>
      <div v-show="loading" class="flex items-center justify-center my-4">
        <content-placeholders
          v-for="index in 3"
          :key="index"
          style="width: 390px"
        >
          <content-placeholders-heading :img="true" />
          <content-placeholders-text :lines="3" />
        </content-placeholders>
      </div>
      <div
        v-show="!loading"
        class="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 lg:gap-10 mt-14"
      >
        <article
          is="nuxt-link"
          :to="`/blog/${blog.slug}`"
          v-for="blog in pressReleases.slice(0, 3)"
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
            <div class="bg-blue-150 text-blue text-sm rounded w-fit px-5 py-2">
              {{ blog.blog_categories[0].categoriesName }}
            </div>
            <div class="my-4 flex items-center space-x-5">
              <span class="text-blue-300"> {{ blog.author }}</span>
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
    </section>

    <section class="py-20 px-8 max-w-screen-xl mx-auto">
      <h2 class="text-2xl md:text-4xl">Featured Media</h2>
      <VueSlickCarousel ref="carousel" v-bind="settings" class="grid gap-10">
        <div
          v-for="media in featuredMedias"
          :key="media.id"
          class="shadow-md rounded-2xl p-6 w-96 my-10 mr-6"
        >
          <LazyImage class="h-12" :src="media.Image.url" />
          <p class="text-black mt-9 mb-16 h-24 ellipsis">
            {{ media.Title }}
          </p>
          <a :href="media.Link" target="_blank" class="text-blue font-medium"
            >Full story here</a
          >
        </div>
      </VueSlickCarousel>
      <div class="flex items-center gap-3">
        <div
          @click="showPrev"
          class="h-5 w-5 rounded-full flex items-center justify-center cursor-pointer border border-blue"
        >
          <svg
            width="12px"
            height="12px"
            viewBox="0 0 0.225 0.225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.132 0.063C0.135 0.065 0.135 0.07 0.132 0.072L0.092 0.112L0.132 0.153C0.135 0.155 0.135 0.16 0.132 0.162C0.13 0.165 0.125 0.165 0.123 0.162L0.078 0.117C0.076 0.116 0.076 0.114 0.076 0.112C0.076 0.111 0.076 0.109 0.078 0.108L0.123 0.063C0.125 0.06 0.13 0.06 0.132 0.063Z"
              fill="#46B2C8"
            />
          </svg>
        </div>
        <div
          @click="showNext"
          class="h-5 w-5 rounded-full flex items-center justify-center cursor-pointer border border-blue"
        >
          <svg
            fill="#46B2C8"
            width="12px"
            height="12px"
            viewBox="0 0 3.84 3.84"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.44 3.3a0.18 0.18 0 0 1 -0.128 -0.307L2.386 1.92 1.313 0.847a0.18 0.18 0 0 1 0.254 -0.254l1.2 1.2a0.18 0.18 0 0 1 0 0.254l-1.2 1.2A0.179 0.179 0 0 1 1.44 3.3Z"
            />
          </svg>
        </div>
      </div>
    </section>

    <section class="press-kit flex items-center md:block">
      <div class="px-8 max-w-screen-xl mx-auto md:h-full relative">
        <div
          class="bg-white rounded-3xl p-6 md:p-12 flex items-center gap-12 md:absolute inset-x-8 -bottom-1/2 md:shadow-md"
        >
          <div class="md:w-1/2 lg:w-2/5">
            <h2 class="text-blue-900 text-3xl md:text-5xl">
              Download press kit
            </h2>
            <p class="md:text-lg my-6">
              Here you'll find our press releases, logos, product visuals, info
              about our founders, and the full Youverify story.
            </p>
            <AppButton
              href="https://drive.google.com/drive/folders/11ufOVPPnEQ4J92j61nJAAJuIbOzVgc_r"
              text="Get it here"
            >
              <svg
                slot="append"
                viewBox="0 0 20 20"
                fill="none"
                class="w-5 ml-1.5"
              >
                <path
                  d="M6 10H14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 6L14 10L10 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path></svg
            ></AppButton>
          </div>
          <div class="hidden md:block w-1/2 lg:w-3/5">
            <LazyImage
              class="h-72 mx-auto"
              src="~/assets/images/illustrations/press-kit.svg"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-8 max-w-screen-xl mx-auto mt-52">
      <h2 class="text-2xl md:text-4xl text-center">Customer Success Stories</h2>
      <div class="w-full py-16">
        <h2 class="text-2xl text-center text-gray-500">
          There are no stories yet.
        </h2>
      </div>
    </section>

    <section class="py-20 px-8 max-w-screen-xl mx-auto">
      <h2 class="text-2xl md:text-4xl text-center">Our Blog Posts</h2>

      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 lg:gap-10 mt-14"
      >
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
            <div class="bg-blue-150 text-blue text-sm rounded w-fit px-5 py-2">
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
    </section>

    <section class="py-20 bg-blue-100">
      <div class="px-8 max-w-screen-xl mx-auto">
        <h2 class="text-2xl md:text-4xl text-blue-300 text-center">
          Awards & Recognition
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-16">
          <img
            class="h-32"
            v-for="(award, index) in 10"
            :key="index"
            :src="require(`~/assets/images/awards/award-${index + 1}.png`)"
            alt=""
          />
        </div>
      </div>
    </section>

    <section
      class="flex flex-col md:flex-row gap-16 lg:gap-32 pt-40 px-8 max-w-screen-xl mx-auto"
    >
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-2xl md:text-4xl">We Want to Be a Part of Your Story</h1>
        <p class="mt-3 md:mt-6 md:text-lg">
          Working on an exciting story and need Youverify's help? Reach out to
          us and our team will get back to you in less than 24 hours.
        </p>
      </div>

      <form action="" method="post" class="w-full md:w-1/2">
        <input
          type="hidden"
          name="retURL"
          value="https://www.youverify.co/contact-us-success"
        />
        <div class="form-group space-y-5 w-full">
          <div class="flex gap-4">
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              required
            />
          </div>
          <input type="email" name="Email" placeholder="Email" required />
          <input type="text" name="Company" placeholder="Company" required />
          <input type="tel" name="Phone Number" placeholder="Phone Number" />
          <textarea placeholder="Message" name="Message" rows="8"></textarea>
        </div>

        <div class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="check" v-model="checkbox" class="w-4" />
          <label for="check" class="text-grey" style="font-size: 10px"
            >I want to sign up for blog updates another communications</label
          >
        </div>
        <AppButton :disabled="!checkbox" text="Submit" class="w-full mt-12" />
        <p class="text-xs mt-3">
          By clicking the button you agree with our
          <nuxt-link
            to="/privacy-policy"
            class="text-blue cursor-pointer font-semibold"
          >
            Privacy Policy</nuxt-link
          >
        </p>
      </form>
    </section>

    <section
      class="py-40 px-8 max-w-screen-xl mx-auto md:flex justify-between items-center gap-6"
    >
      <div>
        <h2>Stay tuned to Youverify news</h2>
        <div
          class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 mt-6 lg:mt-12"
        >
          <a
            v-for="(social, index) in socials"
            :key="index"
            :href="social.link"
            target="_blank"
            class="border-2 border-blue-300 rounded-2xl p-2 md:p-3.5 flex items-center gap-2.5"
          >
            <img
              :src="
                require(`~/assets/images/icons/social/${social.icon}-stroke.svg`)
              "
              :alt="social.name"
            />
            <span class="font-medium text-lg text-blue-200">{{
              social.name
            }}</span>
          </a>
        </div>
      </div>

      <div class="space-y-7 mt-7 md:mt-0 md:max-w-xl w-full">
        <button
          is="a"
          href="https://www.youtube.com/@youverify8216"
          class="rounded-2xl shadow-md cursor-pointer flex justify-between items-center gap-3.5 p-9"
        >
          <div class="">
            <div class="flex items-center gap-5">
              <img src="~/assets/images/icons/youtube.svg" />
              <h1 class="font-semibold text-2xl">Youtube Channel</h1>
            </div>
            <p class="font-medium text-xl mt-3.5 max-w-sm">
              KYC/AML guides, latest regulatory updates and best practices from
              the top legal and compliance speakers
            </p>
          </div>
          <svg
            width="28px"
            height="28px"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#115766"
          >
            <path
              d="M15.4 14L12.177 10.492a0.717 0.717 0 0 1 0 -1.005 0.7 0.7 0 0 1 0.994 0l3.93 4.01a0.714 0.714 0 0 1 0 1.004l-3.93 4.01a0.697 0.697 0 0 1 -0.994 0 0.714 0.714 0 0 1 0 -1.004L15.4 14zM14 0.56a13.44 13.44 0 0 1 13.44 13.44c0 7.424 -6.017 13.44 -13.44 13.44S0.56 21.424 0.56 14A13.44 13.44 0 0 1 14 0.56zm0 25.136a11.696 11.696 0 1 0 0 -23.393 11.696 11.696 0 0 0 0 23.393z"
            />
          </svg>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import HeroSection from "~/components/common/HeroSection.vue";
export default {
  components: { HeroSection },
  head() {
    return {
      title: "Press Room | Youverify Media",
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
          content: "Explore the Youverify Newsroom",
        },
      ],
    };
  },
  data() {
    return {
      checkbox: null,
      socials: [
        {
          icon: "facebook",
          name: "Facebook",
          link: "https://www.facebook.com/youverifyID",
        },
        {
          icon: "linkedin",
          name: "LinkedIn",
          link: "https://www.linkedin.com/company/youcheckonline",
        },
        {
          icon: "twitter",
          name: "Twitter",
          link: "https://twitter.com/YoucheckOnline",
        },
        {
          icon: "instagram",
          name: "Instagram",
          link: "https://instagram.com/youcheckonline",
        },
      ],
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
      },
    };
  },
  computed: {
    ...mapGetters({
      blogs: "blogs/blogs",
    }),
    ...mapState({
      relatedBlogs: (state) => state.blogs.relatedBlogs,
      pressReleases: (state) => state.press.pressReleases,
      featuredMedias: (state) => state.press.featuredMedias,
      loading: (state) => state.blogs.loading,
    }),
  },
  methods: {
    showPrev() {
      this.$refs.carousel.prev();
    },
    showNext() {
      this.$refs.carousel.next();
    },
  },
  async asyncData({ store }) {
    await Promise.all([
      store.dispatch("blogs/getBlogs", {
        currentPage: 0,
        limit: 3,
      }),
      store.dispatch("press/getPressReleases", "humans-of-YV"),
      store.dispatch("press/getFeaturedMedias"),
      store.dispatch("press/getAwards"),
    ]);
  },
};
</script>

<style scoped>
.press-kit {
  height: 420px;
  width: 100%;
  background-image: url("~/assets/images/company/press-background.png");
  background-position: center;
  background-size: cover;
}
.ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
