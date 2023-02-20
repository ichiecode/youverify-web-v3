<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Customer Verification"
      title="Grow your business with a robust KYC compliance solution."
      intro="Automate customer verification and onboarding with an all-in-one KYC compliance solution, YVOS. Onboard customers across Africa in seconds at a single click."
      illustration="hero-solutions-customer-verification.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton text="Get started" to="/product/kyc/pricing" />
        <AppButton
          theme="secondary"
          :outline="true"
          text="View demo"
          href="#contact"
        >
          <svg slot="append" viewBox="0 0 20 20" fill="none" class="w-5 ml-1.5">
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
    <Offers
      title="Automate KYC Steps to fit your Business Needs"
      :offers="offers"
    />
    <Stats :stats="stats" />
    <ContactUs
      id="contact"
      heading="Start Building Industry Tailored Customer Verification Solutions With Youverify"
      note="Send us a message right away! Our experts will reach out to help you determine the most important customer verification flow for your industry and business. Book a demo below."
    />
     <!-- <Faqs :faqs="faqs" /> -->
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
import Offers from "~/components/products/Offers.vue";
import Stats from "~/components/common/Stats.vue";
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: { HeroSection, Offers, Stats, ContactUs, Faqs, KnowMore },
  data() {
    return {
      stats: [
        {
          figure: "100+",
          name: "Countries and territories checked",
        },
        {
          figure: "1M",
          name: "Articles analyzed every day",
        },
        {
          figure: "500",
          name: "Data sources monitored every hour",
        },
        {
          figure: "98%",
          name: "Profiles checked for updates daily",
        },
      ],
      offers: [
        {
          illustration: "easy-kyc",
          title: "Build No-Code Workflows for Easy KYC Using vForms",
          note: "Build systematic verification structures to fit your customer risk profile, automatically perform verifications based on their actions and set up triggers for manual review without writing a single line of code.",
        },
        {
          illustration: "v-forms",
          title: "Leverage the Power of vForms",
          note: "The no-code compliance automation tool for your all-in-one Know Your Customer (KYC) compliance service solution. Enjoy the latest industry updates through our thoroughly researched digital identity market report and compliance insights.",
        },
      ],
    };
  },
};
</script>
