<template>
  <div class="max-w-screen-2xl mx-auto sm:px-8 px-6">
    <footer-widget />

    <footer-links />

    <hr class="border-white sm:mb-0 mb-4" />

    <footer-copyright />
  </div>
</template>

<script>
import FooterCopyright from "./FooterCopyright.vue";
import FooterWidget from "./FooterWidget.vue";
import FooterLinks from "./FooterLinks.vue";

export default {
  name: "Footer",
  components: {
    FooterCopyright,
    FooterWidget,
    FooterLinks
  },
};
</script>

<style></style>
