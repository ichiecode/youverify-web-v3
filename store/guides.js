export const state = () => ({
    guide: null,
    guides: [],
    loading: false,
    error: null,
    perPage: 15,
    hasNextPage: true,
    count: 0
});

export const getters = {
    guide: (state) => state.guide,
    guides: (state) => state.guides,
    loading: (state) => state.loading,
    error: (state) => state.error,
    hasNextPage: (state) => state.hasNextPage,
};

export const mutations = {
    setLoading(state, payload) {
        state.loading = payload;
    },

    setNextPage(state, payload) {
        state.hasNextPage = payload
    },

    setError(state, payload) {
        state.error = payload;
    },

    setGuides(state, payload) {
        state.guides = [...state.guides, ...payload].filter(function (guide) {
            return this.has(guide.id) ? false : this.add(guide.id);
        }, new Set());
    },

    setGuide(state, payload) {
        state.guide = payload;
    },

    setGuidesCount(state, payload) {
        state.count = payload;
    },
};

export const actions = {
    async fetchGuides({ state, commit }, page) {
        commit("setLoading", true);
        commit("setGuides", [])
        let payload = {
            _start: page ? page * state.perPage : 0,
            _limit: state.perPage,
            _sort: "published_at:DESC"
        };

        try {
            const response = await this.$axios
                .$get(
                    `${process.env.baseUrl}/compliance-guides?_start=${payload._start}&_limit=${payload._limit}&_sort=${payload._sort}`
                )
            commit("setGuides", response);
            commit("setNextPage", state.guides.length < state.count)
        } catch (error) {
            commit("setError", error.response.data);
        } finally {
            commit("setLoading", false);
        }
    },

    async fetchGuide({ state, commit }, slug) {
        commit("setLoading", true);
        try {
            const response = await this.$axios
                .$get(`${process.env.baseUrl}/compliance-guides?slug=${slug}`)

            commit("setGuide", response[0]);
        } catch (error) {
            commit("setError", error.response.data);
        } finally {
            commit("setLoading", false);
        }
    },

    async getGuidesCount({ state, commit }) {
        commit("setLoading", true);

        try {
            const response = await this.$axios
                .$get(`${process.env.baseUrl}/compliance-guides/count`)
            commit("setGuidesCount", response);
        } catch (error) {
            console.log(error)
            commit("setError", error.data)
        } finally {
            commit("setLoading", false);
        }
    },
};
