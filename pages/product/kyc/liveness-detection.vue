<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28 px-4 md:px-8 max-w-screen-xl mx-auto"
      tag="KYC | Real-Time ID Verification"
      title="Intelligent Liveness Detection to Spot Spoofing Attacks"
      intro="Protect your business from biometric attacks and deep fakes. Scan and validate customer faces using intelligent AI algorithms to prevent spoofing attacks."
      illustration="hero-liveness-detection.svg"
    >
      <div slot="buttons" class="flex gap-6">
        <AppButton
          buttoncolor="bluebutton"
          buttonText="Get started"
          href="https://os.youverify.co/auth/create-account"
        />
        <AppButton
          buttoncolor="textgraybutton"
          class="border-2 border-blue-300 font-semibold px-8 py-3 rounded text-blue-300"
          buttonText="Book a free Demo"
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
    <section class="pt-24 px-4 md:px-8 max-w-screen-xl mx-auto">
      <h1
        class="font-semibold text-blue-300 text-2xl md:text-5xl text-center max-w-4xl m-auto"
      >
        How the Youverify Liveness Detection Technology Works
      </h1>

      <div
        class="flex flex-col md:flex-row justify-between items-center gap-10 mt-24"
      >
        <LazyImage
          class="md:w-1/3 lg:w-1/2 h-96 md:h-auto"
          src="~/assets/images/products/liveness-detection.png"
        />

        <div class="space-y-5 w-full">
          <div v-for="(step, index) in steps" :key="index" class="text-xl">
            <span class="font-semibold">Step {{ index + 1 }}</span>
            <p class="font-medium">{{ step }}</p>
          </div>
        </div>
      </div>
    </section>
    <Offers title="Real-Time Bank Account Authentication" :offers="offers" />
    <Integrate />
    <ContactUs
      heading="Enjoy an Extra Layer of Protection For Your Business with Real-Time Liveness Detection Today"
      note="Send us a message right away and our experts will reach out to help you get started on the best solution for your business. This is how we build reliable compliance solutions. Book a demo below"
    />
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
    KnowMore,
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
        "It requests the user to open their selfie camera and make certain specific gestures.",
        "Leveraging artificial intelligence and deep convolutional neural networks (DCNNs), our system detects fake presentations like 3D masks, projections, etc.",
        "Our system scans for conditions where a recaptured version of a person is presented instead of a real person.",
      ],
      features: [
        {
          title: "Grow Your Business",
          note: "Rapidly onboard customers to your platform without the fear of spoofing or deep fake attacks. Liveness detection records a live video of the customer, where they are prompted to perform specific actions such as smiling or tilting their head which is verified for legitimacy.",
        },
        {
          title: "Spot Criminals On-The-Go",
          note: "Add an extra layer of security to your customer onboarding process and helps to prevent fraud. It is quick and easy to use and can be integrated seamlessly into your existing KYC process.",
        },
        {
          title: "2FA Extra Layer of Security",
          note: "Suspicious transaction patterns? Add liveness detection as 2-factor authentication to verify customer transactions before they go through.",
        },
      ],
      offers: [
        {
          illustration: "intelligent-ai",
          title: "Intelligent AI",
          note: "Leverage the best AI technology for liveness detection mechanism and preventing anti-spoofing. With one of the world's most complete and powerful biometric anti-spoofing algorithms, businesses can reliably identify and prevent identity theft.",
        },
        {
          illustration: "id-card",
          title: "High Accuracy",
          note: "Our AI technology prevents forgery through replay attacks like videos, recorded deep fakes or avatars. Real-time customer video feed is compared to a government-issued ID, such as a passport or driver's license, to confirm that the person in the video is the same person as the one on the ID with high accuracy.",
        },
        {
          illustration: "motion-detection",
          title: "2D/3D Motion Detection",
          note: "Seamlessly detect 2D photos and 3D facial movements through our superior liveness detection technology that leverages optical flow algorithms. This prevents criminal spoofing action of preventing two slightly different photos.",
        },
      ],
    };
  },
};
</script>
