<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Business Verification"
      title="End-to-End Business Verification"
      intro="Customize your KYB verification process to suit your business's compliance needs. Let Youverify handle critical screening processes including AML, Company Address verification and Ultimate beneficial owner."
      illustration="hero-solutions-business-verification.svg"
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
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers
      title="Scale your Business with our Comprehensive KYB Solution"
      :offers="offers"
    />
    <section
      class="py-24 px-8 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16"
    >
      <LazyImage
        class="md:w-1/3 lg:w-1/2 h-96 md:h-auto"
        src="~/assets/images/illustrations/user-research.svg"
      />
      <div>
        <h2 class="font-semibold text-5xl mb-8">
          Start Performing Seamless KYB Today
        </h2>

        <AppButton text="Book a Free Demo" href="#contact" />
      </div>
    </section>
    <section class="py-24 px-8 max-w-screen-xl mx-auto">
      <h2
        class="font-semibold text-blue-300 text-2xl md:text-5xl text-center max-w-4xl m-auto"
      >
        How the Youverify ID Document Verification Works
      </h2>

      <div
        class="flex flex-col md:flex-row justify-between items-center gap-10 mt-24"
      >
        <LazyImage
          class="md:w-1/3 lg:w-1/2 h-96 md:h-auto"
          src="~/assets/images/products/verification.png"
        />

        <div class="space-y-5 w-full">
          <div v-for="(step, index) in steps" :key="index">
            <h3 class="font-semibold text-grey text-xl">
              Step {{ index + 1 }}
            </h3>
            <p class="">{{ step }}</p>
          </div>
        </div>
      </div>
    </section>
    <ContactUs
      id="contact"
      heading="Automate Your KYB Processes Today With Youverify"
      note="Begin your journey with Youverify. Send us a message right away!"
    />
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
import Features from "~/components/common/Features.vue";
import Offers from "~/components/products/Offers.vue";
import Stats from "~/components/common/Stats.vue";
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: {
    HeroSection,
    TrustedClients,
    Features,
    Offers,
    Stats,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Business Verification",
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
          content: "End-to-End Business Verification",
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
        "You onboard our platform, set up your account and customize the user onboarding flow to suit your business needs.",
        "Share a link with your customer, who proceeds to supply the requested company and beneficiary data.",
        "Youverify performs business legal verification, document verification, ownership and control verification, ultimate beneficial ownership verification, AML screening, PEP screening and KYC verification on beneficiaries.",
        "Youverify's in-house experts review the result for quality control and assurance.",
        "You receive the result on your case management dashboard at the end of the KYB process.",
      ],
      features: [
        {
          icon: "compliant",
          title: "Satisfy Global Compliance",
          note: "Youverify compliance solution helps you satisfy global KYB regulatory requirements to avoid penalties.",
        },
        {
          icon: "onboarding",
          title: "Rapid Customer Onboarding",
          note: "Cut down on KYC and KYB client onboarding time without floundering compliance laws. Our end-to-end KYB process is completed in less than 5 hours.",
        },
        {
          icon: "onboarding",
          title: "Save Costs",
          note: "Save costs associated with performing multiple verifications with different vendors by performing them on Youverify. Our elaborate KYB solution combines automated checks from all global compliance requirements for businesses.",
        },
      ],
      offers: [
        {
          illustration: "easy-kyc",
          title: "Customisable Data Collection Workflow",
          note: "Simplify customer data collection with customisable forms where users can fill out questionnaires, upload documents and supply information on beneficiaries.",
        },
        {
          illustration: "v-forms",
          title: "Verify Ultimate Beneficial Owners (UBOs)",
          note: "Verify a company's ultimate beneficial owners through automated KYC checks to satisfy compliance requirements and prevent fraud.",
        },
        {
          illustration: "easy-kyc",
          title: "AML & PEP Screening",
          note: "Screen company board of directors, UBOs and employees for AML and PEP sanction lists. Get real-time updates from adverse media screening on the go.",
        },
        {
          illustration: "v-forms",
          title: "Verify Business Data",
          note: "Verify and monitor business data through global registries from government-backed sources.",
        },
      ],
      faqs: [
        {
          question: "What is Know Your Business (KYB)?",
          answer:
            "Know Your Business is an AML verification procedure carried out to confirm the legal status of a business and its compliance with Anti Money Laundering (AML) and other industry regulations.",
        },
        {
          question: "Why is Know Your Business (KYB) Important?",
          answer:
            "KYB is important because it helps a company verify another business's ownership and control structure including its documents, directors, address, licences and identity of relevant stakeholders.",
        },
        {
          question: "What is the Difference Between KYC and KYB?",
          answer:
            "Know Your Customer (KYC) is a verification process that confirms the authenticity of customer data. On the other hand, Know Your Business (KYB) is a verification process that focuses on verifying a business's legal compliance and the identity of its stakeholders.",
        },
        {
          question: "What Data is Required for Know Your Business (KYB)?",
          answer:
            "To perform adequate KYB, you need to collect different information about the business including its registration documents, licensing documentation, company address, and identity documents of stakeholders.",
        },
      ],
    };
  },
};
</script>
