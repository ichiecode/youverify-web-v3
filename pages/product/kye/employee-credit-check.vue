<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYE | Employee Credit Check"
      title="Real-Time Employee Credit Check Solutions"
      intro="Accurate credit check solution for informed decision-making and risk assessment on hiring candidates and employees in sensitive positions. Evaluate the trustworthiness, reliability and financial soundness of individuals during onboarding."
      illustration="hero-employee-credit-check.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton text="Get started" to="/product/kyc/pricing" />
        <AppButton
          theme="secondary"
          :outline="true"
          text="Book demo"
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
    <Offers title="Stay Secure with Automated Credit Check" :offers="offers" />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Hire Financially Secure Candidates with Instant Credit Checks"
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
      title: "Employee Credit Check",
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
          content: "Real-Time Employee Credit Check Solutions",
        },
      ],
    };
  },
  data() {
    return {
      features: [
        {
          title: "Save Time and Cost",
          note: "Save time and cost during hiring and employee onboarding through real-time credit check solutions.",
        },
        {
          title: "Risk Assessment",
          note: "Identify and verify high-risk employees through financial soundness assessment. Ensure only financially secure employees get into critical positions.",
        },
        {
          title: "Global Solution",
          note: "Perform credit checks on employees anywhere in the world. Connected to 6000+ data sources and credit check verification providers, our solution is not limited by state or jurisdiction.",
        },
      ],
      offers: [
        {
          illustration: "detailed-report",
          title: "Instant Credit Reports",
          note: "Receive instant credit reports on employees and hiring candidates at any point in the hiring process. Make informed hiring decisions with credit check data.",
        },
        {
          illustration: "individual-case-management",
          title: "User-Friendly Case Management Portal",
          note: "Efficiently manage employee credit check data on a case-by-case basis through our easy-to-use case management portal.",
        },
        {
          illustration: "fully-automated",
          title: "Safe and Secure",
          note: "We employ extra security protocols to protect your employee information. Perform credit checks in confidence knowing that the reports are well-guarded.",
        },
      ],
      faqs: [
        {
          question: "What is Credit Check?",
          answer:
            "Credit check or credit inquiry is the process of looking into an individual's financial history with credit reporting agencies to access your creditworthiness. This process is important today as lenders carry out credit checks to determine whether to give out a loan or not and businesses use it to verify the financial integrity of employees to be employed in sensitive positions.",
        },
        {
          question: "Why is Credit Check Important?",
          answer:
            "Credit check is important because it acts as a window into the creditworthiness of an individual. With this data, businesses can proceed to make informed decisions like whether to give a loan or employ an individual in a specific position.",
        },
        {
          question: "How is Credit Check Performed?",
          answer:
            "Credit check is mostly sourced from certified credit bureau and rating agencies that keep track of individual financial histories. However, there are also intelligent systems that take into consideration, the financial history of an individual and assign a relatable credit score based on the available data.",
        },
      ],
    };
  },
};
</script>
