<template>
  <div class="flex flex-col items-center py-20">
    <h1 class="font-semibold text-blue-300 text-xl md:text-4xl">
      Want to know more about us?
    </h1>
    <div class="flex gap-4 sm:gap-6 mt-8 md:mt-12">
      <a
        href="https://os.youverify.co/auth/create-account"
        class="bg-blue text-white rounded-xl py-3 px-8 font-semibold"
        >Get Started</a
      >
      <nuxt-link
        to="/contact-us"
        class="border-2 border-blue-300 rounded-xl  px-8 py-3 text-blue-300 font-semibold"
        >Contact Us</nuxt-link
      >
    </div>
  </div>
</template>
