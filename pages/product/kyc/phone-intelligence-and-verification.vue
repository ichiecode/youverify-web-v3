<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYC | Phone Intelligence & Verification"
      title="Assess Digital Interaction Risks Through Phone & Intelligence Verification"
      intro="Learn about your potential customers through phone intelligence and verification via their phone numbers. Our phone Intelligence solution provides detailed phone data for risk assessment, identifying fake account signups and data segmentation and analysis."
      illustration="hero-phone-intelligence-and-verification.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          text="Get started"
          to="/product/kyc/pricing"
        />
        <AppButton
          theme="secondary"
          :outline="true"
          text="Book a free Demo"
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
    <TrustedClients class="px-4 md:px-8 max-w-screen-xl mx-auto" />
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers
      title="Secure Your Business Via Effective Phone Intelligence"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Start Assessing the Risk of Digital Interactions Through Phone Number Intelligence & Verification"
      note="Send us a message right away and our experts will reach out to help you get started on the best solution for your business. This is how we build reliable compliance solutions. Book a demo below."
    />
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
import Stats from "~/components/common/Stats.vue";
import Features from "~/components/products/Features.vue";
import Offers from "~/components/products/Offers.vue";
import Integrate from "~/components/products/Integrate.vue";
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: {
    HeroSection,
    TrustedClients,
    Stats,
    Features,
    Offers,
    Integrate,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Phone Intelligence and Verification | Youverify Checks",
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
            "Assess Digital Interaction Risks Through Phone & Intelligence Verification",
        },
      ],
    };
  },
  data() {
    return {
      stats: [
        {
          figure: "1 sec",
          name: "Average verification time",
        },
        {
          figure: "30min",
          name: "Quick integration with YV SDK",
        },
        {
          figure: "99%",
          name: "Completion rate",
        },
      ],
      features: [
        {
          title: "Fraud Risk Mitigation",
          note: "Build effective risk models that identify fake user accounts during signups. Establish friction in risky user activities and interactions with your platform.",
        },
        {
          title: "Global Coverage",
          note: "Enjoy phone intelligence and verification service across 7 continents around the world. Perform seamless phone number verification of customers from varying jurisdictions in seconds.",
        },
        {
          title: "Elaborate Analysis",
          note: "Receive detailed reports from phone number intelligence and verification results. Identify important parameters like phone number validity, network voice and data providers and more.",
        },
      ],
      offers: [
        {
          illustration: "onboarding",
          title: "Onboard Real Users",
          note: "Validate the phone number data of customers including their full name, phone type, geolocation, billing address and more. This ensures you only onboard real users.",
        },
        {
          illustration: "global-contact",
          title: "Global Contact Validation",
          note: "Make informed decisions through detailed and accurate phone data irrespective of customer country. Activate contact decision-making and validation for customers globally.",
        },
        {
          illustration: "flag-risk",
          title: "Flag Risky Users During Onboarding",
          note: "Identify and flag risky users in real time during onboarding through elaborate phone data. Prevent high-risk users from onboarding your platform.",
        },
        {
          illustration: "high-conversion",
          title: "Higher Conversion Rates",
          note: "Achieve a higher customer conversion rate using phone data. Improve the onboarding conversion rate of legitimate customers on your platform.",
        },
      ],
      faqs: [
        {
          question: "What is Phone Intelligence and Verification?",
          answer:
            "Phone intelligence verification is the process of verifying and validating customer phone data for adequate risk assessment.",
        },
        {
          question: "Why are Phone Intelligence and Verification Important?",
          answer:
            "Phone intelligence and verification help identify fake phone numbers and potential criminals/ criminal activities on your platform.",
        },
      ],
    };
  },
};
</script>
