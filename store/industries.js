export const state = () => ({
  industries: null,
  singleIndustries: null,
  industriesTotal: 0,
  loading: false,
  page: 0,
  perPage: 9,
  sort_by: "created_at:desc",
});

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setIndustries(state, payload) {
    state.industries = payload;
  },

  setSingleIndustries(state, payload) {
    state.singleIndustries = payload;
  },
};

export const actions = {
  async getIndustries({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/industries`)
      .then((res) => {
        commit("setIndustries", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },

  async getSingleIndustries({ state, commit }, slug) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/industries/?slug=${slug}`)
      .then((res) => {
        commit("setSingleIndustries", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
