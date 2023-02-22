<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Risk Management"
      title="Assess & Manage Risks Throughout the Customer Life Cycle"
      intro="Protect your business from reputation damage and financial losses through advanced risk assessment and fraud detection solutions."
      illustration="hero-solutions-risk-management.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          theme="secondary"
          :outline="true"
          text="Get a free demo"
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
    <TrustedClients />
    <Features :features="features" />
    <!-- <Stats :stats="stats" /> -->
    <!-- <Offers
      title="Scale your Business with our Comprehensive KYB Solution"
      :offers="offers"
    /> -->
    <section
      class="py-24 px-8 max-w-screen-xl mx-auto"
    >
    
    </section>
    <ContactUs
      id="contact"
      heading="SSetup a Robust Risk Management System with Youverify Compliance Solutions"
      note="Begin your journey with Youverify. Send us a message right away!"
    />
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
import Features from "~/components/common/Features.vue";
import Offers from "~/components/products/Offers.vue";
import Stats from "~/components/common/Stats.vue";
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: {
    HeroSection,
    TrustedClients,
    Features,
    Offers,
    Stats,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Risk Management",
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
          content: "Assess & Manage Risks Throughout the Customer Life Cycle",
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
          icon: "compliant",
          title: "Prevent Financial Losses from Fraud",
          note: "Secure your business from financial losses and regulatory fine payments by detecting and curtailing fraudulent acts in real-time.",
        },
        {
          icon: "onboarding",
          title: "Speed Up Onboarding Without Compromising Compliance",
          note: "Onboard customers faster with seamless compliance flows that are easy for users but flag fraudsters.",
        },
        {
          icon: "onboarding",
          title: "End-to-End Customer Lifecycle Protection",
          note: "Monitor and flag fraudulent patterns at every step of the way throughout the customer lifecycle.",
        },
      ],
      offers: [
        {
          illustration: "easy-kyc",
          title: "Design Your Compliance Process",
          note: "No-Code Compliance Builder Leverage our drag-and-drop no-code tool (vForms) to build your custom compliance process. Set up flexible workflows that adapt to the customer choices and regulatory needs of your business.",
        },
        {
          illustration: "v-forms",
          title: "Interactive Management Dashboard",
          note: "Set up and control the customer verification flow and ongoing monitoring in our interactive management dashboard. Analyse every detail and set conditions for cases to be reviewed manually to make informed decisions.",
        },
      ],
      faqs: [
        {
          question: "What is Fraud Detection?",
          answer:
            "Fraud detection is the process of setting measures that detect and flag malicious user activities during onboarding or transactions. The process is mandatory for businesses in the regulated industry like banks and other financial institutions. However, unregulated businesses also employ fraud detection solutions for preventing financial losses and protecting their public image.",
        },
        {
          question: "Why is Fraud Detection Important?",
          answer:
            "Fraud detection is important because it prevents bad actors and ill-intent users from making financial transactions on legitimate platforms through illicit means. Fraud detection is a vital aspect of fraud monitoring in compliance.",
        },
        {
          question: "How does an Anti-Fraud Detection Solution Operate?",
          answer:
            "Anti-fraud detection solution operates by running customer activities through preset rules, spotting irregularities in verifications, and transactions, and screening against global watchlists. This software can be automated to detect fraudulent activities at every point of the customer journey.",
        },
      ],
    };
  },
};
</script>
