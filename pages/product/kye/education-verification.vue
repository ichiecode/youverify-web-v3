<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYE | Education Verification"
      title="Fast, Global Employee Education Verification Solution"
      intro="Reliably verify employee education status and credentials to ascertain qualifications and ensure you only hire the most qualified and trustworthy candidate. Get real-time information on degrees completed, attendance dates, and other available transcript information upon request."
      illustration="hero-education-verification.svg"
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
          title: "Trusted Data Sources",
          note: "Our educational background data sources are retrieved from trusted, reliable sources, global education history registries and educational institutions.",
        },
        {
          title: "Global Coverage",
          note: "Verify individual education history from schooling institutions around the world. This gives you the flexibility to hire anyone, anywhere, with little cause for concern.",
        },
      ],
      offers: [
        {
          illustration: "metrics",
          title: "Make Informed Decisions",
          note: "Get access to the data you need on applicants' education history to make informed hiring decisions.",
        },
        {
          illustration: "fast-processing",
          title: "Fast Processing Times",
          note: "Verify employee and potential employee education history in seconds during the onboarding or screening stage.",
        },
        {
          illustration: "flexible-reporting",
          title: "Flexible Reporting Options",
          note: "Configure educational history reporting options to suit the needs of your business. Get real-time information on degrees completed, attendance dates, and other available transcript information upon request.",
        },
      ],
      faqs: [
        {
          question: "What is Education Verification?",
          answer:
            "Education verification is the process of verifying the educational history and background of an individual. Essentially, it is carried out to ensure an individual actually obtained the educational certificates he or she presents. ",
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
      ],
    };
  },
};
</script>
