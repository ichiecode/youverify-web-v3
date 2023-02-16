<template>
  <div class="pt-20">
    <section class="mt-24 hero flex flex-col justify-center items-center">
      <div class="max-w-5xl mx-auto px-8">
        <h1 class="font-bold text-2xl md:text-5xl text-white text-center">
          We envision a world where every business can build economic
          relationships and trust without worrying about fraud or compliance
          difficulties.
        </h1>
        <p class="mt-4 md:mt-8 md:text-2xl font-medium text-white text-center">
          We know what it looks like at the moment, and it is our mission to
          change it.
        </p>
      </div>
    </section>

    <section
      class="py-20 px-8 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8"
    >
      <div class="max-w-2xl text-center md:text-left">
        <h3 class="text-xl md:text-3xl font-semibold">What is YOUVERIFY</h3>
        <p class="text-lg md:text-xl mt-5">
          We are a B2B company that builds SaaS and PaaS compliance products to
          help businesses establish economic relationships without compliance
          worries
        </p>
      </div>
      <LazyImage class="h-96" src="~/assets/images/company/discussion.png" />
    </section>
    <Stats :stats="stats" />
    <TrustedClients />
    <Values />
    <TeamMembers />
    <section class="py-16 md:py-20 relative">
      <div class="hidden md:block absolute inset-x-0 bottom-8">
        <img src="~/assets/images/illustrations/element-2.svg" alt="" />
      </div>
      <div
        class="flex flex-col md:flex-row justify-between gap-4 px-8 relative z-10 max-w-6xl mx-auto space-y-8 md:space-y-0"
      >
        <div v-for="stat in company" :key="stat.name" class="text-center">
          <h3 class="font-bold text-4xl md:text-5xl lg:text-6xl text-blue-300">
            {{ stat.figure }}
          </h3>
          <p
            class="mt-1 md:mt-4 font-medium text-lg text-blue-300 mx-auto"
            style="max-width: 275px"
          >
            {{ stat.name }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="py-16 px-8 max-w-screen-xl mx-auto flex flex-col md:flex-row gap-5 md:gap-16"
    >
      <div class="text-blue text-2xl md:text-5xl font-bold">
        Interested in Joining Us?
      </div>
      <p class=" md:w-2/3">
        We are always looking for amazing talents that share the same passion
        and vision as ours. <br />
        Think you're up to the challenge? <br />
        Shoot us an email containing your CV and a cover letter at
        <a
          class="font-semibold text-blue-300"
          href="mailto:careers@youverify.co"
          >careers@youverify.co</a
        >
        discussing your expertise and how it will help us achieve our vision.
      </p>
    </section>
    <section class="py-20 px-8 max-w-screen-xl mx-auto">
      <h3 class="text-3xl md:text-5xl font-semibold text-blue text-center">
        What Makes us Different
      </h3>
      <p class="mt-5 font-medium text-lg md:text-xl text-center">
        Our standout qualities that sets us apart from the rest.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <LazyImage
          class="hidden md:block h-full"
          src="~/assets/images/company/brainstorming.png"
        />
        <div class="rounded-2xl px-6 py-5 shadow-md">
          <h5 class="text-2xl mt-4 font-semibold">Innovative Adaptability</h5>
          <p class="mt-4">
            We understand fraud is ever-progressive and gets more creative as
            regulations get stricter. We have built a system that stays ahead of
            the game through real-time monitoring of the latest scam techniques
            and new laws. We implement preventive measures against developing
            techniques as soon as they hit the web.
          </p>
        </div>
        <div class="rounded-2xl px-6 py-5 shadow-md">
          <h5 class="text-2xl mt-4 font-semibold">Compliance Expertise</h5>
          <p class="mt-4">
            With the most creative engineers and legal time, we pack enough
            power to remain experts in the compliance field through superior
            technology.
          </p>
        </div>
        <LazyImage
          class="hidden md:block h-full"
          src="~/assets/images/company/team.png"
        />
      </div>
    </section>
    <section class="bg-blue py-20">
      <div
        class="px-8 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row gap-16 items-center"
      >
        <div>
          <h2 class="text-white text-4xl font-bold">
            Interested in joining the Youverify Team?
          </h2>
          <p class="text-white mt-5">
            We're always looking for people that are excited about building the
            platform that helps empower people and businesses globally to make
            data-driven decisions.
          </p>
          <AppButton
            class="mt-8"
            text="Join the Team"
            theme="white"
            :outline="true"
            fontWeight="semibold"
            to="/company/careers"
          >
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
        <div>
          <LazyImage src="~/assets/images/illustrations/our-team.svg" />
        </div>
      </div>
    </section>
    <MoreYouverify />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Stats from "~/components/common/Stats.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
import Values from "~/components/company/Values.vue";
import TeamMembers from "~/components/company/TeamMembers.vue";
import MoreYouverify from "~/components/company/MoreYouverify.vue";
export default {
  components: {
    Stats,
    TrustedClients,
    Values,
    TeamMembers,
    MoreYouverify,
  },
  head() {
    return {
      title: "About Youverify | Global KYC Compliance Automation Company",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
    };
  },
  data() {
    return {
      stats: [
        {
          figure: "100+",
          name: "Platfroms and banks have patnered with Youverify",
        },
        {
          figure: "2000+",
          name: "Clients worldwide",
        },
        {
          figure: "94%",
          name: "Of customers are likely to recommend Youverify",
        },
        {
          figure: "16%",
          name: "Average upsell revenue growth",
        },
      ],
      company: [
        {
          figure: "100+",
          name: "Team Members",
        },
        {
          figure: "2017",
          name: "Founded in",
        },
        {
          figure: "2000+",
          name: "Clients",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      // teams: (state) => state.teams.teams,
      // loadingTeams: (state) => state.teams.loading,
      values: (state) => state.values.values,
      loadingValues: (state) => state.values.loading,
    }),
  },
  async asyncData({ store }) {
    await Promise.all([
      store.dispatch("teams/getTeams"),
      store.dispatch("values/getValues"),
    ]);
  },
};
</script>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(~/assets/images/company/about-hero-background.png);
  min-height: calc(100vh - 165px);
  background-position: center;
  background-size: cover;
}
</style>
