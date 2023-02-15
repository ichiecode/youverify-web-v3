<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYC | Biometrics verification"
      title="Verify Customers with Swift & Reliable Biometrics"
      intro="Verify and onboard customers through AI-powered facial recognition and liveness detection technology that seamlessly matches the customer's face and ID."
      illustration="hero-biometrics-verification.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          text="Get started"
          to="/product/kyc/pricing"
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
    <Stats :stats="stats" />
    <section class="py-16 bg-blue-300">
      <div class="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-12"
        >
          <div class="w-full">
            <h2 class="font-semibold text-3xl text-white">Facial Matching</h2>
            <p class="mt-3 md:mt-7 text-white">
              Match customers' facial features with the pictures in their
              government-backed ID in seconds through our intelligent AI. Keep
              your business compliant and fraud-proof with a user-friendly
              platform.
            </p>
          </div>
          <div class="w-full">
            <LazyImage
              class=""
              src="~/assets/images/products/facial-matching.png"
            />
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row-reverse justify-between items-center gap-12"
        >
          <div class="w-full">
            <h2 class="font-semibold text-3xl text-white">
              Liveness Detection
            </h2>
            <p class="mt-3 md:mt-7 text-white">
              Prevent identity spoofing through AI-powered liveness detention
              that ensures manufactured identities do not slip through the
              cracks during KYC.
            </p>
          </div>
          <div class="w-full">
            <LazyImage
              class=""
              src="~/assets/images/products/face-detection.png"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-4 md:px-8 max-w-screen-xl mx-auto">
      <h2
        class="font-semibold text-blue-300 text-2xl md:text-5xl text-center max-w-4xl m-auto"
      >
        All-in-One Facial Biometric Authentication Service for your Business
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mt-32">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="p-8 rounded-xl shadow-md max-w-md mx-auto"
        >
          <img
            :src="require(`~/assets/images/icons/products/${service.icon}.svg`)"
            alt=""
          />
          <h3 class="mt-8 font-semibold text-3xl">{{ service.name }}</h3>
          <p class="mt-5">{{ service.note }}</p>
        </div>
      </div>
    </section>
    <Offers
      title="Transform Your Business with AI-Powered Biometric Verification Solution"
      :offers="offers"
    />
    <Integrate />
    <section class="py-20 bg-blue-100">
      <div
        class="px-4 md:px-8 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-10"
      >
        <div
          class="md:w-3/5 lg:w-1/2 flex flex-col items-center md:items-start"
        >
          <h2
            class="font-semibold text-2xl text-center md:text-left md:text-3xl mt-4"
          >
            Get Started - Adopt Biometric Verification for Extra Layer of
            Business Security Today
          </h2>

          <p class="font-medium text-center md:text-left my-8">
            Book a demo session and we'll tell you how our Biometric
            verification AI can help to further secure your business today
          </p>

          <AppButton
            text="Book a demo"
            href="#contact"
          />
        </div>
        <div class="h-72 md:h-auto md:w-2/5 lg:w-1/2">
          <LazyImage
            class="h-full md:ml-auto"
            src="~/assets/images/illustrations/biometric-verification.svg"
          />
        </div>
      </div>
    </section>
    <ContactUs
      id="contact"
      heading="Get Started - Adopt Biometric Verification for Extra Layer of Business Security Today"
      note="Leave us a message! Our experts will reach out with the best biometric verification security layer for your specific business needs. This is how we build reliable compliance solutions. Book a demo below."
    />
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
import Stats from "~/components/common/Stats.vue";
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
    Offers,
    Integrate,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Biometrics Verification",
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
          content: "Verify Customers with Swift & Reliable Biometrics",
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
      services: [
        {
          icon: "id-verification",
          name: "ID Verification",
          note: "Verify customer identity by comparing IDs and physical facial features for a match.",
        },
        {
          icon: "finger-scan",
          name: "KYC",
          note: "Include biometric authentication in your KYC process for a more robust compliance check.",
        },
        {
          icon: "facial-recognition",
          name: "Selfie Verification",
          note: "Include biometric authentication in your KYC process for a more robust compliance check.",
        },
        {
          icon: "face-recognition",
          name: "Facial Authentication",
          note: "Seamlessly confirm customer's presence during routine authentication checks like money withdrawals, password changes and other account-sensitive activities.",
        },
      ],
      offers: [
        {
          illustration: "grow-users",
          title: "Grow Your User Base with Confidence",
          note: "Detect and intercept fraudulent attacks before they are able to harm your business. Youverify biometric verification AI easily detects masks, digital images and impersonation through.",
        },
        {
          illustration: "seamless-onboarding",
          title: "Seamlessly Onboard Customers",
          note: "Onboard customers regardless of internet speed, or location. Our AI is compatible with all kinds of video or smartphone selfie cameras.",
        },
        {
          illustration: "advanced-security",
          title: "Enjoy Advanced Security",
          note: "Detect and intercept fraudulent attacks before they are able to harm your business. Youverify biometric verification AI easily detects masks, digital images and impersonation through.",
        },
      ],
      faqs: [
        {
          question: "What is a Selfie Verification?",
          answer:
            "Selfie verification is a type of biometric verification that makes use of the individual's selfie camera or handheld device for the verification process.",
        },
        {
          question: "How does a Biometric Verification System Work?",
          answer:
            "Biometric verification system relies on biological traits to identify and verify that an individual is who they claim to be. Essentially, it compares the physical or behavioural characteristics of such individuals to data stored in an authentic database.",
        },
        {
          question: "Is Biometrics the Same as Facial Recognition?",
          answer:
            "No, it is not. Biometric verification may make use of any bodily characteristics including facial features, voice or fingerprints. Facial recognition on the other hand simply makes use of the biometric details on the face. It leverages 3D mapping to capture these characteristics and verifies them against a database. ",
        },
      ],
    };
  },
};
</script>
