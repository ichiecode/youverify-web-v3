<template>
  <div>
    <header
      class="
        text-center
        flex
        items-center
        justify-center
        sm:pt-24
        pt-36
        sm:pb-0
        pb-24
        sm:min-h-screen
        min-h-header
        bg-blue-100
      "
    >
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <h1 class="max-w-screen-lg">
          <p>Close-knit.</p>
          <p>Open-minded.</p>
          <p>Mission-driven.</p>
        </h1>
        <p class="max-w-screen-sm mx-auto mt-6"></p>
        <div class="mt-6"></div>
      </section>
    </header>

    <section class="max-w-screen-md mx-auto sm:pt-40 pt-20 text-center px-10">
      <h3>Why We Built Youverify</h3>
      <p class="py-4">
        We envision an Africa where every African, and African business can
        build economic relationships and trust without worrying about fraud or
        compliance difficulties. We know what it looks like at the moment, and
        it is our mission to change it.
      </p>
    </section>

    <section class="">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <svg
          width="2"
          height="148"
          viewBox="0 0 2 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="block mx-auto mb-8 sm:h-auto h-24"
        >
          <line
            x1="0.917969"
            y1="0.917969"
            x2="0.917962"
            y2="147.972"
            stroke="#115766"
            stroke-dasharray="5 5 5 5 5 5"
          ></line>
        </svg>
        <div class="sm:mb-40 mb-20 max-w-screen-sm text-center mx-auto">
          <svg
            width="118"
            height="79"
            viewBox="0 0 118 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="block mx-auto"
          >
            <path
              opacity="0.15"
              d="M42.28 78.68L56.56 0H20.72L0 78.68H42.28ZM103.32 78.68L117.88 0H81.76L61.32 78.68H103.32Z"
              fill="#46B2C8"
            ></path>
          </svg>
          <h3 class="text-blue-200 px-10 -mt-10">
            We envision an Africa where every Africans, and African businesses
            can build economic relationships
          </h3>
        </div>
      </section>
    </section>

    <section class="py-10">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <h2>Meet the Youverify Team</h2>
        <div class="grid sm:grid-cols-5 grid-cols-2 sm:gap-12 gap-8 py-10">
          <section v-for="team in teams" :key="team.id">
            <div class="block">
              <img
                width="203"
                height="331.99999999999994"
                :src="team.images.url"
                :alt="team.name"
                style="object-fit: cover; opacity: 1"
              />
            </div>
            <div class="pt-6">
              <h4 class="text-blue text-base">{{ team.name }}</h4>
              <p class="text-xs mt-2">{{ team.role }}</p>
            </div>
          </section>
        </div>
      </section>
    </section>

    <div id="career">
      <section
        class="
          text-center
          max-w-screen-lg
          text-container
          sm:py-20
          py-10
          mx-auto
          sm:px-8
          px-6
        "
      >
        <h2>Join the Youverify Team</h2>
        <p class="py-4">
          We’re always looking for people that are excited about building the
          platform that helps empower people and businesses in Africa to make
          data driven decisions.
        </p>
        <div class="py-20"><h2 class="text-grey">careers@youverify.co</h2></div>
      </section>
    </div>

    <section class="max-w-screen-xl mx-auto sm:px-8 px-6 pb-20">
      <div class="mb-15 sm:mb-10 lg:mb-12">
        <section
          class="
            text-center
            max-w-screen-lg
            text-container
            sm:py-20
            py-10
            mx-auto
            sm:px-8
            px-6
          "
        >
          <div class="text-center">
            <h3>Our Values<br class="sm:block hidden" /></h3>
            <p class="pt-4">
              Youverify is building innovative products that will continue to
              push the bounds of what is possible KYC and Fraud Mitigation
              across Africa. Our core values drive how we work with our partners
              and how we build our team.
            </p>
          </div>
        </section>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <article class="bg-gray-100 p-8 sm:p-10 lg:p-12 rounded-md">
            <h4 class="mb-4">Customer-focus</h4>
            <p class="">
              We are focused on building products that deliver the best
              experience and function to our partners.
            </p>
          </article>
          <article class="bg-gray-100 p-8 sm:p-10 lg:p-12 rounded-md">
            <h4 class="mb-4">Clear communication</h4>
            <p class="">
              To simplify our work, ideas, and journey to all, for the clearest
              understanding.
            </p>
          </article>
          <article class="bg-gray-100 p-8 sm:p-10 lg:p-12 rounded-md">
            <h4 class="mb-4">Transparency</h4>
            <p class="">
              To always be open, honest, and forthcoming in detail, even when it
              is difficult.
            </p>
          </article>
          <article class="bg-gray-100 p-8 sm:p-10 lg:p-12 rounded-md">
            <h4 class="mb-4">Integrity</h4>
            <p class="">
              To build and grow with a sense of ownership and responsibility to
              our partners, at all times.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
      <div class="flex sm:flex-row flex-col sm:my-10 py-20">
        <div class="sm:w-3/12">
          <h3 class="sm:mb-8 mb-0">Trusted by  <br />the trustworthy</h3>
          
        </div>
        <div class="sm:w-1/12 xl:block hidden"></div>
        <div
          class="md:w-7/12 sm:-mt-14 mt-0 grid place-items-center grid-cols-5"
        >
          <div v-for="client in clients" :key="client.id" class="partner w-full sm:px-8 px-2 relative pt-10 pb-7">
            <p class="partner-name react-reveal absolute leading-none left-0  text-center w-full top-0">{{client.name}}</p>
            <button class="h-full w-full">
              <div
                class="
                  bg-white
                  w-full
                  flex
                  items-center
                  justify-center
                  h-full
                  rounded-lg
                  sm:py-4
                  py-2
                  sm:px-4
                  px-2
                "
              >
                <div class="relative">
                  <img
                    :src="require(`~/assets/images/${client.url}`)"
                    width="58"
                    height="58"
                    decoding="async"
                    alt="First Central"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
      <div class="flex sm:flex-row flex-col sm:my-10 py-20">
        <div class="sm:w-3/12">
          <h3 class="sm:mb-8 mb-0">Reliable partners <br />and sources</h3>
          <div class="sm:block hidden">
            <span class="cursor-pointer inline-block" role="button" tabindex="0"
              ><a href="/contact-us"
                ><button
                  class="
                    bg-transparent
                    text-blue
                    rounded
                    py-2
                    sm:mb-0
                    mb-4
                    px-0
                  "
                >
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transform inline-block mr-4 false"
                  >
                    <path
                      d="M1 0.999999L7 7L1 13"
                      stroke="#46B2C8"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path></svg
                  >Become a Partner
                </button></a
              ></span
            >
          </div>
        </div>
        <div class="sm:w-1/12 xl:block hidden"></div>
        <div
          class="md:w-7/12 sm:-mt-14 mt-0 grid place-items-center grid-cols-5"
        >
          <div v-for="partner in partners" :key="partner.id" class="partner w-full sm:px-8 px-2 relative pt-10 pb-7">
            <p class="partner-name react-reveal absolute leading-none left-0  text-center w-full top-0">{{partner.name}}</p>
            <button class="h-full w-full">
              <div
                class="
                  bg-white
                  w-full
                  flex
                  items-center
                  justify-center
                  h-full
                  rounded-lg
                  sm:py-4
                  py-2
                  sm:px-4
                  px-2
                "
              >
                <div class="relative">
                  <img
                    :src="require(`~/assets/images/${partner.url}`)"
                    width="58"
                    height="58"
                    decoding="async"
                    alt="First Central"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section> -->

    <section class="bg-blue-100 sm:py-20 py-10">
      <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <div class="flex flex-wrap justify-between">
          <section class="sm:w-5/12 w-full">
            <h3>Come say hello <br class="sm:block hidden" />to us!</h3>
          </section>
          <section class="sm:w-3/12 w-full sm:mt-0 mt-8">
            <h4>USA</h4>
            <p>
              201 Spear Street Suite 1100,<br />San Francisco, CA, <br />94105
              +1 (415) 669-5559
            </p>
          </section>
          <section class="sm:w-3/12 w-full sm:mt-0 mt-8">
            <h4>Nigeria</h4>
            <p>
              1st Floor, Sum House,<br />350 Borno Way, Yaba, Lagos<br />101212
              +234 (814) 797 3350
            </p>
            <p class="text-xs mt-4">
              **(Trading as Youcheck Online Services Limited in Nigeria)
            </p>
          </section>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Teams",
  data() {
    return {
      partners: [
        {
          id: 1,
          url: "logos/partners/First Central.png",
          name: "First Central",
        },
        {
          id: 2,
          url: "logos/partners/CAC.png",
          name: "CAC",
        },
        {
          id: 3,
          url: "logos/partners/FRSC.png",
          name: "FRSC",
        },
        {
          id: 4,
          url: "logos/partners/INEC.png",
          name: "INEC",
        },
        {
          id: 5,
          url: "logos/partners/NABTEB.png",
          name: "NABTEB",
        },
        {
          id: 6,
          url: "logos/partners/NECO.png",
          name: "NECO",
        },
        {
          id: 7,
          url: "logos/partners/Nimc.png",
          name: "NIMC",
        },
        {
          id: 8,
          url: "logos/partners/NIRSAL.png",
          name: "NIRSAL",
        },
        {
          id: 9,
          url: "logos/partners/NYSC.png",
          name: "NYSC",
        },
        {
          id: 10,
          url: "logos/partners/waec.png",
          name: "WAEC",
        },
      ],
      clients: [
        {
          id: 1,
          url: "logos/companies/bolt.png",
          name: "BOLT",
        },
        {
          id: 2,
          url: "logos/companies/civil-defence.png",
          name: "CIVIL DEFENCE",
        },
        {
          id: 3,
          url: "logos/companies/fidelity.png",
          name: "Fidelity",
        },
        {
          id: 4,
          url: "logos/companies/standard-chartered.png",
          name: "Standard",
        },
      ],
    };
  },
  methods: {
    async getAllTeam() {
      const allBlogPost = await this.$store.dispatch("teams/getTeams");
    },
  },
  mounted() {
    this.getAllTeam();
  },
  computed: {
    ...mapState({
      teams: (state) => state.teams.teams,
    }),
  },
};
</script>

<style scoped>
.partner-name {
  opacity: 0;
}

.partner:hover .partner-name {
  opacity: 1;
}
</style>
