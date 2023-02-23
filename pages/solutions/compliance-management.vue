<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Compliance Management"
      title="All Your Compliance Needs in One Place"
      intro="Simplify compliance processes for your business and its customers by building easy-to-use workflows."
      illustration="hero-solutions-compliance-management.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton text="Get started" to="/product/kyc/pricing" />
      </div>
    </HeroSection>
    <TrustedClients />
    <Features :features="features" />
    <section class="py-24 px-8 max-w-screen-xl mx-auto">
      <h2
        class="text-3xl md:text-5xl font-semibold text-blue-300 text-center max-w-4xl mx-auto capitalize"
      >
        Verify Your Customer at Every Step of the Way
      </h2>

      <div
        class="py-20 flex flex-col md:flex-row gap-10 md:gap-5 justify-between"
      >
        <div>
          <h3
            class="font-semibold text-2xl bg-blue-900 rounded-lg text-white py-4 px-5 text-center"
          >
            Customer Verification
          </h3>
          <div
            class="border-dashed border border-blue-900 bg-blue-900 bg-opacity-20 pl-12 pr-9 py-11 rounded-lg mt-6 md:mt-12 md:max-w-xs"
          >
            <ul class="text-blue-900 text-lg font-medium list-disc">
              <li>AML screening</li>
              <li>Biometric Authentication</li>
              <li>Reusable KYC</li>
              <li>Identity Verification</li>
              <li>Address Verification</li>
            </ul>
          </div>
        </div>

        <div>
          <h3
            class="font-semibold text-2xl bg-blue-300 rounded-lg text-white py-4 px-5 text-center"
          >
            Business Verification
          </h3>
          <div
            class="border-dashed border border-blue-300 bg-blue-300 bg-opacity-20 pl-12 pr-9 py-11 rounded-lg mt-6 md:mt-12 md:max-w-xs"
          >
            <ul class="text-blue-300 text-lg font-medium list-disc">
              <li>Registry Verification</li>
              <li>Address Verification</li>
              <li>Beneficial Ownership Verification</li>
            </ul>
          </div>
        </div>

        <div>
          <h3
            class="font-semibold text-2xl bg-blue rounded-lg text-white py-4 px-5 text-center"
          >
            Monitoring
          </h3>
          <div
            class="border-dashed border border-blue bg-blue bg-opacity-20 pl-12 pr-9 py-11 rounded-lg mt-6 md:mt-12 md:max-w-xs"
          >
            <ul class="text-blue text-lg font-medium list-disc">
              <li>Transaction Monitoring</li>
              <li>Transaction Screening</li>
              <li>Crypto Monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Offers
      title="Scale your Business with our Comprehensive KYB Solution"
      :offers="offers"
    />
    <section class="py-24 bg-blue-100 my-24">
      <div
        class="px-8 max-w-screen-xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12"
      >
        <LazyImage
          class="mx-auto md:mx-0 h-24 md:h-auto"
          src="~/assets/images/icons/solutions/compliance-and-security.svg"
        />

        <div class="md:w-2/3">
          <h2 class="font-semibold text-xl md:text-3xl">
            Compliance and Security? We Lead by Example
          </h2>
          <p class="mt-9">
            Trusting us with your data means we need to take extra precautions
            and pay attention to security. All data is encrypted and protected
            in adherence to global standards.
          </p>

          <div class="flex gap-3.5 mt-20">
            <LazyImage
              class="h-12 sm:h-auto"
              src="~/assets/images/icons/solutions/iso-27001.svg"
            />
            <LazyImage
              class="h-12 sm:h-auto"
              src="~/assets/images/icons/solutions/iso-27018.svg"
            />
            <LazyImage
              class="h-12 sm:h-auto"
              src="~/assets/images/icons/solutions/nitda.svg"
            />
          </div>
        </div>
      </div>
    </section>

    <ContactUs
      id="contact"
      heading="Custom Design Your Business Compliance Needs Today With Youverify"
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
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: {
    HeroSection,
    TrustedClients,
    Features,
    Offers,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Compliance Management",
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
          content: "All Your Compliance Needs in One Place",
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
          icon: "compliant",
          title: "Satisfy Regulatory Requirements & Avoid Fines",
          note: "Verify customer data according to laid down global and jurisdictional compliance guidelines.",
        },
        {
          icon: "onboarding",
          title: "Real-Time Customer Monitoring",
          note: "With Youverify compliance solution, you have everything you need to verify customers and detect fraud on the go.",
        },
        {
          icon: "onboarding",
          title: "Speed Up Onboarding With Minimal Compliance Risk",
          note: "Satisfy global AML and CFT compliance laws without clogging your user onboarding process.",
        },
      ],
      offers: [
        {
          illustration: "easy-kyc",
          title: "Design Your Compliance Process",
          note: "No-Code Compliance Builder Leverage our drag-and-drop no-code tool (vForms) to build your custom compliance process. Set up flexible workflows that adapt to the customer choices and regulatory needs of your business.",
        },
        {
          illustration: "v-forms",
          title: "Interactive Management Dashboard",
          note: "Set up and control the customer verification flow and ongoing monitoring in our interactive management dashboard. Analyse every detail and set conditions for cases to be reviewed manually to make informed decisions.",
        },
      ],
      faqs: [
        {
          question: "Why is Compliance Important?",
          answer:
            "Compliance is important because it helps businesses identify and report potential threats before any damage is done. Adhering to compliance also ensures that the business is not at risk of being fined for regulatory violations.",
        },
        {
          question: "What is an AML Compliance Software?",
          answer:
            "An AML compliance software is a program designed to manage customer verification processes and other compliance needs of a business. With AML compliance software, businesses can easily satisfy compliance requirements while combating terrorist financing, money laundering and other financial crimes.",
        },
        {
          question: "How do I Select an AML Compliance Software?",
          answer:
            "The most important criterion to consider when choosing AML compliance software is that it should contain the necessary tools to meet your specific industry compliance requirements. However, it should generally possess the following - customer verification, AML monitoring, transaction screening and address verification. The price is also another worthy note.",
        },
      ],
    };
  },
};
</script>
