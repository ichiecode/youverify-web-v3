<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYE | Address Verification"
      title="Globally Verify Employee Address Before Onboarding"
      intro="Automatically verify the address of employees anywhere in the world with a low error margin. Effectively manage internal risks by only onboarding employees with verifiable address information."
      illustration="hero-address-verification-kye.svg"
      :white="false"
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
    <Features :features="features" />
    <Offers
      title="Superior Technology for Quality Assurance"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Start Verifying your Employee Address for Effective Internal Risk Management Today"
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
      title: "Employee Address Verification",
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
          content: "Globally Verify Employee Address Before Onboarding",
        },
      ],
    };
  },
  data() {
    return {
      features: [
        {
          title: "Scale With Ease",
          note: "Manage internal risks while you scale your business by employing only employees with verifiable address information.",
        },
        {
          title: "Automatic Address Verification",
          note: "Automatically verify the address of physical and remote employees through our 6000+ global data sources as part of your employee onboarding process.",
        },
        {
          title: "Fast-track Onboarding Processes",
          note: "Improve your overall employee onboarding experience through seamless address verification. New employees can get verified on the go and absorbed into company operations.",
        },
      ],
      offers: [
        {
          illustration: "geo-location",
          title: "Verify Business Address via Geolocation",
          note: "With millions of verified addresses in our databases, we can verify your employee address in real-time without the need for manual address verification.",
        },
        {
          illustration: "fast-onboarding",
          title: "User-Focused Case Management for Risk Profiling",
          note: "Manage customer risk profiles after verification through our intuitive case management platform. Make informed decisions with the right information at hand.",
        },
      ],
      faqs: [
        {
          question: "What is KYE Address Verification Software?",
          answer:
            "An address verification software helps businesses verify the addresses and other identifying data of both individual and corporate employees. Youverify's flagship product, YV OS, is our address verification software.",
        },
        {
          question: "How does KYE Address Verification Work?",
          answer:
            "Know Your Employee (KYE) address verification automatically verifies employee's address data by matching it with government-backed global registries",
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
