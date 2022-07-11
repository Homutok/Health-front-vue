import { instance } from "./instance-api";

export default {
  async getTagsInfo({ commit }, data) {
    return instance
      .get("Tags/?search=" + data)
      .then((response) => dispatch("getTagSuccess", response.data))
      .catch((error) => dispatch("getTagFailure", error));
  },
};
