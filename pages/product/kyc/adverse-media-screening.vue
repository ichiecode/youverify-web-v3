<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYC | Adverse Media Screening"
      title="Identify and Verify High-Risk Customers with Robust Adverse Media Screening Solution"
      intro="Verify high-risk customers for adverse media before onboarding and receive real-time subsequent insights for the latest developments."
      illustration="hero-adverse-media-screening.svg"
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
    <TrustedClients />
    <Features :features="features" />
    <Offers title="Onboard Customers in Confidence" :offers="offers" />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Secure Your Business with the Youverify Adverse Media Screening Solution"
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
      title: "Adverse Media Screening",
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
            "Identify and Verify High-Risk Customers with Robust Adverse Media Screening Solution",
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
          title: "Filter Non-Reputable Media Noise",
          note: "Eliminate general media noise and focus on the risks that are relevant to your business and high-risk customers. Whitelist low-risk clients for better filtering. ",
        },
        {
          title: "Automate Ongoing Customer Monitoring",
          note: "Automatically receive alerts from customers as they change in risk status and adverse media rating.",
        },
        {
          title: "Improve Overall Customer Onboarding",
          note: "Improve your overall customer onboarding experience by tailoring negative media screening to your unique risk assessment approach to reduce false positives.",
        },
      ],
      offers: [
        {
          illustration: "machine-learning",
          title: "Machine Learning and Artificial Intelligence",
          note: "Leverage intelligent AI and machine learning processing to analyse large-scale media information on the go for negative news screening.",
        },
        {
          illustration: "automatic-aml",
          title: "Automatic AML and CFT Compliance",
          note: "Setup adverse media screening as part of your risk assessment and customer onboarding process to satisfy AML and CFT global compliance requirements.",
        },
        {
          illustration: "intuitive-case-management",
          title: "Intuitive Case Management Platform",
          note: "Manage high-risk customers on a case-by-case basis through an intuitive case management platform that presents adverse media screening results as actionable data for informed decision-making.",
        },
        {
          illustration: "database-screening",
          title: "Database Screening",
          note: "Screen high-risk customers against reliable and robust media databases and individual profiles to get the best results rather than endless articles online.",
        },
      ],
      faqs: [
        {
          question: "What is Adverse Media Screening?",
          answer:
            "Adverse media screening is the process of screening prospective or high-risk customers against negative news and data sources on the internet and other databases. ",
        },
        {
          question: "What Sources are Adverse Media Screening Performed on?",
          answer:
            "Adverse media screening generally runs through news sources, and publications on convictions for or alleged involvement in corruption, sanctions, money laundering, and financing of illegal activities.",
        },
        {
          question: "Why is Adverse Media Screening Important?",
          answer:
            "Adverse media screening is important because it helps businesses keep an eye on high-risk customers for negative news in the media. Appearance in such news could be an indication of money laundering activities or terrorism funding from which the business can then make an informed on how to relate with the customer.",
        },
      ],
    };
  },
};
</script>
