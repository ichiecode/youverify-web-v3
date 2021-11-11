const baseURL = "http://localhost:1337";

export const state = () => ({
  teams: null,
  loading: false
});

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setTeams(state, payload) {
    state.teams = payload;
  },

};

export const actions = {
  async getTeams({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${baseURL}/teams`)
      .then((res) => {
        commit("setTeams", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
