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
        md:pt-40 md:pb-20
      "
    >
      <section class="w-full max-w-screen-xl mx-auto sm:px-8 px-6">
        <div class="r">
          <div class="">

            <div class="text-center mb-8">
              <h1 class="">vForms Demo</h1>
            </div>
            <div class="mt-3 justify-end sm:mt-8 lg:mt-10 flex flex-wrap">
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
                target="_blank"
                :href="`https://os.youverify.co/v-forms/${vformId}/edit/add-fields`"
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
            <div class="border-solid border-2 border-blue p-4 shadow-iframe">
              <iframe
                id="Iframe"
                title="User Guarantor Form"
                width="100%"
                height="800px"
                :src="link"
                frameborder="0"
                class=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; camera; microphone"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </header>

    <get-started></get-started>
  </div>
</template>

<script>
import getStarted from "~/components/common/getStarted.vue";
export default {
  components: {
    getStarted,
  },
  data() {
    return {
      link: null,
    };
  },
  mounted() {
    if (!this.$route.params.link) {
      this.$router.go(-1);
    } else {
      this.link = this.$route.params.link;
      this.vformId = this.$route.params.vformId;
    }
  },
};
</script>

<style></style>
