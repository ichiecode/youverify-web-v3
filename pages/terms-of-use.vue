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
            tou ? this.$root.$options.filters.formatDate(tou.updatedAt) : ""
          }}</span
        >
		
        <h1>{{ tou ? tou.title : "" }}</h1>
      </header>
      
      <article v-html="tou ? tou.content : ''"></article>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "term-of-use",
  methods: {
    async getTermOfUse() {
      const tou = await this.$store.dispatch("documents/getTermOfUse");
    },
  },
  mounted() {
    this.getTermOfUse();
  },
  head() {
    return {
      title: "Terms Of Use",
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
      tou: (state) => state.documents.termOfUse,
    }),
  },
};
</script>

<style></style>
