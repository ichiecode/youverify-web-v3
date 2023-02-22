<template>
  <div>
    <main class="pt-20 px-4 md:px-8 max-w-screen-xl mx-auto">
      <ResourceHeader
        tag="FAQ"
        title="Frequently asked questions"
        description="Have questions? We're here to help"
      />

      <div class="flex gap-4 md:gap-6 mb-20">
        <div
          class="flex gap-3 md:gap-6 items-center text-grey px-4 md:px-5 py-3 md:py-4 rounded-2xl border-2 border-grey w-full"
        >
          <svg
            fill="currentColor"
            width="20px"
            height="20px"
            viewBox="0 0 0.6 0.6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.543 0.507 0.45 0.415A0.225 0.225 0 1 0 0.415 0.45l0.092 0.092a0.025 0.025 0 0 0 0.035 0A0.025 0.025 0 0 0 0.543 0.507ZM0.275 0.45a0.175 0.175 0 1 1 0.175 -0.175A0.175 0.175 0 0 1 0.275 0.45Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Ask a question"
            class="focus:outline-none w-full"
            v-model="search"
          />
        </div>
        <AppButton text="Search" rounded="xl" class="hidden sm:block" />
      </div>

      <section v-if="search">
        <div v-if="searchedFaqs.length > 0">
          <div
            @click="toggleFaq(index)"
            v-for="(faq, index) in searchedFaqs"
            :key="faq.id"
            class="py-4 md:py-6"
          >
            <div class="flex justify-between cursor-pointer">
              <h2
                class="text-lg md:text-xl font-semibold"
                :class="currentIndex === index ? 'text-blue' : 'text-grey'"
              >
                {{ faq.Title }}
              </h2>
              <div>
                <svg
                  v-if="currentIndex !== index"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#6E7E82"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-plus-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                <svg
                  v-else
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#46B2C8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-minus-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
            </div>
            <div
              class="mt-3 md:mt-5"
              :class="currentIndex === index ? 'block' : 'hidden'"
            >
              <p class="text-base md:text-lg md:leading-7">
                {{ faq.Description }}
              </p>
            </div>
          </div>
        </div>
        <div v-else class="py-12 text-center">
          <p class="font-semibold text-3xl">Sorry, no question matches that</p>
        </div>
      </section>

      <section v-else class="flex flex-col md:flex-row pb-32">
        <div
          class="md:w-1/3 flex md:block overflow-scroll whitespace-nowrap md:whitespace-normal items-end gap-6 text-center md:text-left leading-none border-b border-grey md:border-none"
        >
          <div
            @click="changeCategory(category.Name)"
            v-for="category in categories"
            :key="category.id"
            class="py-4 cursor-pointer transition-colors duration-200 md:text-lg"
            :class="
              currentCategory === category.Name
                ? 'text-blue font-semibold'
                : 'text-grey font-medium'
            "
          >
            {{ category.Name }}
          </div>
        </div>

        <div class="md:w-2/3">
          <div
            @click="toggleFaq(index)"
            v-for="(faq, index) in selectedCategory"
            :key="faq.id"
            class="py-4 md:py-6"
          >
            <div class="flex justify-between cursor-pointer">
              <h2
                class="text-lg md:text-xl font-semibold"
                :class="currentIndex === index ? 'text-blue' : 'text-grey'"
              >
                {{ faq.Title }}
              </h2>
              <div>
                <svg
                  v-if="currentIndex !== index"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#6E7E82"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-plus-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                <svg
                  v-else
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#46B2C8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-minus-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
            </div>
            <div
              class="mt-3 md:mt-5"
              :class="currentIndex === index ? 'block' : 'hidden'"
            >
              <p class="text-base md:text-lg md:leading-7">
                {{ faq.Description }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <hr class="w-full" />
    <div class="py-20 px-4 md:px-8 max-w-screen-xl mx-auto">
      <ContactUs
        title="Still have questions?"
        note="Can't find the answer you're looking for? Please send a message to our
        friendly team"
      />
    </div>
    <KnowMore />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ResourceHeader from "@/components/resources/header.vue";
import ContactUs from "@/components/common/ContactUs.vue";
import KnowMore from "@/components/common/KnowMore.vue";
export default {
  components: { ResourceHeader, ContactUs, KnowMore },
  head() {
    return {
      title: "Frequently Asked Questions | Youverify FAQ",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
    };
  },
  data() {
    return {
      currentCategory: "Company",
      currentIndex: 0,
      search: null,
    };
  },
  computed: {
    ...mapState({
      faqs: (state) => state.faqs.faqs,
      categories: (state) => state.faqs.categories,
    }),
    selectedCategory() {
      return this.faqs.filter(
        (faq) => faq.faq_category.Name === this.currentCategory
      );
    },
    searchedFaqs() {
      return this.faqs.filter((faq) =>
        faq.Title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    changeCategory(category) {
      this.currentCategory = category;
      this.currentIndex = 0;
    },
    toggleFaq(index) {
      this.currentIndex === index
        ? (this.currentIndex = null)
        : (this.currentIndex = index);
    },
  },
  async asyncData({ store }) {
    await Promise.all([
      store.dispatch("faqs/getFaqs"),
      store.dispatch("faqs/getCategories"),
    ]);
  },
};
</script>
