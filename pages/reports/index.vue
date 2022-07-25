<template>
<div>
  <header class=" w-full h-full md:max-h-120 relative flex justify-center flex-col bg-blue-100 py-8">
    <a aria-current="page" class="px-6" href="/"
    ><img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQyIiBoZWlnaHQ9IjUyIiB2aWV3Qm94PSIwIDAgMTQyIDUyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTEyNC4yMDggNTAuNjQwMUwxMzkuMDUzIDQwLjc0MzZDMTQwLjg0NSAzOS41MjQ1IDE0MS45MjEgMzcuNTE2NSAxNDEuOTIxIDM1LjM2NTFWNi41MzYyNUMxNDEuOTIxIDIuOTUwNTcgMTM5LjA1MyAwLjA4MjAzMTIgMTM1LjQ2NyAwLjA4MjAzMTJINi40NTQyMkMyLjg2ODU0IDAuMDgyMDMxMiAwIDIuOTUwNTcgMCA2LjUzNjI1VjM1Ljg2NzFWMzguNzM1NlY0NS4xODk5QzAgNDguNzc1NSAyLjg2ODU0IDUxLjY0NDEgNi40NTQyMiA1MS42NDQxSDEyMC42MjJDMTIxLjkxMyA1MS43MTU4IDEyMy4yMDQgNTEuMzU3MiAxMjQuMjA4IDUwLjY0MDFaIiBmaWxsPSIjNDZCMkM4Ii8+CjxwYXRoIGQ9Ik0yNC4yMzkyIDEyLjk5MDdMMTkuMjkxIDI4Ljk4MjhWMzguODA3NkgxNi43ODFWMjguOTgyOEwxMi4xMTk2IDEyLjk5MDdIMTQuNzAxM0wxOC4wMDAxIDI0LjQ2NDlMMjEuNTg1OCAxMi45OTA3SDI0LjIzOTJaIiBmaWxsPSIjQzdFOEVGIi8+CjxwYXRoIGQ9Ik0zNy4zNjI4IDE2LjM2MDhWMzUuNDM2NkMzNy4zNjI4IDM3LjE1NzcgMzYuMDcyIDM4LjU5MiAzNC4zNTA4IDM4LjgwNzFDMzQuMjA3NCAzOC44MDcxIDM0LjEzNTcgMzguODA3MSAzMy45OTIzIDM4LjgwNzFIMjkuNTQ2QzI5LjQwMjYgMzguODA3MSAyOS4yNTkyIDM4LjgwNzEgMjkuMTg3NCAzOC44MDcxQzI3LjQ2NjMgMzguNTkyIDI2LjE3NTUgMzcuMTU3NyAyNi4xNzU1IDM1LjQzNjZWMTYuMzYwOEMyNi4xNzU1IDE0LjQ5NjIgMjcuNjgxNSAxMi45OTAyIDI5LjU0NiAxMi45OTAySDMzLjk5MjNDMzUuODU2OCAxMi45OTAyIDM3LjM2MjggMTQuNDk2MiAzNy4zNjI4IDE2LjM2MDhaTTM0Ljg1MjggMTYuMzYwOEMzNC44NTI4IDE1Ljg1ODggMzQuNDIyNSAxNS41MDAyIDMzLjk5MjMgMTUuNTAwMkgyOS41NDZDMjkuMDQ0IDE1LjUwMDIgMjguNjg1NSAxNS45MzA1IDI4LjY4NTUgMTYuMzYwOFYzNS40MzY2QzI4LjY4NTUgMzUuOTM4NiAyOS4xMTU3IDM2LjI5NzEgMjkuNTQ2IDM2LjI5NzFIMzMuOTkyM0MzNC40OTQzIDM2LjI5NzEgMzQuODUyOCAzNS44NjY5IDM0Ljg1MjggMzUuNDM2NlYxNi4zNjA4WiIgZmlsbD0iI0M3RThFRiIvPgo8cGF0aCBkPSJNNTEuMTMxOCAzNS43OTUxQzUxLjEzMTggMzcuMzAxMSA0OS45ODQ0IDM4LjU5MiA0OC40Nzg0IDM4LjgwNzFDNDguMzM0OSAzOC44MDcxIDQ4LjI2MzIgMzguODA3MSA0OC4xMTk4IDM4LjgwNzFINDIuODg0N0M0Mi43NDEzIDM4LjgwNzEgNDIuNjY5NiAzOC44MDcxIDQyLjUyNjEgMzguODA3MUM0MS4wMjAyIDM4LjU5MiAzOS44NzI3IDM3LjM3MjggMzkuODcyNyAzNS43OTUxVjEyLjk5MDJINDIuMzgyN1YzNS43OTUxQzQyLjM4MjcgMzYuMDgyIDQyLjU5NzkgMzYuMjk3MSA0Mi44ODQ3IDM2LjI5NzFINDguMTE5OEM0OC40MDY3IDM2LjI5NzEgNDguNjIxOCAzNi4wODIgNDguNjIxOCAzNS43OTUxVjEyLjk5MDJINTEuMTMxOFYzNS43OTUxWiIgZmlsbD0iI0M3RThFRiIvPgo8cGF0aCBkPSJNNjEuOTYwNSAzNi4yOTc2QzYxLjY3MzYgMzcuNzMxOSA2MC40NTQ1IDM4LjczNTkgNTkuMDIwMiAzOC43MzU5QzU3LjU4NiAzOC43MzU5IDU2LjM2NjggMzcuNzMxOSA1Ni4wOCAzNi4yOTc2VjM2LjIyNTlMNTMuMjgzMSAxMi45OTA3SDU1Ljc5MzFMNTguNTE4MiAzNS44Njc0QzU4LjU4OTkgMzYuMTU0MiA1OC44MDUxIDM2LjIyNTkgNTkuMDIwMiAzNi4yMjU5QzU5LjIzNTQgMzYuMjI1OSA1OS40NTA1IDM2LjE1NDIgNTkuNTIyMiAzNS44Njc0TDYyLjMxOTEgMTIuOTkwN0g2NC44MjlMNjEuOTYwNSAzNi4yOTc2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTY5LjQ5MDQgMTUuNTAwMlYyNy41NDgxSDc0LjA4MDFWMzAuMDU4MUg2OS40OTA0VjM2LjI5NzFINzcuMDIwNFYzOC44MDcxSDY2Ljk4MDVWMTIuOTkwMkg3Ni45NDg3VjE1LjUwMDJINjkuNDkwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05MS45MzY4IDM4LjgwNzFIODguOTI0OEw4Mi45NzI2IDI5Ljg0MjlDODIuNjg1NyAyOS45MTQ2IDgyLjM5ODkgMjkuOTg2NCA4Mi4xMTIgMjkuOTg2NFYzOC44MDcxSDc5LjYwMjFWMTYuMzYwOEM3OS42MDIxIDE0LjQ5NjIgODEuMTA4IDEyLjk5MDIgODIuOTcyNiAxMi45OTAySDg3LjQxODhDODkuMjgzNCAxMi45OTAyIDkwLjc4OTQgMTQuNDk2MiA5MC43ODk0IDE2LjM2MDhWMjAuMDg5OUM5MC43ODk0IDIzLjk2MjQgODguNTY2MiAyNy4zMzI5IDg1LjMzOTEgMjguOTgyNEw5MS45MzY4IDM4LjgwNzFaTTgyLjExMiAyNy40NzY0Qzg1LjYyNiAyNi45MDI3IDg4LjM1MTEgMjMuODE5IDg4LjM1MTEgMjAuMDg5OVYxNi4zNjA4Qzg4LjM1MTEgMTUuODU4OCA4Ny45MjA4IDE1LjUwMDIgODcuNDkwNSAxNS41MDAySDgzLjA0NDNDODIuNTQyMyAxNS41MDAyIDgyLjE4MzcgMTUuOTMwNSA4Mi4xODM3IDE2LjM2MDhMODIuMTEyIDI3LjQ3NjRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOTQuNDQ2OCAxMi45OTAySDk2Ljk1NjhWMzguODA3MUg5NC40NDY4VjEyLjk5MDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTAyLjQwNyAxNS41MDAyVjI3LjU0ODFIMTA2Ljk5N1YzMC4wNTgxSDEwMi40MDdWMzguODA3MUg5OS44OTcxVjEyLjk5MDJIMTA5Ljg2NVYxNS41MDAySDEwMi40MDdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIzLjM0NyAxMi45OTAyTDExOC4zOTkgMjguOTgyNFYzOC44MDcxSDExNS44ODlWMjguOTgyNEwxMTEuMjI4IDEyLjk5MDJIMTEzLjgwOUwxMTcuMTA4IDI0LjQ2NDRMMTIwLjY5NCAxMi45OTAySDEyMy4zNDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE0MS45OTMiIGhlaWdodD0iNTEuNjMzOCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4wODIwMzEyKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
        alt="Youverify"
        class="sm:w-32 w-24"
    /></a>
    <div class="w-full py-16 md:py-24 px-4">
      <h1 class="md:text-4xl text-2xl mb-2 md:mb-5 font-bold text-center text-blue-200">
        Articles, insights & tips!
      </h1>
      <h2 class="md:text-lg text-base font-normal text-black text-center">
        Increase your  knowledge by reading articles with this blog. Let’s start
      </h2>
    </div>
  </header>
  <main class="max-w-5xl mx-auto w-full pt-4 md:pt-14">
    <header class="my-2 md:my-4 px-4">
      <h1 class="font-semibold text-xl md:text-3xl">
        <nuxt-link :to="`/reports/${featuredReport.slug}`" class="hover:text-blue-200 text-gray-800">
          {{ featuredReport.title }}
        </nuxt-link>
      </h1>
      <small class="text-grey">
        {{ featuredReport.date}}
      </small>
      <span class="text-grey">
        &nbsp;|&nbsp;
      </span>
      <small class="text-grey">
        {{ featuredReport.readTime/60 }} mins
      </small>
    </header>
    <!-- Report -->
    <section class="my-8 block md:flex">
      <div class="px-4 w-full md:w-2/3">
        <div class="w-full max-h-120">
          <LazyImage
            :src="featuredReport.image"
            :alt="featuredReport.title"
            class="object-cover w-full h-full align-middle border-0"
          />
        </div>
        <!-- Report excerpt -->
        <div class="my-6">
          <p class="text-gray-800">{{ featuredReport.excerpt }}</p>
        </div>
        <!-- Report insights -->
        <div class="mt-8">
          <h2 class="font-bold text-base text-gray-800">
            📝 In this report, you'll learn about:
          </h2>
          <ul class="my-4 list-disc list-inside">
            <li
              v-for="(ins, index) in featuredReport.insights"
              :key="index"
              class="text-gray-800"
            >
              {{ ins }}
            </li>
          </ul>
        </div>
        <!-- Form -->
        <section class="my-12">
          <h1 class="font-bold text-base text-gray-800">
            👇 Enter your information for immediate access to this report
          </h1>
          <hr class="mb-6 border-gray-200 mt-4">
          <GetReportForm />
        </section>
      </div>
      <!-- Popular articles -->
      <aside class="w-full md:w-1/3 px-4">
        <h1 class="text-gray-800 capitalize text-xl font-semibold">
          Popular Articles
        </h1>
        <hr class="mb-6 w-1/3 border-blue-200 border mt-2 rounded-sm">
        <PopularReport v-for="(article, index) in popularArticles" :key="index" :article="article" />
      </aside>
    </section>
  </main>
  <!-- Search -->
  <section class="mt-8 mb-24 mx-4">
    <div class="w-full max-w-5xl rounded-lg bg-blue-100 px-4 py-8 md:py-12 flex flex-col mx-auto">
      <h1 class="md:text-4xl text-2xl mb-2 md:mb-4 font-bold text-center text-blue-200">
        Search for Articles
      </h1>
      <h2 class="md:text-lg text-base font-normal text-black text-center">
        Read articles, updates and announcements from the team at Yoverify. If you have an
      </h2>
      <form class="flex gap-3 w-full items-center justify-center max-w-xl mt-6 mx-auto">
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
          :disabled="isSubmitting"
        >
          search
        </button>
      </form>
    </div>
  </section>
