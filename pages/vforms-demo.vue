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
              <h2 class="">vForms Demo</h2>
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
                href="/vforms-demo"
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
            <div class="border-dashed border-4 border-blue p-4">
              <iframe
                id="Iframe"
                title="User Guarantor Form"
                width="100%"
                height="800px"
                src="https://os.dev.youverify.co/v-forms/6169781713d6d7c51a1d5cdc"
                frameborder="0"
                class=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
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
  mounted() {
    var frame = document.getElementById("Iframe");
  },
};
</script>

<style></style>
