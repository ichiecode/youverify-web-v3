<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Transaction Monitoring Solution"
      title="Flag and Report Suspicious Transactions On-The-Go"
      intro="Satisfy regulatory compliance and protect your business from financial losses through our adaptive real-time transaction monitoring solution. Leverage AI-generated rules, based on global fraud patterns to identify and flag potentially fraudulent transactions"
      illustration="hero-transaction-monitoring-solution.svg"
      :white="false"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton text="Get started" theme="white" to="/product/kyc/pricing" />
      </div>
    </HeroSection>
    <TrustedClients />
    <Features :features="features" />
    <Offers
      title="Automated Reference Checks to Hire with Confidence"
      :offers="offers"
    />
    <section class="px-8 max-w-screen-xl mx-auto py-20">
      <h2 class="font-semibold text-5xl text-blue-900 text-center">
        Product Spotlight
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 mt-32">
        <div
          v-for="(product, index) in spotlight"
          :key="index"
          class="bg-white hover:bg-blue-300 duration-300 ease-in-out py-5 px-7 rounded-2xl shadow-md group"
        >
          <div
            class="w-20 h-20 rounded-full bg-blue group-hover:bg-white duration-300 ease-in-out bg-opacity-10 flex justify-center items-center"
          >
            <img
              :src="
                require(`~/assets/images/icons/products/kyt/${product.icon}.svg`)
              "
            />
          </div>

          <h3 class="group-hover:text-white duration-300 ease-in-out mt-8 md:mt-16 font-semibold text-xl">
            {{ product.heading }}
          </h3>
          <p class="mt-6 group-hover:text-white duration-300 ease-in-out">{{product.note}}</p>
        </div>
      </div>
    </section>
    <Integrate />
    <ContactUs
      id="contact"
      heading="Secure Your Business Today Through Our Real-Time Transaction Monitoring Solution"
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
      title: "Transaction Monitoring Solution",
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
          content: "Flag and Report Suspicious Transactions On-The-Go",
        },
      ],
    };
  },
  data() {
    return {
      features: [
        {
          title: "Stay Compliant",
          note: "Compliment your business KYC and AML structure with AI-powered real-time transaction monitoring for a more effective compliance system.",
        },
        {
          title: "Protect your Business",
          note: "Prevent financial losses due to money laundering and fraudulent activities by criminals. Detect suspicious transactions in real-time.",
        },
        {
          title: "Transact in Confidence",
          note: "Onboard customers without the fear of compromising compliance. Detect potential money launderers before transactions go through.-",
        },
      ],
      offers: [
        {
          illustration: "detailed-report",
          title: "Detailed Insights",
          note: "Our reference checks solution helps provide detailed insights into candidates for more informed hiring compared to manual processes that may miss out on critical information.",
        },
        {
          illustration: "fully-automated",
          title: "Fully Automated",
          note: "Completely automate your reference check process from start to finish and instantly receive high-quality insight.",
        },
        {
          illustration: "individual-case-management",
          title: "Save Time",
          note: "Save time spent on manually verifying employee references and get better results through the Youverify reference check solution.",
        },
      ],
      spotlight: [
        {
          icon: "personalization",
          heading: "Business Risk Personalization",
          note: "Create custom rules to address your business risks using our seamless interface and let our AI system do the rest.",
        },
        {
          icon: "risk-learning",
          heading: "Accurate Risk Classification",
          note: "Accurately classify customers based on risk assessment results into high, medium and low risk for equivalent monitoring for compliance.",
        },
        {
          icon: "analytics",
          heading: "Adverse Media Screening",
          note: "Verify high-risk customers for adverse media before onboarding and receive real-time subsequent insights for the latest developments.",
        },
        {
          icon: "wide-capacity",
          heading: "Consumable APIs",
          note: "Seamlessly integrate our transaction monitoring solution with your existing system and share data in your preferred format.",
        },
        {
          icon: "detection",
          heading: "Real-Time Risk Detection",
          note: "Our transaction monitoring solution detects and blocks suspicious transactions in real-time based on the red flags criteria selected per customer risk.",
        },
        {
          icon: "reporting",
          heading: "Direct Reporting",
          note: "Export data from suspicious transactions potentially indicative of money laundering, fraud, and other financial crimes and report directly to regulators.",
        },
      ],
      faqs: [
        {
          question: "What is Transaction Monitoring?",
          answer:
            "Transaction monitoring refers to the process of monitoring a customer's transaction including deposits, withdrawals and transfers. There are several ways in which a business can go about the transaction monitoring process.",
        },
        {
          question: "Why is Transaction Monitoring Important?",
          answer:
            "Transaction monitoring is very important to an institution's AML processes because of its ability to detect suspicious transactions early on and curtail fraudulent activities. An adequate AML transaction monitoring system is able to detect and monitor suspicious large cash deposits or wire transfers, allowing financial institutions to spot crimes before they occur.",
        },
        {
          question: "How Does AML Transaction Monitoring Work?",
          answer: `Transaction monitoring in anti-money laundering essentially operates largely by following the procedures below: 
            Step 1: Identify suspicious customer behaviours and possible terrorist financing and assign a respective risk level. 
            Step 2: Prioritise through automation by reducing unnecessary alerts and focusing on regulatory requirements. 
            Step 3: Increase the effectiveness of the transaction monitoring automation over time. 
            Step 4: Implement and upscale the system across relevant transactions in the financial institution.`,
        },
      ],
    };
  },
};
</script>
