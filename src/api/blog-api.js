import { instance } from "./instance-api";

export default {
  async getBlogDataList({ commit }, type) {
    return instance
      .get("Blog/?search=" + type, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        this.dispatch("blog/getDataListSuccess", response.data);
        return response;
      })
      .catch((error) =>
        error.response.status === 401
          ? this.dispatch("auth/verify")
              .then(() => this.dispatch("blog/getBlogDataList", type))
              .catch(() => console.log("error"))
          : this.dispatch("blog/getDataFailure", error)
      );
  },

  async getBlogDataDetail({ commit }, id) {
    return instance
      .get("Blog/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        this.dispatch("blog/getDataDetailSuccess", response.data);
        return response;
      })
      .catch((error) =>
        error.response.status === 401
          ? this.dispatch("auth/verify")
              .then(() => this.dispatch("blog/getBlogDataList", type))
              .catch(() => console.log("error"))
          : this.dispatch("blog/getDataFailure", error)
      );
  },

  async createBlogDataDetail({ commit }, data) {
    return instance
      .post("Blog/", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        this.dispatch("blog/getBlogDataList", "");
        return response;
      })
      .catch((error) => {
        this.dispatch("blog/loginUsersError", error);
        return error;
      });
  },

  async updateBlogDataDetail({ commit }, data, id) {
    return instance
      .put("Blog/" + id + "/", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        this.dispatch("blog/updatePostSuccess");
        return response;
      })
      .catch((error) => {
        this.dispatch("blog/loginUsersError", error);
        return error;
      });
  },

  async deleteBlogDataDetail({ commit }, id) {
    return instance
      .delete("Blog/" + id + "/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        this.dispatch("blog/deletePostSuccess");
        return response;
      })
      .catch((error) => {
        this.dispatch("blog/loginUsersError", error);
        return error;
      });
  },
  async postNewComment({ commit }, data) {
    return instance
      .post("Comments/", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        this.dispatch("blog/completeCommentSuccess");
        return response;
      })
      .catch((error) => {
        this.dispatch("blog/loginUsersError", error);
        return error;
      });
  },
  async getPostLikeOFProfile({ commit }, id) {
    return instance
      .get("Liked/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        this.dispatch("blog/getDataDetailSuccess", response.data);
        return response;
      })
      .catch((error) =>
        error.response.status === 401
          ? this.dispatch("auth/verify")
              .then(() => this.dispatch("blog/getBlogDataList", type))
              .catch(() => console.log("error"))
          : this.dispatch("blog/getDataFailure", error)
      );
  },
  async likePost({ commit }, data) {
    return instance
      .post("Likes/", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        this.dispatch("blog/getBlogDataList", "");
        return response;
      })
      .catch((error) =>
        error.response.status === 401
          ? this.dispatch("auth/verify")
              .then(() => this.dispatch("blog/likePost", data))
              .catch(() => console.log("error"))
          : this.dispatch("blog/getDataFailure", error)
      );
  },
  async unLikePost({ commit }, id) {
    return instance
      .delete("Likes/" + id + "/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        this.dispatch("blog/getBlogDataList", "");
        return response;
      })
      .catch((error) =>
        error.response.status === 401
          ? this.dispatch("auth/verify")
              .then(() => this.dispatch("blog/likePost", id))
              .catch(() => console.log("error"))
          : this.dispatch("blog/getDataFailure", error)
      );
  },
};
