const baseURL = "http://localhost:1337";

export const state = () => ({
  blogs: null,
	singleblogPost: null,
  blogTotal: 0,
  loading: false,
  page: 0,
  perPage: 9,
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
};

export const actions = {
  async getBlogs({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${baseURL}/blogs`)
      .then((res) => {
        commit("setBlogs", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },

	async getSingleBlogPost({ state, commit }, slug) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${baseURL}/blogs/?slug=${slug}`)
      .then((res) => {
        commit("setSingleBlogPost", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
