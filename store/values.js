export const state = () => ({
  values: null,
  loading: false,
});

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setValues(state, payload) {
    state.values = payload;
  },
};

export const actions = {
  async getValues({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/values`)
      .then((res) => {
        commit("setValues", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
