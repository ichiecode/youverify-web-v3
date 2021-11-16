
export const state = () => ({
  gdpr: null,
  termOfUse: null,
  privacyPolicy: null,
  cookies: null,
  loading: false,
});

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setGDPR(state, payload) {
    state.gdpr = payload;
  },

  setTermOfUse(state, payload) {
    state.termOfUse = payload;
  },

  setPrivacyPolicy(state, payload) {
    state.privacyPolicy = payload;
  },

  setCookies(state, payload) {
    state.cookies = payload;
  },

};

export const actions = {
  async getGDPR({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/gdpr`)
      .then((res) => {
        commit("setGDPR", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },

  async getTermOfUse({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/term-of-use`)
      .then((res) => {
        commit("setTermOfUse", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },

  async getPrivacyPolicy({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/privacy-policy`)
      .then((res) => {
        commit("setPrivacyPolicy", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },

  async getCookies({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/cookies`)
      .then((res) => {
        commit("setCookies", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
