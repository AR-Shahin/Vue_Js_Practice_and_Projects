<template>
    <nav class="bg-purple-600 py-3 fixed top-0 left-0 right-0">
        <div class="container ">
            <div class="flex justify-between">
            <div><router-link :to="{name:'home'}">Logo {{ authToken}}</router-link>
            <button class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" @click.prevent="modalOpen" v-if="!authToken" >Login</button>
                <button class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" @click.prevent="openRegisterModal" v-if="!authToken">Register</button>
                <button v-if="authToken" class="btn bg-red-400 text-white" @click="Logout">Logout</button>
            </div>
           
            <div>
                <router-link :to="{name:'home'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" >Home</router-link>
                <router-link :to="{name:'todo'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" v-if="authToken">To Do</router-link>
                <router-link :to="{name:'mark-down'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" v-if="authToken">Mark Down</router-link>
                 <router-link :to="{name:'slider'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Slider</router-link>
                <router-link :to="{name:'calculator'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Calculator</router-link>
                <router-link :to="{name:'slot'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" v-if="authToken">Slot</router-link>
                <router-link :to="{name:'test'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Test</router-link>
                <router-link :to="{name:'api-todo'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" v-if="authToken">Api Todo</router-link>
                <router-link :to="{name:'products'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" >Product</router-link>
                <span class="bg-indigo-900 text-white rounded p-1 cursor-pointer">Cart : <span class="font-bold">0</span></span>
            </div>
        </div>
        </div>
    </nav>
</template>

<script>
import { computed } from '@vue/reactivity';
import {useStore} from 'vuex';
import Auth from "../services/api/auth"
    export default {

        setup(_,{emit}){
            const store = useStore();
            function modalOpen (){
                emit('login-modal-open');
            }
            const {Logout} = Auth()
            const openRegisterModal = () => emit('register-modal-open');

            const authToken = computed(() => store.getters.getAuthToken);

          
            return {
                modalOpen,openRegisterModal,authToken,Logout
            }
        }
    }
</script>

<style lang="scss" scoped>
.router-link-active{
    background: purple;
}
</style>
