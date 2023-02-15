<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Bank Account Verification"
      title="Instantly Authenticate and Verify Customer Bank Accounts"
      intro="Verify and authenticate customer bank accounts for effective risk control and secure digital banking. Our easy-to-use account verification service verifies accounts in real time securing your business without compromising on user experience."
      illustration="hero-bank-account-verification.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          text="Get started"
          to="/product/kyc/pricing"
        />
        <AppButton
          theme="secondary"
          :outline="true"
          text="Book a free Demo"
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
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers title="Real-Time Bank Account Authentication" :offers="offers" />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Enjoy an Extra Layer of Protection For Your Business with Real-Time Liveness Detection Today"
      note="Send us a message right away and our experts will reach out to help you get started on the best solution for your business. This is how we build reliable compliance solutions. Book a demo below"
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
      title: "Bank Account Verification",
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
          content: "Instantly Authenticate and Verify Customer Bank Accounts",
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
          title: "Business Security",
          note: "Protect your platform from being taken advantage of by criminals by verifying customer bank account information. Ensure funds are going and coming from legitimate bank accounts and prevent the human error of supplying wrong account details.",
        },
        {
          title: "Seamless User Experience",
          note: "Improve customer experience through our intuitive, fast and secure bank account verification service. Enjoy flexible, easy-to-implement, and scalable solution that eliminates complexity for the account holder.",
        },
        {
          title: "Global Coverage",
          note: "Our service allows you to verify bank customer bank accounts from 500+ countries globally. This ensures you can securely transact with customers all over the world.",
        },
      ],
      offers: [
        {
          illustration: "authenticate-accounts",
          title: "Instantly Authenticate Accounts",
          note: "Leverage advanced algorithms and data sources to verify bank account details, including the account holder's name, account number, and routing number",
        },
        {
          illustration: "easy-payments",
          title: "Enjoy Frictionless Payments",
          note: "Experience quick, easy, and seamless integration into your existing systems within 24 hours. With our Bank Account Verification service, you can be sure that you're conducting business with legitimate account holders and protecting yourself from potential fraud.",
        },
        {
          illustration: "case-management",
          title: "User-Friendly Case Management Platform",
          note: "Manage bank account verification cases from our user intuitive interface. Get real-time information on unique triggers that may require further investigation.",
        },
      ],
      faqs: [
        {
          question: "What is Bank Account Verification?",
          answer:
            "This is the process of authenticating and verifying the legitimacy of a customer's bank account. Bank account verification helps businesses identify potential criminals and spot customer mistakes before transfers.",
        },
        {
          question: "Why is Bank Account Verification Important?",
          answer:
            "With a Bank Account Verification service, organisations can be sure that they are conducting business with legitimate account holders and protecting themselves from potential fraud.",
        },
        {
          question: "How does Bank Account Verification Work?",
          answer:
            "Bank account verification leverages the power of advanced algorithms and data sources to verify bank account details, including the account holder's name, account number, and routing number.",
        },
      ],
    };
  },
};
</script>
