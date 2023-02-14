<template>
  <div class="pt-20">
    <section class="mt-24 hero flex flex-col justify-center items-center">
      <div class="max-w-5xl mx-auto px-8">
        <h1 class="font-bold text-2xl md:text-5xl text-white text-center">
          We Are Fighting Fraud Through Global Innovative Solutions, How Can you
          Help?
        </h1>
        <p
          class="mt-4 md:mt-8 md:text-2xl font-medium text-white text-center px-4"
        >
          Join the Humans of Youverify in a workplace that challenges your
          expertise, sparks your creativity and advances your career.
        </p>
      </div>
      <AppButton
        text="See Openings"
        theme="white"
        class="mt-4 md:mt-8"
        href="#careers"
      />
    </section>
    <section
      class="px-4 md:px-8 max-w-screen-xl mx-auto text-center py-20 md:pb-96 relative"
    >
      <h1 class="font-semibold text-4xl">Our Mission</h1>
      <p class="text-xl mt-8 max-w-3xl mx-auto">
        Youverify is building innovative global compliance products that will
        continue to push the boundaries of what is possible in RegTech
        compliance and fraud mitigation globally. Our core value drives how we
        work with partners and how we build our team.
      </p>

      <div
        style="height: 600px"
        class="absolute -bottom-1/2 inset-x-8 rounded-2xl hidden md:block overflow-hidden"
      >
        <iframe
          class="h-full w-full"
          src="https://www.youtube.com/embed/wQf60vo99Pg"
        ></iframe>
      </div>

      <div
        style="height: 320px"
        class="rounded-2xl overflow-hidden md:hidden mt-14"
      >
        <iframe
          class="h-full w-full"
          src="https://www.youtube.com/embed/wQf60vo99Pg"
        ></iframe>
      </div>
    </section>
    <section class="py-20 md:pt-96 bg-blue">
      <div class="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div
            v-for="(method, index) in methods"
            :key="index"
            class="bg-white rounded-2xl py-5 px-4 md:py-10 md:px-9"
          >
            <h1 class="text-xl md:text-2xl font-medium">{{ method.name }}</h1>
            <p class="text-lg mt-3 md:mt-4 mb-8">
              {{ method.note }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="careers" class="px-4 md:px-8 max-w-screen-xl mx-auto py-20">
      <div class="flex flex-col items-center">
        <div
          style="background-color: #c2e2e9"
          class="py-2 px-4 text-sm font-medium mb-8 text-blue rounded"
        >
          Openings
        </div>
        <h1
          class="md:text-4xl text-2xl mb-4 md:mb-6 font-semibold text-center text-blue"
        >
          Where Do You Fit in?
        </h1>
      </div>

      <div v-if="false" class="flex flex-col items-center mt-10">
        <img
          class="w-40 md:w-auto"
          src="~/assets/images/icons/big-search.svg"
          alt=""
        />
        <h1 class="text-xl font-medium mt-8">No roles available right now</h1>

        <p
          class="font-medium text-lg md:text-xl text-center mt-5 md:mt-10 max-w-2xl mx-auto"
        >
          Wanna shoot your shot? Send an unsolicited email to
          <a class="text-blue" href="mailto:careers@youverify.co"
            >careers@youverify.co
          </a>
        </p>
      </div>

      <div v-else class="space-y-10 mt-10">
        <div v-for="(role, ind) in roles" :key="ind">
          <div
            style="background-color: #c2e2e9"
            class="py-2 px-4 text-sm font-semibold mb-5 text-blue rounded inline-block"
          >
            {{ role.category }}
          </div>
          <div class="space-y-5">
            <div v-for="(role, index) in role.roles" :key="index">
              <div
                @click="toggleRoles(ind, index)"
                class="py-4 md:py-5 px-6 md:px-8 border border-grey-200 flex items-center justify-between cursor-pointer"
              >
                <h1 class="text-black text-lg md:text-xl font-medium">
                  {{ role.title }}
                </h1>
                <svg
                  :class="{
                    'transform rotate-180':
                      currentIndex === index && categoryIndex === ind,
                  }"
                  class="duration-300 ease-in-out transition-transform"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  id="magicoon-Filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <style>
                      .cls-1 {
                        fill: #41416e;
                      }
                    </style>
                  </defs>
                  <g id="arrow-down-Filled">
                    <path
                      id="arrow-down-Filled-2"
                      data-name="arrow-down-Filled"
                      class="cls-1"
                      d="M19.707,14.707l-7,7a1,1,0,0,1-1.414,0l-7-7a1,1,0,0,1,1.414-1.414L11,18.586V3a1,1,0,0,1,2,0V18.586l5.293-5.293a1,1,0,0,1,1.414,1.414Z"
                    />
                  </g>
                </svg>
              </div>

              <div
                v-if="currentIndex === index && categoryIndex === ind"
                class="mt-2 py-4 md:py-5 px-6 md:px-8 border border-grey-200"
              >
                <p class="text-black mb-6">{{ role.description }}</p>
                <a
                  class="text-blue font-medium"
                  href="mailto:careers@youverify.co"
                  >To apply send a mail to careers@youverify.co</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <MoreYouverify class="px-4 md:px-8 max-w-screen-xl mx-auto" />
  </div>
