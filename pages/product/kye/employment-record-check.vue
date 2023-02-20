<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYE | Employment Record Check"
      title="Hire Right With Reliable Employee Record Check Solution"
      intro="Verify candidates' employment records and history when hiring. Get reports on candidates including work history, name of the company, duration of employment and other available information upon request."
      illustration="hero-employment-record-check.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton text="Get started" to="/product/kyc/pricing" />
        <AppButton
          theme="secondary"
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
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers
      title="Comprehensive Global Employment Background Check Services"
      :offers="offers"
    />
    <Integrate />
    <ContactUs
      id="contact"
      heading="Start Hiring the Best and Most Experienced Candidates Today"
      note="Send us a message right away! Our experts will reach out to help you start verifying customer data faster than ever. This is how we build reliable compliance solutions. Book a demo below."
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
      title: "Education Verification",
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
          content: "Fast, Global Employee Education Verification Solution",
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
          title: "Identify the Best Candidate",
          note: "Hire the most experienced candidate for the job by accurately verifying their employment records from our reliable databases.",
        },
        {
          title: "Global Coverage, Local Delivery",
          note: "Very candidates and employees' employment records from companies globally delivered to your locale based and tailored to your needs.",
        },
        {
          title: "Stay Compliant and Secure",
          note: "Our comprehensive employment record check helps you verify employee background, navigate the complexities of local compliance and secure your business by only hiring experienced candidates.",
        },
      ],
      offers: [
        {
          illustration: "hiring",
          title: "Improve Hiring Efficiency",
          note: "Manage your screening program with our unified verification platform that allows you to verify candidates' employment history and manage results on a case-by-case basis.",
        },
        {
          illustration: "fast-hiring",
          title: "Fast and Reliable",
          note: "Get quick and accurate results with 99% accuracy on employment background checks from our reliable global data sources.",
        },
        {
          illustration: "support",
          title: "Real-Time Support",
          note: "Receive comprehensive real-time support from our dedicated in-house support team for issues resolution.",
        },
      ],
      faqs: [
        {
          question: "What is Employment Record Check? ",
          answer:
            "An employment record check is a process of verifying that an individual really worked in an organisation in which they claimed to. There are several methods of performing employment record checks.",
        },
        {
          question: "How Can Businesses Perform Employment Record Check?",
          answer:
            "Businesses can either carry out the process manually by reaching out to the organisation in question or outsourcing it to employment record check companies like Youverify which will do it at a quicker and cheaper cost.",
        },
        {
          question: "What does an Employment Verification Check Show?",
          answer:
            "An employment verification check verifies an individual's employment record including their employment dates (start and end), job title, company name, and sometimes their job duties and salary.",
        },
      ],
    };
  },
};
</script>
