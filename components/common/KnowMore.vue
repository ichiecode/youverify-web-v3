<template>
  <section
    class="text-center py-20 relative overflow-hidden"
  >
    <section class="sm:w-auto w-full px-10 mx-auto text-center">
      <h2 class="text-blue-200 my-10">Want to know more about us?</h2>
      <span class="cursor-pointer  inline-block" role="button" tabindex="0">
        <AppButton
          buttonText="Get Started"
          buttoncolor="bigbluebutton"
          to="/contact-us"
        />
        <AppButton
          class="border-blue-300 border-2 text-blue-300"
          buttonText="Contact us"
          buttoncolor="whitebutton"
          to="/contact-us"
        />
      </span>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
