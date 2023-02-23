<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Compliance Workflow Builder"
      title="Build Custom Workflows to Suit Specific Compliance Needs"
      intro="Simplify your decision-making process through automated no-code workflow builder and improve user onboarding rate while satisfying regulatory requirements."
      illustration="hero-id-data-verification.svg"
      :lightBlue="true"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton theme="white" text="See how it Works" href="#contact">
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
    <Offers
      title="Build Code-Free Compliance Workflows"
      paragraph="Design verification workflows based on user demographics and other preset conditions for the best blend of high pass rates, fraud protection and compliance satisfaction."
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Start Onboarding Legitimate Customers with The Youverify KYC ID Document Verification Solution Today"
      note="Leave us a message! Our team will reach out with the best KYC ID document verification solution that fits your specific needs in no time. Book a demo below."
    />
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
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
    Features,
    Offers,
    Integrate,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Compliance Workflow Builder",
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
          content: "Build Custom Workflows to Suit Specific Compliance Needs",
        },
      ],
    };
  },
  data() {
    return {
      steps: [
        " Customer provides accepted identity information (e.g Driver's licence number, Passport number, etc)",
        "This number is collected and verified against our 300m+ global government-backed database and document verification services.",
        "The result comes out positive if there's a match and negative if there is none. Response time is immediate.",
      ],
      features: [
        {
          title: "Setup Your Verification Flow",
          note: "Our no-code tool allows you to build a step-by-step compliance verification solution tailored to your specific need. Receive guidance from our compliance solution support team in picking the right conditions, verification steps, triggers and reactive actions.",
        },
        {
          title: "Set Condition-Specific Triggers",
          note: "Set up automatic verification requests for your customers based on data supplied by prospective users.",
        },
        {
          title: "Make Smart Compliance Decisions",
          note: "Automate your customer onboarding decision-making process with preset rules and actions while retaining control to manually review cases of interest.",
        },
      ],
      offers: [
        {
          illustration: "intelligent-ai",
          title: "Design Step-by-Step User Verification Stages",
          note: "Set up step-by-step customer verification processes based on jurisdictions, demographics and your specific industry best practices. Some users might only need KYC verification - simplify their flow and help them onboard instantly.",
        },
        {
          illustration: "digital-nomad",
          title: "Extra Verify Risky Customers",
          note: "Automatically trigger additional checks like liveness detection or facial compare for users from high-risk demographics, risk profiles or ratings.",
        },
        {
          illustration: "advanced-customisation",
          title: "Leverage Automatic Risk Scoring",
          note: "Set up your verification workflow to automatically adapt to our advanced risk scoring system for more secure protection of your business. Eliminate unexpected gimmicks and deceptive fraud patterns.",
        },
      ],
      faqs: [
        {
          question: "What is Identity Verification?",
          answer:
            "Identity verification is simply the process of verifying the identity of an individual through legally approved means which is mostly by providing IDs and running verification checks against government databases. There are a series of documents that can be used for this purpose including government-issued IDs, driver's licenses, passports and birth certificates.",
        },
        {
          question: "What is ID Verification?",
          answer:
            "ID verification refers to the process of verifying the specific identity document provided by a customer. ",
        },
        {
          question: "What is Real-Time ID Verification?",
          answer:
            "In real-time ID verification, the customer provides the serial number of an acceptable ID document. This number is run immediately against our government-backed database to verify the legitimacy of the ID document in seconds.",
        },
        {
          question: "Why do I need to Verify a Customer ID?",
          answer:
            "ID verification is important because they help companies perform adequate KYC through document inspection for due diligence, risk assessment, and compliance.",
        },
        {
          question: "What is ID verification Software? ",
          answer:
            "An ID verification software is used to help businesses digitally automate identity verification processes. Advanced ID verification software combines AI technology with machine learning to perform more complex verifications like biometric verification and liveness detection.",
        },
      ],
    };
  },
};
</script>
