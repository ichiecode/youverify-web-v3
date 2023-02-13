<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="News room"
      title="Explore the Youverify Newsroom"
      intro="Welcome! Find the latest press release, news features and industry media information."
      illustration="hero-press-room.svg"
      :lightBlue="true"
    >
      <div slot="buttons">
        <AppButton text="Contact team" />
      </div>
    </HeroSection>
    <section class="py-20 px-8 max-w-screen-xl mx-auto">
      <h4 class="text-2xl md:text-4xl text-center">Press Releases</h4>
    </section>
    <section class="py-20 bg-blue-100">
      <div class="px-8 max-w-screen-xl mx-auto">
        <h4 class="text-2xl md:text-4xl text-blue-300 text-center">
          Awards & Recognition
        </h4>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-16">
          <img
            class="h-32"
            v-for="(award, index) in 10"
            :key="index"
            :src="require(`~/assets/images/awards/award-${index + 1}.png`)"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="py-20 px-8 max-w-screen-xl mx-auto">
      <h4 class="text-2xl md:text-4xl text-center">Customer Success Stories</h4>
    </section>
    <section class="py-20 px-8 max-w-screen-xl mx-auto">
      <h4 class="text-2xl md:text-4xl">Featured Media</h4>
    </section>
    <section class="py-20 px-8 max-w-screen-xl mx-auto">
      <h4 class="text-2xl md:text-4xl text-center">Our Blog Posts</h4>
    </section>
    <section
      class="py-40 px-8 max-w-screen-xl mx-auto md:flex justify-between items-center gap-6"
    >
      <div>
        <h3>Stay tuned to Youverify news</h3>
        <div
          class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 mt-6 lg:mt-12"
        >
          <a
            v-for="(social, index) in socials"
            :key="index"
            :href="social.link"
            target="_blank"
            class="border-2 border-blue-300 rounded-2xl p-2 md:p-3.5 flex items-center gap-2.5"
          >
            <img
              :src="
                require(`~/assets/images/icons/social/${social.icon}-stroke.svg`)
              "
              :alt="social.name"
            />
            <span class="font-medium text-lg text-blue-200">{{
              social.name
            }}</span>
          </a>
        </div>
      </div>

      <div class="space-y-7 mt-7 md:mt-0 md:max-w-xl w-full">
        <button
          is="a"
          href="https://www.youtube.com/@youverify8216"
          class="rounded-2xl shadow-md cursor-pointer flex justify-between items-center gap-3.5 p-9"
        >
          <div class="">
            <div class="flex items-center gap-5">
              <img src="~/assets/images/icons/youtube.svg" />
              <h1 class="font-semibold text-2xl">Youtube Channel</h1>
            </div>
            <p class="font-medium text-xl mt-3.5 max-w-sm">
              KYC/AML guides, latest regulatory updates and best practices from
              the top legal and compliance speakers
            </p>
          </div>
          <svg
            width="28px"
            height="28px"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#115766"
          >
            <path
              d="M15.4 14L12.177 10.492a0.717 0.717 0 0 1 0 -1.005 0.7 0.7 0 0 1 0.994 0l3.93 4.01a0.714 0.714 0 0 1 0 1.004l-3.93 4.01a0.697 0.697 0 0 1 -0.994 0 0.714 0.714 0 0 1 0 -1.004L15.4 14zM14 0.56a13.44 13.44 0 0 1 13.44 13.44c0 7.424 -6.017 13.44 -13.44 13.44S0.56 21.424 0.56 14A13.44 13.44 0 0 1 14 0.56zm0 25.136a11.696 11.696 0 1 0 0 -23.393 11.696 11.696 0 0 0 0 23.393z"
            />
          </svg>
        </button>
      </div>
    </section>
    <section
      class="py-20 px-8 max-w-screen-xl mx-auto flex flex-col items-center"
    >
      <h3 class="text-3xl md:text-5xl font-semibold text-blue text-center">
        We Want to Be a Part of Your Story
      </h3>
      <p
        class="mt-5 mb-8 font-medium text-lg md:text-xl text-center max-w-2xl mx-auto"
      >
        Working on an exciting story and need Youverify's help? Reach out to us
        at
        <a
          class="font-semibold text-blue-300"
          href="mailto:contact@youverify.co"
        >
          contact@youverify.co</a
        >
      </p>

      <AppButton text="Contact our press team"
        ><svg slot="append" viewBox="0 0 20 20" fill="none" class="w-6 ml-1.5">
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
          ></path></svg
      ></AppButton>
    </section>
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
export default {
  components: { HeroSection },
  head() {
    return {
      title: "Press Room | Youverify Media",
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
          content: "Explore the Youverify Newsroom",
        },
      ],
    };
  },
  data() {
    return {
      socials: [
        {
          icon: "facebook",
          name: "Facebook",
          link: "https://www.facebook.com/youverifyID",
        },
        {
          icon: "linkedin",
          name: "LinkedIn",
          link: "https://www.linkedin.com/company/youcheckonline",
        },
        {
          icon: "twitter",
          name: "Twitter",
          link: "https://twitter.com/YoucheckOnline",
        },
        {
          icon: "instagram",
          name: "Instagram",
          link: "https://instagram.com/youcheckonline",
        },
      ],
    };
  },
  async asyncData({ store, params }) {
    try {
      const blogDetails = await store.dispatch(
        "blogs/getSingleBlogPost",
        params.slug
      );
      await store.dispatch(
        "blogs/getRelatedBlogs",
        blogDetails[0].blog_categories[0].slug
      );
      return {
        blogDetails,
      };
    } catch (e) {}
  },
};
</script>
