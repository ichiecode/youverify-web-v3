<template>
  <div class="max-w-screen-xl mx-auto sm:px-8 px-6">
    <section class="md:flex pb-8 md:flex-row-reverse gap-4 space-between">
      <section class="w-full md:w-1/3">
        <h3 class="mb-4">Newsletter</h3>
        <p class="leading-6">Subscribe to get information about our product and coupons</p>
        <form class="my-4 flex md:block">
          <input
            class="w-full p-2 rounded-l-lg outline-none border-t mr-0 border-b outline text-gray-800 bg-white"
            placeholder="Email address"
          />
          <button
            class="px-4 rounded-r-lg md:rounded md:py-2 md:my-4 bg-blue text-white font-bold border-t border-b border-r"
          >
            Subscribe
          </button>
        </form>
      </section>
      <div class="xl:flex md:w-2/3">
        <div class="sm:flex w-full">
          <!-- Industries -->
          <section class="w-full my-8 md:my-0 lg:pr-12">
            <h4 class="mb-4">Industries</h4>
            <footer-list-item :items="industries">
              <template v-slot:item="{ item }">
                <nuxt-link :to="item.link" class="py-2 block">
                  {{ item.name }}
                </nuxt-link>
              </template>
            </footer-list-item>
          </section>
          <!-- Company -->
          <section class="w-full my-8 md:my-0 lg:pr-12">
            <h4 class="mb-4">Company</h4>
            <footer-list-item :items="company">
              <template v-slot:item="{ item }">
                <a v-if="item.external" :href="item.link" class="py-2 block" rel="noreferrer" target="_blank">
                  {{ item.name }}
                </a>
                <nuxt-link v-else :to="item.link" class="py-2 block">
                  {{ item.name }}
                </nuxt-link>
              </template>
            </footer-list-item>
          </section>
        </div>
        <div class="sm:flex w-full md:my-8">
          <!-- Contact -->
          <section class="w-full my-8 md:my-0 lg:pr-12">
            <h4 class="mb-6">Contact</h4>
            <div class="text-sm mb-2">
              <p class="mb-2">+1 (415) 669-5559</p>
              <p>identity@youverify.co</p>
            </div>
            <footer-list-item :items="countries">
              <template v-slot:item="{ item }">
                <span class="py-2 leading-6 flex items-center gap-2">
                  <LazyImage
                    :src="require(`~/assets/images/icons/flags/${item.icon}.svg`)"
                    :alt="`${item.name} logo`"
                    width="30"
                    height="30"
                  />
                    {{ item.name }}
                </span>
              </template>
            </footer-list-item>
          </section>
          <!-- Policies -->
          <section class="w-full my-8 md:my-0 lg:pr-12">
            <h4 class="mb-4">Policies</h4>
            <footer-list-item :items="policies">
              <template v-slot:item="{ item }">
                <nuxt-link :to="item.link" class="py-2 block">
                  {{ item.name }}
                </nuxt-link>
              </template>
            </footer-list-item>
          </section>
        </div>
      </div>
    </section>

    <hr class="border-grey sm:mb-0 mb-4" />

    <div
      class="block text-center sm:flex sm:flex-row-reverse sm:justify-between items-center py-5"
    >
      <div class="my-4 sm:my-0 gap-4 flex justify-center">
        <p>Follow us on social media:</p>
        <a
          class="inline-block sm:w-5 w-4"
          href="https://web.facebook.com/youverifyID"
          target="_blank"
        >
          <LazyImage
            src="~/assets/images/icons/social/facebook.svg"
            alt="facebook-svg"
          />
        </a>
        <a
          class="inline-block sm:w-5 w-4"
          href="https://www.linkedin.com/company/youcheckonline/"
          target="_blank"
        >
          <LazyImage
            src="~/assets/images/icons/social/linkedin.svg"
            alt="linkdln-svg"
          />
        </a>
        <a
          class="inline-block sm:w-5 w-4"
          href="https://www.instagram.com/youcheckonline/"
          target="_blank"
        >
          <LazyImage
            src="~/assets/images/icons/social/instagram.svg"
            alt="instagram-svg"
          />
        </a>
        <a
          class="inline-block sm:w-5 w-4"
          href="https://twitter.com/YoucheckOnline"
          target="_blank"
        >
          <LazyImage
            src="~/assets/images/icons/social/twitter.svg"
            alt="twitter-svg"
          />
        </a>
      </div>
      <p class="sm:mt-0 mt-2">
        Copyright &copy; {{ new Date().getFullYear() }} Youverify
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "@/components/layout/footer/ListItem.vue"
export default {
  name: "footerComponent",
  components: {
    "footer-list-item": ListItem
  },
  data() {
    return {
      industries: [
        {
          name: "Business Account Opening",
          link: "/use-case/business-account-opening"
        },
        {
          name: "Credit Underwriting",
          link: "/use-case/credit-underwriting"
        },
        {
          name: "KYC for Remittance",
          link: "/use-case/kyc-for-remittance"
        },
        {
          name: "KYC for Crypto",
          link: "/use-case/kyc-for-crypto"
        },
        {
          name: "KYC for Drivers",
          link: "/use-case/kyc-for-driver"
        },
        {
          name: "KYC for 3rd Party Agent",
          link: "/use-case/kyc-for-3rd-party-agent"
        },
      ],
      company: [
        {
          name: "About Us",
          link: "/about-us"
        },
        {
          name: "Become an Agent",
          link: "/agent"
        },
        {
          name: "Blog",
          link: "/blogs"
        },
        {
          name: "Career",
          link: "/about-us#career"
        },
        {
          name: "Industry Reports",
          link: "/industry/reports"
        },
        {
          name: "GDPR Compliance Statement",
          link: "/gdpr"
        },
        {
          name: "API Documentation",
          link: "https://doc.youverify.co/",
          external: true
        },
      ],
      countries: [
        {
          name: "California, USA",
          icon: "us"
        },
        {
          name: "Lagos, Nigeria",
          icon: "nigeria"
        },
        {
          name: "Pretoria, South Africa",
          icon: "sa"
        },
        {
          name: "Nairobi, Kenya",
          icon: "kenya"
        },
      ],
      policies: [
        {
          name: "Privacy Policy",
          link: "/privacy-policy"
        },
        {
          name: "Terms of Use",
          link: "/terms-of-use"
        },
        {
          name: "Cookie Use",
          link: "/cookies"
        },
      ],
    }
  },

  methods: {
    async getAllIndustries() {
      const allIndustries = await this.$store.dispatch(
        "industries/getIndustries"
      );
    },
  },
  mounted() {
    this.getAllIndustries();
  },
  computed: {
    ...mapState({
      industries: (state) => state.industries.industries,
      loading: (state) => state.subscriber.loading,
    }),
  },
};
</script>

<style></style>