</template>

<script>
import MoreYouverify from "~/components/company/MoreYouverify.vue";
export default {
  components: { MoreYouverify },
  data() {
    return {
      methods: [
        {
          name: "Customer focus",
          note: "We are focused on building compliance solutions that deliver the best experience and specific industry use cases for our customers and partners.",
        },
        {
          name: "Clear Communication",
          note: "We simplify our work, ideas and journey to all, for the clearest understanding.",
        },
        {
          name: "Transparency",
          note: "To be always open, honest and forthcoming in detail; even when it is difficult.",
        },
        {
          name: "Integrity",
          note: "To build and grow with a sense of ownership to all our partners, at all times.",
        },
      ],
      roles: [
        {
          category: "Development",
          roles: [
            {
              title: "IOS Engineer",
              description:
                "Join Youverify's SDK team, which plays a critical part in our mission of creating a way for businesses to seamlessly and transparently implement identity verification and fraud prevention solutions. We're looking for an iOS Engineer to work closely with an amazing team of engineers to create an SDK that's easy to integrate for our business and provides a seamless experience to users.",
            },
            {
              title: "Frontend Developer",
              description:
                "Join Youverify's SDK team, which plays a critical part in our mission of creating a way for businesses to seamlessly and transparently implement identity verification and fraud prevention solutions. We're looking for an iOS Engineer to work closely with an amazing team of engineers to create an SDK that's easy to integrate for our business and provides a seamless experience to users.",
            },
          ],
        },
        {
          category: "Design",
          roles: [
            {
              title: "Motion Graphic Designer",
              description:
                "Join Youverify's SDK team, which plays a critical part in our mission of creating a way for businesses to seamlessly and transparently implement identity verification and fraud prevention solutions. We're looking for an iOS Engineer to work closely with an amazing team of engineers to create an SDK that's easy to integrate for our business and provides a seamless experience to users.",
            },
            {
              title: "Illustrator",
              description:
                "Join Youverify's SDK team, which plays a critical part in our mission of creating a way for businesses to seamlessly and transparently implement identity verification and fraud prevention solutions. We're looking for an iOS Engineer to work closely with an amazing team of engineers to create an SDK that's easy to integrate for our business and provides a seamless experience to users.",
            },
          ],
        },
      ],
      currentIndex: null,
      categoryIndex: null,
    };
  },
  methods: {
    toggleRoles(ind, index) {
      if (this.currentIndex === index && this.categoryIndex === ind) {
        this.categoryIndex = null;
        this.currentIndex = null;
      } else {
        this.currentIndex = index;
        this.categoryIndex = ind;
      }
    },
  },
};
</script>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(~/assets/images/company/careers-hero-background.png);
  min-height: calc(100vh - 165px);
  background-position: center;
  background-size: cover;
}
</style>
