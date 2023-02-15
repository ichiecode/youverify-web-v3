<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYB |  Business Address Verification"
      title="Accurately Verify Business Address Globally"
      intro="Verify business address existence from 6000+ registries and government-backed databases to satisfy compliance and effective risk management. Identify illegal organisations before onboarding."
      illustration="hero-real-time-address-verification.svg"
      :white="false"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          text="Get started"
          theme="white"
          href="https://os.youverify.co/auth/create-account"
        />
        <AppButton
          theme="white"
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
    <TrustedClients class="px-4 md:px-8 max-w-screen-xl mx-auto" />
    <Features :features="features" />
    <Offers
      title="Superior Technology for Quality Assurance"
      :offers="offers"
    />

    <Integrate />
    <ContactUs
      id="contact"
      heading="Verify your Customer Address With Zero Error Margin & 24-hour Turn Around Time"
      note="Send us a message right away! Our experts will reach out to help you start verifying customer data faster than ever. This is how we build reliable compliance solutions. Book a demo below."
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
      title: "Business Address Verification",
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
          content: "Accurately Verify Business Address Globally",
        },
      ],
    };
  },
  data() {
    return {
      features: [
        {
          title: "Scale With Ease",
          note: "Satisfy KYB requirements through seamless business address verification as you grow. The Youverify address verification solution helps you verify businesses and stay compliant.",
        },
        {
          title: "Realtime Business Verification",
          note: "Automatically verify business addresses as part of your KYB onboarding process. Identify businesses with fake and illegal address listing for fraud prevention and effective risk management.",
        },
        {
          title: "Global Coverage",
          note: "Our business address verification solution allows you to verify the legal address of businesses anywhere in the world.",
        },
      ],
      offers: [
        {
          illustration: "multilayer-address",
          title: "Verify Business Address via Geolocation",
          note: "With millions of verified addresses in our databases and sources, we verify your business address in real-time through automated intelligent AI.",
        },
        {
          illustration: "fast-onboarding",
          title: "User-Focused Case Management for Risk Profiling",
          note: "Manage customer risk profiles after verification through our intuitive case management platform. Make informed decisions with the right information at hand.",
        },
      ],
      faqs: [
        {
          question: "What is Business Address Verification Software?",
          answer:
            "An address verification software helps businesses verify the address of corporate entities. Youverify's flagship product, YV OS, is our address verification software.",
        },
        {
          question: "How does Business Address Verification Work?",
          answer:
            "Business address verification simply validates the address provided by a business with global registries and listings for a match. The result comes out positive or negative proving the legal validity of a business.",
        },
        {
          question: "What Documents are Accepted for Proof of Address?",
          answer:
            "Government-issued documents like National Passport, Driver's license, Voter's card, etc are acceptable as proof of address. ",
        },
      ],
    };
  },
};
</script>
