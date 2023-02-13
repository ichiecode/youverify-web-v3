<template>
  <section class="py-24 px-8 max-w-screen-xl mx-auto">
    <div class="max-w-4xl mx-auto">
      <h3 class="text-3xl md:text-5xl font-semibold text-blue text-center">
        Our Values
      </h3>
      <p class="mt-5 font-medium text-lg md:text-xl text-center">
        Youverify is building innovative global compliance products that will
        continue to push the boundaries of what is possible in RegTech
        compliance and fraud mitigation globally. Our core value drives how we
        work with partners and how we build our team.
      </p>
    </div>

    <div v-if="loadingValues" class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
      <content-placeholders v-for="index in 4" :key="index">
        <content-placeholders-heading :img="true" />
        <content-placeholders-text :lines="3" />
      </content-placeholders>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      <div
        v-for="value in values"
        :key="value.id"
        class="rounded-2xl px-6 py-5 shadow-md"
      >
        <LazyImage class="w-14" :src="value.icon.url" alt="" />
        <h5 class="text-2xl mt-4 font-semibold">{{ value.title }}</h5>
        <p class="mt-4">
          {{ value.teasers }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      values: (state) => state.values.values,
      loadingValues: (state) => state.values.loading,
    }),
  },
};
</script>
