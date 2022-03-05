export const state = () => ({
  dataSource: null,
  loading: false,
});

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setDataSource(state, payload) {
    state.dataSource = payload;
  },
};

export const actions = {
  async getDataSource({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/data-sources`)
      .then((res) => {
        commit("setDataSource", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
