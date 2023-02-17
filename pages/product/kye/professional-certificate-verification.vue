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
      title="Grow Your Business By Hiring the Right Candidates Based on Educational Background"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Hire the Right Candidates, Verify their Educational Background Today"
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
          title: "Make Informed Decisions",
          note: "Get access to the data you need on applicants' education history to make informed hiring decisions.",
        },
        {
          illustration: "fraud-detection",
          title: "Fast Processing Times",
          note: "Verify employee and potential employee education history in seconds during the onboarding or screening stage.",
        },
        {
          illustration: "hiring-efficiency",
          title: "Flexible Reporting Options",
          note: "Configure educational history reporting options to suit the needs of your business. Get real-time information on degrees completed, attendance dates, and other available transcript information upon request.",
        },
      ],
      faqs: [
        {
          question: "What is Education Verification?",
          answer:
            "Education verification is the process of verifying the educational history and background of an individual. Essentially, it is carried out to ensure an individual actually obtained the educational certificates he or she presents.",
        },
        {
          question: "How do Businesses Verify International Education?",
          answer:
            "There are several means that a business may use to verify international education. These include legal registries like the National Student Clearinghouse (NSC) houses records, verifying from the institutions themselves or third-party educational verification data sources. However, these processes require several infrastructures therefore, it is more cost and labour friendly to outsource to regtech companies like Youverify.",
        },
        {
          question: "What Comes up in Education Background Check?",
          answer:
            "An education background check verifies the education history of an individual. Generally, it looks to confirm whether the applicant attended the school they claimed, and shows proof of dates and degrees.",
        },
        {
          question: "How do Businesses Verify International Education?",
          answer:
            "There are several means that a business may use to verify international education. These include legal registries like the National Student Clearinghouse (NSC) houses records, verifying from the institutions themselves or third-party educational verification data sources. However, these processes require several infrastructures therefore, it is more cost and labour friendly to outsource to regtech companies like Youverify.",
        },
      ],
    };
  },
};
</script>
