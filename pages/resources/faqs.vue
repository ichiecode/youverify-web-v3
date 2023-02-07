<template>
  <div>
    <main class="pt-20 px-4 md:px-8 max-w-screen-xl mx-auto">
      <ResourceHeader
        tag="FAQ"
        title="Frequently asked questions"
        description="Have questions? We're here to help"
      />

      <section class="flex flex-col md:flex-row pb-32">
        <div
          class="md:w-1/3 flex md:block overflow-scroll whitespace-nowrap md:whitespace-normal items-end gap-6 text-center md:text-left leading-none border-b border-grey md:border-none"
        >
          <div
            @click="changeCategory(faq.category)"
            v-for="faq in faqs"
            :key="faq.category"
            class="py-4 cursor-pointer transition-colors duration-200 md:text-lg"
            :class="
              category === faq.category
                ? 'text-blue font-semibold'
                : 'text-grey font-medium'
            "
          >
            {{ faq.category }}
          </div>
        </div>

        <div class="md:w-2/3">
          <div
            @click="toggleFaq(index)"
            v-for="(faq, index) in categorisedFaq.faqs"
            :key="index"
            class="py-4 md:py-6"
          >
            <div class="flex justify-between cursor-pointer">
              <h1
                class="text-lg md:text-2xl font-semibold"
                :class="currentIndex === index ? 'text-blue' : 'text-grey'"
              >
                {{ faq.question }}
              </h1>
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
              <p class="text-base md:text-lg md:leading-7">{{ faq.answer }}</p>
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
import ResourceHeader from "@/components/resources/header.vue";
import ContactUs from "@/components/common/ContactUs.vue";
import KnowMore from "@/components/common/KnowMore.vue";
export default {
  components: { ResourceHeader, ContactUs, KnowMore },
  head() {
    return {
      title: "Frequently Asked Questions",
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
      category: "Company",
      currentIndex: 0,
      // Hard coded data
      faqs: [
        {
          category: "Company",
          faqs: [
            {
              question: "Who is Youverify",
              answer:
                "Youveify is a regtech service company that builds compliance products for businesses to automate their end-to-end compliance needs. This includes Know Your Customer, Know Your Business, Know Your Employee, Know Your Transaction and business-tailored compliance workflow automation (vForms).",
            },
            {
              question: "Where is Youverify Located?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "What industries does Youverify serve?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "What countries are Youverify loacted in?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
          ],
        },
        {
          category: "Products",
          faqs: [
            {
              question: "Product question one?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Product question two?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Product question three?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Product question four?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Product question five?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
          ],
        },
        {
          category: "Verification Solutions",
          faqs: [
            {
              question: "Verification question one?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Verification question two?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Verification question three?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Verification question four?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
          ],
        },
        {
          category: "Customer Verification Process",
          faqs: [
            {
              question: "Customer Verification question one?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Customer Verification question two?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Customer Verification question three?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Customer Verification question four?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
          ],
        },
        {
          category: "Software Integration",
          faqs: [
            {
              question: "Software integration question one?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Software integration question two?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Software integration question three?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Software integration question four?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Software integration question five?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
          ],
        },
        {
          category: "Compliance and Certification",
          faqs: [
            {
              question: "Compliance question one?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Compliance question two?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Compliance question three?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
            {
              question: "Compliance question four?",
              answer:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolores asperiores accusantium dicta eaque consequatur quasi quo ut officia, nihil itaque perspiciatis repellendus, laboriosam sit, fuga in.",
            },
          ],
        },
      ],
    };
  },
  computed: {
    categorisedFaq() {
      return this.faqs.find((faq) => faq.category === this.category);
    },
  },
  methods: {
    changeCategory(category) {
      this.category = category;
      this.currentIndex = 0;
    },
    toggleFaq(index) {
      this.currentIndex === index
        ? (this.currentIndex = null)
        : (this.currentIndex = index);
    },
  },
};
</script>
