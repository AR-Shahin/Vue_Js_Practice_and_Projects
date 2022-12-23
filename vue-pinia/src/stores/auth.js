import { defineStore } from "pinia";
import { reactive, ref } from "vue";


export const useAuthStore = defineStore("auth", ()=> {

    const user = reactive({
        "name" : "ars",
        "email" : "ars@mail.com"
    });

    const isAuthenticate = ref(false);

    function authenticate(){
        isAuthenticate.value = !isAuthenticate.value;
    }
    return{
        user, isAuthenticate,authenticate
    }
});