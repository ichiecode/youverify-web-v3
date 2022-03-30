export const state = () => ({
    loading: false,
  });
  
  export const mutations = {
    setLoading(state, payload) {
      state.loading = payload;
    },
  };
  
  export const actions = {
    async subscribe({ state, commit }, payload) {
      commit("setLoading", true);
      const response = await this.$axios
        .$post(`${process.env.baseUrl}/subscriber-email`, payload)
        .then((res) => {
          commit("setLoading", false);
          return res;
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
      return response;
    },
  };
  