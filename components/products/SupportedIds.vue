<template>
  <section class="py-24 text-center px-4 md:px-8 max-w-screen-xl mx-auto">
    <h2 class="font-semibold text-3xl md:text-5xl text-blue-300">
      Supports All Government IDs
    </h2>
    <p class="font-medium text-xl text-blue-300 mt-7">
      Our KYC ID verification supports all government-issued IDs globally. This
      includes:
    </p>

    <div
      class="flex justify-between gap-6 flex-col md:flex-row mt-24 md:items-end"
    >
      <div
        v-for="id in ids"
        :key="id.name"
        class="flex flex-col items-center "
      >
        <LazyImage class="text-blue hover:text-blue-150 transition-colors duration-300"
          :src="require(`~/assets/images/icons/ids/${id.image}.svg`)"
        />
        <h1 class="text-blue-300 font-semibold text-xl mt-9">{{ id.name }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ids: [
        {
          image: "driver-license",
          name: "Driver's licenses",
        },
        {
          image: "passport",
          name: "Passports",
        },
        {
          image: "identity-card",
          name: "Identity cards",
        },
        {
          image: "resident-permit",
          name: "Resident permits",
        },
        {
          image: "voter-card",
          name: "Voter ID cards",
        },
      ],
    };
  },
};
</script>
