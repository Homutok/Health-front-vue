import Vuex from "vuex";
import auth from "./modules/Authorization/auth-user"
import profile from "./modules/Profile/profile"

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth,
    profile,
  }
});
