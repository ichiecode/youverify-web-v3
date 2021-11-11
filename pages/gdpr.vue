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
          >updated
          {{
            gdpr ? this.$root.$options.filters.formatDate(gdpr.updated_at) : ""
          }}</span
        >
        <h1>{{ gdpr ? gdpr.title : "" }}</h1>
      </header>
      <article v-html="gdpr ? gdpr.content : ''"></article>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "gdpr",
  methods: {
    async getGDPR() {
      const gdpr = await this.$store.dispatch("documents/getGDPR");
    },
  },
  mounted() {
    this.getGDPR();
  },
  computed: {
    ...mapState({
      gdpr: (state) => state.documents.gdpr,
    }),
  },
};
</script>

<style></style>
