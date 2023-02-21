export const state = () => ({
  teams: null,
  departments: null,
  loading: false,
});

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setTeams(state, payload) {
    state.teams = payload;
  },

  setDepartments(state, payload) {
    state.departments = payload;
  },
};

export const actions = {
  async getTeams({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/our-people`)
      .then((res) => {
        commit("setTeams", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },

  async getDepartments({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/company-departments`)
      .then((res) => {
        commit("setDepartments", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
