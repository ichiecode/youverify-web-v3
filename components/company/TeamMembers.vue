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
    <!-- <div v-else class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8">
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
    </div> -->
    <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-20 gap-x-5">
      <div v-for="team in teams" :key="team.name" class="group">
        <div class="relative">
          <img
            class="group-hover:opacity-0 duration-300 ease-in-out transition-opacity"
            :src="require(`~/assets/images/temp/${team.image}.png`)"
            alt=""
          />
          <img
            class="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300 ease-in-out transition-opacity"
            :src="require(`~/assets/images/temp/${team.image}-1.png`)"
            alt=""
          />
        </div>
        <h5 class="text-blue-300 font-semibold text-xl mt-5">
          {{ team.name }}
        </h5>
        <p class="text-blue text-base">{{ team.role }}</p>
      </div>
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
      teams: [
        {
          image: "gbenga",
          name: "Gbenga Odegbami",
          role: "CEO",
        },
        {
          image: "dimitri",
          name: "Dimitri Kanellopoulos",
          role: "MD (South and Eastern Africa)",
        },
        {
          image: "famous",
          name: "Famous Ehichioya",
          role: "CTO",
        },
        {
          image: "simi",
          name: "Simi Opayemi",
          role: "Chief of Staff",
        },
        {
          image: "anita",
          name: "Anita Ononenyi",
          role: "People & Operations",
        },
        {
          image: "hakeem",
          name: "Hakeem Akiode",
          role: "Head of Growth",
        },
        {
          image: "aisha",
          name: "Aisha Hammed",
          role: "Financial Controller",
        },
        {
          image: "funsho",
          name: "Olufunso Alonge",
          role: "Country Sales Manager",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      // teams: (state) => state.teams.teams,
      // loadingTeams: (state) => state.teams.loading,
    }),
  },
};
</script>
