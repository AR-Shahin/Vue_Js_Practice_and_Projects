import { createStore } from 'vuex'

const store =  createStore({
  state: {
      taskList : [],
      taskLinks : {},
      singleTask : {},
      authToken : null,
      authUser: {},
      bal : 123
  },
  getters :{
    getTaskList(state){
        return state.taskList;
    },
    getTaskLinks(state){
        return state.taskLinks;
    },
    getSingleTask(state) {
       return state.singleTask;
    },
    getAuthToken(state){
        return state.authToken
    },
    getAuthUser(state){
        state.authUser 
    },
    getBal (state){
        return state.bal;
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
        // let temp = [];
        // for(let i = 0;i<state.taskList.length;i++){
        //     if(state.taskList[i].key !== payload){
        //         temp.push(state.taskList[i])
        //     }
        // }
        // state.taskList = [...temp];
      },
      ACTIVE_TASK(state,payload){
          let index = state.taskList.
                findIndex((task) => task.key === payload)
          state.taskList[index].status = 1
      },
      INACTIVE_TASK(state,payload){
        let index = state.taskList.
              findIndex((task) => task.key === payload)
        state.taskList[index].status = 0
    },
    SINGLE_TASK(state,payload){
        let index = state.taskList.
              findIndex((task) => task.key === payload)
        state.singleTask = state.taskList[index];
    },
    UPDATE_TASK(state,payload){
        state.taskList
        .splice(state.taskList.
            findIndex((task) => task.key === payload.key), 1,payload.task);
    },
    API_TOKEN(state,token){
        state.authToken = token
    },
    SET_AUTH_TOKEN(state,payload){
        state.authUser = payload
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
      },
      activeTask({commit},payload){
        commit('ACTIVE_TASK',payload)
      },
      inactiveTask({commit},payload){
        commit('INACTIVE_TASK',payload)
     },
     getSingleTask({commit},payload){
        commit('SINGLE_TASK',payload)
     },
     updateTask({commit},payload){
        commit('UPDATE_TASK',payload);
     },
     setAuthToken({commit},payload){
        commit('API_TOKEN',payload)
     },
     setAuthUser({commit},payload){
        commit('SET_AUTH_TOKEN',payload)
     }
  },
  modules: {
  }
})

export default store
