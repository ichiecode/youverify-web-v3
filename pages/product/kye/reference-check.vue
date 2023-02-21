<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYE | Reference Check"
      title="Automated Employee Reference Checks With Detailed Insights"
      intro="Replace manual reference check calls through our automated process that saves on time and labour. Make better and faster hiring decisions by verifying candidate references in real-time."
      illustration="hero-reference-check.svg"
      :white="false"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton text="Get started" theme="white" to="/product/kyc/pricing" />
        <AppButton
          theme="white"
          :outline="true"
          text="Book a free demo"
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
    <Features :features="features" />
    <Offers
      title="Automated Reference Checks to Hire with Confidence"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Hire the Right Candidates with Detailed Reference Checks"
      note="Send us a message right away! Our experts will reach out to help you start verifying customer data faster than ever. This is how we build reliable compliance solutions. Book a demo below."
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
      title: "Reference Check",
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
          content: "Automated Employee Reference Checks With Detailed Insights",
        },
      ],
    };
  },
  data() {
    return {
      features: [
        {
          title: "Make Better Hiring Decisions",
          note: "Hire only candidates with valid references for adequate internal risk control in your organisation.",
        },
        {
          title: "Secure Your Business",
          note: "Protect your business from potential sanctions and reputational damages by only hiring qualified candidates with valid references.",
        },
        {
          title: "Globally Verify References Claims",
          note: "Receive data and verify candidate references regardless of where they are located in the world.",
        },
      ],
      offers: [
        {
          illustration: "detailed-report",
          title: "Detailed Insights",
          note: "Our reference checks solution helps provide detailed insights into candidates for more informed hiring compared to manual processes that may miss out on critical information.",
        },
        {
          illustration: "fully-automated",
          title: "Fully Automated",
          note: "Completely automate your reference check process from start to finish and instantly receive high-quality insight.",
        },
        {
          illustration: "individual-case-management",
          title: "Save Time",
          note: "Save time spent on manually verifying employee references and get better results through the Youverify reference check solution.",
        },
      ],
      faqs: [
        {
          question: "What is Reference Check? ",
          answer:
            "A reference check is a process of verifying the references provided by an individual usually when applying for a job or before onboarding a platform for security reasons.",
        },
        {
          question: "What is the Best way to Perform Reference Checks?",
          answer:
            "The best way to perform reference checks is to automatically verify the references against reliable databases. Manually performing the process is stressful, time and labour-intensive. It also may not capture all the important details.",
        },
        {
          question: "Do Companies Actually Check References?",
          answer:
            "It varies from one company to another. Many companies do not actually perform reference checks at the risk of hiring or onboarding high-risk employees.",
        },
      ],
    };
  },
};
</script>
