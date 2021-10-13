<template>
 <NavBar @login-modal-open="isModalOpen = !isModalOpen" @register-modal-open="toggleRegisterModal = !toggleRegisterModal"></NavBar>
    <RegisterModal v-if="toggleRegisterModal" @close-slot-modal="toggleRegisterModal = !toggleRegisterModal">
        <template #heading>Register</template>
                <template #body>
                    <form action="" @submit.prevent="Register">
                        <div class="my-2">
                            <label for="">Username : </label>
                            <InputElement  id="userName" placeholder="Enter Your Username" v-model="newUser.name" />
                        </div>
                        <div class="my-2">
                            <label for="">Email : </label>
                            <InputElement type="email" id="email" placeholder="Enter Your Email" v-model="newUser.email"/>
                        </div>
                        <div class="my-2">
                            <label for="">Image : </label>
                            <InputElement type="file" id="image" />
                        </div>
                        <div class="my-2">
                            <label for="">Password : </label>
                            <InputElement type="password" id="password" placeholder="Enter Your Password" v-model="newUser.password"/>
                        </div>
                        <div class="my-2">
                            <label for="">Confirm Password : </label>
                            <InputElement type="password" id="confirm_password" placeholder="Enter Password Again" v-model="newUser.password_confirmation"/>
                        </div>
                        <div class="my-2">
                            <button type="submit" class="py-1 px-5 bg-yellow-500 rounded w-full">Register</button>
                        </div>
                    </form>
                </template>
    </RegisterModal>
    <div class="container mt-5">
        <router-view></router-view>
    </div>
    <teleport to='body'>
    <Modal v-if="isModalOpen" @close-modal="isModalOpen = !isModalOpen"/>
    </teleport>
</template>

<script>
// import { useStore } from 'vuex'
import NavBar from './components/NavBar.vue';
import Modal from './components/Modal.vue'
import RegisterModal from './components/SlotModal.vue';
import InputElement from "./components/Input.vue";
import Auth from "./services/api/auth";
import { ref } from '@vue/reactivity';

export default {
  name: 'App',
  components: {
    NavBar,Modal,RegisterModal,InputElement
  },
  setup(){
    
      const isModalOpen = ref(false);
      const {Register,newUser,toggleRegisterModal} = Auth();
    

      return{
        toggleRegisterModal,isModalOpen,Register,newUser
      }
  }
}
</script>

<style>

</style>
