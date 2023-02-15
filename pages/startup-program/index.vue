<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Startup Accelerator"
      title="Welcome to the YV Startup Program"
      intro="Our ID document verification KYC (Know Your Customer) service provides a fast and secure way for businesses to verify the identity of their customers. Quickly and easily verify customer government-issued ID documents by scanning and autAccelerate your growth with the Youverify Operating System (YV OS) for your entire compliance need, customer onboarding, identity/address verification, and fraud detection."
      illustration="hero-startup.svg"
    >
      <div slot="buttons" class="flex gap-5">
        <AppButton text="Learn more" />
        <AppButton theme="secondary" text="Get early access" :outline="true">
          <svg slot="append" viewBox="0 0 20 20" fill="none" class="w-5 ml-2">
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
        </AppButton>
      </div>
    </HeroSection>

    <section class="bg-blue-900 py-24 relative z-0">
      <div class="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div
          class="absolute bottom-0 right-0 z-10 hidden md:block"
          style="height: 700px"
        >
          <img class="h-full" src="/img/world.svg" alt="" />
        </div>

        <div
          class="md:w-1/2 font-medium text-center md:text-left relative z-20"
        >
          <h1 class="font-semibold text-white text-4xl">
            Youverify Startup Program
          </h1>
          <h4 class="text-2xl text-white">
            We'll help you achieve your goals faster
          </h4>
          <p class="mt-8 text-xl text-white">
            Youverify OS credits will enable selected startups to onboard and
            verify up to 10,000 users at no cost - a good support to grow your
            business.
          </p>

          <div class="mt-20 space-y-16">
            <div
              v-for="(benefit, index) in benefits"
              :key="index"
              class="flex gap-7 flex-col md:flex-row items-center"
            >
              <div
                class="flex items-center justify-center w-full h-24 border-white border rounded-full"
                style="max-width: 96px"
              >
                <LazyImage :src="`/img/icons/${benefit.icon}.svg`" />
              </div>
              <div class="">
                <h1 class="font-normal text-xl text-white">
                  {{ benefit.title }}
                </h1>
                <p class="text-xl font-normal text-white">{{ benefit.note }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-36 px-4 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10 xl:gap-20"
    >
      <div class="w-full">
        <h1 class="font-semibold text-3xl xl:text-5xl">The Shield Podcast</h1>

        <p class="my-8 text-lg lg:text-xl">
          Tune in to The Shield podcast, as we explore practical and tactical
          insights from industry partners, founders, investors, and business
          leaders to help scale your startup. <br />
          Also, get an opportunity to get featured in our interview segment
          alongside industry leaders as they talk about their career journey and
          winning strategies.
        </p>
        <a class="inline" href="https://anchor.fm/youverify" target="_blank">
          <app-button class="" text="Subscribe">
            <svg slot="append" viewBox="0 0 20 20" fill="none" class="w-8 ml-2">
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
              ></path></svg></app-button
        ></a>
      </div>
      <div class="w-full h-72 md:h-auto">
        <img class="h-full mx-auto" src="/img/podcast.svg" alt="" />
      </div>
    </section>

    <section class="bg-blue-100 py-24">
      <div
        class="px-4 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-10 xl:gap-20"
      >
        <div class="w-full">
          <h1 class="font-semibold text-3xl xl:text-5xl">Knowledge Sharing</h1>

          <p class="text-lg lg:text-xl my-8">
            Exclusive access to future Youverify events and product launches,
            with access to networking sessions to meet and connect with top
            stakeholders and market leaders in the African business ecosystem.
          </p>

          <div class="flex gap-5">
            <AppButton text="Apply Now" />
            <AppButton
              to="/startup-program/stages"
              text="How it works"
              theme="secondary"
              :outline="true"
            >
              <svg
                slot="append"
                viewBox="0 0 20 20"
                fill="none"
                class="w-5 ml-2"
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
            </AppButton>
          </div>
        </div>
        <div class="w-full h-72 md:h-auto">
          <img class="h-full mx-auto" src="/img/people.svg" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
export default {
  components: { HeroSection },
  data() {
    return {
      benefits: [
        {
          icon: "money-bag",
          title: "$2,000 YV OS Credits",
          note: "Get up to $2,000 free Youverify OS credits. Onboard and verify up to 10,000 users at no cost",
        },
        {
          icon: "mentorship",
          title: "Mentorship and Support",
          note: "Dedicated technical adviser for one-on-one consulting. Learn best practices from industry experts",
        },
        {
          icon: "community",
          title: "Marketing and Community",
          note: "Brand spotlighting and co-marketing opportunities. Collaborate, grow and become part of a community",
        },
      ],
    };
  },
};
</script>

<style scoped>
.background {
  background-color: rgba(39, 86, 100, 1);
  background-image: url(/img/mask.svg);
  background-size: cover;
  background-position: center;
}
</style>
