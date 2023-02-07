<template>
  <div class="pt-20 px-4 md:px-8 max-w-screen-xl mx-auto">
    <div class="mt-28 mb-16 md:my-32 max-w-4xl mx-auto">
      <h1 class="md:text-5xl text-2xl mb-4 md:mb-8 font-bold text-center">
        Youverify Wants to Hear From You
      </h1>
      <p class="md:text-xl font-medium text-center">
        We are always happy to hear from our customers, partners, users and
        readers. Shoot us a message at any time!
      </p>
    </div>
    <!-- style="grid-template-columns: 25% 50% 25%" -->
    <div class="flex flex-col md:flex-row gap-3 justify-center mb-36 md:h-80 w-full md:overflow-scroll">
      <img src="~/assets/images/company/contact-1.png" alt="" />
      <img src="~/assets/images/company/contact-2.png" alt="" />
      <img src="~/assets/images/company/contact-3.png" alt="" />
    </div>

    <ContactUs
      title="Send us a message"
      note="Leave us a message and our team will get back to you in less than 24 hours."
    />
  </div>
</template>

<script>
import ContactUs from "~/components/common/ContactUs.vue";
export default {
  components: { ContactUs },
};
</script>
