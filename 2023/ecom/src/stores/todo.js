import { defineStore } from "pinia";
import { ref,computed } from "vue";
import axios from 'axios';

export const useTodoStore = defineStore('todo', () => {

    var url = "http://localhost:8000/api/todos";

    const todoItems = ref([]);

    // Computed Properties
    const lengthOfTodoItems = computed(()=> todoItems.value.length);

    // Getter and Setters
    const reloadTodoItems = (id) =>{
        console.log(todoItems.value);
        todoItems.value = todoItems.value.filter(item => item._id != id);

        console.log(todoItems.value);

    }

    // API call
    async function loadTodoItems (){
        try{
            const {data} = await  axios.get(url)
            todoItems.value = data.data;          
        }catch(err){
            console.log(err)
        }
    }

    async function deleteTodo(id){
        try {
            const response = await axios.delete(`${url}/${id}`);
            loadTodoItems();
            console.log(response)
        } catch (error) {
            
        }
    }

    // 
    return {
        lengthOfTodoItems,loadTodoItems,todoItems,deleteTodo
    }
});