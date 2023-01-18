<template>
  <div class="relative app min-h-screen flex flex-col">
    <div class="fixed z-40 w-full">
      <RegTechHeader />
      <!-- <Header /> -->
      <AppHeader />
    </div>
    <div class="flex-grow">
      <Nuxt />
    </div>
    <footer class="bg-blue-100 pt-20">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header.vue";
import AppHeader from "~/components/layout/AppHeader.vue";
import RegTechHeader from "~/components/layout/RegTechHeader.vue";
export default {
  name: "youverify",
  components: {
    Footer,
    Header,
    AppHeader,
    RegTechHeader,
  },
};
</script>
