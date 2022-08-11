export const state = () => ({
  report: null,
  popularReports: [],
  featuredReport: null,
  loading: false,
  error: null,
  searching: false,
  searchError: null,
  searchResults: [],
  perPage: 5
});

export const getters = {
  report: (state) => state.report,
  popularReports: (state) => state.popularReports,
  featuredReport: (state) => state.featuredReport,
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
    state.error = payload;
  },

  setPopularReports(state, payload) {
    const featured = payload.filter(report => report.id !== state.featuredReport.id)
    state.popularReports = featured > 4 ? featured.slice(0, 4) : featured
  },

  setFeaturedReport(state, payload) {
    state.featuredReport = payload;
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
  async fetchPopularReports({ state, commit }, limit) {
    commit("setLoading", true);
    let payload = {
      _limit: limit ? limit: state.perPage,
    };

    try {
      const response = await this.$axios
      .$get(
        `${process.env.baseUrl}/reports?_limit=${payload._limit}`
      )

      commit("setPopularReports", response);
    } catch (error) {
      console.log(error.response)
      commit("setError", error.response);
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
      console.log(error.response)
      commit("setError", error.response);
    } finally {
      commit("setLoading", false);
    }
  },

  async fetchFeaturedReport({ state, commit }) {
    commit("setLoading", true);
    try {
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/reports?featured=true`)

      commit("setFeaturedReport", response[0]);
    } catch (error) {
      console.log(error)
      commit("setError", error.response);
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
      console.log(error)
      commit("setSearchError", error);
    } finally {
      commit("setSearching", false);
    }
  },
};
