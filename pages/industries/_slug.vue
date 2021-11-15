<template>
  <main>
    <header
      class="
        bg-blue
        relative
        flex
        items-center
        justify-start
        pt-20
        pb-32
        md:pt-48 md:pb-32
      "
    >
      <section
        v-if="formattedIndustries.heroSection"
        class="w-full max-w-screen-xl mx-auto sm:px-8 px-6"
      >
        <div class="flex-col-reverse md:flex-row flex justify-center">
          <div class="md:w-3/6">
            <h2 class="text-white max-w-screen-lg mt-8">
              {{ formattedIndustries.heroSection.title }}
            </h2>
            <p class="mt-3 md:w-4/5 text-white">
              {{ formattedIndustries.heroSection.teaser }}
            </p>
            <div class="mt-3 sm:mt-8 lg:mt-10 flex flex-wrap">
              <a
                class="
                  items-center
                  justify-center
                  font-medium
                  disabled:curs
                  inline-flex
                  bg-blue-300
                  text-white
                  py-3
                  sm:py-4
                  px-4
                  sm:px-5
                  text-sm
                  sm:text-1sm
                  rounded-md
                  mr-4
                  my-2
                  outline-none
                  focus:outline-none
                  hover:outline-none
                  transition-all
                  cursor-pointer
                  box-border
                  group
                  flex-shrink-0
                "
                href="#case-study"
                >See some use case<svg
                  viewBox="0 0 20 20"
                  fill="none"
                  class="
                    w-5
                    ml-1.25
                    transition-transform
                    duration-75
                    transform
                    group-hover:translate-x-0.5
                  "
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
              ></a>
              <a
                class="
                  items-center
                  justify-center
                  font-medium
                  disabled:curs
                  inline-flex
                  bg-gray-100
                  text-black
                  py-3
                  sm:py-4
                  px-4
                  sm:px-5
                  text-sm
                  sm:text-1sm
                  rounded-md
                  my-2
                  outline-none
                  focus:outline-none
                  hover:outline-none
                  transition-all
                  cursor-pointer
                  box-border
                  group
                  flex-shrink-0
                "
                href="/contact-us"
                >Contact Sales<svg
                  viewBox="0 0 20 20"
                  fill="none"
                  class="
                    w-5
                    ml-1.25
                    transition-transform
                    duration-75
                    transform
                    group-hover:translate-x-0.5
                  "
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
              ></a>
            </div>

            <div class="mt-10 flex items-center">
              <h4 class="text-white">Banks using vForm</h4>
              <div class="ml-3 border w-3/6"></div>
            </div>
            <div class="mt-3 grid grid-cols-3">
              <figure
                v-for="item in formattedIndustries.heroSection.logos"
                :key="item.id"
                class="relative"
                style="width: 100px; height: 62px"
              >
                <img
                  :src="item.images.url"
                  :alt="item.name"
                  class="h-full w-full object-contain"
                />
              </figure>
            </div>
          </div>
          <div class="md:w-3/6">
            <video
              playsinline=""
              autoplay=""
              loop=""
              controlslist="nodownload"
              class="h-full"
            >
              <source
                :src="
                  formattedIndustries.heroSection
                    ? formattedIndustries.heroSection.image.url
                    : ''
                "
                type="video/webm"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
      </section>
      <div class="custom-shape-divider-bottom-1636017048">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </header>

    <div id="more" v-if="formattedIndustries.features">
      <div class="text-container">
        <div class="mx-auto">
          <div class="text-center w-full mt-12">
            <h3 class="text-dark font-display">
              Our solutions is your all in one KYC verification engine
            </h3>
            <p class="mt-5 md:mt-7">
              More templates to take your business to the next level. Custom
              made templates to fit your needs and get you fully integrated into
              vForms with maximum returns
            </p>
          </div>
        </div>
      </div>
      <section
        class="
          react-reveal
          odd:bg-blue-100
          min-h-jumbotron
          even:bg-white
          max-w-screen-xl
          mx-auto
          sm:rounded-xl
          relative
          w-full
          flex
          odd:flex-row
          even:flex-row-reverse
          flex-wrap
          first:mt-0
          sm:px-12
          px-6
          mt-10
          mb-20
          items-center
        "
        v-for="feature in formattedIndustries.features"
        :key="feature.id"
      >
        <div class="w-1/12"></div>
        <header class="sm:w-5/12 w-full relative">
          <span class="sm:absolute sm:-mt-32"
            ><div>
              <img
                width="569"
                height="425"
                :src="feature.image.url"
                alt="Alternative Credit Score"
              /></div
          ></span>
        </header>
        <div class="w-1/12"></div>
        <div class="sm:w-4/12 w-full sm:mt-0 mt-8">
          <h3>{{ feature.title }}</h3>
          <p class="mt-4">
            {{ feature.teaser }}
          </p>
        </div>
      </section>
    </div>

    <section class="bg-blue-100" id="case-study">
      <div class="max-w-screen-xl py-20 mx-auto sm:px-8 px-6 mx-auto max-w-300">
        <div class="text-container">
          <div class="mx-auto">
            <div class="text-center w-full mb-12 sm:mb-16 lg:mb-20">
              <h3 class="text-dark font-display">
                Try out some of our templates for {{ formattedIndustries.name }}
              </h3>
              <p class="mt-5 md:mt-7">
                More templates to take your business to the next level. Custom
                made templates to fit your needs and get you fully integrated
                into vForms with maximum returns
              </p>
            </div>
          </div>
        </div>
        <ul
          class="grid grid-cols-1 md:grid-cols-3 gap-10"
          v-if="formattedIndustries.demo"
        >
          <li v-for="demo in formattedIndustries.demo" :key="demo.id">
            <div class="relative bg-white">
              <div
                class="flex items-end justify-center overflow-hidden"
                style="height: 160px; background: rgb(242, 242, 242)"
              >
                <div class="bg-white h-32 w-32"></div>
              </div>
              <div class="pt-4 pb-6 px-7">
                <h4 class="my-4">{{ demo.name }}</h4>
                <p class="">
                  {{ demo.teaser }}
                </p>
                <div class="mt-3 flex">
                  <NuxtLink
                    :to="{ name: 'demo', params: { link: demo.link, vformId: demo.vformId } }"
                    href="/vforms-demo"
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
                      ></path></svg
                  ></NuxtLink>
                  <a
                    :href="`https://os.dev.youverify.co/v-forms/${demo.vformId}/edit/add-fields`"
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
                      ></path></svg
                  ></a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-blue-200 for-a-reason">
      <div class="max-w-screen-xl py-20 mx-auto sm:px-8 px-6 mx-auto max-w-300">
        <h2 class="text-white font-display">Getting started</h2>
        <div class="mt-14 lg:mt-20 grid gap-5 grid-cols-1 md:grid-cols-3">
          <article
            class="
              bg-white
              col-span-full
              rounded-2xl
              py-10
              px-6
              sm:py-15 sm:px-10
              lg:px-15 lg:pt-20
              pb-0
              gap-10
              lg:gap-10
              xl:gap-20
              grid grid-cols-1
              items-end
            "
            style="grid-template-columns: minmax(350px, 1fr) 1.2fr"
          >
            <div
              class="pb-6 lg:pb-24 flex flex-col items-center lg:items-start"
            >
              <img
                src="../../assets/images/icons/for-a-reason-and-more/zero-bottlenecks.svg"
                alt=""
                class="inline-block mb-5 w-20 h-20"
              />
              <h2 class="text-center lg:text-left mb-8">
                Powerful APIs and easy-to-use resources
              </h2>

              <a
                href="https://docs.mono.co"
                target="_blank"
                rel="noreferrer"
                class="
                  sm:text-base
                  lg:text-base
                  font-bold
                  inline-flex
                  items-center
                  hover:text-black
                "
                >Read our API Docs<svg
                  viewBox="0 0 25 25"
                  fill="none"
                  class="w-5 lg:w-6.25"
                >
                  <path
                    d="M8 18L18 8"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 8H18V18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></svg
              ></a>
            </div>
            <div class="flex justify-center flex-1">
              <figure class="w-full max-w-lg relative">
                <img
                  src="https://monoassets.com/f/118499/540x380/1298b7c253/api-response-frame.png"
                  alt=""
                  class="w-full"
                />
              </figure>
            </div>
          </article>
          <article class="bg-white rounded-2xl p-6 sm:p-10 lg:p-11.25 xl:p-15">
            <div class="flex flex-col items-center lg:items-start">
              <img
                src="../../assets/images/icons/for-a-reason-and-more/ease-of-enrollment.svg"
                alt=""
                class="inline-block mb-5 w-16 h-16"
              />
              <h4 class="text-center lg:text-left mb-8">Plug-and-play SDKs</h4>
              <a
                href="https://docs.mono.co"
                target="_blank"
                rel="noreferrer"
                class="
                  text-base
                  sm:text-base
                  lg:text-base
                  font-bold
                  inline-flex
                  items-center
                  group
                  hover:text-black
                "
                >Explore our SDKs<svg
                  viewBox="0 0 25 25"
                  fill="none"
                  class="w-5 lg:w-6.25"
                >
                  <path
                    d="M8 18L18 8"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 8H18V18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></svg
              ></a>
            </div>
          </article>
          <article class="bg-white rounded-2xl p-6 sm:p-10 lg:p-11.25 xl:p-15">
            <div class="flex flex-col items-center lg:items-start">
              <img
                src="../../assets/images/icons/for-a-reason-and-more/reliable-datatabase.svg"
                alt=""
                class="inline-block mb-5 w-16 h-16"
              />
              <h4 class="text-center lg:text-left mb-8">
                Beautiful seamless UX
              </h4>
              <a
                class="
                  sm:text-base
                  lg:text-base
                  font-bold
                  inline-flex
                  items-center
                  hover:text-black
                "
                target="_blank"
                href="https://os.dev.youverify.co/auth/create-account"
                >Signup<svg
                  viewBox="0 0 25 25"
                  fill="none"
                  class="w-5 lg:w-6.25"
                >
                  <path
                    d="M8 18L18 8"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 8H18V18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></svg
              ></a>
            </div>
          </article>
          <article class="bg-white rounded-2xl p-6 sm:p-10 lg:p-11.25 xl:p-15">
            <div class="flex flex-col items-center lg:items-start">
              <img
                src="../../assets/images/icons/for-a-reason-and-more/standards-compliant.svg"
                alt=""
                class="inline-block mb-5 w-16 h-16"
              />
              <h4 class="text-center lg:text-left mb-8">Always-on support</h4>
              <a
                href="/contact-us"
                target="_blank"
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
                >Contact Support Team<svg
                  viewBox="0 0 25 25"
                  fill="none"
                  class="w-5 lg:w-6.25"
                >
                  <path
                    d="M8 18L18 8"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 8H18V18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></svg
              ></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    async getSingleIndustry() {
      const singleIndustries = await this.$store.dispatch(
        "industries/getSingleIndustries",
        this.$route.params.slug
      );
    },
  },
  mounted() {
    this.getSingleIndustry();
  },
  computed: {
    ...mapState({
      singleIndustries: (state) => state.industries.singleIndustries,
    }),
    formattedIndustries() {
      return this.singleIndustries ? this.singleIndustries[0] : [];
    },
  },
};
</script>

<style scoped>
.custom-shape-divider-bottom-1636017048 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1636017048 svg {
  position: relative;
  display: block;
  width: calc(159% + 1.3px);
  height: 103px;
}

.custom-shape-divider-bottom-1636017048 .shape-fill {
  fill: #fff;
}
</style>
