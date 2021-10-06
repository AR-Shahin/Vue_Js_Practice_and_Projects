<template>
    <div class="text-center">
        <div class="mt-12">
            <button class="py-1 px-5 bg-yellow-500 rounded mx-2" @click="openLoginModal">Login</button>
            <button class="py-1 px-5 bg-green-500 rounded" @click="openRegisterModal">Register</button>
        </div>
    </div>
    <teleport to='body'>
        <!-- Login Modal -->
        <SlotModal v-if="isLoginModal" @close-modal="isLoginModal = false">
            <template #heading>Login</template>
            <template #body>
               <div class="my-2">
                    <label for="">Username : </label>
                    <InputElement  id="userName" placeholder="Enter Your Username"/>
                </div>
                <div class="my-2">
                    <label for="">Email : </label>
                    <InputElement type="email" id="email" placeholder="Enter Your Email"/>
                </div>
                
            </template>
            <!-- <template #footer>
                <button class="py-1 px-5 bg-green-500 rounded w-full">Login</button>
            </template> -->
        </SlotModal>

        <!-- Regisger Modal -->

         <SlotModal v-if="isRegisterModal" @close-modal="isRegisterModal = false">
            <template #heading>Register</template>
            <template #body>
               <div class="my-2">
                    <label for="">Username : </label>
                    <InputElement  id="userName" placeholder="Enter Your Username"/>
                </div>
                <div class="my-2">
                    <label for="">Email : </label>
                    <InputElement type="email" id="email" placeholder="Enter Your Email"/>
                </div>
                <div class="my-2">
                    <label for="">Password : </label>
                    <InputElement type="password" id="password" placeholder="Enter Your Password"/>
                </div>
            </template>
            <template #footer>
                <button class="py-1 px-5 bg-green-500 rounded w-full">Regisger</button>
            </template>
        </SlotModal>
    </teleport>
</template>

<script>
import InputElement from "../components/Input.vue";
import { ref } from '@vue/reactivity';
import SlotModal from "../components/SlotModal.vue";
    export default {
        components:{
            SlotModal,InputElement
        },
        setup(){
            const isLoginModal = ref(false);
            const isRegisterModal = ref(false)
            const openLoginModal = ()=> isLoginModal.value = true;
            const openRegisterModal = ()=> isRegisterModal.value = true;
            return{
                isLoginModal,openLoginModal,isRegisterModal,openRegisterModal
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
