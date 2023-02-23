<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Partners"
      title="Partner With the Most Innovative Global Compliance Platform"
      intro="Let's grow together. See how our global compliance products can help your business."
      illustration="hero-partnership.svg"
    >
      <div slot="buttons">
        <AppButton text="Become a partner">
          <svg slot="append" viewBox="0 0 20 20" fill="none" class="w-5 ml-2">
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
    <TrustedClients />
    <section class="py-36">
      <h1
        class="text-2xl md:text-4xl font-semibold text-center max-w-2xl mx-auto"
      >
        Scale Your Business, Build Profitable Partnerships Tailored to Your
        Needs
      </h1>

      <div class="relative mt-12 md:mt-28">
        <div
          class="hidden md:block absolute inset-x-0 bottom-0"
          style="z-index: -1"
        >
          <img src="~/assets/images/illustrations/element.svg" alt="" />
        </div>
        <div
          class="flex flex-col md:flex-row gap-7 md:gap-4 px-8 max-w-screen-xl mx-auto"
        >
          <div
            v-for="partner in partners"
            :key="partner.type"
            class="px-5 lg:px-14 pt-14 pb-20 shadow-md flex flex-col items-center text-center rounded-xl bg-white"
          >
            <img
              class="w-20"
              :src="
                require(`~/assets/images/illustrations/${partner.illustration}.svg`)
              "
              :alt="partner.type"
            />
            <h2 class="text-2xl font-semibold mt-8">{{ partner.type }}</h2>
            <p class="mt-4 lg:max-w-xs">{{ partner.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <Testimonials />
    <section class="py-20 bg-blue-100">
      <div class="px-8 max-w-screen-xl mx-auto text-center">
        <h1 class="text-2xl md:text-5xl font-bold">
          Ready to become a partner?
        </h1>
        <p class="text-xl mt-6">Sign up to explore partnership benefits</p>
        <form
          action="https://go.pardot.com/l/1001831/2023-02-21/7wxk"
          method="post"
          class="w-full mt-7 md:mt-16 max-w-md mx-auto"
        >
          <input
            type="hidden"
            name="retURL"
            value="https://www.youverify.co/contact-us-success"
          />
          <div class="form-group space-y-4 w-full">
            <div class="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                name="First Name"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                name="Last Name"
                required
              />
            </div>
            <input type="email" placeholder="Email" name="Email" required />
            <input
              type="text"
              placeholder="Company name"
              name="Company"
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              name="Phone"
              required
            />
          </div>
          <div class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" id="check" v-model="checkbox" class="w-4" />
            <label for="check" class="text-grey" style="font-size: 10px"
              >I agree to receive emails on real-time product updates, industry
              tips, news and guides</label
            >
          </div>
          <AppButton
            buttonText="Apply Now"
            buttoncolor="bluebutton"
            class="w-full mt-14"
          />
          <p class="text-xs text-left mt-3">
            By clicking the button you agree with our
            <nuxt-link
              to="/privacy-policy"
              class="text-blue cursor-pointer font-semibold underline"
            >
              Privacy Policy</nuxt-link
            >
          </p>
        </form>
      </div>
    </section>
    <MoreYouverify />
  </div>
</template>

<script>
import MoreYouverify from "~/components/company/MoreYouverify.vue";
import HeroSection from "~/components/common/HeroSection.vue";
import Stats from "~/components/common/Stats.vue";
// import Testimonials from "~/components/common/Testimonials.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
export default {
  components: {
    MoreYouverify,
    HeroSection,
    Stats,
    // Testimonials,
    TrustedClients,
  },
  data() {
    return {
      stats: [
        {
          figure: "200+",
          name: "Global Clients",
        },
        {
          figure: "50+",
          name: "Global Partners",
        },
        {
          figure: "94%",
          name: "Average growth after partnership",
        },
      ],
      partners: [
        {
          illustration: "artificial-intelligence",
          type: "Tech Solutions Partner",
          text: "Leverage our white labelling partnership to adopt our products and sell them as yours to customers.",
        },
        {
          illustration: "partners",
          type: "SaaS & PaaS Partner",
          text: "Improve your product offering with our KYC, KYT, KYB, KYE and Compliance workflow solutions. Offer extra added value to",
        },
        {
          illustration: "speaker",
          type: "Referrals",
          text: "Refer our products and earn a commission on every successful sign-on.",
        },
      ],
    };
  },
};
</script>
