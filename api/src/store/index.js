import { createStore } from 'vuex'

export default createStore({
  state: {
      isLoginModal : false
  },
  getters:{
    getIsLoginModal(state){
        return state.isLoginModal
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
  }
})
