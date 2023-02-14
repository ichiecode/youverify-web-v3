<template>
  <section class="py-20 px-8 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-5 lg:gap-8">
    <div
      v-for="(pricing, index) in pricings"
      :key="index"
      class="rounded-3xl border flex flex-col items-center pt-10 md:pt-12 pb-12 md:pb-16"
      :class="index === 1 ? 'border-blue-300 shadow-md' : 'border-blue'"
    >
      <h2 class="text-xl font-semibold text-blue-300">{{ pricing.name }}</h2>
      <h3 class="font-semibold mt-12">{{ pricing.amount }}</h3>
      <span class="text-blue-300">min monthly payments</span>
      <span class="text-blue font-semibold mt-3.5"
        >{{ pricing.number }} verifications</span
      >
      <span class="text-blue font-semibold mt-2">{{ pricing.members }}</span>
      <AppButton
        href="https://os.youverify.co/auth/create-account"
        class="mt-14"
        :theme="index === 0 ? 'secondary' : 'primary'"
        :text="index === 0 ? 'Start free 7 days Trial' : 'Get started'"
        :outline="index === 0"
        size="sm"
        rounded="lg"
        fontWeight="semibold"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pricings: Array,
  },
};
</script>
