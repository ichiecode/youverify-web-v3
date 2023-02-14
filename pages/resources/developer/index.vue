<template>
  <div class="pt-20">
    <ResourceHeader
      tag="Developer Portal"
      title="Developers"
      description="Everything you need to build a seamless compliance workflow for your businesses"
    />
    <section class="max-w-screen-xl mx-auto text-center px-8">
      <h3>Responsive APIs for Your Consumption</h3>
      <p class="py-4 max-w-3xl mx-auto">
        Access a rich library of tools like no other, and build innovative
        compliance products to the delight of your customers.
      </p>

      <div class="my-20 space-y-10">
        <div
          class="py-6 md:py-12 px-5 md:px-10 bg-grey-300 rounded-lg md:flex items-start w-full md:space-x-20"
        >
          <img
            src="@/assets/images/icons/developer/cog.svg"
            class="object-cover w-16 md:w-24 h-16 md:h-24 mb-6 md:mb-0"
            alt="api doc youverify icon"
          />
          <div class="flex flex-col items-start text-left">
            <h3 class="mb-8">API Doc</h3>
            <p class="leading-relaxed md:w-4/5">
              Seamlessly integrate your business platform with our products to
              improve customer onboarding without compromising compliance.
            </p>
            <app-button
              class="mt-10"
              text="Explore"
              theme="secondary"
              :outline="true"
              href="https://doc.youverify.co/"
            >
              <svg
                slot="append"
                viewBox="0 0 20 20"
                fill="none"
                class="w-5 ml-1.25 transition-transform duration-75 transform group-hover:translate-x-0.5"
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
                ></path>
              </svg>
            </app-button>
          </div>
        </div>
        <div
          class="py-6 md:py-12 px-5 md:px-10 bg-grey-300 rounded-lg md:flex items-start w-full md:space-x-20"
        >
          <img
            src="@/assets/images/icons/developer/sdk.svg"
            class="object-cover w-16 md:w-24 h-16 md:h-24 mb-6 md:mb-0"
            alt="sdk youverify icon"
          />
          <div class="flex flex-col items-start text-left">
            <h3 class="mb-8">SDK</h3>
            <p class="leading-relaxed w-4/5">
              Our SDKs are well-polished and highly customizable with adaptive
              designs that blend easily with your existing business platform.
            </p>
            <app-button
              class="mt-10"
              text="Explore"
              theme="secondary"
              :outline="true"
              href="https://www.npmjs.com/package/youverify-web-sdk"
            >
              <svg
                slot="append"
                viewBox="0 0 20 20"
                fill="none"
                class="w-5 ml-1.25 transition-transform duration-75 transform group-hover:translate-x-0.5"
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
                ></path>
              </svg>
            </app-button>
          </div>
        </div>
      </div>
    </section>
    <div class="mt-20">
      <know-more></know-more>
    </div>
  </div>
</template>

<script>
import ResourceHeader from "@/components/resources/header.vue";
import KnowMore from "@/components/common/KnowMore";
export default {
  components: {
    ResourceHeader,
    KnowMore,
  },
  head() {
    return {
      title: "Developer Resources | Youverify Documentation",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Everything you need to build a seamless compliance workflow for your businesses",
        },
      ],
    };
  },
};
</script>

<style></style>
