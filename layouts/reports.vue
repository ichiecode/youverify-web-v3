<template>
  <div class="relative app min-h-screen flex flex-col">
    <Nuxt />
    <div class="bg-blue-100 pt-12 pb-12">
      <div class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "~/components/layout/footer.vue";

export default {
  name: 'youverify',
  components: {
    Footer,
  },
};
</script>
