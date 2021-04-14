<template>
  <div class="home">
      <ul>
        <li v-for="(data,index) in getData" :key="data.name">{{data.name + index}}
          <button @click="addTeamMember('A',index)" :disabled="data.select">A</button>
          <button @click="addTeamMember('B',index)" :disabled="data.select">B</button>
        </li>
      </ul>
      <hr>
      <Team type="A"></Team>
      <Team type="B"></Team>

  </div>
</template>

<script>
import store from '../store/index'
import Team from '../components/TeamComponent'
export default {
  components  :{
    Team
  },
  name: 'Home',
  computed : {
    getData(){
      return store.getters.getDatabase
    }
  },
  methods: {
    addTeamMember(type,index){
      store.dispatch('addTeamMember',{type,index})
    }
  }
}
</script>
