<template>
  <div>
    <header
      class="
        text-center
        flex
        items-center
        justify-center
        sm:pt-24 sm:pb-0 sm:min-h-screen
        min-h-header
        bg-blue-100
        relative
      "
    >
      <img
        class="sm:min-h-screen min-h-header w-full h-full object-cover"
        src="../assets/images/team/about-image.jpeg"
        alt="about-image"
      />
      <div
        class="
          sm:min-h-screen
          min-h-header
          absolute
          h-full
          w-full
          top-0
          opaque
          flex
          justify-center
          items-center
        "
      >
        <section class="mx-auto sm:px-8 px-6">
          <h1 class="text-blue">
            <p>Close-knit.</p>
            <p>Open-minded.</p>
            <p>Mission-driven.</p>
          </h1>
          <p class="max-w-screen-sm mx-auto mt-6"></p>
          <div class="mt-6"></div>
        </section>
      </div>
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
        <h3>Meet the Youverify Team</h3>
        <div class="grid sm:grid-cols-5 grid-cols-2 sm:gap-12 gap-8 py-10">
          <content-placeholders
            v-show="loadingTeams"
            v-for="index in 5"
            :key="index"
          >
            <content-placeholders-heading :="true" />
            <content-placeholders-text :lines="3" />
          </content-placeholders>
          <section v-show="!loadingTeams" v-for="team in teams" :key="team.id">
            <div class="block">
              <
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
        <h3>Join the Youverify Team</h3>
        <p class="py-4">
          We’re always looking for people that are excited about building the
          platform that helps empower people and businesses in Africa to make
          data driven decisions.
        </p>
        <div class="py-20"><h3 class="text-grey">careers@youverify.co</h3></div>
      </section>
    </div>

    <section class="max-w-screen-xl mx-auto sm:px-8 px-6 pb-20">
      <div class="sm:py-20 py-10 bg-blue-100 sm:px-20 px-4 rounded-md relative">
        <svg
          class="absolute left-0 right-0 mx-auto -top-5"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56 28.0315L51.2072 21.7883L52.2793 14.0315L44.964 11.1306L42.0631 3.81532L34.3063 4.88739L28 0.0315323L21.7568 4.82432L14 3.75225L11.0991 11.0676L3.78378 13.9685L4.85586 21.7252L0 28.0315L4.79279 34.2748L3.72072 42.0315L11.036 44.9324L13.9369 52.2477L21.6937 51.1757L27.9369 55.9685L34.1802 51.1757L41.9369 52.2477L44.8378 44.9324L52.1532 41.9685L51.0811 34.2117L56 28.0315ZM25.7297 37.1126L16.3964 29.4189L18.4144 26.9595L25.3514 32.6351L37.2072 18.9505L39.6036 21.0315L25.7297 37.1126Z"
            fill="#46B2C8"
          />
        </svg>

        <section
          class="
            text-center
            max-w-screen-lg
            text-container
            sm:pb-20
            pb-10
            sm:pt-0
            pt-10
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

        <div
          v-show="loadingValues"
          class="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <content-placeholders v-for="index in 4" :key="index">
            <content-placeholders-heading :="true" />
            <content-placeholders-text :lines="3" />
          </content-placeholders>
        </div>
        <div
          v-show="!loadingValues"
          class="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          <article
            class="bg-white p-8 sm:p-10 lg:p-12 rounded-md"
            v-for="value in values"
            :key="value.id"
          >
            < :src="value.icon.url" class="mb-8" />
            <h4 class="mb-4 text-gray-700">{{ value.title }}</h4>
            <p class="">
              {{ value.teasers }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-blue-300">
      <section
        class="
          text-center
          bg-blue-300
          max-w-screen-lg
          text-container
          sm:py-20
          py-20
          mx-auto
          sm:px-8
          px-6
        "
      >
        <div class="flex flex-wrap justify-between">
          <section class="w-full">
            <h3 class="text-white">
              Interested in joining the Youverify Team?
            </h3>
            <p class="text-white mt-4 mb-10">
              We’re always looking for people that are excited about building
              the platform that helps empower people and businesses in Africa to
              make data driven decisions.
            </p>
			
			<AppButton buttonText="Join the Team"  buttoncolor="whitebutton" href="/contact-us" />
            <!-- <a
              class="
                items-center
                justify-center
                font-medium
                disabled:curs
                inline-flex
                bg-white
                text-black
                py-3
                sm:py-4
                px-4
                sm:px-5
                text-sm
                sm:text-1sm
                rounded-md
                my-2
                outline-none
                focus:outline-none
                hover:outline-none
                transition-all
                cursor-pointer
                box-border
                group
                flex-shrink-0
              "
              href="/contact-us"
              >Join the Team
            </a> -->
          </section>
        </div>
      </section>
    </section>
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
  name: "aboutUs",
  data() {
    return {};
  },
  methods: {
    async getAllTeam() {
      const allBlogPost = await this.$store.dispatch("teams/getTeams");
    },
    async getAllValues() {
      const allValues = await this.$store.dispatch("values/getValues");
    },
  },
  mounted() {
    this.getAllTeam();
    this.getAllValues();
  },
  computed: {
    ...mapState({
      teams: (state) => state.teams.teams,
      loadingTeams: (state) => state.teams.loading,
      values: (state) => state.values.values,
      loadingValues: (state) => state.values.loading,
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

.opaque {
  background: rgba(0, 0, 0, 0.7);
}
</style>
