import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axios from "axios";

export const useApiStore = defineStore("api", ()=> {

    const data = reactive({
        users : []
    });

    const users = ref([])

    function getUsers(){
        return users.value;
    }
    
    function loadUsers(){
        axios
            .get("https://reqres.in/api/users")
            .then(({data:{data}}) => {
             //   console.log(data);
                users.value = data;
            });
    }
    return{
        users, data,loadUsers,getUsers
    }
});