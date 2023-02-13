<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYC | Customer Credit Check"
      title="Automate Customer Credit Checks for Informed Decision Making"
      intro="Our credit check solution helps businesses run credit reports on customers through their name and address only. Receive detailed reports including customer credit history and loans."
      illustration="hero-customer-credit-check.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          text="Get started"
          href="https://os.youverify.co/auth/create-account"
        />
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
    <TrustedClients class="px-4 md:px-8 max-w-screen-xl mx-auto" />
    <Features :features="features" />
    <Offers
      title="Perform Real-Time Customer Credit Checks for Risk Assessment"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      id=""
      heading="Start Automating Customer Application Decisions Today"
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
      title: "Customer Credit Check | Youverify Check",
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
            "Automate Customer Credit Checks for Informed Decision Making",
        },
      ],
    };
  },
  data() {
    return {
      features: [
        {
          title: "Instant & Accurate Credit Report & Score",
          note: "Receive real-time customer credit scores and elaborate reports from verified credit bureau databases to make informed decisions.",
        },
        {
          title: "Customer Risk Assessment",
          note: "Accurately predict customer behaviours through elaborate credit reports and data. Instantly identify and separate high-risk from low-risk customers in your onboarding flow.",
        },
        {
          title: "Global Coverage",
          note: "Access credit data from databases across the 7 continents in the world. Perform credit checks for informed decision-making without any concerns for customer location and jurisdiction.",
        },
      ],
      offers: [
        {
          illustration: "fully-automated",
          title: "Fully Automatable",
          note: "Automate your end-to-end customer application process. Establish preset actions that will be executed based on the customer credit check report.",
        },
        {
          illustration: "detailed-report",
          title: "Elaborate & Detailed Report",
          note: "Receive detailed reports from customer credit checks including credit history, credit rating/ score, outstanding debts and more.",
        },
        {
          illustration: "individual-case-management",
          title: "Individual Case Management System",
          note: "Manage individual customer decisions through our user-friendly case management system. Set criteria for automatic case management transfer from which a decision can be made manually after review.",
        },
      ],
      faqs: [
        {
          question: "What is a Customer Credit Check?",
          answer:
            "A customer credit check refers to an action that a lender - usually a financial institution - performs to assess the credit risk of a customer applying for a loan or to transact with the business platform.",
        },
        {
          question: "How Do You Check a Customer's Credit Rating?",
          answer:
            "To check a customer's credit rating, you need to apply for a credit report from a credit company or bureau. This provides detailed information on the customer's payment history and financial status. However, companies like Youverify have simplified this process, allowing you to check credit ratings without the tedious and lengthy process of requesting one from a credit company or bureau",
        },
        {
          question: "What Affects a Customer's Credit Score?",
          answer:
            "The primary data that affects a customer's credit score is the amount of debt owed, payment history, types of credit, and credit duration. Etc. ",
        },
      ],
    };
  },
};
</script>
