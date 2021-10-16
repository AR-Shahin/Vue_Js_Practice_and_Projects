<template>
<loader v-if="isLoader"/>
 <NavBar @login-modal-open="isModalOpen = !isModalOpen" @register-modal-open="toggleRegisterModal = !toggleRegisterModal"></NavBar>
    <RegisterModal v-if="toggleRegisterModal" @close-slot-modal="toggleRegisterModal = !toggleRegisterModal">
        <template #heading>Register</template>
                <template #body>
                    <form action="" @submit.prevent="Register">
                        <div class="my-2">
                            <label for="">Username : </label>
                            <InputElement  id="userName" placeholder="Enter Your Username" v-model="newUser.name" />
                            <span class="text-red-500" v-if="newUser.errors.name">{{newUser.errors.name}}</span>
                        </div>
                        <div class="my-2">
                            <label for="">Email : </label>
                            <InputElement type="email" id="email" placeholder="Enter Your Email" v-model="newUser.email"/>
                            <span class="text-red-500" v-if="newUser.errors.email">{{newUser.errors.email}}</span>
                        </div>
                        <div class="my-2">
                            <label for="">Image : </label>
                            <InputElement type="file" id="image" @change="handleImage"/>
                            <span class="text-red-500" v-if="newUser.errors.image">{{newUser.errors.image}}</span>
                        </div>
                        <div class="my-2">
                            <label for="">Password : </label>
                            <InputElement type="password" id="password" placeholder="Enter Your Password" v-model="newUser.password"/>
                            <span class="text-red-500" v-if="newUser.errors.password">{{newUser.errors.password}}</span>
                        </div>
                        <div class="my-2">
                            <label for="">Confirm Password : </label>
                            <InputElement type="password" id="confirm_password" placeholder="Enter Password Again" v-model="newUser.password_confirmation"/>
                            <span class="text-red-500" v-if="newUser.errors.password_confirmation">{{newUser.errors.password_confirmation}}</span>
                        </div>
                        <div class="my-2">
                            <button type="submit" class="py-1 px-5 bg-yellow-500 rounded w-full">Register</button>
                        </div>
                    </form>
                </template>
    </RegisterModal>
    <div class="container mt-20">
        <router-view></router-view>
    </div>
    <teleport to='body'>
    <Modal v-if="isModalOpen" @close-modal="isModalOpen = !isModalOpen"/>
    <Cart v-if="false"/>
    <Notification/>
    </teleport>
</template>

<script>
// import { useStore } from 'vuex'
import NavBar from './components/NavBar.vue';
import Modal from './components/Modal.vue'
import RegisterModal from './components/SlotModal.vue';
import InputElement from "./components/Input.vue";
import Auth from "./services/api/auth";
import Cart from './components/Cart.vue';
import Notification from './components/Notification.vue';
import { computed, ref } from '@vue/reactivity';
import Loader from './components/Loader.vue';
import {useStore} from "vuex"
export default {
  name: 'App',
  components: {
    NavBar,Modal,RegisterModal,InputElement,Loader,Cart,Notification
  },
     setup(){
        const store = useStore();
        const isModalOpen = ref(false);
        const {Register,newUser,toggleRegisterModal,handleImage} = Auth();
        const isLoader = computed(() => store.getters.getLoader)
        
      return{
        toggleRegisterModal,isModalOpen,Register,newUser,handleImage,isLoader
      }
  }
}
</script>

<style>

</style>
