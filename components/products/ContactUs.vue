<template>
  <section class="py-20 bg-blue-100">
    <div class="px-4 md:px-8 max-w-5xl mx-auto text-center">
      <h2 class="text-xl md:text-3xl font-bold">{{ heading }}</h2>
      <p class="text-xl font-semibold mt-12">
        {{ note }}
      </p>
      <form class="form-group w-full mt-7 md:mt-16 max-w-md mx-auto">
        <div class="space-y-4">
          <input
            class="py-3.5 px-6 w-full rounded"
            type="text"
            placeholder="Type your name"
          />
          <input
            class="py-3.5 px-6 w-full rounded"
            type="text"
            placeholder="Company name"
          />
          <input
            class="py-3.5 px-6 w-full rounded"
            type="email"
            placeholder="Type your corporate email address"
          />
          <input
            class="py-3.5 px-6 w-full rounded"
            type="tel"
            placeholder="+234"
          />
        </div>
        <AppButton
          text="Get a free demo"
          class="w-full mt-14"
        />
        <p class="text-xs text-left mt-3">
          By clicking the button you agree with our
          <nuxt-link
            to="/privacy-policy"
            class="text-blue cursor-pointer font-semibold underline"
          >
            Privacy Policy</nuxt-link
          >
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: String,
    note: String,
  },
};
</script>
