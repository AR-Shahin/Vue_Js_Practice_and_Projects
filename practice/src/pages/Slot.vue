<template>
    <div class="text-center">
        <div class="mt-12">
            <button class="py-1 px-5 bg-yellow-500 rounded mx-2" @click="openLoginModal">Login</button>
            <button class="py-1 px-5 bg-green-500 rounded" @click="openRegisterModal">Register</button>
        </div>
    </div>
    <teleport to='body'>
        <!-- Login Modal -->
        <SlotModal v-if="isLoginModal" @close-slot-modal="isLoginModal = !isLoginModal" @another="test">
            <template #heading>Login </template>
            <template #body>
                <form  @submit.prevent="submitLoginForm">
                     <div class="my-2">
                        <label for="">Username : </label>
                        <InputElement id="userName" placeholder="Enter Your Username" v-model="userName"/>
                        <!-- <input type="text" :value="userName" @input="userName = $event.target.value"> -->
                    </div>
                    <div class="my-2">
                        <label for="">Email : </label>
                        <InputElement type="email" id="email" placeholder="Enter Your Email" v-model="email"/>
                    </div>
                     <button type="submit" class="py-1 px-5 bg-green-500 rounded w-full">Login</button>
                </form>
            </template>
            <!-- <template #footer>
                <button type="submit" class="py-1 px-5 bg-green-500 rounded w-full">Login</button>
            </template> -->
        </SlotModal>

        <!-- Regisger Modal -->
         <SlotModal v-if="isRegisterModal" @close-slot-modal="isRegisterModal = false">
            <template #heading>Register</template>
                <template #body>
                    <form action="" @submit.prevent="submitRegisterForm">
                        <div class="my-2">
                            <label for="">Username : </label>
                            <InputElement  id="userName" placeholder="Enter Your Username" />
                        </div>
                        <div class="my-2">
                            <label for="">Email : </label>
                            <InputElement type="email" id="email" placeholder="Enter Your Email"/>
                        </div>
                        <div class="my-2">
                            <label for="">Password : </label>
                            <InputElement type="password" id="password" placeholder="Enter Your Password"/>
                        </div>
                        <div class="my-2">
                            <button type="submit" class="py-1 px-5 bg-yellow-500 rounded w-full">Register</button>
                        </div>
                    </form>
                </template>
        </SlotModal>
    </teleport>
</template>

<script>
import InputElement from "../components/Input.vue";
import { ref } from '@vue/reactivity';
import SlotModal from "../components/SlotModal.vue";
import Helpler from "../utilities/composables/Helper";
    export default {
        components:{
            SlotModal,InputElement
        },
        setup(){
            const isLoginModal = ref(false);
            const isRegisterModal = ref(false)
            const openLoginModal = ()=> isLoginModal.value = true;
            const openRegisterModal = ()=> isRegisterModal.value = true;
            const userName = ref("User Name");
            const email = ref("");
            const {print} = Helpler();
            function submitLoginForm(){
                console.log(3)
            }
            function test(pay){
               print(pay)
            }
            function submitRegisterForm(){
                print()
            }
            return{
                isLoginModal,openLoginModal,isRegisterModal,openRegisterModal,userName,email,submitLoginForm,test,submitRegisterForm
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
