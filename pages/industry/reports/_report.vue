<template>
<div>
  <header class="flex flex-col flex-shrink-0 items-center sticky top-0 bg-white z-50 w-full shadow">
    <div class=" px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between max-w-screen-xl w-full">
      <a aria-current="page" href="/"
      ><img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQyIiBoZWlnaHQ9IjUyIiB2aWV3Qm94PSIwIDAgMTQyIDUyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTEyNC4yMDggNTAuNjQwMUwxMzkuMDUzIDQwLjc0MzZDMTQwLjg0NSAzOS41MjQ1IDE0MS45MjEgMzcuNTE2NSAxNDEuOTIxIDM1LjM2NTFWNi41MzYyNUMxNDEuOTIxIDIuOTUwNTcgMTM5LjA1MyAwLjA4MjAzMTIgMTM1LjQ2NyAwLjA4MjAzMTJINi40NTQyMkMyLjg2ODU0IDAuMDgyMDMxMiAwIDIuOTUwNTcgMCA2LjUzNjI1VjM1Ljg2NzFWMzguNzM1NlY0NS4xODk5QzAgNDguNzc1NSAyLjg2ODU0IDUxLjY0NDEgNi40NTQyMiA1MS42NDQxSDEyMC42MjJDMTIxLjkxMyA1MS43MTU4IDEyMy4yMDQgNTEuMzU3MiAxMjQuMjA4IDUwLjY0MDFaIiBmaWxsPSIjNDZCMkM4Ii8+CjxwYXRoIGQ9Ik0yNC4yMzkyIDEyLjk5MDdMMTkuMjkxIDI4Ljk4MjhWMzguODA3NkgxNi43ODFWMjguOTgyOEwxMi4xMTk2IDEyLjk5MDdIMTQuNzAxM0wxOC4wMDAxIDI0LjQ2NDlMMjEuNTg1OCAxMi45OTA3SDI0LjIzOTJaIiBmaWxsPSIjQzdFOEVGIi8+CjxwYXRoIGQ9Ik0zNy4zNjI4IDE2LjM2MDhWMzUuNDM2NkMzNy4zNjI4IDM3LjE1NzcgMzYuMDcyIDM4LjU5MiAzNC4zNTA4IDM4LjgwNzFDMzQuMjA3NCAzOC44MDcxIDM0LjEzNTcgMzguODA3MSAzMy45OTIzIDM4LjgwNzFIMjkuNTQ2QzI5LjQwMjYgMzguODA3MSAyOS4yNTkyIDM4LjgwNzEgMjkuMTg3NCAzOC44MDcxQzI3LjQ2NjMgMzguNTkyIDI2LjE3NTUgMzcuMTU3NyAyNi4xNzU1IDM1LjQzNjZWMTYuMzYwOEMyNi4xNzU1IDE0LjQ5NjIgMjcuNjgxNSAxMi45OTAyIDI5LjU0NiAxMi45OTAySDMzLjk5MjNDMzUuODU2OCAxMi45OTAyIDM3LjM2MjggMTQuNDk2MiAzNy4zNjI4IDE2LjM2MDhaTTM0Ljg1MjggMTYuMzYwOEMzNC44NTI4IDE1Ljg1ODggMzQuNDIyNSAxNS41MDAyIDMzLjk5MjMgMTUuNTAwMkgyOS41NDZDMjkuMDQ0IDE1LjUwMDIgMjguNjg1NSAxNS45MzA1IDI4LjY4NTUgMTYuMzYwOFYzNS40MzY2QzI4LjY4NTUgMzUuOTM4NiAyOS4xMTU3IDM2LjI5NzEgMjkuNTQ2IDM2LjI5NzFIMzMuOTkyM0MzNC40OTQzIDM2LjI5NzEgMzQuODUyOCAzNS44NjY5IDM0Ljg1MjggMzUuNDM2NlYxNi4zNjA4WiIgZmlsbD0iI0M3RThFRiIvPgo8cGF0aCBkPSJNNTEuMTMxOCAzNS43OTUxQzUxLjEzMTggMzcuMzAxMSA0OS45ODQ0IDM4LjU5MiA0OC40Nzg0IDM4LjgwNzFDNDguMzM0OSAzOC44MDcxIDQ4LjI2MzIgMzguODA3MSA0OC4xMTk4IDM4LjgwNzFINDIuODg0N0M0Mi43NDEzIDM4LjgwNzEgNDIuNjY5NiAzOC44MDcxIDQyLjUyNjEgMzguODA3MUM0MS4wMjAyIDM4LjU5MiAzOS44NzI3IDM3LjM3MjggMzkuODcyNyAzNS43OTUxVjEyLjk5MDJINDIuMzgyN1YzNS43OTUxQzQyLjM4MjcgMzYuMDgyIDQyLjU5NzkgMzYuMjk3MSA0Mi44ODQ3IDM2LjI5NzFINDguMTE5OEM0OC40MDY3IDM2LjI5NzEgNDguNjIxOCAzNi4wODIgNDguNjIxOCAzNS43OTUxVjEyLjk5MDJINTEuMTMxOFYzNS43OTUxWiIgZmlsbD0iI0M3RThFRiIvPgo8cGF0aCBkPSJNNjEuOTYwNSAzNi4yOTc2QzYxLjY3MzYgMzcuNzMxOSA2MC40NTQ1IDM4LjczNTkgNTkuMDIwMiAzOC43MzU5QzU3LjU4NiAzOC43MzU5IDU2LjM2NjggMzcuNzMxOSA1Ni4wOCAzNi4yOTc2VjM2LjIyNTlMNTMuMjgzMSAxMi45OTA3SDU1Ljc5MzFMNTguNTE4MiAzNS44Njc0QzU4LjU4OTkgMzYuMTU0MiA1OC44MDUxIDM2LjIyNTkgNTkuMDIwMiAzNi4yMjU5QzU5LjIzNTQgMzYuMjI1OSA1OS40NTA1IDM2LjE1NDIgNTkuNTIyMiAzNS44Njc0TDYyLjMxOTEgMTIuOTkwN0g2NC44MjlMNjEuOTYwNSAzNi4yOTc2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTY5LjQ5MDQgMTUuNTAwMlYyNy41NDgxSDc0LjA4MDFWMzAuMDU4MUg2OS40OTA0VjM2LjI5NzFINzcuMDIwNFYzOC44MDcxSDY2Ljk4MDVWMTIuOTkwMkg3Ni45NDg3VjE1LjUwMDJINjkuNDkwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05MS45MzY4IDM4LjgwNzFIODguOTI0OEw4Mi45NzI2IDI5Ljg0MjlDODIuNjg1NyAyOS45MTQ2IDgyLjM5ODkgMjkuOTg2NCA4Mi4xMTIgMjkuOTg2NFYzOC44MDcxSDc5LjYwMjFWMTYuMzYwOEM3OS42MDIxIDE0LjQ5NjIgODEuMTA4IDEyLjk5MDIgODIuOTcyNiAxMi45OTAySDg3LjQxODhDODkuMjgzNCAxMi45OTAyIDkwLjc4OTQgMTQuNDk2MiA5MC43ODk0IDE2LjM2MDhWMjAuMDg5OUM5MC43ODk0IDIzLjk2MjQgODguNTY2MiAyNy4zMzI5IDg1LjMzOTEgMjguOTgyNEw5MS45MzY4IDM4LjgwNzFaTTgyLjExMiAyNy40NzY0Qzg1LjYyNiAyNi45MDI3IDg4LjM1MTEgMjMuODE5IDg4LjM1MTEgMjAuMDg5OVYxNi4zNjA4Qzg4LjM1MTEgMTUuODU4OCA4Ny45MjA4IDE1LjUwMDIgODcuNDkwNSAxNS41MDAySDgzLjA0NDNDODIuNTQyMyAxNS41MDAyIDgyLjE4MzcgMTUuOTMwNSA4Mi4xODM3IDE2LjM2MDhMODIuMTEyIDI3LjQ3NjRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOTQuNDQ2OCAxMi45OTAySDk2Ljk1NjhWMzguODA3MUg5NC40NDY4VjEyLjk5MDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAyLjQwNyAxNS41MDAyVjI3LjU0ODFIMTA2Ljk5N1YzMC4wNTgxSDEwMi40MDdWMzguODA3MUg5OS44OTcxVjEyLjk5MDJIMTA5Ljg2NVYxNS41MDAySDEwMi40MDdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIzLjM0NyAxMi45OTAyTDExOC4zOTkgMjguOTgyNFYzOC44MDcxSDExNS44ODlWMjguOTgyNEwxMTEuMjI4IDEyLjk5MDJIMTEzLjgwOUwxMTcuMTA4IDI0LjQ2NDRMMTIwLjY5NCAxMi45OTAySDEyMy4zNDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE0MS45OTMiIGhlaWdodD0iNTEuNjMzOCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wODIwMzEyKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
          alt="Youverify"
          class="sm:w-32 w-24"
      /></a>
    </div>
  </header>
  <div class="px-4 md:px-0 max-w-3xl mx-auto w-full mt-8">
    <button class="inline-flex items-center justify-center relative box-border outline-0 m-0 select-none gap-2 whitespace-nowrap px-4 py-1.5 text-sm no-underline rounded transition-colors bg-transparent hover:bg-gray-100 text-gray-800 border-0" @click="$router.back()">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
        <path d="M10.05 16.94V12.94H18.97L19 10.93H10.05V6.94L5.05 11.94Z" />
      </svg>
      Back
    </button>
  </div>
  <main class="max-w-3xl mx-auto w-full pt-4 md:pt-10">
    <content-placeholders
      v-if="loading"
      class="w-full"
    >
      <content-placeholders-heading />
      <content-placeholders-img />
      <content-placeholders-text :lines="5" />
    </content-placeholders>
    <div v-else-if="errors" class="w-full">
      <h2 class="text-center text-grey">
        A error occured, please try again later
      </h2>
    </div>
    <article v-else class="">
      <header class="my-2 md:my-4 px-4">
        <h1 class="font-semibold text-xl md:text-3xl text-gray-800">
          {{ article.title }}
        </h1>
        <div class="flex items-center w-full">
          <div class="flex items-center flex-grow">
            <small class="text-grey">
              {{ formatDate(article.published_at) }}
            </small>
            <span class="text-grey">
              &nbsp;|&nbsp;
            </span>
            <small class="text-grey">
              {{ computeReadTime(article.word_count) }} mins
            </small>
          </div>
          <social-share
            :url="getUrl"
            :title="article.title"
            :description="article.description"
            :quote="article.quote"
            :hashtags="article.hashtags"
            twitter-user="YouCheckOnline"
          ></social-share>
        </div>
      </header>
      <section class="px-4 my-8 w-full">
        <div v-if="article.image" class="w-full max-h-120">
          <LazyImage
          :src="article.image.formats.thumbnail.url"
          :alt="article.image.alternativeText || article.title"
            class="object-cover w-full h-full align-middle border-0"
          />
        </div>
        <div class="my-8">
          <section v-html="article.excerpt" class="my-6 text-gray-800"></section>
        </div>
        <section class="my-12">
          <h1 class="font-bold text-base text-gray-800">
            👇 Enter your information for immediate access to this report
          </h1>
          <hr class="mb-6 border-gray-200 mt-4">
          <GetReportForm :report="report" />
        </section>
      </section>
    </article>
    <hr class="border-gray-200 my-4 mx-4">
    <div class="flex justify-end mt-6 mb-16 mx-4">
      <social-share
        :url="getUrl"
        :title="article.title"
        :description="article.description"
        :quote="article.quote"
        :hashtags="article.hashtags"
        twitter-user="YouCheckOnline"
      ></social-share>
    </div>
  </main>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GetReportForm from "@/components/reports/GetReportForm"
import SocialShare from "@/components/reports/SocialShare"
import { computeReadTime } from "@/helpers/readTime.js"

export default {
  layout: 'reports',
  components: {
    GetReportForm,
    SocialShare
  },
  computed: {
    ...mapGetters({
      errors: "reports/errors",
      loading: "reports/loading",
      report: "reports/report"
    }),
    getUrl() {
      return window.location.href
    },
    article() {
      return this.report ? this.report : [];
    },
  },
  async created() {
    await this.getReport(this.$route.params.report)
  },
  methods: {
    ...mapActions({
      getReport: "reports/fetchReport"
    }),
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString("en-US", options)
    },
  }
}
</script>
