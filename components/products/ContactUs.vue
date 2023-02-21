<template>
  <section class="py-20 bg-blue-100">
    <div class="px-4 md:px-8 max-w-5xl mx-auto text-center">
      <h2 class="text-xl md:text-3xl font-bold">{{ heading }}</h2>
      <p class="text-xl font-semibold mt-12">
        {{ note }}
      </p>
      <form
        action="https://go.pardot.com/l/1001831/2023-02-21/7x1n"
        method="post"
        class="w-full mt-7 md:mt-16 max-w-md mx-auto"
      >
        <input
          type="hidden"
          name="retURL"
          value="https://www.youverify.co/contact-us-success"
        />
        <div class="space-y-4 form-group w-full">
          <div class="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              name="First Name"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              name="Last Name"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Company name"
            name="Company"
            required
          />
          <input type="text" placeholder="Industry" name="Industry" required />
          <input
            type="email"
            placeholder="Type your corporate email address"
            name="Email"
            required
          />
          <input type="tel" placeholder="Phone number" name="Phone" />
        </div>
        <div class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="check" v-model="checkbox" class="w-4" />
          <label for="check" class="text-grey" style="font-size: 10px"
            >I agree to receive emails on real-time product updates, industry
            tips, news and guides</label
          >
        </div>
        <AppButton
          :disabled="!checkbox"
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
  data() {
    return {
      checkbox: null,
    };
  },
};
</script>
