import { instance } from "./instance-api";

export default {
  async getHealthList({ commit }) {
    return instance
      .get("MyHealth/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((response) => dispatch("health/getHealthListSuccess", response.data))
      .catch((error) => dispatch("health/getHealthListFailure", error));
  },
  async postHealth ({ commit }, data) {
    return instance
    .post('MyHealth/', data, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access')
        }
    })
      .then((response) => dispatch("health/getHealthList"))
      .catch((error) => dispatch("health/getHealthListFailure", error));
  },
};
