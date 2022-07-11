import {
  REGISTER_CONFIRM,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_CHECK,
  LOGIN_CHECK_ERROR,
  LOGIN_CONFIRM,
  LOGIN_REFRESH,
  LOGOUT,
} from "./auth-user-types";
import apiRequests from '../../../api/auth-api'
const state = () => ({
  isAuthData: {
    isAuth: false,
    errors: null,
    loadAuth: false,
  },
  isLoaded: false,
});

const getters = {};
const commonActions = {
  loginUsersSuccess({ commit }, value) {
    commit(LOGIN, value);
  },
  loginConfirm({ commit }) {
    commit(LOGIN_CONFIRM);
  },
  loginUsersError({ commit }, value) {
    commit(LOGIN_ERROR, value);
  },
  verifyUsersSuccess({ commit }, value) {
    commit(LOGIN_CHECK, value);
  },
  verifyUsersError({ commit }, value) {
    commit(LOGIN_CHECK_ERROR, value);
  },
  refreshUsersToken({ commit }, value) {
    commit(LOGIN_REFRESH, value);
  },
  registerUsersError({ commit }, value) {
    commit(REGISTER_ERROR, value);
  },
  logout({ commit }) {
    commit(LOGOUT);
  },
};
const mutations = {
  [LOGIN](state, payload) {
    localStorage.setItem("refresh", payload.refresh);
    localStorage.setItem("access", payload.access);
    state.isAuthData.isAuth = true;
    state.isAuthData.loadAuth = true;
  },
  [LOGIN_ERROR](state, payload) {
    state.isAuthData.errors = payload.message;
    state.isAuthData.isAuth = false;
    state.isAuthData.loadAuth = false;
  },
  [LOGIN_CHECK](state) {
    state.isAuthData.isAuth = true;
    state.isAuthData.loadAuth = true;
    state.isLoaded= true;
  },
  [LOGIN_CHECK_ERROR](state, payload) {
    state.isAuthData.errors = payload;
    state.isAuthData.isAuth = false;
    state.isAuthData.loadAuth = false;
  },
  [LOGIN_REFRESH](state) {
    localStorage.setItem("refresh", action.payload.refresh);
    localStorage.setItem("access", action.payload.access);
    state.isAuthData.isAuth = true;
  },
  [LOGIN_CONFIRM](state) {
    state.isAuthData.loadAuth = true;
  },
  [LOGOUT](state) {
    localStorage.clear();
    state.isAuthData.isAuth = false;
    state.isAuthData.loadAuth = false;
  },
};

const actions = {...commonActions, ...apiRequests}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
