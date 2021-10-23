<template>
  <nav-bar/>
  <router-view/>
  <LoginModal v-if="isLogin" @close-slot-modal="toggleLoginModal">
      <template #heading>Login</template>
      <template #body>
          <form action="" @submit.prevent="Register">
            <div class="my-2">
                <label for="">Email : </label>
                <InputElement type="email" id="email" placeholder="Enter Your Email" v-model="authUser.email"/>
                <span class="text-red-500" v-if="authUser.errors.email">{{authUser.errors.email}}</span>
            </div>
                    
            <div class="my-2">
                <label for="">Password : </label>
                <InputElement type="password" id="password" placeholder="Enter Your Password" v-model="authUser.password"/>
                <span class="text-red-500" v-if="authUser.errors.password">{{authUser.errors.password}}</span>
            </div>
                       
            <div class="my-2">
                <button type="submit" class="py-1 px-5 bg-yellow-500 rounded w-full">Login</button>
            </div>
          </form>
      </template>
  </LoginModal>
</template>

<style lang="scss">

</style>
<script>
import InputElement from "./components/Input.vue";
import NavBar from "@/components/NavBar.vue";
import LoginModal from "@/components/Modal";
import Auth from "@/services/Auth";
import { computed } from '@vue/reactivity';
import {useStore} from "vuex"
export default {
    components:{
        NavBar,LoginModal,InputElement
    },
    setup(){
    
        const store = useStore();
        const {authUser} = Auth();
        const isLogin = computed(() => store.getters.getIsLoginModal)

        const toggleLoginModal = () => {
            store.dispatch('toggleLoginModal');
        }

        return{
            authUser,isLogin,toggleLoginModal
        }
    }
}
</script>
