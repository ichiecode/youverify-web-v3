<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYC | Fraud Checks"
      title="Identify Fraud Before It Slips Through the Cracks"
      intro="Global AI-powered fraud check solution for identifying suspicious customer transactions and fraudulent criminal activities. Perform automatic fraud checks on the go to reduce risks associated with identity theft, financial crimes and account fraud."
      illustration="hero-fraud-check.svg"
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
      title="Automate Fraud Checks Through Intelligent Software Solutions"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      heading="Start Fighting Fraud Today"
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
      title: "Fraud Check | Youverify Checks",
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
          content: "Identify Fraud Before It Slips Through the Cracks",
        },
      ],
    };
  },
  data() {
    return {
      features: [
        {
          title: "Fight Fraud Through Prevention",
          note: "Receive real-time insights from our advanced AI-powered fraud solution to stay one step ahead of criminals before the fraud is committed. Prevent fraud by identifying it before it happens.",
        },
        {
          title: "More Business, Less Loss",
          note: "Rapidly onboard customers online without the fear of online banking fraud through our intelligent fraud detection software. Fraud-check signatures, names, pictures and real-time transactions before a crime is committed.",
        },
        {
          title: "Global Coverage",
          note: "Globally fraud-check customers during onboarding and when executing transactions from financial institutions, regulators and third-party sources.",
        },
      ],
      offers: [
        {
          illustration: "fraud-detection",
          title: "Real-Time Deposit Fraud Detection",
          note: "Our real-time deposit fraud detection software solution monitors and identifies potential fraud transaction patterns, flagging them for actions before they occur.",
        },
        {
          illustration: "report",
          title: "Comprehensive Report",
          note: "Receive comprehensive reports on fraud checks and analysis on an elaborate case management interface for informed decision-making.",
        },
        {
          illustration: "automated-process",
          title: "Automated Process",
          note: "Customize and automate the fraud check process for secure, yet seamless customer transactions between customers.",
        },
      ],
      faqs: [
        {
          question: "What is Fraud Check?",
          answer:
            "Fraud checks are a series of activities carried out by financial institutions to ascertain the legitimacy of a transaction to ensure it is not fraudulent.",
        },
        {
          question: "What Information is Required for Fraud Check?",
          answer:
            "When carrying out fraud checks, the financial institution analyses the customer's name, address, social security or identification number, employer, financial institution account number and telephone numbers for correspondence.",
        },
      ],
    };
  },
};
</script>
