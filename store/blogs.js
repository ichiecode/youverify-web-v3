export const state = () => ({
  blogs: null,
  singleblogPost: null,
  relatedBlogs: null,
  total: 0,
  loading: false,
  page: 0,
  perPage: 90,
  sort_by: "created_at:desc",
});

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setBlogs(state, payload) {
    state.blogs = payload;
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
  async getBlogs({ state, commit }, startPage, limitPage) {
    commit("setLoading", true);
    let payload = {
      _start: startPage ? startPage: state.page,
      _limit: limitPage ? limitPage: state.perPage,
      _sort: "createdAt:DESC"
    };
    const response = await this.$axios
      .$get(
        `${process.env.baseUrl}/blogs?_start=${payload._start}&_limit=${payload._limit}&_sort=${payload._sort}`
      )
      .then((res) => {
        commit("setBlogs", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
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
      .catch((error) => ({ error: JSON.stringify(error) }));
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
      .catch((error) => ({ error: JSON.stringify(error) }));
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
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },


};
