export const state = () => ({
  report: null,
  reports: [],
  loading: false,
  errors: null,
  searching: false,
  searchError: null,
  searchResults: [],
  perPage: 5
});

export const getters = {
  report: (state) => state.report,
  reports: (state) => state.reports,
  loading: (state) => state.loading,
  errors: (state) => state.errors,
  searching: (state) => state.searching,
  searchError: (state) => state.searchError,
  searchResults: (state) => state.searchResults
};

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setError(state, payload) {
    state.errors = payload;
  },

  setReports(state, payload) {
    state.reports = payload;
  },

  setReport(state, payload) {
    state.report = payload;
  },

  setSearching(state, payload) {
    state.searching = payload;
  },

  setSearchResults(state, payload) {
    state.searchResults = payload;
  },

  setSearchError(state, payload) {
    state.searchError = payload;
  },
};

export const actions = {
  async fetchReports({ state, commit }, limit) {
    commit("setLoading", true);
    let payload = {
      _limit: limit ? limit: state.perPage,
    };

    try {
      const response = await this.$axios
      .$get(
        `${process.env.baseUrl}/reports?_limit=${payload._limit}`
      )

      commit("setReports", response);
    } catch (error) {
      commit("setError", error.response.data);
    } finally {
      commit("setLoading", false);
    }
  },

  async fetchReport({ state, commit }, slug) {
    commit("setLoading", true);
    try {
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/reports?slug=${slug}`)

      commit("setReport", response[0]);
    } catch (error) {
      commit("setError", error.response.data);
    } finally {
      commit("setLoading", false);
    }
  },

  async searchReport({ state, commit }, searchTerm) {
    commit("setSearching", true);

    try {
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/reports?title_contains=${searchTerm}&_limit=${state.perPage}`)

      commit("setSearchResults", response);
    } catch (error) {
      commit("setSearchError", error.response.data);
    } finally {
      commit("setSearching", false);
    }
  },
};
