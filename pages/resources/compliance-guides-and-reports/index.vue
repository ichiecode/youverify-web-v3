<template>
  <main class="w-full py-16 md:py-24 px-4 md:px-8 max-w-screen-xl mx-auto">
    <ResourceHeader
      tag="Compliance Guides & Reports"
      title="Compliance Guides & Reports"
      description="Elaborate compliance guides, official releases and industry trends from Youverify experts."
    />
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
      <div v-if="guides.length === 0" class="w-full py-32">
        <h2 class="text-2xl text-center text-gray-500">
          There are no articles yet.
        </h2>
      </div>
      <div v-if="guides.length > 0">
        <div
          class="border border-grey px-3 py-2 rounded-lg w-full max-w-xs flex gap-2.5 items-center"
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
            placeholder="Search"
            class="w-full focus:outline-none text-sm"
          />
        </div>
        <section
          class="sm:flex my-12 rounded md:my-32 shadow items-center justify-center"
        >
          <div class="w-full md:w-1/2 lg:w-2/3">
            <LazyImage
              :src="featuredGuide.coverImage.formats.medium.url"
              :alt="featuredGuide.title"
              class="object-cover w-full h-full align-middle border-0"
            />
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 p-4 md:p-10">
            <header class="flex flex-col flex-grow">
              <div class="mb-5">
                <p class="bg-blue-100 uppercase text-blue py-2 px-6 text-xs">
                  {{ featuredGuide.category }}
                </p>
                <p class="text-blue">
                  {{ formatPublishedDate(featuredGuide.published_at) }}
                </p>
              </div>
              <h1 class="text-2xl mb-4 font-semibold">
                <nuxt-link
                  :to="`/global-compliance-guides/${featuredGuide.slug}`"
                  class="text-blue-300 capitalize"
                >
                  {{ featuredGuide.title }}</nuxt-link
                >
              </h1>
              <p class="text-blue-300 font-semibold text-xl leading-6">
                {{ featuredGuide.about }}
              </p>
            </header>
            <a
              :href="featuredGuide.pdfDocument.url"
              target="_blank"
              rel="noreferrer noopener"
              class="outline-0 inline-flex items-center gap-2 mt-4 select-none whitespace-nowrap bg-blue text-white hover:bg-blue-300 font-medium px-6 py-4 text-sm capitalize transition-colors rounded"
            >
              Download guide (PDF)
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9H15V3H9V9H5L12 17L19 9ZM4 19H20V21H4V19Z"
                  fill="white"
                />
              </svg>
            </a>
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

    <KnowMore />
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import formatDate from "@/helpers/formatDate.js";
import GuideCard from "@/components/resources/GuideCard.vue";
import ResourceHeader from "@/components/resources/header.vue";
import KnowMore from "@/components/common/KnowMore.vue";
export default {
  components: { GuideCard, ResourceHeader, KnowMore },
  data() {
    return {
      observer: null,
      page: 0,
      fetchingNextPage: false,
    };
  },
  head() {
    return {
      title: "Compliance Guides and Reports | Youverify Reports",
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
