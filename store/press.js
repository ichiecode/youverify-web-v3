export const state = () => ({
  pressReleases: null,
  featuredMedias: null,
  awards: null,
  loading: false,
});

export const getters = {
  loading: (state) => state.loading,
  error: (state) => state.error,
};

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setPressReleases(state, payload) {
    state.pressReleases = payload;
  },

  setFeaturedMedias(state, payload) {
    state.featuredMedias = payload;
  },

  setAwards(state, payload) {
    state.awards = payload;
  },
};

export const actions = {
  async getPressReleases({ commit }, slug) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/blogs?blog_categories.slug=${slug}`)
      .then((res) => {
        commit("setPressReleases", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => {
        commit(setError, error.data);
      });
    return response;
  },
  async getFeaturedMedias({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/featured-medias`)
      .then((res) => {
        commit("setFeaturedMedias", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => {
        commit(setError, error.data);
      });
    return response;
  },
  async getAwards({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/awards`)
      .then((res) => {
        commit("setAwards", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => {
        commit(setError, error.data);
      });
    return response;
  },
};