</div>
</template>

<script>
import GetReportForm from "@/components/reports/GetReportForm"
import PopularReport from "@/components/reports/PopularReport"
import TextInput from "@/components/form/TextInput"

export default {
  layout: 'reports',
  components: {
    PopularReport,
    TextInput,
    GetReportForm
  },
  data() {
    return {
      featuredReport: {
        title: "Address Verification in Nigeria, a report by Youverify",
        slug: "address_verification_in_nigeria_a_report_by _youverify",
        date: "Jun 28, 2021",
        readTime: 300,
        image: "https://picsum.photos/300/200",
        excerpt: "If you have an experience that leaves you jumping for joy, you want to share that feeling. And that time you ordered a “killer outfit” right before a big party and received something that looked like it came off of a cheap halloween rack, well… you want to make sure no one else ever has that experience. And that time you ordered a “killer outfit” right before a big party and received something that looked like it came off of a cheap halloween rack, well… you want to make sure no one else ever has that experience.",
        insights: [
          'The current state of digital ID in Nigeria.',
          'How it can streamline government and private sector relations.',
          'Why unlocking universal coverage is important.'
        ]
      },
      popularArticles: [
        {
          title: "The 8 best landing page builders, reviewed",
          slug: "the_8_best_landing_page_builders_reviewed",
          date: "Jun 28, 2021",
          readTime: 300,
          image: "https://picsum.photos/200"
        },
        {
          title: "Create engaging online courses your student",
          slug: "create_engaging_online_courses_your_student",
          date: "Jun 28, 2021",
          readTime: 300,
          image: "https://picsum.photos/200"
        },
        {
          title: "The ultimate formula for launching online course",
          slug: "the_ultimate_formula_for_launching_online_course",
          date: "Jun 28, 2021",
          readTime: 300,
          image: "https://picsum.photos/200"
        },
        {
          title: "How to sell digital products using social media",
          slug: "how_to_sell_digital_products_using_social_media",
          date: "Jun 28, 2021",
          readTime: 300,
          image: "https://picsum.photos/200"
        }
      ],
      loading: false,
      error: null,
      isSubmitting: false,
      searchTerm: ""
    }
  },
  computed: {
    buttonStyles() {
      return this.isSubmitting
        ? "text-gray-200 bg-gray-400 hover:bg-gray-400"
        : "bg-blue text-white hover:bg-blue-300"
    }
  },
  methods: {
    handleSubmit() {
      this.isSubmitting = true
      console.log(searchTerm)
      this.isSubmitting = false
    }
  }
}
</script>
