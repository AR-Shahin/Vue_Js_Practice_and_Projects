<template>
       <nav class="bg-purple-600 py-3 fixed top-0 left-0 right-0 z-50">
        <div class="container">
            <div class="flex justify-between">
            <div>
                <router-link class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" :to="{name:'home'}">Home </router-link>
                <router-link  class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" :to="{name:'product'}">Product </router-link>
                <div class="inline">
                    <button class="px-2 mx-2 bg-purple-400 py-1 rounded text-white" @click="openLoginModal">Login</button>
                </div>
            </div>
    
            <div>

            </div>
        </div>
        </div>
    </nav>
</template>

<script>
import { useStore } from 'vuex'
    export default {
        setup(){
            const store = useStore();

            const openLoginModal = () => {
                store.dispatch('toggleLoginModal')
            }



            return {
                openLoginModal
            }
        }
    }
</script>

<style lang="scss" scoped>
.router-link-active{
    background: purple;
}
</style>
