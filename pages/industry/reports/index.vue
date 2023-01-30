<template>
  <div>
    <header
      class="text-center flex items-center justify-center sm:pt-24 pt-36 sm:pb-0 pb-24 min-h-header false"
    >
      <section class="max-w-screen-2xl mx-auto sm:px-8 px-6">
        <span
          class="text-blue tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block bg-blue-100"
          >Industry Reports</span
        >
        <h1 class="max-w-screen-lg">Industry Reports, Insights & Tips</h1>
        <p class="max-w-screen-sm mx-auto mt-6">
          Realtime reports into the world of compliance, digital identity
          verification and market trends from Youverify experts.
        </p>
        <div class="mt-6"></div>
      </section>
    </header>
    <main class="max-w-5xl mx-auto w-full py-4 md:py-14">
      <content-placeholders v-if="loading" class="w-full">
        <content-placeholders-heading />
        <content-placeholders-img />
        <content-placeholders-text :lines="5" />
      </content-placeholders>
      <div v-else-if="errors" class="w-full">
        <h2 class="text-2xl text-center text-gray-500">
          Oops! An error has occured.
        </h2>
      </div>
      <article v-else class="">
        <div v-if="reports.length === 0" class="w-full">
          <h2 class="text-2xl text-center text-gray-500">
            There are no reports yet.
          </h2>
        </div>
        <div v-else>
          <header class="my-2 md:my-4 px-4">
            <h1 class="font-semibold text-xl md:text-3xl">
              <nuxt-link
                :to="`/industry/reports/${featuredReport.slug}`"
                class="hover:text-blue-200 text-gray-800"
              >
                {{ featuredReport.title }}
              </nuxt-link>
            </h1>
            <small class="text-grey">
              {{ formatDate(featuredReport.published_at) }}
            </small>
            <span class="text-grey"> &nbsp;|&nbsp; </span>
            <small class="text-grey">
              {{ computeReadTime(featuredReport.word_count) }} mins
            </small>
          </header>
          <section class="my-8 block md:flex">
            <div class="px-4 w-full md:w-2/3">
              <div v-if="featuredReport.image" class="w-full max-h-120">
                <LazyImage
                  :src="featuredReport.image.formats.large.url"
                  :alt="
                    featuredReport.image.alternativeText || featuredReport.title
                  "
                  class="object-cover w-full h-full align-middle border-0"
                />
              </div>
              <section
                v-html="featuredReport.excerpt"
                class="my-6 text-gray-800"
              ></section>
              <section class="my-12">
                <h1 class="font-bold text-base text-gray-800">
                  👇 Enter your information for immediate access to this report
                </h1>
                <hr class="mb-6 border-gray-200 mt-4" />
                <GetReportForm :report="featuredReport" />
              </section>
            </div>
            <aside class="w-full md:w-1/3 px-4">
              <h1 class="text-gray-800 capitalize text-xl font-semibold">
                Popular Articles
              </h1>
              <hr class="mb-6 w-1/3 border-blue-200 border mt-2 rounded-sm" />
              <template v-if="popularReports.length > 0">
                <Report
                  v-for="article in popularReports"
                  :key="article.id"
                  :article="article"
                />
              </template>
              <div v-else class="w-full">
                <h2 class="text-base text-gray-500">There are no reports</h2>
              </div>
            </aside>
          </section>
        </div>
      </article>
    </main>
    <section v-if="featuredReport" class="mt-8 mb-24 mx-4">
      <div
        class="w-full max-w-5xl rounded-lg bg-blue-100 px-4 py-8 md:py-12 flex flex-col mx-auto"
      >
        <div class="mx-auto max-w-3xl">
          <h1
            class="md:text-4xl text-2xl mb-2 md:mb-4 font-bold text-center text-blue-200"
          >
            Search for Articles
          </h1>
          <h2 class="text-base font-normal text-gray-800 text-center">
            Read articles, updates and announcements from the team at Yoverify.
            If you have an
          </h2>
          <form
            class="flex gap-3 w-full items-center justify-center mt-6 mx-auto"
          >
            <text-input
              v-model="searchTerm"
              type="text"
              name="search term"
              placeholder="Search Article"
              required
              class="flex-grow !bg-white"
            />
            <button
              type="submit"
              class="outline-0 m-0 select-none capitalize whitespace-nowrap font-semibold px-4 sm:px-8 py-3 text-sm shadow-sm transition-colors rounded"
              :class="[buttonStyles]"
              :disabled="searching"
              @click="getReports(searchTerm)"
            >
              {{ searching ? "searching" : "search" }}
            </button>
          </form>
          <section class="my-4">
            <content-placeholders v-if="searching">
              <content-placeholders-heading />
            </content-placeholders>
            <div v-else-if="searchError" class="w-full">
              <h2 class="text-center text-grey">
                A error occured, please try again later
              </h2>
            </div>
            <template v-else>
              <div class="w-full mt-2 flex justify-end">
                <button
                  v-if="searchResults.length > 0"
                  class="box-border outline-0 m-0 select-none whitespace-nowrap px-4 py-1.5 text-sm border-gray-300 rounded transition-colors hover:border-gray-500 text-gray-800 border"
                  @click="clearSearch()"
                >
                  Clear
                </button>
              </div>
              <Report
                v-for="article in searchResults"
                :key="article.id"
                :article="article"
              />
            </template>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GetReportForm from "@/components/reports/GetReportForm";
import Report from "@/components/reports/Report";
import TextInput from "@/components/form/TextInput";
import readTime from "@/helpers/readTime.js";

export default {
  components: {
    Report,
    TextInput,
    GetReportForm,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  head() {
    return {
      title: "Industries Report",
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
      reports: "reports/reports",
      errors: "reports/errors",
      loading: "reports/loading",
      searchResults: "reports/searchResults",
      searching: "reports/searching",
      searchError: "reports/searchError",
    }),
    featuredReport() {
      return this.reports[0];
    },
    popularReports() {
      return this.reports.slice(1, this.reports.length);
    },
    buttonStyles() {
      return this.searching
        ? "text-gray-200 bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
        : "bg-blue text-white hover:bg-blue-300";
    },
  },
  async mounted() {
    await this.getPopularReports();
  },
  methods: {
    ...mapActions({
      getPopularReports: "reports/fetchReports",
      getReports: "reports/searchReport",
      clearSearch: "reports/clearSearch",
    }),
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en-US", options);
    },
    clearSearch() {
      this.searchTerm = "";
      this.$store.commit("reports/setSearchResults", []);
    },
    computeReadTime(wordCount) {
      return readTime(wordCount);
    },
  },
};
</script>
