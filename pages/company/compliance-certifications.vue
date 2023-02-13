<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Compliance Certifications"
      title="Compliance Certifications"
      intro="Youverify is designed with advanced engineering practices and strict security measures in mind. Our certifications and recurring testing back this up."
      illustration="hero-certification.svg"
    />
    <section class="pt-28 px-4 md:px-8 max-w-screen-xl mx-auto">
      <div class="text-center max-w-2xl mx-auto">
        <h1 class="font-semibold text-xl md:text-4xl">
          Certifications and attestations
        </h1>
        <p class="font-semibold text-lg md:text-xl mt-4 md:mt-7">
          Explore the different ways you can intergate Youverify Operating
          System in your flows and apps
        </p>
      </div>
      <div class="space-y-10 mt-14 md:mt-28">
        <div
          v-for="certificate in certifications"
          :key="certificate.name"
          class="shadow-md rounded-md py-5 px-8 md:py-9 md:px-14 space-y-4 md:space-y-7"
        >
          <LazyImage
            :src="
              require(`~/assets/images/logos/certifications/${certificate.image}.png`)
            "
          />
          <h1 class="font-semibold text-xl md:text-2xl">
            {{ certificate.name }}
          </h1>
          <p class="font-semibold text-lg md:text-xl">{{ certificate.body }}</p>
        </div>
      </div>
    </section>
    <MoreYouverify />
  </div>
</template>

<script>
import MoreYouverify from "~/components/company/MoreYouverify.vue";
import HeroSection from "~/components/common/HeroSection.vue";
export default {
  components: { MoreYouverify, HeroSection },
  data() {
    return {
      certifications: [
        {
          image: "nitda",
          name: "NITDA Certificate",
          body: "This is evidence of the company's annual compliance status with the National Information Technology Development Agency of Nigeria.",
        },
        {
          image: "iso-27018",
          name: "ISO/IEC 27018:2019",
          body: "This certificate attests to Youverify's compliance with the International Organization of Standardization. It symbolizes the existence of a management system and documentation procedure that has all the requirements for standardization and quality assurance.",
        },
        {
          image: "advisera",
          name: "IT Officer",
          body: "The IT officer is certified by Advisera under the internal auditor course to ensure the sustainability of the ISO Standard.",
        },
        {
          image: "gdpr",
          name: "DPO",
          body: "The Data Protection Officer is certified by Advisera to uphold the EUGDPR standard in the company's operations.",
        },
        {
          image: "cac",
          name: "Incorporation Documents",
          body: "These show the active status of the company as a legally subsisting enterprise in each jurisdiction",
        },
      ],
    };
  },
};
</script>
