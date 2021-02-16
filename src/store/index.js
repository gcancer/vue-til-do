import Vue from 'vue';
import Vuex from 'vuex';
import {
  getUserFromCookie,
  getAuthFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '', // 쿠키값 쓰거나 없으면 빈 문자열 혹은 담긴 문자열
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== ''; // === !== 타입까지 체크
    },
    getUsername(state) {
      return state.username;
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.token);
      commit('setToken', data.token);
      commit('setUsername', data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);

      return data; // return을 하지 않아도 되지만, data를 활용할 수 있다는 측면에서 명시
    },
  },
});
