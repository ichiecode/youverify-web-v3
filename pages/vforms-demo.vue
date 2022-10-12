<template>
  <div>
    <header
      class="
        relative
        flex
        items-center
        justify-start
        pt-20
        pb-32
        md:pt-48 md:pb-20
      "
    >
      <section class="w-full max-w-screen-xl mx-auto sm:px-8 px-6">
        <div class="">
          <div class="">
            <section class="bg-blue-100" id="case-study">
              <div
                class="
                  max-w-screen-xl
                  py-20
                  mx-auto
                  sm:px-8
                  px-6
                  mx-auto
                  max-w-300
                "
              >
                <div class="text-container">
                  <div class="mx-auto">
                    <div class="text-center w-full mb-12 sm:mb-16 lg:mb-20">
                      <h1 class="text-2xl">vForms Demos</h1>
                      <p class="mt-5 md:mt-7">
                        More templates to take your business to the next level.
                        Custom made templates to fit your needs and get you
                        fully integrated into vForms with maximum returns
                      </p>
                    </div>
                  </div>
                </div>
                <ul class="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <li v-for="useCase in industries" :key="useCase.id">
                    <div class="relative bg-white">
                      <div
                        class="flex items-end justify-center overflow-hidden"
                        style="height: 160px; background: rgb(242, 242, 242)"
                      >
                        <div class="bg-white h-32 w-32"></div>
                      </div>
                      <div class="pt-4 pb-6 px-7">
                        <h4 class="my-4">{{ useCase.name }}</h4>

                        <div class="mt-3 flex">
                          <NuxtLink
                            :to="`/use-case/${useCase.slug}`"
                            rel="noreferrer"
                            class="
                              text-base
                              sm:text-base
                              lg:text-base
                              font-bold
                              inline-flex
                              items-center
                              hover:text-black
                            "
                            data-v-7c7bbed2=""
                            >View Demo<svg
                              viewBox="0 0 25 25"
                              fill="none"
                              class="w-5 lg:w-6.25"
                              data-v-7c7bbed2=""
                            >
                              <path
                                d="M8 18L18 8"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                data-v-7c7bbed2=""
                              ></path>
                              <path
                                d="M8 8H18V18"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                data-v-7c7bbed2=""
                              ></path>
                              </svg></NuxtLink> 
                          <a
                            :href="`https://os.youverify.co/v-forms/${useCase.vFormId}/edit/add-fields`"
                            target="_blank"
                            rel="noreferrer"
                            class="
                              text-base
                              ml-4
                              sm:text-base
                              lg:text-base
                              font-bold
                              inline-flex
                              items-center
                              hover:text-black
                            "
                            data-v-7c7bbed2=""
                            >Use Template<svg
                              viewBox="0 0 25 25"
                              fill="none"
                              class="w-5 lg:w-6.25"
                              data-v-7c7bbed2=""
                            >
                              <path
                                d="M8 18L18 8"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                data-v-7c7bbed2=""
                              ></path>
                              <path
                                d="M8 8H18V18"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                data-v-7c7bbed2=""
                              ></path></svg></a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </header>

    <get-started></get-started>
  </div>
</template>

<script>
import { mapState } from "vuex";
import getStarted from "~/components/common/getStarted.vue";
export default {
  components: {
    getStarted,
  },
  head() {
    return {
      title: "vForm Demo Page",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
    };
  },
  methods: {
    async getAllIndustries() {
      const allIndustries = await this.$store.dispatch(
        "industries/getIndustries"
      );
    },
  },
  mounted() {
    this.getAllIndustries();
  },
  computed: {
    ...mapState({
      industries: (state) => state.industries.industries,
    }),
  },
};
</script>

<style></style>
