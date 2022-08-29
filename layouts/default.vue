<template>
  <div class="relative app min-h-screen flex flex-col">
    <Header />
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
export default {
  name: 'youverify',
  components: {
    Footer,
    Header,
  },
};
</script>
