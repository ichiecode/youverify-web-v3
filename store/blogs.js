export const state = () => ({
  blogs: [],
  singleblogPost: null,
  relatedBlogs: null,
  total: 0,
  loading: false,
  error: null,
  perPage: 9,
  hasNextPage: true
});

export const getters = {
  blogs: (state) => state.blogs,
  hasNextPage: (state) => state.hasNextPage,
  loading: (state) => state.loading,
  error: (state) => state.error,
  total: (state) => state.total,
}

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setError(state, payload) {
    state.error = payload;
  },

  setNextPage(state, payload) {
    state.hasNextPage = payload
  },

  setBlogs(state, payload) {
    state.blogs = [...state.blogs, ...payload];
  },

  setSingleBlogPost(state, payload) {
    state.singleblogPost = payload;
  },

  setTotalBlog(state, payload) {
    state.total = payload;
  },

  setRelatedBlogs(state, payload) {
    state.relatedBlogs = payload
  }
};

export const actions = {
  async getBlogs({ state, commit }, page) {
    commit("setLoading", true);
    let payload = {
      _start: page ? page * state.perPage : 0,
      _limit: state.perPage,
      _sort: "createdAt:DESC"
    };
    const response = await this.$axios
      .$get(
        `${process.env.baseUrl}/blogs?_start=${payload._start}&_limit=${payload._limit}&_sort=${payload._sort}`
      )
      .then((res) => {
        commit("setBlogs", res);
        commit("setLoading", false);
        commit("setNextPage", state.blogs.length < state.total)
        return res;
      })
      .catch((error) => {
        commit(setError, error.data)
      })
    return response;
  },

  async getTotalBlogPost({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/blogs/count`)
      .then((res) => {
        commit("setTotalBlog", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => {
        commit(setError, error.data)
      })
    return response;
  },

  async getSingleBlogPost({ state, commit }, slug) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/blogs/?slug=${slug}`)
      .then((res) => {
        commit("setSingleBlogPost", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => {
        commit(setError, error.data)
      })
    return response;
  },
  
  async getRelatedBlogs({ state, commit }, slug) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/blog-categories?slug=${slug}`)
      .then((res) => {
        commit("setRelatedBlogs", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => {
        commit(setError, error.data)
      })
    return response;
  },
};
