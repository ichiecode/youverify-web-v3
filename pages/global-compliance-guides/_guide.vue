<template>
  <main class="w-full max-w-7xl mt-24 px-8 mx-auto">
    <content-placeholders v-if="loading" class="w-full">
      <content-placeholders-img />
      <content-placeholders-heading />
      <content-placeholders-text :lines="5" />
    </content-placeholders>
    <div v-else-if="errors" class="w-full">
      <h2 class="text-2xl text-center text-gray-500">
        A error occured, please try again.
      </h2>
    </div>
    <section v-else class="">
      <article v-if="guide" class="mt-16 md:mt-28 mb-12">
        <LazyImage
          :src="coverImage"
          :alt="guide.title"
          class="object-cover w-full h-full align-middle border-0"
        />
        <header class="flex flex-col flex-grow mb-6 my-10">
          <div class="flex align-center gap-6 mb-5">
            <p class="bg-blue-100 uppercase text-blue py-2 px-6 text-xs">
              {{ guide.category }}
            </p>
            <p class="text-grey">
              {{ formatPublishedDate(guide.published_at) }}
            </p>
          </div>
          <h1 class="text-2xl md:text-5xl mb-4 capitalize">
            {{ guide.title }}
          </h1>
          <p class="text-grey md:text-xl leading-6">{{ guide.about }}</p>
        </header>
        <a
          :href="guide.pdfDocument.url"
          target="_blank"
          rel="noreferrer noopener"
          class="
            outline-0
            inline-flex
            items-center
            gap-2
            my-10
            select-none
            whitespace-nowrap
            bg-blue
            text-white
            hover:bg-blue-300
            font-medium
            px-8
            py-4
            text-sm
            capitalize
            transition-colors
            rounded
          "
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
        <social-share
          :url="getUrl"
          :title="guide.title"
          :description="guide.about"
          :quote="guide.quote"
          :hashtags="guide.hashtags"
          twitter-user="YouCheckOnline"
        ></social-share>
        <section v-html="guide.body" class="my-8 text-gray-800"></section>
      </article>
      <div v-else class="w-full py-8">
        <h2 class="text-2xl text-center text-gray-500">
          That article does not exist!
        </h2>
      </div>
    </section>

    <section class="my-20">
      <h1 class="text-4xl mb-4 capitalize text-center">Related Resources</h1>
      <div
        class="grid gap-5 md:gap-10 my-16"
        style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))"
      >
        <guide-card
          v-for="guide in relatedGuides"
          :key="guide.id"
          :guide="guide"
        />
      </div>
      <div class="flex justify-center">
        <nuxt-link
          to="/global-compliance-guides"
          class="
            outline-0
            select-none
            bg-blue
            text-white
            hover:bg-blue-300
            whitespace-nowrap
            font-medium
            px-8
            py-4
            text-sm
            capitalize
            transition-colors
            rounded
          "
        >
          see more &nbsp; &RightArrow;
        </nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import formatDate from "@/helpers/formatDate.js";
import GuideCard from "@/components/reports/GuideCard.vue";
import SocialShare from "@/components/reports/SocialShare";

export default {
  components: { GuideCard, SocialShare },
  data() {
    return {
      downloading: false,
      relatedGuides: [],
    };
  },
  computed: {
    ...mapGetters({
      errors: "guides/error",
      loading: "guides/loading",
      guide: "guides/guide",
      guides: "guides/guides",
    }),
    getUrl() {
      return window.location.href;
    },
    coverImage() {
      const image = this.guide.coverImage.formats;
      return image.large ? image.large.url : image.small.url;
    },
  },
  async created() {
    await this.getGuide(this.$route.params.guide);

    if (this.guides.length < 3) {
      await this.fetchGuides();
    }

    this.relatedGuides = this.guides
      .filter((guide) => guide.id !== this.guide.id)
      .slice(0, 3);
  },
  methods: {
    ...mapActions({
      getGuide: "guides/fetchGuide",
      fetchGuides: "guides/fetchGuides",
    }),
    formatPublishedDate(date) {
      return formatDate(date);
    },
  },
};
</script>