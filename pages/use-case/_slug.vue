<template>
  <div>
    <header
      class="
        relative
        flex
        items-center
        justify-start
        pt-40
        pb-32
        md:pt-48 md:pb-20
      "
    >
      <section class="w-full max-w-screen-xl mx-auto sm:px-8 px-6">
        <div class="">
          <div class="">
            <div class="text-center mb-8 bg-white w-full py-5 sticky" style="top: 79px;">
				<h1 class="hidden"></h1>
              <h3 class="">Use Case: {{formattedIndustries ? formattedIndustries.name : ''}}</h3>
            </div>
            
            <div class="border-solid border-2 border-blue p-4 shadow-iframe">
              <iframe
                id="Iframe"
                title="User Guarantor Form"
                width="100%"
                height="800px"
                :src="formattedIndustries ? formattedIndustries.link: ''"
                frameborder="0"
                class=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; camera; microphone"
              ></iframe>
            </div>
            <div class="mt-3 justify-center sm:mt-4 lg:mt-6 flex flex-wrap">
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
                target="_blank"
                :href="`https://os.youverify.co/v-forms/${formattedIndustries ? formattedIndustries.vFormId: ''}/edit/add-fields`"
                >Use Template<svg
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

<style></style>
