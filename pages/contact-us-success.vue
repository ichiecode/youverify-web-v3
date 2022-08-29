<template>
  <div class="relative app min-h-screen flex flex-col">
    <Header />
    <div
      class="flex-grow max-w-screen-xl text-center mx-auto mt-40 mb-20 sm:px-8 px-6"
    >
      <h1 class="text-blue-200">Thanks for reaching out</h1>
      <p>we will get back to you shortly via email.</p>
      <br />
      <NuxtLink to="/" class="">Home page</NuxtLink>
    </div>
    <section
      class="text-center bg-blue-200 py-10 text-blue-100 relative overflow-hidden"
    >
      <section class="sm:w-auto w-full px-10 mx-auto text-center">
        <h2 class="text-blue-100 my-10">Interested but with more questions?</h2>
        <span class="cursor-pointer inline-block" role="button" tabindex="0"
          ><button class="bg-blue text-white rounded py-2 sm:mb-0 mb-4 px-8">
            <NuxtLink to="/contact-us">Request more info</NuxtLink>
          </button></span
        >
      </section>
    </section>
    <div class="bg-blue-100 pt-12 pb-12">
      <div class="max-w-screen-xl mx-auto sm:px-8 px-6">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header.vue";
export default {
  components: {
    Footer,
    Header,
  },
};
</script>
