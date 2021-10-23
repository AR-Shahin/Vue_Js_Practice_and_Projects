<template>
       <nav class="bg-purple-600 py-3 fixed top-0 left-0 right-0 z-50">
        <div class="container">
            <div class="flex justify-between">
            <div>
                <router-link class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" :to="{name:'home'}">Home </router-link>
                <div class="inline" v-if="isAuthenticate()"> 
                <router-link  class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" :to="{name:'product'}">Product </router-link>
                <router-link  class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" :to="{name:'dashboard'}">Dashboard </router-link>
                <button class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" @click="Logout">Logout</button>
                </div>
                <div class="inline" v-if="!isAuthenticate()">
                    <button class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" @click="openLoginModal">Login</button>
                </div>
                {{ isAuthenticate() }}
            </div>
    
            <div>

            </div>
        </div>
        </div>
    </nav>
</template>

<script>
import { useStore } from 'vuex';
import Auth from "@/services/Auth";
    export default {
        setup(){
            const store = useStore();
            const {isAuthenticate,Logout} = Auth();
            const openLoginModal = () => {
                store.dispatch('toggleLoginModal')
            }



            return {
                openLoginModal,isAuthenticate,Logout
            }
        }
    }
</script>

<style lang="scss" scoped>
.router-link-active{
    background: purple;
}
</style>
