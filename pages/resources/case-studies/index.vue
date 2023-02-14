<template>
  <div class="pt-20 px-8 max-w-screen-xl mx-auto">
    <ResourceHeader
      tag="Case Studies"
      title="Our Case Studies"
      description="See how we help our customers solve real-life compliance problems and simplify complex workflows."
    />
    <TrustedClients />
    <section
      class="grid gap-5 md:gap-7 my-16 md:gap-y-20"
      style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))"
    >
      <Card v-for="n in 6" :key="n" />
    </section>
    <KnowMore />
  </div>
</template>

<script>
import ResourceHeader from "@/components/resources/header.vue";
import Card from "@/components/resources/CaseStudyCard.vue";
import TrustedClients from "@/components/common/TrustedClients.vue";
import KnowMore from "@/components/common/KnowMore.vue";
export default {
  components: { ResourceHeader, Card, TrustedClients, KnowMore },
  head() {
    return {
      title: "Case Studies | Youverify Reports",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
    };
  },
};
</script>
