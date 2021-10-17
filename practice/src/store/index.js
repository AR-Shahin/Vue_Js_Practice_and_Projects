import { createStore } from 'vuex'
import cart from './cart';
const store =  createStore({
  state: {
      taskList : [],
      taskLinks : {},
      singleTask : {},
      authToken : null,
      authUser: {},
      isLoader : false,
      products : [],
      product : {},
      isProductFound : false,
  
    notifications : [
        // {
        //     type: 'Success',
        //     class : 'bg-green-600',
        //     textClass : 'text-green-600',
        //     message : 'Successfully Product added !',
        //     id : 1
        // },
        // {
        //     type: 'Info',
        //     class : 'bg-yellow-600',
        //     message : 'Remove From Cart!',
        //     textClass : 'text-yellow-600',
        //     id : 3
        // }
    ],
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
    getLoader (state){
        return state.isLoader;
    },
    getAllProducts(state){
        return state.products
    },
    getSingleProduct(state){
        return state.product
    },
    getIsProductFound(state){
        return state.isProductFound
    },
   
    getNotifications(state) {
        return state.notifications
    },
   
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
        token = JSON.stringify(token)
        localStorage.setItem('token',token)
    },
    LOGOUT(state){
        state.authToken = null;
        state.authUser = {};
        localStorage.setItem('token','');
    },
    SET_AUTH_TOKEN(state,payload){
        state.authUser = payload
    },
    TOGGLE_LOADER(state,payload){
        state.isLoader = payload;
    },
    SET_ALL_PRODUCT(state,payload){
        state.products.push(...payload)
    },
    SET_SINGLE_PRODUCT(state,payload){
        state.product = payload
    },
    SET_PRODUCT_FOUND_OR_NOT(state,payload){
        state.isProductFound = payload
    },
   
    PUSH_NOTIFICATION(state,payload){
        state.notifications.push({
            ...payload,
            id : (Math.random().toString(36) + Date.now().toString(36)).substr(2)
        })
    },
    REMOVE_NOTIFICATION(state,payload){
        state.notifications = state.notifications.filter(notification => {
            return notification.id != payload.id;
        })
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
     },
     toggleLoader({commit},payload){
        commit('TOGGLE_LOADER',payload);
     },
     logout({commit}){
         commit('LOGOUT')
     },
     setAllProduct({commit},payload){
        commit('SET_ALL_PRODUCT',payload)
     },
     setSingleProduct({commit},payload){
        commit('SET_SINGLE_PRODUCT',payload)
     },
     setIsProductFound({commit},payload){
        commit('SET_PRODUCT_FOUND_OR_NOT',payload)
     },
     
     pushNotification({commit},payload){
         commit('PUSH_NOTIFICATION',payload)
     },
     removeNotification({commit},payload){
        commit('REMOVE_NOTIFICATION',payload)
    }
     
  },
  modules: {
    cart
  }
})

export default store
