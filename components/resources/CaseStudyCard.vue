<template>
  <div
    @click="router.push(`/case-studies/${customer.slug}`)"
    class="group hover:shadow-md transition-shadow duration-300 rounded-t-2xl overflow-hidden cursor-pointer"
  >
    <LazyImage src="" alt="" class="object-cover align-middle h-52 w-full" />
    <div class="flex flex-col items-start px-4 py-6">
      <div
        class="py-2 px-4 bg-blue bg-opacity-30 text-sm font-semibold text-blue rounded uppercase"
      >
        {{ "Fintech" || customer.category }}
      </div>
      <h1 class="text-blue-300 text-2xl font-semibold my-5">
        {{ "Blackcopper" || customer.name }}
      </h1>

      <p
        class="text-lg font-medium transition-colors duration-200 text-grey group-hover:text-blue-300 h-20 ellipsis"
      >
        {{
          "Blackcopper Leverages on Youverify's Compliance Solution to Mitigate Loan Default Risk While Expanding Access to Business Capital for SMEs Blackcopper Leverages on Youverify's Compliance Solution to Mitigate Loan Default Risk While Expanding Access to Business Capital for SMEs Blackcopper Leverages on Youverify's Compliance Solution to Mitigate Loan Default Risk While Expanding Access to Business Capital for SMEs" ||
          customer.title
        }}
      </p>

      <div
        class="font-semibold outline-0 transition-colors duration-200 group-hover:text-blue-300 text-grey mt-3"
      >
        Read more &nbsp; &RightArrow;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customer: {},
  },
};
</script>

<style scoped>
.ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
