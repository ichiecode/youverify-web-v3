<template>
  <section class="px-8 max-w-screen-xl mx-auto py-24">
    <h2 class="font-bold text-4xl">Meet the Youverify Team</h2>
    <div class="mt-12 flex gap-8 overflow-scroll mb-16 w-full">
      <div
        @click="selectedCategory = category"
        v-for="category in categories"
        :key="category"
        class="text-blue-300 cursor-pointer transition-colors duration-200"
        :class="
          category === selectedCategory
            ? 'opacity-100 font-semibold'
            : 'opacity-50 font-medium'
        "
      >
        {{ category }}
      </div>
    </div>
    <div v-if="loadingTeams" class="grid grid-cols-2 sm:grid-cols-4 gap-8">
      <content-placeholders v-for="index in 5" :key="index">
        <content-placeholders-heading :img="true" />
        <content-placeholders-text :lines="3" />
      </content-placeholders>
    </div>
    <div v-else class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8">
      <section v-for="team in teams" :key="team.id">
        <div class="block">
          <img
            width="203"
            height="331.99999999999994"
            :src="team.images.url"
            :alt="team.name"
            style="object-fit: cover; opacity: 1"
          />
        </div>
        <div class="pt-6">
          <h4 class="text-blue text-base">{{ team.name }}</h4>
          <p class="text-xs mt-2">{{ team.role }}</p>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      categories: [
        "Leadership",
        "Engineering",
        "Sales/Operations",
        "Product",
        "Growth/Marketing",
      ],
      selectedCategory: "Leadership",
    };
  },
  computed: {
    ...mapState({
      teams: (state) => state.teams.teams,
      loadingTeams: (state) => state.teams.loading,
    }),
  },
};
</script>
