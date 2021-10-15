import store from "../../store";
import Api from "../../services/api/Api"
import Notification from "../composables/Notification";
import { ref, computed } from '@vue/reactivity';
import {print} from "./Helper";
const {sweetSuccessMessage} = Notification();
const Task = () => {
    const search = ref('');
    const isError = ref("");
    const todo = ref("");
    const isModalOpen = ref(false);
    const isUpdateModal = ref(false);
    const editId = ref(null);
    const editTask = ref("");
    let tasks =  computed(() => store.getters.getTaskList);
    let links =  computed(() => store.getters.getTaskLinks);
    let showSingleTask = computed(()=> store.getters.getSingleTask);
    const fetchAllTodoList = async () => {
       try{
            store.dispatch('toggleLoader',true);
            const {data} = await Api.get('task');
            store.dispatch('setInitialTasks',data);
       }catch(err){
            store.dispatch('toggleLoader',false);
        print(err)
       }finally{
            store.dispatch('toggleLoader',false);
       }
    }

    const next = async ()=>{
        try{
            store.dispatch('toggleLoader',true);
            const {data} = await Api.get(links.value.next)
            store.dispatch('setInitialTasks',data);
        }catch(err){
            store.dispatch('toggleLoader',false);
        }finally{
            store.dispatch('toggleLoader',false);
        }
    }
    const prev = async ()=>{
        try{
            store.dispatch('toggleLoader',true);
            const {data} = await Api.get(links.value.prev)
            store.dispatch('setInitialTasks',data);
        }catch(err){
            print(err);
            store.dispatch('toggleLoader',false);
        }finally{
            store.dispatch('toggleLoader',false);
        }
    }

    const searchTask = async () => {
        try{
            if(search.value){
                const {data:response} = await Api.get(`/task_search/${search.value}`)
                store.dispatch('setInitialTasks',response); 
            }else{
                fetchAllTodoList();
            }
        }catch(err){
            print(err)
        }
    }

    const activeTask = (id) => {
        Api.post(`/task_active/${id}`)
        store.dispatch('activeTask',id);
    }
    const inactiveTask = (id) => {
        Api.post(`/task_inactive/${id}`)
        store.dispatch('inactiveTask',id);
    }
    const deleteRow = async (id) => {
        try{
            await Api.delete(`/task/${id}`);
            store.dispatch('removeTask',id);
            sweetSuccessMessage()  
            if(tasks.value.length < 5){
                fetchAllTodoList()
            }
        }catch(err){
            print(err)
        }
    }

    const addNewTodo = async () => {
        try{
            const {data:{data}} = await Api.post(`/task`,{
             name : todo.value,
         });
         store.dispatch('addNewTodo',data);
         todo.value = "";
         isModalOpen.value = false;
         isError.value = ""
        }catch(err){
           if(err.response.data.errors.name){
                 isError.value = (err.response.data.errors.name[0])
             }
        }
     }
     const update = (id) => {
        store.dispatch('getSingleTask',id);
        isUpdateModal.value = true;
        editTask.value = showSingleTask.value.title
        editId.value  =  showSingleTask.value.key
    }

    const updateTask = async () => {
        try{
            const response = await Api.put(`/task/${editId.value}`,{
                name : editTask.value
            });
            isUpdateModal.value = false;
            let {data:{message}} =response
            sweetSuccessMessage(message);
            const {data:{data:task}} = response;

            store.dispatch('updateTask',{
                key : editId.value,
                task
            });
        }catch(err){
             if(err.response.data.errors.name){
                isError.value = (err.response.data.errors.name[0])
            }
        }
    }
    return{
        fetchAllTodoList,next,prev,searchTask,search,isError,activeTask,inactiveTask,deleteRow,
        addNewTodo,isModalOpen,todo,showSingleTask,links,update,updateTask,tasks
    }
}
export default Task;
