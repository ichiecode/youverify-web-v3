<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYE | Education Verification"
      title="Fast, Global Employee Education Verification Solution"
      intro="Reliably verify employee education status and credentials to ascertain qualifications and ensure you only hire the most qualified and trustworthy candidate. Get real-time information on degrees completed, attendance dates, and other available transcript information upon request."
      illustration="hero-professional-certification.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton text="Get started" theme="white" to="/product/kyc/pricing" />
        <AppButton
          theme="white"
          :outline="true"
          text="Book a Free demo"
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
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers
      title="Hire Only Verified and Qualified Candidates"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Start Verifying Candidates Professional Certifications"
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
      title: "Education Verification",
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
          content: "Fast, Global Employee Education Verification Solution",
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
          title: "Automatic Verification",
          note: "Automatically obtain information on employee and potential employee education history. Verify if they truly obtained the presented educational background.",
        },
        {
          title: "Global Coverage",
          note: "Verify individual education history from schooling institutions around the world. This gives you the flexibility to hire anyone, anywhere, with little cause for concern.",
        },
        {
          title: "Trusted Data Sources",
          note: "Our educational background data sources are retrieved from trusted, reliable sources, global education history registries and educational institutions.",
        },
      ],
      offers: [
        {
          illustration: "credential-verification",
          title: "Real-Time Credential Verification",
          note: "Instantly verify candidate's professional credentials online during the application process to eliminate unqualified applications.",
        },
        {
          illustration: "fraud-detection",
          title: "Fraud Detection",
          note: "Detect and eliminate candidates attempting to perpetrate fraud through fake credentials and professional certifications.",
        },
        {
          illustration: "hiring-efficiency",
          title: "Improved Hiring Efficiency",
          note: "Speed up your hiring process and employee background check through instant credential verification. Save time, cost and labour while hiring.",
        },
      ],
      faqs: [
        {
          question: "What is the Purpose of Certificate Verification?",
          answer:
            "Verifying licenses and certifications are important steps in determining if a candidate can perform the job description. As a business, it is important that you verify the qualifications of a candidate to ensure that you hire the most qualified and best for the role.",
        },
        {
          question: "How do You Check if a Certificate is Real or Fake?",
          answer:
            "There are several pointers you can look out for to tell a fake certificate. They include the design and components used, the language, the location of the professional body issuing the certificate and contacting the source. ",
        },
      ],
    };
  },
};
</script>
