<template>
  <section class="px-8 max-w-screen-xl mx-auto py-24">
    <h2 class="font-bold text-4xl">Meet the Youverify Team</h2>
    <div class="mt-12 flex gap-8 overflow-scroll mb-16 w-full">
      <div
        @click="selectedCategory = department.Name"
        v-for="department in departments"
        :key="department.id"
        class="text-blue-300 cursor-pointer transition-colors duration-200"
        :class="
          department.Name === selectedCategory
            ? 'opacity-100 font-semibold'
            : 'opacity-50 font-medium'
        "
      >
        {{ department.Name }}
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
    <div
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-14 gap-x-5"
    >
      <div v-for="member in selectedDepartment" :key="member.id" class="group">
        <div
          class="relative rounded-lg overflow-hidden bg-gray-200"
          style="max-width: 256px"
        >
          <LazyImage
            class="group-hover:opacity-0 duration-300 ease-in-out transition-opacity h-72 mx-auto"
            :src="member.Avatar.url"
            :alt="`Avater of ${member.Name}`"
          />
          <LazyImage
            class="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300 ease-in-out transition-opacity h-72 w-full object-cover"
            :src="member.Image.url"
            :alt="`Photo of ${member.Name}`"
          />
        </div>
        <h5 class="text-blue-300 font-semibold text-xl mt-5">
          {{ member.Name }}
        </h5>
        <p class="text-blue text-base">{{ member.Role }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      selectedCategory: "Leadership",
    };
  },
  computed: {
    ...mapState({
      teams: (state) => state.teams.teams,
      departments: (state) => state.teams.departments,
      loadingTeams: (state) => state.teams.loading,
    }),
    selectedDepartment() {
      return this.teams.filter(
        (team) => team.Department.Name === this.selectedCategory
      );
    },
  },
};
</script>
