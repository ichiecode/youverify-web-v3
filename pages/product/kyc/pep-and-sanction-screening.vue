<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="PEP & Sanction Screening"
      title="Identify High-Risk Customers With our Robust PEP and Sanction Screening Solution"
      intro="Identify high-risk customers through real-time PEP and sanction screening solutions. Match customers with constantly updated global databases to protect your business and comply with AML regulatory requirements."
      illustration="hero-pep-and-sanction.svg"
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
          buttonText="View Demo"
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
      title="Identify High-Risk Customers During Onboarding"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      heading="Realtime Identify and Classify Risky Customers To Stay Compliant and Protect Your Business"
      note="Send us a message right away and our experts will reach out to help you get started on the best solution for your business. This is how we build reliable compliance solutions. Book a demo below."
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
      title: "PEP Sanction and Screening | Youverify Screening",
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
            "Identify High-Risk Customers With our Robust PEP and Sanction Screening Solution",
        },
      ],
    };
  },
  data() {
    return {
      features: [
        {
          title: "Establish Frictionless Compliance Processes",
          note: "Manage customer risk and satisfy AML compliance requirements without forgoing seamless customer onboarding experience.",
        },
        {
          title: "Realtime Customer Due Diligence",
          note: "Conduct PEP and sanction screening for AML customer due diligence to assess customer and assign a risk level based on data. Automatically fish out criminals before they onboard your business platform.",
        },
        {
          title: "3000+ Reliable Global Data Sources",
          note: "Plugged into 3000+ data sources globally, our system run checks across all government-approved and backed PEP and sanction lists worldwide and across several jurisdictions.",
        },
      ],
      offers: [
        {
          illustration: "database-update",
          title: "Constant Database Updates",
          note: "Our PEP and sanction list databases are updated daily to stay abreast of recent development and ensure you only receive accurate and relevant information.",
        },
        {
          illustration: "database-update",
          title: "Customizable Batch Screening",
          note: "Divide customers into groups and run batch screening for PEP and sanction lists in seconds by uploading their names.",
        },
        {
          illustration: "database-update",
          title: "Minimize False Positives",
          note: "Minimize false positives by adding extra customer information such as country, gender and date of birth. Also, filter results by jurisdiction, risk rating, and other custom fields to reduce false positives.",
        },
      ],
      faqs: [
        {
          question: "What are PEPs and Sanctions?",
          answer:
            "A politically exposed person (PEP) is an individual that occupies a prominent political, high profile or public office. Occupying such a position puts them at higher risk of fraud, bribery or corruption. Sanctions, on the other hand, refer to people who have been fined or “punished” due to breaking certain laws. Businesses operating in a regulated industry must identify both classes of individuals when onboarding to comply with KYC and AML requirements.",
        },
        {
          question: "What is a PEP Screening?",
          answer:
            "PEP screening is a key part of AML regulation which ensures that a financial institution is not doing business with high-risk customers who are involved in illegal activities.",
        },
        {
          question: "What is Sanction Screening?",
          answer:
            "Sanction screening is a combination of a series of processes, policies and technologies that helps financial institutions identify and as a result, abstain from providing any form of direct or indirect services to sanctioned customers and business entities.",
        },
        {
          question: "Is PEP and Sanction Screening Mandatory?",
          answer:
            "PEP and sanction screening are currently mandatory in most countries globally. However, specific regulatory requirements differ from one country to another. Some countries require only the identification of foreign PEPs while others demand domestic, foreign and international PEPs and sanctions. ",
        },
      ],
    };
  },
};
</script>
