import { createStore } from 'vuex'

export default createStore({
  state: {
    database : [
      {name: 'Shahin',age:21,select : false},
      {name: 'Omi',age:20,select : false},
      {name: 'Nasif',age:26,select : false},
      {name: 'Bappy',age:11,select : false},
      {name: 'Kader',age:21,select : false},
    ],
    teamA : [],
    teamB : []
  },
  getters :{
    getDatabase(state){
      return state.database
    }
  },
  mutations: {
    pushMember(state,data){
      data.type === 'A' ? state.teamA.push(state.database[data.index]) : state.teamB.push(state.database[data.index])
    },
    deselectItem(state,id){
      state.database[id].select = true
    },
    selectItem(state,id){
      state.database[id].select = false
    },
    removeTeam(state,data){
      if(data.type == 'A'){
        state.teamA.splice(data.index,1);
      }else{
        state.teamB.splice(data.index,1);
      }
    }

  },
  actions: {
    addTeamMember(contex,data){
      contex.commit('pushMember',data)
       contex.commit('deselectItem',data.index)
    },
    removeTeam(contex,data){
      contex.commit('removeTeam',data)
      contex.commit('selectItem',data.index)
    }
  },
  
  modules: {
  }
})
