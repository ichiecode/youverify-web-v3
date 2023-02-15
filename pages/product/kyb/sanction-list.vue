<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYB | Sanction List"
      title="Screen Business Stakeholders for Effective Risk Management and Global Compliance"
      intro="Screen relevant business stakeholders against global sanction lists for robust risk assessment before establishing a business relationship. Satisfy global Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) compliance in seconds."
      illustration="hero-sanction-list.svg"
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
    <Features :features="features" />
    <Offers
      title="Global, Reliable and Extensive Data Sources"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Sanction List Screen Business Stakeholders Using Youverify Solution Today"
      note="Leave us a message! Our team will reach out with the best KYC ID document verification solution that fits your specific needs in no time. Book a demo below."
    />
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
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
      title: "Sanction List",
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
          content: "Screen Business Stakeholders for Effective Risk Management and Global Compliance",
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
        "Run a KYB check on the legal entity that reveals the employees, directors, other important stakeholders and their respective shares.",
        "Proceed to verify the identity of each individual stakeholder for sanction lists, PEP screening and watch lists.",
        "The result comes out positive if there's a match and negative if there is none. Response time is immediate.",
      ],
      features: [
        {
          title: "Seamlessly Satisfy Compliance",
          note: "Easily and quickly screen business stakeholders against global sanctions and watch listings. This process can be automated for single and batch scans or by integrating with Youverify tech infrastructure via API.",
        },
        {
          title: "Customizable",
          note: "Customize the intelligent scan filters to target and refine your search based on your business needs for easier risk assessment and categorization.",
        },
        {
          title: "Comprehensive Case Management For Reporting",
          note: "Get real-time reports on search results and easily manage them on a case-by-case basis through our user-friendly case management interface. Create and download reports in your preferred format.",
        },
      ],
      offers: [
        {
          illustration: "intelligent-ai",
          title: "Selective Scanning",
          note: "Run a quick ad-hoc scan of specific business stakeholders, a whole company or your whole customer base.",
        },
        {
          illustration: "digital-nomad",
          title: "Ongoing Monitoring",
          note: "Receive real-time notifications and reports on changes in the status and profiles of matches and changes that may affect your business relationship. Automatically screen against global sanctions and watchlists daily.",
        },
        {
          illustration: "advanced-customisation",
          title: "Intelligent Parameters & Whitelisting",
          note: "Custom-design your specific search parameters to meet your business's regulatory requirements. Create whitelists from false match due diligence decisions and apply them to future scans to eliminate false positives.",
        },
      ],
      faqs: [
        {
          question: "What is the Purpose of Business Sanction Checks? ",
          answer:
            "Business sanction checks are an important part of AML and CFT compliance because they help organisations identify business stakeholders under regulatory sanctions. This aids in adequate risk assessment and decision-making when establishing a business relationship.",
        },
        {
          question: "Is Sanction Screening Required?",
          answer:
            "Sanctions screening is a mandatory requirement for businesses operating in regulatory industries. It is critical for KYC and penalties for non-adherence can be severe.",
        },
        {
          question: "When Should Sanctions Screening be Performed?",
          answer:
            "Sanction screening should be ideally performed before business partnerships are established. With appropriate sanction screening, organisations can detect and prevent sanction entities who they should not do business with.",
        },
      ],
    };
  },
};
</script>
