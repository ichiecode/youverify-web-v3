<template>
  <section class="flex flex-col items-center py-20">
    <h2 class="font-semibold text-blue-300 text-xl md:text-4xl">
      Want to know more about us?
    </h2>
    <div class="flex gap-4 sm:gap-6 mt-8 md:mt-12">
      <a
        href="https://os.youverify.co/auth/create-account"
        class="bg-blue text-white rounded-xl py-3 px-8 font-medium"
        >Get Started</a
      >
      <nuxt-link
        to="/company/contact-us"
        class="border-2 border-blue-300 rounded-xl  px-8 py-3 text-blue-300 font-medium"
        >Contact Us</nuxt-link
      >
    </div>
  </section>
</template>