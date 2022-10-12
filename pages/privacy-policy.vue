<template>
  <section class="max-w-screen-xl mx-auto sm:px-8 px-6">
    <section class="policy-page mb-24">
      <header
        class="
          max-w-screen-lg
          mx-auto
          text-center
          sm:pt-56
          pt-36
          sm:mb-24
          mb-16
        "
      >
        <span
          class="
            text-blue
            tracking-widest
            px-4
            py-2
            uppercase
            sm:text-sm
            text-xs
            rounded
            mb-3
            leading-none
            inline-block
            bg-blue-100
          "
          >Updated {{
            policy ? this.$root.$options.filters.formatDate(policy.updatedAt) : ""
          }}</span
        >
		
        <h1>{{ policy ? policy.title : "" }}</h1>
      </header>
      
       <article v-html="policy ? policy.content : ''"></article>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "privacy-policy",
  methods: {
    async getPrivacyPolicy() {
      const policy = await this.$store.dispatch("documents/getPrivacyPolicy");
    },
  },
  mounted() {
    this.getPrivacyPolicy();
  },
  head() {
    return {
      title: "Privacy Policy",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      policy: (state) => state.documents.privacyPolicy,
    }),
  },
};
</script>

<style></style>
