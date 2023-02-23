<template>
  <main class="w-full py-16 md:py-24 px-8 max-w-6xl mx-auto">
    <section class="my-12 md:my-32 max-w-4xl mx-auto">
      <h1
        class="
          md:text-4xl
          text-2xl
          mb-4
          md:mb-6
          font-bold
          text-center text-blue
        "
      >
        Global Compliance Guides and Reports
      </h1>
      <p class="md:text-xl font-medium text-grey text-center">
        Deep insights and tips into the world of compliance, anti-money
        laundering and identity verification from Youverify experts
      </p>
    </section>
    <content-placeholders v-if="loading && page < 1" class="w-full my-12">
      <content-placeholders-heading />
      <content-placeholders-img />
      <content-placeholders-text :lines="5" />
    </content-placeholders>
    <div v-else-if="error" class="w-full my-12">
      <h2 class="text-2xl text-center text-gray-500">
        A error occured, please try again.
      </h2>
    </div>
    <section v-else>
      <div v-if="guides.length === 0" class="w-full">
        <h2 class="text-2xl text-center text-gray-500">
          There are no articles yet.
        </h2>
      </div>
      <div v-if="guides.length > 0">
        <section
          class="
            sm:flex
            flex-row-reverse
            my-12
            rounded
            md:my-32
            shadow
            items-center
            justify-center
          "
        >
          <div class="w-full md:w-1/2 lg:w-2/3">
            <LazyImage
              :src="featuredGuide.coverImage.formats.medium.url"
              :alt="featuredGuide.title"
              class="object-cover w-full h-full align-middle border-0"
            />
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 p-4 md:p-10">
            <header class="flex flex-col flex-grow mb-6">
              <div class="flex align-center gap-6 mb-5">
                <p class="bg-blue-100 uppercase text-blue py-2 px-6 text-xs">
                  {{ featuredGuide.category }}
                </p>
                <p class="text-grey">
                  {{ formatPublishedDate(featuredGuide.published_at) }}
                </p>
              </div>
              <h1 class="text-xl mb-4 font-medium">
                <nuxt-link
                  :to="`/global-compliance-guides/${featuredGuide.slug}`"
                  class="
                    hover:text-blue-300
                    transition-colors
                    text-blue
                    capitalize
                  "
                >
                  {{ featuredGuide.title }}</nuxt-link
                >
              </h1>
              <p class="text-grey leading-6">{{ featuredGuide.about }}</p>
            </header>
            <nuxt-link
              :to="`/global-compliance-guides/${featuredGuide.slug}`"
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
        </section>
        <section
          class="grid gap-5 md:gap-10 my-16 md:gap-y-24"
          style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))"
        >
          <guide-card
            v-for="guide in guides.slice(1)"
            :key="guide.slug"
            :guide="guide"
          />
        </section>
        <div
          v-if="hasNextPage"
          size="large"
          class="w-full mb-4 flex justify-center"
        >
          <LoadingSpinners />
        </div>
        <div v-else-if="!hasNextPage" class="w-full mb-4">
          <p class="text-center font-medium text-lg text-gray-500">
            That's all for now.
          </p>
        </div>
      </div>
    </section>
    <div id="sentinel"></div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import formatDate from "@/helpers/formatDate.js";
import GuideCard from "@/components/reports/GuideCard.vue";

export default {
  components: { GuideCard },
  data() {
    return {
      observer: null,
      page: 0,
      fetchingNextPage: false,
    };
  },
  head() {
    return {
      title: "Global Compliance Guides",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      error: "guides/error",
      loading: "guides/loading",
      guides: "guides/guides",
      hasNextPage: "guides/hasNextPage",
    }),
    featuredGuide() {
      return this.guides[0];
    },
  },
  async created() {
    await this.getGuidesCount();
    await this.fetchGuides();
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: null,
      threshold: 1,
    });
    const el = document.getElementById("sentinel");
    this.observer.observe(el);
  },
  methods: {
    ...mapActions({
      fetchGuides: "guides/fetchGuides",
      getGuidesCount: "guides/getGuidesCount",
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
      await this.fetchGuides(this.page);
      this.fetchingNextPage = false;
    },
    formatPublishedDate(date) {
      return formatDate(date);
    },
  },
};
</script>
