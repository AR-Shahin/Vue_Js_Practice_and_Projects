import { createStore } from 'vuex'

export default createStore({
  state: {
      taskList : [],
      taskLinks : {}
  },
  getters :{
    getTaskList(state){
        return state.taskList;
    },
    getTaskLinks(state){
        return state.taskLinks;
    }
  },
  mutations: {
      SET_NEW_TODO(state,payload){
          state.taskList.unshift(payload)
      },
      SET_INITIAL_TODO(state,payload){
          state.taskList = [];
          const {data:{tasks}} = payload;
          const {links} = payload;
          state.taskLinks = links;
          state.taskList.push(...tasks);
      },
      REMOVE_TASK(state,payload){
        state.taskList
        .splice(state.taskList.
            findIndex((task) => task.key === payload), 1);
      }
  },
  actions: {
      addNewTodo ({commit},payload){
          commit('SET_NEW_TODO',payload)
      },
      setInitialTasks({commit},payload){
        commit('SET_INITIAL_TODO',payload)
      },
      removeTask({commit},payload){
        commit('REMOVE_TASK',payload)
      }
  },
  modules: {
  }
})
