import { createStore } from 'vuex';
import auth from "./modules/auth/index";
const store = createStore({
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

export default store;
