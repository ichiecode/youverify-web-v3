<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYC | Real-Time ID Verification"
      title="Verify Customer Address Globally"
      intro="Manually verify customer address anywhere globally with zero error margin. Improve customer dropoff rate through KYC address verification solutions."
      illustration="hero-real-time-address-verification.svg"
      :white="false"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          text="Get started"
          theme="white"
          to="/product/kyc/pricing"
        />
        <AppButton
          theme="white"
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
    <TrustedClients class="px-4 md:px-8 max-w-screen-xl mx-auto" />
    <Offers
      title="Simplified Address Verification Solution to Suit your Needs"
      :offers="offers"
    />

    <section class="py-24 px-4 md:px-8 max-w-screen-xl mx-auto">
      <h2
        class="text-3xl md:text-5xl font-semibold text-blue-300 text-center max-w-4xl mx-auto"
      >
        Superior Technology for Quality Assurance
      </h2>
      <div
        class="flex flex-col-reverse md:flex-row justify-between items-center gap-10 mt-24"
      >
        <div class="space-y-10">
          <div>
            <h3 class="text-3xl font-semibold">
              Verify Proof of Identity via Geolocation
            </h3>
            <p class="mt-6">
              KYC-verify the Ultimate Beneficial Owners (UBOs) of a business for
              easy compliance and fraud prevention.
            </p>
          </div>
          <div>
            <h3 class="text-3xl font-semibold">
              User-Focused Case management for risk profiling
            </h3>
            <p class="mt-6">
              Manage user risk profiles after verification through our intuitive
              case management platform.
            </p>
          </div>
        </div>
        <LazyImage
          class="md:w-1/3 lg:w-1/2"
          src="~/assets/images/products/quality-assurance.png"
        />
      </div>
    </section>
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
import Offers from "~/components/products/Offers.vue";
import Integrate from "~/components/products/Integrate.vue";
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: {
    HeroSection,
    TrustedClients,
    Offers,
    Integrate,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Customer Address Verification",
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
          content: "Verify Customer Address Globally",
        },
      ],
    };
  },
  data() {
    return {
      offers: [
        {
          illustration: "multilayer-address",
          title: "Multilayered Address Verification",
          note: "Youverify physical addressing solution combines high-level technology with human verification to ensure that you get the most accurate results at all times. Youverify uses a perfect blend of Technology and a highly trained network of agents across the country to verify customer addresses.",
        },
        {
          illustration: "fast-onboarding",
          title: "Fast-track Onboarding Processes",
          note: "Improve your customer acquisition rate through seamless address verification during onboarding.",
        },
        {
          illustration: "easy-scaling",
          title: "Scale With Ease",
          note: "Satisfy KYC requirements through easy address verification as you grow your business. The Youverify address verification solution helps you verify them and stay compliant.",
        },
      ],
      faqs: [
        {
          question: "What is Address Verification Software?",
          answer:
            "An address verification software helps businesses verify the addresses and other identifying data of both individual and corporate customers. Youverify's flagship product, YV OS, is our address verification software. ",
        },
        {
          question: "How does Address Verification Work?",
          answer:
            "Address verification can be performed manually or automatically through a verification tool. In our case, we make use of both, thereby reducing the margin for errors before the results get to you. We are one of only two address verification service providers with a country-wide agent network.",
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
