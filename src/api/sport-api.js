import { instance } from "./instance-api";

export default {
  async getSportList({ commit }) {
    return instance
      .get("Workouts/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => dispatch("sport/getSportListSuccess", response.data))
      .catch((error) => dispatch("sport/getSportListFailure", error));
  },

  async addSport({ commit }, data) {
    return instance
      .post("Workouts/", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => dispatch("sport/getSportList"))
      .catch((error) => dispatch("sport/getSportListFailure", error));
  },

  async deleteSport({ commit }, id) {
    return instance
      .delete("WorkoutsDelete/" + id + "/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => dispatch("sport/getSportList"))
      .catch((error) => dispatch("health/getHealthListFailure", error));
  },
};
