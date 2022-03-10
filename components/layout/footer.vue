<template>
  <div>
    <div class="flex pb-16 sm:flex-nowrap flex-wrap">
      <section class="sm:w-4/12 w-full sm:mb-0 mb-12">
        <div class="">
          <p class="mb-8">
            <a href="/"
              ><img
                src="~/assets/images/logos/youverify.svg"
                alt="Youverify"
                class="sm:w-32 w-24"
            /></a>
          </p>
          <p>
            Simplifying trust—of Africans by businesses, and African businesses
            by people, through seamless and secure identity data access and
            verification.
          </p>
          <div class="flex sm:text-sm text-xs mt-8 relative">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="
                flex-shrink-0 flex-grow-0
                absolute
                sm:-left-6
                -left-5
                top-2
              "
            >
              <path
                d="M5.39802 9.63933L1.85075 13.9963L5.74504 16.7724L8.82963 12.0684L11.8757 16.811L15.7699 14.0349L12.2612 9.63933L17.6978 8.21271L16.1941 3.62439L10.9503 5.62937L11.2202 0H6.43907L6.70897 5.62937L1.50374 3.58583L0 8.17415L5.39802 9.63933Z"
                fill="#46B2C8"
              ></path>
              <path
                d="M9.47646 6.76968L9.60913 2.13672H8.08862L8.22128 6.76968H9.47646ZM8.84377 9.35149C9.41524 9.35149 9.81322 8.9535 9.81322 8.39224C9.81322 7.82077 9.41524 7.41258 8.84377 7.41258C8.28251 7.41258 7.88452 7.82077 7.88452 8.39224C7.88452 8.9535 8.28251 9.35149 8.84377 9.35149Z"
                fill="#EFF8F9"
              ></path>
            </svg>
            <p class="leading-loose">
              Youverify has been certified by PECB MS to ISO 27001 and ISO 27018
              under certificate No. C948-ISMS326-09-20 and C949-ITPII8-09-20
              respectively. Youverify is NITDA NDPR of 2019 compliant.
            </p>
          </div>
        </div>
      </section>
      <section class="sm:w-1/12"></section>
      <section class="sm:w-4/12 w-6/12">
        <h4 class="py-3 mb-4">Industries</h4>
        <ul class="">
          <NuxtLink
            v-for="cases in industries"
            :key="cases.id"
            v-show="cases.visible === true"
            class="mb-2 block w-full"
            :to="`/use-case/${cases.slug}`"
          >
            <li>{{ cases.name }}</li>
          </NuxtLink>
        </ul>
      </section>
      <section class="sm:w-3/12 w-6/12">
        <h4 class="py-3 mb-4">Company</h4>
        <ul class="">
          <a aria-current="page" class="mb-2 block w-full" href="/about-us"
            ><li>About us</li>
            <a aria-current="page" class="mb-2 block w-full" href="/agent">
            <li>Become an Agent</li>
          </a></a
          ><a class="mb-2 block w-full" href="/blogs"><li>Blog</li></a
          ><a class="mb-2 block w-full" href="/about-us#career"
            ><li>Career</li></a
          ><a class="mb-2 block w-full" href="/gdpr"
            ><li>GDPR Compliance Statement</li></a
          >
          
          <a
            href="https://doc.youverify.co/"
            target="_blank"
            rel="noreferrer"
            class="mb-2 block w-full"
            ><li>API Documentation</li></a
          ><a aria-current="page" class="mb-2 block w-full" href="/about-us"
            ><li>Support</li></a
          ><a
            href="https://status.youverify.co/"
            target="_blank"
            rel="noreferrer"
            class="mb-2 block w-full"
            ><li>API Status</li></a
          >
          <a aria-current="page" class="mb-2 block w-full" href="/resources">
            <li>Resources</li>
          </a>
        </ul>
      </section>
      <section class="sm:w-0/12"></section>
      <section class="sm:w-2/12 w-8/12 sm:mt-0 mt-8">
        <h4 class="py-3 mb-4">Contact us</h4>
        <div>
          <p class="text-blue font-bold">USA</p>
          <p>201 Spear Street Suite 1100, San Francisco, CA,</p>
          <p>94105 +1 (415) 669-5559</p>
        </div>
        <div class="mt-6">
          <p class="text-blue font-bold">Nigeria</p>
          <p>1st Floor, Sum House,</p>
          <p>350 Borno Way, Yaba,</p>
          <p>101212 Lagos</p>
          <p>+234 (814) 797 3350</p>
          <p class="sm:text-sm text-xs mt-8">
            **(Trading as Youcheck Online Services Limited in Nigeria)
          </p>
        </div>
      </section>
    </div>
    <hr class="border-grey sm:mb-0 mb-8" />

    <div
      class="
        flex
        sm:flex-row
        flex-row-reverse
        sm:flex-nowrap
        flex-wrap
        justify-between
        items-center
        pt-5
        sm:text-sm
        text-xs
      "
    >
      <div class="sm:w-4/12 w-6/12 sm:text-left text-right flex">
        <a
          class="inline-block sm:w-5 w-4 sm:mr-5 sm:ml-0 ml-4"
          href="https://web.facebook.com/youverifyID"
          target="_blank"
        >
          <img src="~/assets/images/icons/social/facebook.svg" alt="" />
        </a>
        <a
          class="inline-block sm:w-5 w-4 sm:mr-5 sm:ml-0 ml-4"
          href="https://www.linkedin.com/company/youcheckonline/"
          target="_blank"
        >
          <img src="~/assets/images/icons/social/linkedin.svg" alt="" />
        </a>
        <a
          class="inline-block sm:w-5 w-4 sm:mr-5 sm:ml-0 ml-4"
          href="https://www.instagram.com/youcheckonline/"
          target="_blank"
        >
          <img src="~/assets/images/icons/social/instagram.svg" alt="" />
        </a>
        <a
          class="inline-block sm:w-5 w-4 sm:mr-5 sm:ml-0 ml-4"
          href="https://twitter.com/YoucheckOnline"
          target="_blank"
        >
          <img src="~/assets/images/icons/social/twitter.svg" alt="" />
        </a>
      </div>
      <div
        class="
          sm:text-center
          text-left
          sm:w-4/12
          w-full
          sm:mb-0
          mb-2
          sm:mt-0
          -mt-20
          flex flex-row
          justify-between
        "
      >
        <ul class="flex justify-between w-full">
          <a class="inline-block" href="/terms-of-use"><li>Terms of Use</li></a
          ><a class="inline-block" href="/privacy-policy"
            ><li>Privacy Policy</li></a
          ><a class="inline-block" href="/cookies"><li>Cookie Use</li></a>
        </ul>
      </div>
      <p class="sm:text-right text-left sm:mt-0 -mt-5 sm:w-4/12 w-full">
        Copyright &copy; {{ new Date().getFullYear() }} Youverify
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "footerComponent",
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
    }),
  },
};
</script>

<style></style>
