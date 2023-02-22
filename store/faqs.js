export const state = () => ({
  faqs: null,
  categories: null,
  loading: false,
});

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setFaqs(state, payload) {
    state.faqs = payload;
  },

  setCategories(state, payload) {
    state.categories = payload;
  },
};

export const actions = {
  async getFaqs({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/faqs`)
      .then((res) => {
        commit("setFaqs", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
  async getCategories({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/faq-categories`)
      .then((res) => {
        commit("setCategories", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
