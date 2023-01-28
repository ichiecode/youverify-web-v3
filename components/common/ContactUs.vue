<template>
  <section class="flex flex-col md:flex-row gap-8">
    <div class="md:w-1/2 text-center md:text-left">
      <h1 class="text-2xl md:text-4xl">Still have questions?</h1>
      <p class="mt-3 md:mt-6 md:text-lg">
        Can't find the answer you're looking for? Please send a message to our
        friendly team
      </p>
    </div>

    <form class="form-group w-full md:w-1/2 space-y-5">
      <div class="flex gap-4">
        <input
          type="text"
          name="First Name"
          placeholder="First Name"
          required
        />
        <input type="text" name="Last Name" placeholder="Last Name" required />
      </div>
      <input type="email" name="Email" placeholder="Email" required />
      <input type="text" name="Company" placeholder="Company" required />
      <select name="Country" v-model="country" required>
        <option value="" disabled hidden>Country of operations</option>
        <option v-for="country in countries" :key="country" :value="country">
          {{ country }}
        </option>
      </select>
      <input
        type="tel"
        name="Phone Number"
        placeholder="Phone Number"
        required
      />
      <textarea
        placeholder="Message"
        name="Message"
        rows="8"
        required
      ></textarea>
      <AppButton
        buttonText="Submit"
        buttoncolor="bluebutton"
        class="w-full mt-12"
      />
      <p class="text-xs">
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
import Select from "../form/Select.vue";
export default {
  data() {
    return {
      countries: ["Kenya", "Nigeria", "South Africa", "Ghana"],
      country: "",
    };
  },
};
</script>
