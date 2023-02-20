<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYE | Professional Certificate Verification"
      title="Globally Verify Professional Certifications from Reliable Databases"
      intro="Secure your business from potential criminal liability and bad reputation by verifying employee professional certifications during Know Your Employee (KYE) onboarding. Higher only the right and most qualified candidates for the job."
      illustration="hero-professional-certification.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton text="Get started" to="/product/kyc/pricing" />
        <AppButton
          theme="secondary"
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
      title: "Professional Certificate Verification",
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
            "Globally Verify Professional Certifications from Reliable Databases",
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
          title: "Make Smarter Hiring Decisions",
          note: "Ensure only the most qualified candidate gets the job by verifying their real-time verifying their professional credentials.",
        },
        {
          title: "Secure Your Business",
          note: "Protect your business from hiring untrustworthy employees and associated negative media through professional certificate verification. Globally verify employee certifications from reliable data sources.",
        },
        {
          title: "Global Coverage",
          note: "Verify employee professional credentials from legally approved institutions anywhere in the world.",
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
            "There are several pointers you can look out for to tell a fake certificate. They include the design and components used, the language, the location of the professional body issuing the certificate and contacting the source. Contacting the source is the most effective among these and is how we verify professional licenses and certifications.",
        },
        {
          question: "What Comes up in Education Background Check?",
          answer:
            "An education background check verifies the education history of an individual. Generally, it looks to confirm whether the applicant attended the school they claimed, and shows proof of dates and degrees.",
        },
      ],
    };
  },
};
</script>
