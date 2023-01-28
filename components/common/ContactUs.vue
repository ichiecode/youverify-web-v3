<template>
  <section class="flex flex-col md:flex-row gap-16 lg:gap-32 py-20">
    <div class="md:w-1/2 text-center md:text-left">
      <h1 class="text-2xl md:text-4xl">{{ title }}</h1>
      <p class="mt-3 md:mt-6 md:text-lg">
        {{ note }}
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
  props: {
    title: {
      required: true,
    },
    note: {
      required: true,
    },
  },
  data() {
    return {
      countries: ["Kenya", "Nigeria", "South Africa", "Ghana"],
      country: "",
    };
  },
};
</script>
