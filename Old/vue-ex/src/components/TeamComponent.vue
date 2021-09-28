<template>
    <div>
        Team {{ type }}
        <ul>
            <li v-for="team,index in teams" :key="team.name">{{team.name}} <button @click="removeTeam(type,index)">X</button> </li>
        </ul>
    </div>
</template>

<script>
import store from '../store/index'
    export default {
        props:['type'],
        computed : {
            teams(){
                return this.type === 'A' ? store.state.teamA : store.state.teamB
            }
        },
        methods : {
            removeTeam(type,index){
                store.dispatch('removeTeam',{type,index})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>