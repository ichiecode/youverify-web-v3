<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYB | Business Identity Verification"
      title="Instant Global Business Verification"
      intro="Verify identities of key stakeholders of a business including Ultimate Beneficial Owners (UBOs), Directors, Shareholders and Employees for seamless onboarding and effective risk management."
      illustration="hero-business-identity-verification.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          text="Get started"
          href="https://os.youverify.co/auth/create-account"
        />
        <AppButton
          theme="secondary"
          :outline="true"
          text="Book a Free Demo"
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
    <Stats :stats="stats" />
    <Features :features="features" />
    <section class="pt-24 px-4 md:px-8 max-w-screen-xl mx-auto">
      <h2
        class="font-semibold text-blue-300 text-2xl md:text-5xl text-center max-w-4xl m-auto"
      >
        How the Youverify Business ID Verification Works
      </h2>

      <div
        class="flex flex-col md:flex-row justify-between items-center gap-10 mt-24"
      >
        <LazyImage
          class="md:w-1/3 lg:w-1/2 h-96 md:h-auto"
          src="~/assets/images/products/business-verification.png"
        />

        <div class="space-y-5 w-full">
          <div v-for="(step, index) in steps" :key="index">
            <h3 class="font-semibold text-grey text-xl">
              Step {{ index + 1 }}
            </h3>
            <p class="font-medium text-xl">{{ step }}</p>
          </div>
        </div>
      </div>
    </section>
    <Offers
      title="Verify Business Stakeholders Identities in Real-Time"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Verify your Customers with Youverify KYB Solution Today"
      note="Leave us a message! Our team will reach out with the best KYC ID document verification solution that fits your specific needs in no time. Book a demo below."
    />
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
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
    Stats,
    Offers,
    Features,
    Integrate,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Business Identity Verification",
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
          content: "Instant Global Business Verification",
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
      steps: [
        "Run a KYB check on the legal entity that reveals the employees, directors, other important stakeholders and their respective shares.",
        "Proceed to verify the identity of each individual stakeholder for sanction lists, PEP screening and watch lists.",
        "The result comes out positive if there's a match and negative if there is none. Response time is immediate.",
      ],
      features: [
        {
          title: "Transact with Confidence",
          note: "Confidently establish business relationships by verifying the identities of key stakeholders for compliance",
        },
        {
          title: "Leverage the Power of Technology",
          note: "Our artificial intelligence and machine learning solution helps verify business stakeholders' IDs more efficiently and in real-time. This ensures that you only do business with entities that are owned by law-abiding individuals.",
        },
        {
          title: "Guaranteed Compliance",
          note: "Remain on the right side of compliance and regulatory authorities while you grow your business. Our real-time business ID verification solution is designed to handle your KYC compliance while you focus on other aspects of growth.",
        },
      ],
      offers: [
        {
          illustration: "intelligent-ai",
          title: "Intelligent AI",
          note: "Leverage the power of advanced machine learning algorithms which automatically match the ID information of business stakeholders against verified government databases and sources for instant verification.",
        },
        {
          illustration: "digital-nomad",
          title: "Global Coverage",
          note: "Our global network of identity verification services and databases allows you to verify the identities of stakeholders in businesses anywhere in the world.",
        },
        {
          illustration: "advanced-customisation",
          title: "Customisable",
          note: "Our service is highly customizable, allowing businesses automatically select the respective business verification flow including stakeholder identity verification. Tailor the service to your specific needs and requirements, ensuring that you are able to comply with all relevant regulations and laws.",
        },
      ],
      faqs: [
        {
          question: "What is Identity Verification?",
          answer:
            "Identity verification is simply the process of verifying the identity of an individual through legally approved means which is mostly by providing IDs and running verification checks against government databases. There are a series of documents that can be used for this purpose including government-issued IDs, driver's licenses, passports and birth certificates.",
        },
        {
          question: "What is Business Identity Verification?",
          answer:
            "Business identity verification refers to the process of verifying the identities of relevant stakeholders of a business. These include Ultimate Beneficial Owners (UBOs), directors, shareholders, employees and other stakeholders.",
        },
        {
          question: "Why do I need to Business Stakeholder Identity?",
          answer:
            "Business stakeholder identity verification is important because it helps you determine the compliance statuses of important stakeholders in the business. This data is important in carrying out risk assessments to determine whether to establish a business relationship or not.",
        },
        {
          question: "What is ID verification Software?",
          answer:
            "An ID verification software is used to help businesses digitally automate identity verification processes. Advanced ID verification software combines AI technology with machine learning to perform more complex verifications like biometric verification and liveness detection.",
        },
      ],
    };
  },
};
</script>
