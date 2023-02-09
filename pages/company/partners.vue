<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Partners"
      title="Partner With the Most Innovative Global Compliance Platform"
      intro="Let's grow together. See how our global compliance products can help your business."
      illustration="hero-partnership.svg"
    >
      <div slot="buttons">
        <AppButton buttoncolor="bluebutton" buttonText="Become a partner">
          <svg
            slot="append"
            viewBox="0 0 20 20"
            fill="none"
            class="w-5 ml-1.25"
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
    </HeroSection>
    <Stats :stats="stats" />
    <TrustedClients class="px-4 md:px-8 max-w-screen-xl mx-auto" />
    <section class="py-36">
      <h1
        class="text-2xl md:text-4xl font-semibold text-center max-w-2xl mx-auto"
      >
        Scale Your Business, Build Profitable Partnerships Tailored to Your
        Needs
      </h1>

      <div class="relative mt-12 md:mt-28">
        <div
          class="hidden md:block absolute inset-x-0 bottom-0"
          style="z-index: -1"
        >
          <img src="~/assets/images/illustrations/element.svg" alt="" />
        </div>
        <div
          class="flex flex-col md:flex-row gap-7 md:gap-4 px-4 md:px-8 max-w-screen-xl mx-auto"
        >
          <div
            v-for="partner in partners"
            :key="partner.type"
            class="px-5 lg:px-14 pt-14 pb-20 shadow-md flex flex-col items-center text-center rounded-xl bg-white"
          >
            <img
              class="w-20"
              :src="
                require(`~/assets/images/illustrations/${partner.illustration}.svg`)
              "
              :alt="partner.type"
            />
            <h1 class="text-2xl font-semibold mt-8">{{ partner.type }}</h1>
            <p class="font-medium mt-4 lg:max-w-xs">{{ partner.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20 bg-blue-100">
      <div class="px-4 md:px-8 max-w-screen-xl mx-auto text-center">
        <h1 class="text-2xl md:text-5xl font-bold">
          Ready to become a partner?
        </h1>
        <p class="text-xl font-semibold mt-6">
          Sign up to explore partnership benefits
        </p>
        <form class="form-group w-full mt-7 md:mt-16 max-w-md mx-auto">
          <div class="space-y-4">
            <input
              class="py-3.5 px-6 w-full rounded"
              type="text"
              placeholder="Type your name "
            />
            <input
              class="py-3.5 px-6 w-full rounded"
              type="email"
              placeholder="Email"
            />
            <input
              class="py-3.5 px-6 w-full rounded"
              type="tel"
              placeholder="+234 "
            />
            <input
              class="py-3.5 px-6 w-full rounded"
              type="text"
              placeholder="Input text "
            />
          </div>
          <AppButton
            buttonText="Apply Now"
            buttoncolor="bluebutton"
            class="w-full mt-14"
          />
          <p class="text-xs text-left mt-3">
            By clicking the button you agree with our
            <nuxt-link
              to="/privacy-policy"
              class="text-blue cursor-pointer font-semibold underline"
            >
              Privacy Policy</nuxt-link
            >
          </p>
        </form>
      </div>
    </section>
    <MoreYouverify />
  </div>
</template>

<script>
import MoreYouverify from "~/components/company/MoreYouverify.vue";
import HeroSection from "~/components/common/HeroSection.vue";
import Stats from "~/components/common/Stats.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
export default {
  components: { MoreYouverify, HeroSection, Stats, TrustedClients },
  data() {
    return {
      stats: [
        {
          figure: "200+",
          name: "Global Clients",
        },
        {
          figure: "50+",
          name: "Global Partners",
        },
        {
          figure: "94%",
          name: "Average growth after partnership",
        },
      ],
      partners: [
        {
          illustration: "artificial-intelligence",
          type: "Tech Solutions Partner",
          text: "Leverage our white labelling partnership to adopt our products and sell them as yours to customers.",
        },
        {
          illustration: "partners",
          type: "SaaS & PaaS Partner",
          text: "Improve your product offering with our KYC, KYT, KYB, KYE and Compliance workflow solutions. Offer extra added value to",
        },
        {
          illustration: "speaker",
          type: "Referrals",
          text: "Refer our products and earn a commission on every successful sign-on.",
        },
      ],
    };
  },
};
</script>
