import { instance } from "./instance-api";

export default {
  async login({ commit }, data) {
    return instance
      .post("token/", data)
      .then((response) => {
        this.dispatch('auth/loginUsersSuccess', response.data);
        return response.statusText;
      })
      .catch((error) => {
        this.dispatch('auth/loginUsersError', error);
        return error;
      });
  },

  async register({ commit }, data) {
    return instance
      .post("Register/", data)
      .then((response) => {
        this.dispatch("auth/login", data);
        return response;
      })
      .catch((error) => {
        this.dispatch("auth/registerUsersError", error);
        return error;
      });
  },

  async verify({ commit }) {
    return instance
      .post("token/verify/", { token: localStorage.getItem("access") })
      .then((response) => this.dispatch("auth/verifyUsersSuccess", response.data))
      .catch((error) => {
        instance
          .post("token/refresh/", {
            refresh: localStorage.getItem("refresh"),
          })
          .then((response) => this.dispatch("auth/refreshUsersToken", response.data))
          .catch((error) => this.dispatch("auth/verifyUsersError", error));
      });
  },
};
