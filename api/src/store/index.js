import { createStore } from 'vuex';
import auth from "./modules/auth/index";
export default createStore({
  state: {
      isLoginModal : false,
      authToken : null
  },
  getters:{
    getIsLoginModal(state){
        return state.isLoginModal
    },
    getAuthToken(state){
        return state.authToken
    }
  },
  mutations: {
    TOGGLE_LOGIN_MODAL(state){
        state.isLoginModal = !state.isLoginModal;
    }
  },
  actions: {
    toggleLoginModal({commit}){
        commit('TOGGLE_LOGIN_MODAL')
    }
  },
  modules: {
    auth
  }
})
