<template>
    <nav class="bg-purple-600 py-3">
        <div class="container">
            <div class="flex justify-between">
            <div><router-link :to="{name:'home'}">Logo {{authToken}}</router-link></div>
           
            <div>
                <router-link :to="{name:'home'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Home</router-link>
                <router-link :to="{name:'todo'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">To Do</router-link>
                <router-link :to="{name:'mark-down'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Mark Down</router-link>
                 <router-link :to="{name:'slider'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Slider</router-link>
                <router-link :to="{name:'calculator'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Calculator</router-link>
                <router-link :to="{name:'slot'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Slot</router-link>
                <router-link :to="{name:'test'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Test</router-link>
                <router-link :to="{name:'api-todo'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Api Todo</router-link>
                <button class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" @click.prevent="modalOpen" v-if="!authToken" >Login</button>
                <button class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" @click.prevent="openRegisterModal" v-if="!authToken">Register</button>
                <button v-if="authToken">Logout</button>
            </div>
        </div>
        </div>
    </nav>
</template>

<script>
import { computed } from '@vue/reactivity';
import {useStore} from 'vuex';
    export default {

        setup(_,{emit}){
            const store = useStore();
            function modalOpen (){
                emit('login-modal-open');
            }
            
            const openRegisterModal = () => emit('register-modal-open');

            const authToken = computed(() => store.getters.authToken)
            return {
                modalOpen,openRegisterModal,authToken
            }
        }
    }
</script>

<style lang="scss" scoped>
.router-link-active{
    background: purple;
}
</style>
