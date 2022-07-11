import { instance } from "./instance-api";

export default {
  async getProfileData({ commit }, data) {
    return instance
      .get("MyProfile/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => {
        this.dispatch("profile/getDataProfileSuccess", response.data);
        return response;
      })
      .catch((error) => {
        this.dispatch("profile/getDataProfileFailure", error);
        return error;
      });
  },
};
