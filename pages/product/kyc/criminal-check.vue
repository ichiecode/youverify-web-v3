<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYC | Criminal Check"
      title="Real-Time Verification of Customer's Criminal Records"
      intro="Perform fast, accurate and comprehensive criminal background checks on customers from 1M+ global criminal databases for effective risk assessment and business security."
      illustration="hero-criminal-check.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          text="Get started"
          to="/product/kyc/pricing"
        />
      </div>
    </HeroSection>
    <TrustedClients class="px-4 md:px-8 max-w-screen-xl mx-auto" />
    <Features :features="features" />
    <Offers
      title="Criminal-Check Customers to Improve Business Security"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      heading="Secure Your Business Today With the Customer Criminal Check Solution"
      note="Send us a message right away and our experts will reach out to help you get started on the best solution for your business. This is how we build reliable compliance solutions. Book a demo below"
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
      title: "Criminal Check | Youverify Checks",
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
          content: "Real-Time Verification of Customer's Criminal Records",
        },
      ],
    };
  },
  data() {
    return {
      features: [
        {
          title: "Secure Customer Onboarding",
          note: "Fortify your customer onboarding flow with criminal verifications to identify high-risk customers while seamlessly onboarding others.",
        },
        {
          title: "Global Criminal Verification Network",
          note: "Run customer checks from over one million criminal records globally. Our system verifies and reports all misdemeanour conviction records and felonies in accordance with the global consumer reporting regulatory standards.",
        },
        {
          title: "Quick Turnaround Time",
          note: "Get real-time results from customer criminal verification as part of your customer risk assessment flow to make informed decisions and protect your business.",
        },
      ],
      offers: [
        {
          illustration: "onboarding-2",
          title: "Onboard Clear Records Users",
          note: "Our solution helps you to onboard customers without criminal backgrounds that will pose a threat to your institution.",
        },
        {
          illustration: "case-management-2",
          title: "User-Friendly Case Management",
          note: "Manage individual customer cases depending on the results of their criminal check to make informed onboarding decisions and mitigate risks.",
        },
        {
          illustration: "records",
          title: "Access Local & International Records",
          note: "Check customers across country, Federal, State, retail and National criminal records. Access more jurisdictional records like driving records and retail theft databases.",
        },
      ],
      faqs: [
        {
          question: "What is Criminal Check Verification?",
          answer:
            "Criminal check verification is the process of verifying the criminal background and history of a customer for adequate risk assessment before onboarding. Depending on the result, businesses can make an informed decision to onboard or reject the customer.",
        },
        {
          question: "Why are Criminal Checks Important?",
          answer:
            "Criminal checks are important because they help businesses identify customers with a criminal background or history which may be an indication of their intent on onboarding the platform. With the right assessment data, businesses can make informed decisions.",
        },
      ],
    };
  },
};
</script>
