<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYB | Business Verification"
      title="Stay Ahead of Threats Through Our Global Business Verification Solution"
      intro="Leverage our Know Your Business solution to uncover hidden threats to your business early in the relationship. Perform registry, customers, board and ultimate beneficial owners (UBOs) screening on our robust KYB solution."
      illustration="hero-business-verification.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          text="Get started"
          href="https://os.youverify.co/auth/create-account"
        />
        <AppButton
          theme="secondary"
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
    <Stats :stats="stats" />
    <section class="pt-24 px-4 md:px-8 max-w-screen-xl mx-auto">
      <h2
        class="font-semibold text-blue-300 text-2xl md:text-5xl text-center max-w-4xl m-auto"
      >
        How Youverify Business Verification Solution Works
      </h2>

      <div
        class="flex flex-col md:flex-row justify-between items-center gap-10 mt-24"
      >
        <LazyImage
          class="md:w-1/3 lg:w-1/2 h-96 md:h-auto"
          src="~/assets/images/products/business-verification.png"
        />

        <div class="space-y-5 w-full">
          <div v-for="(step, index) in steps" :key="index">
            <h3 class="font-semibold text-grey text-xl">
              Step {{ index + 1 }}
            </h3>
            <p class="">{{ step }}</p>
          </div>
        </div>
      </div>
    </section>
    <Offers
      title="Scale Your Business in Confidence with our Business Verification Solution"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Verify your Customers with Youverify KYB Solution Today"
      note="Leave us a message! Our team will reach out with the best KYC ID document verification solution that fits your specific needs in no time. Book a demo below."
    />
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
import Stats from "~/components/common/Stats.vue";
import Offers from "~/components/products/Offers.vue";
import Integrate from "~/components/products/Integrate.vue";
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: {
    HeroSection,
    Stats,
    Offers,
    Integrate,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Business Verification",
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
          content: "Stay Ahead of Threats Through Our Global Business Verification Solution",
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
      steps: [
        "Integrate with our system and customize the business verification workflow that suits your specific business needs.",
        "The customer or potential customer supplies the requested company and beneficiary data.",
        "YV OS performs checks on the data supplied including document, employee, director, beneficiary AML and KYC verification, and the legal registration of the business",
        "You receive the data directly to your case management dashboard where you can then make informed decisions.",
      ],
      offers: [
        {
          illustration: "intelligent-ai",
          title: "Global Coverage & Easy API Integration",
          note: "Globally verify a business's legal registration status, address, employees, and directors. Our seamless KYB APIs make it easy to customise our services to suit your platform.",
        },
        {
          illustration: "digital-nomad",
          title: "Real-Time AML Screening",
          note: "Screen business entities for watchlisting, PEPs, global sanctions and adverse media in real-time.",
        },
        {
          illustration: "advanced-customisation",
          title: "KYC Verification of UBOs",
          note: "KYC-verify the Ultimate Beneficial Owners (UBOs) of a business for easy compliance and fraud prevention.",
        },
        {
          illustration: "digital-nomad",
          title: "User-Friendly Case Management Tool",
          note: "Leverage our easy-to-navigate interface and case management tool for a faster and more efficient review of business verification results.",
        },
        {
          illustration: "advanced-customisation",
          title: "Simplify Your KYB Workflow",
          note: "Prioritise efficiency in your KYB program through our customizable workflows that allow you to select verification parameters that suit your business needs. ",
        },
      ],
      faqs: [
        {
          question:
            "What is Know Your Business (KYB) or Business Verification?",
          answer:
            "KYB is a verification procedure that confirms the legal status and compliance of a company with anti-money laundering (AML) laws and other relevant regulations.",
        },
        {
          question: "Why is KYB/ Business Verification Required?",
          answer:
            "Business verification is essential because it prevents companies from establishing a partnership or business relationship with other illegal entities. It also helps the company understand its business customers, their financial dealings and how to better serve them and manage risks. With KYB, businesses can avoid a scenario of their infrastructure being used to commit criminal offences.",
        },
        {
          question: "How Does a KYB Solution Work?",
          answer:
            "KYB solution starts by verifying the legal existence of a business, then proceeds to verify the employees, directors and ultimate beneficial owner (UBO). However, KYB solutions can be customized to verify only data about the business.",
        },
      ],
    };
  },
};
</script>
