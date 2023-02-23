<template>
  <section class="flex flex-col md:flex-row gap-16 lg:gap-32 py-20">
    <div class="md:w-1/2 text-center md:text-left">
      <h1 class="text-2xl md:text-4xl">{{ title }}</h1>
      <p class="mt-3 md:mt-6 md:text-lg">
        {{ note }}
      </p>
    </div>

    <form
      :action="
        faq
          ? 'https://go.pardot.com/l/1001831/2023-02-21/7x1c'
          : 'https://go.pardot.com/l/1001831/2023-02-21/7wx2'
      "
      method="post"
      class="w-full md:w-1/2"
    >
      <input
        type="hidden"
        name="retURL"
        value="https://www.youverify.co/contact-us-success"
      />
      <div class="form-group space-y-5 w-full">
        <div class="flex gap-4">
          <input
            type="text"
            name="First Name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="Last Name"
            placeholder="Last Name"
            required
          />
        </div>
        <input type="email" name="Email" placeholder="Email" required />
        <input type="text" name="Company" placeholder="Company" required />
        <input
          type="text"
          placeholder="Country of operations"
          name="Country"
          required
        />
        <input type="tel" name="Phone Number" placeholder="Phone Number" />
        <textarea
          placeholder="Message"
          name="Message"
          rows="8"
          :required="faq"
        ></textarea>
      </div>

      <div class="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" id="check" v-model="checkbox" class="w-4" />
        <label for="check" class="text-grey" style="font-size: 10px"
          >I want to sign up for blog updates another communications</label
        >
      </div>
      <AppButton :disabled="!checkbox" text="Submit" class="w-full mt-12" />
      <p class="text-xs mt-3">
        By clicking the button you agree with our
        <nuxt-link
          to="/privacy-policy"
          class="text-blue cursor-pointer font-semibold"
        >
          Privacy Policy</nuxt-link
        >
      </p>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
    },
    note: {
      required: true,
    },
    faq: {
      default: true,
    },
  },
  data() {
    return {
      checkbox: null,
    };
  },
};
</script>
