<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYC | ID Data Verification"
      title="Real-Time ID Verification for On-The-Go Customer Onboarding"
      intro="The most reliable and efficient way for businesses to verify the identity of their customers in real-time. Quickly verify and onboard new customers with fast and accurate results while maintaining a high level of security and compliance by directly verifying government-issued ID documents such as passports, driver's licenses, and national ID cards."
      illustration="hero-id-data-verification.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          text="Get started"
          to="/product/kyc/pricing"
        />
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
    <section class="pt-24 px-8 max-w-screen-xl mx-auto">
      <h2
        class="font-semibold text-blue-300 text-2xl md:text-5xl text-center max-w-4xl m-auto"
      >
        How the Youverify Real-Time ID Document Verification Works
      </h2>

      <div
        class="flex flex-col md:flex-row justify-between items-center gap-10 mt-24"
      >
        <LazyImage
          class="md:w-1/3 lg:w-1/2 h-96 md:h-auto"
          src="~/assets/images/products/data-verification.png"
        />

        <div class="space-y-5 w-full">
          <div v-for="(step, index) in steps" :key="index">
            <h3 class="font-semibold text-grey text-xl">Step {{ index + 1 }}</h3>
            <p class="">{{ step }}</p>
          </div>
        </div>
      </div>
    </section>
    <Offers title="Onboard Customers in Confidence" :offers="offers" />
    <SupportedIds />
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
import SupportedIds from "~/components/products/SupportedIds.vue";
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
    SupportedIds,
    Integrate,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "ID Data Verification",
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
            "Real-Time ID Verification for On-The-Go Customer Onboarding",
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
          title: "Onboard Verified Customers with Confidence",
          note: "Seamlessly scale up your business by adapting seamless KYC ID document verification to your onboarding workflow.",
        },
        {
          title: "Leverage the Power of Technology",
          note: "Our artificial intelligence and machine learning solution helps verify customer ID documents more efficiently and in real-time. This ensures that the information provided is accurate and up-to-date, providing a high level of security for your business and satisfying regulatory compliance.",
        },
        {
          title: "Guaranteed Compliance",
          note: "Remain on the right side of compliance and regulatory authorities while you grow your business. Our real-time KYC ID verification solution is designed to handle your KYC compliance while you focus on other aspects of growth.",
        },
      ],
      offers: [
        {
          illustration: "intelligent-ai",
          title: "Intelligent AI",
          note: "Leverage the power of advanced machine learning algorithms which automatically extract information from ID documents and match it against verified government databases and sources. Documents are checked against government standard templates, patterns and are evaluated for blurriness, white spots and more.",
        },
        {
          illustration: "digital-nomad",
          title: "Global Coverage",
          note: "Have a government-valid ID? We can verify it. Verify the ID of anyone, anywhere across the globe irrespective of the location of your customer.",
        },
        {
          illustration: "advanced-customisation",
          title: "Customisable",
          note: "Our service is highly customizable, allowing businesses globally to set their accepted IDs, criteria and rules. Tailor the service to your specific needs and requirements, ensuring that you are able to comply with all relevant regulations and laws.",
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
