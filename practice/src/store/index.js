import { createStore } from 'vuex'

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
      isCartOpen : false,
      cart : [
    //       {
    //       product:{
    //          sell_price:100,
    //           id:5,
    //           name:'lorsem',
    //           image:'dsdd',
    //       },
    //       quantity : 5
          
    //   }
    ]
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
    getIsCart (state){
        return state.isCartOpen;
    },
    getCartItems(state) {
        return state.cart
    },
    cartLength(state){
       return state.cart.length
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
    TOGGLE_CART(state,payload){
        //console.log(payload)
        state.isCartOpen = payload;
    },
    ADD_TO_CART(state,payload){
        //console.log(typeof payload)
        let oldProduct = state.cart.find((item) => item.product.id == payload.id);
        if(oldProduct){
            console.log(oldProduct.product.price)
            oldProduct.quantity ++ 
        }else{
            state.cart.push({product:payload,quantity : 1})
        }
        
        //console.log({product:payload,quantity : 1})
    },
    REMOVE_FROM_CART(state,payload){
        state.cart
        .splice(state.cart.
            findIndex((item) => item.product.id === payload.id), 1);
    }
    ,CLEAR_CART(state){
        state.cart = []
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
     toggleCart({commit},payload){
        commit('TOGGLE_CART',payload);
     },
     addToCart({commit},payload){
        commit('ADD_TO_CART',payload);
     },
     removeFromCart({commit},payload){
        commit('REMOVE_FROM_CART',payload);
     },
     clearCart({commit}){
         commit('CLEAR_CART')
     }
     
  },
  modules: {
  }
})

export default store
