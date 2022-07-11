import apiRequests from "../../../api/profile-api";
import healthRequests from "../../../api/health-api";

import {
  DATA_PROFILE_UPDATE_SUCCESS,
  DATA_PROFILE_UPDATE_FAILURE,
  DATA_PROFILE_SUCCESS,
  DATA_PROFILE_FAILURE,
  DATA_PROFILE_CLEAR,
  DATA_LAST_HEALTH_SUCCESS,
  DATA_LAST_HEALTH_FAILURE,
  DATA_ACHIEVEMENTS_SUCCESS,
  DATA_ACHIEVEMENTS_FAILURE,
} from "./profile-types";

const state = () => ({
  dataProfile: [],
  dataAchievements: [],
  dataLikes: [],
  dataHealth: {},
  isLoadedProfile: false,
  isLoadedAchievements: false,
  isLoadedHealth: false,
});

const getters = {};

const commonActions = {
  getDataProfileSuccess({ commit }, value) {
    commit(DATA_PROFILE_SUCCESS, value);
  },
  getDataProfileFailure({ commit }, value) {
    commit(DATA_PROFILE_FAILURE, value);
  },
  dataProfileClear({ commit }) {
    commit(DATA_PROFILE_CLEAR);
  },
  updateDataProfileSuccess({ commit }) {
    commit(DATA_PROFILE_UPDATE_SUCCESS);
  },
  updateDataProfileFailure({ commit }, error) {
    commit(DATA_PROFILE_UPDATE_FAILURE, error);
  },
  getLastHealthsSuccess({ commit }, value) {
    commit(DATA_LAST_HEALTH_SUCCESS, value);
  },
  getLastHealthFailure({ commit }, value) {
    commit(DATA_LAST_HEALTH_FAILURE, value);
  },
  getDataAchievementsSuccess({ commit }, value) {
    commit(DATA_ACHIEVEMENTS_SUCCESS, value);
  },
  getDataAchievementsFailure({ commit }, value) {
    commit(DATA_ACHIEVEMENTS_FAILURE, value);
  },
};

const mutations = {
  [DATA_PROFILE_SUCCESS](state, payload) {
    state.dataProfile = payload;
    state.isLoadedProfile = true;
  },
  [DATA_PROFILE_FAILURE](state) {
    state.isLoadedProfile = false;
  },
  [DATA_ACHIEVEMENTS_SUCCESS](state, payload) {
    state.dataAchievements = payload;
    state.isLoadedAchievements = true;
  },
  [DATA_PROFILE_FAILURE](state) {
    state.isLoadedAchievements = false;
  },
  [DATA_LAST_HEALTH_SUCCESS](state, payload) {
    if (payload.results.length === 0) {
      state.dataHealth = [];
      state.isLoadedHealth = false;
    } else {
      state.dataHealth = payload;
      state.isLoadedHealth = true;
    }
  },
  [DATA_LAST_HEALTH_FAILURE](state, payload) {
    state.isLoadedHealth = false;
  },
  [DATA_PROFILE_CLEAR](state, payload) {
    state.dataProfile = [];
    state.dataAchievements = [];
    state.dataLikes = [];
    state.dataHealth = {};
    state.isLoadedProfile = false;
    state.isLoadedAchievements = false;
    state.isLoadedHealth = false;
  },
  [DATA_PROFILE_UPDATE_SUCCESS](state, payload) {
    state.dataProfile = [];
    state.dataAchievements = [];
    state.dataLikes = [];
    state.dataHealth = {};
    state.isLoadedProfile = false;
    state.isLoadedAchievements = false;
    state.isLoadedHealth = false;
  },
  [DATA_PROFILE_UPDATE_FAILURE](state, payload) {
    state.dataProfile = [];
    state.dataAchievements = [];
    state.dataLikes = [];
    state.dataHealth = {};
    state.isLoadedProfile = false;
    state.isLoadedAchievements = false;
    state.isLoadedHealth = false;
  },
};

const actions = { ...commonActions, ...apiRequests, ...healthRequests };

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
