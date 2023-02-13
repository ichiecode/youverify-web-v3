<template>
  <div class="pt-20">
    <section class="mt-28 pt-16 px-8 max-w-3xl mx-auto flex flex-col items-center">
      <div
        style="background-color: #c2e2e9"
        class="py-2 px-4 text-sm font-semibold mb-10 text-blue rounded"
      >
        KYC Pricing
      </div>
      <h1 class="md:text-5xl text-2xl font-semibold text-center text-blue-300">
        Our pricing plans are perfectly tailored to serve you
      </h1>
    </section>

    <PricingLists :pricings="pricings" />
    <Table />
  </div>
</template>

<script>
import PricingLists from "~/components/pricing/Lists.vue";
import Table from "~/components/pricing/KycTable.vue";
export default {
  components: { PricingLists, Table },
  data() {
    return {
      pricings: [
        {
          name: "Basic",
          amount: "$50",
          number: "0 - 199",
          members: "1 team member",
        },
        {
          name: "Standard",
          amount: "$150",
          number: "200 - 999",
          members: "3 team members",
        },
        {
          name: "Pro",
          amount: "$500",
          number: "1000 - 1999",
          members: "7 team members",
        },
        {
          name: "Enterprise",
          amount: "Custom",
          number: "> 2000",
          members: "Unlimited",
        },
      ],
    };
  },
};
</script>
