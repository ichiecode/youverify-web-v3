<template>
  <div class="mt-28">
    <header class="bg-blue-300 py-40">
      <div
        class="flex flex-col items-center px-4 md:px-8 max-w-screen-xl mx-auto"
      >
        <div
          style="background-color: #c2e2e9"
          class="py-2 px-5 uppercase font-semibold mb-8 text-blue rounded"
        >
          Fintech
        </div>
        <h1 class="font-semibold text-lg text-white">
          Published December 22 2022
        </h1>
        <p
          class="font-semibold text-xl md:text-4xl text-white text-center mt-7 max-w-4xl mx-auto"
        >
          Blackcopper Leverages on Youverify's Compliance Solution to Mitigate
          Loan Default Risk While Expanding Access to Business Capital for SMEs
        </p>
      </div>
    </header>

    <section class="flex flex-col md:flex-row py-16 gap-6 max-w-screen-xl mx-auto px-4 md:px-8">
      <aside class="md:w-1/3 bg-blue-100 px-9 py-8 space-y-4">
        <div class="space-y-1">
          <h1 class="text-xl font-semibold">Industry</h1>
          <p class="font-medium text-base">Fintech | Lending</p>
        </div>
        <div class="space-y-1">
          <h1 class="text-xl font-semibold">Location</h1>
          <p class="font-medium text-base">Nigeria, Ghana, Kenya</p>
        </div>

        <div class="space-y-1">
          <h1 class="text-xl font-semibold">Challenges</h1>
        </div>
        <div class="space-y-1">
          <h1 class="text-xl font-semibold">Solutions</h1>
        </div>
        <div class="space-y-1">
          <h1 class="text-xl font-semibold">Products</h1>
        </div>
      </aside>
      <div class="md:w-2/3">
        <article>
          <!-- Case Study contents come here -->
        </article>

        <div class="shadow-md flex gap-7 w-full py-5 px-6">
          <div
            class="h-20 border-2 rounded-full overflow-hidden"
            style="min-width: 80px"
          >
            <!-- Image comes here -->
            <img src="" alt="" />
          </div>
          <p class="pt-14 text-xl leading-8 text-black font-medium">
            Youverify helps to avoid manual errors and maintain a pleasant
            onboarding experience for our client's end users. What's more - the
            solution allows our clients to stay compliant with regulatory
            demands and meet security challenges.
          </p>
          <div class="pt-5">
            <img src="@/assets/images/icons/quotes.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <hr class="w-full" />

    <section class="my-20 max-w-screen-xl mx-auto px-4 md:px-8">
      <h1 class="text-4xl mb-4 capitalize text-center">Related Resources</h1>
      <div
        class="grid gap-5 md:gap-10 my-16"
        style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))"
      >
        <Card v-for="n in 3" :key="n" />
      </div>
      <div class="flex justify-center">
        <nuxt-link
          to="/resources/case-studies"
          class="outline-0 select-none bg-blue text-white hover:bg-blue-300 whitespace-nowrap font-medium px-8 py-4 text-sm capitalize transition-colors rounded"
        >
          see more &nbsp; &RightArrow;
        </nuxt-link>
      </div>
    </section>
    <KnowMore />
  </div>
</template>

<script>
import KnowMore from "@/components/common/KnowMore.vue";
import Card from "@/components/resources/CaseStudyCard.vue";

export default {
  components: { KnowMore, Card },
};
</script>
