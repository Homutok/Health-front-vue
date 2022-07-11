import { instance } from "./instance-api";

export default {
  async changeProfileData({ commit }, data, id) {
    return instance
      .put("ProfileUpdate/" + id + "/", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        this.dispatch("profile/updateDataProfileSuccess", response.data);
        return response;
      })
      .catch((error) => {
        this.dispatch("profile/updateDataProfileFailure", error);
        return error;
      });
  },
};
