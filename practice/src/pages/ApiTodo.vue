<template>
  <slot-modal v-if="isModalOpen" @close-slot-modal="isModalOpen = !isModalOpen">
            <template #heading>Add New Todo</template>
            <template #body>
                <form action="" @submit.prevent="addNewTodo">
                    <div class="my-3">
                        <label for="">Title :</label>
                        <Input placeholder="Enter new Todo" id="title" v-model="todo" :class="{'border-red-600' : isError}"/>
                        <span class="text-red-500 text-bold my-2" v-if="isError">{{ isError }}</span>
                    </div>
                    <div class="my-3">
                        <button class="btn w-full bg-green-500">Submit</button>
                    </div>
                </form>
            </template>
        </slot-modal>
        <!-- Update -->
        <slot-modal v-if="isUpdateModal" @close-slot-modal="isUpdateModal = !isUpdateModal">
            <template #heading>Edit Task</template>
            <template #body>
                <form action="" @submit.prevent="updateTask">
                    <div class="my-3">
                        <label for="">Title :</label>
                        <Input placeholder="Enter new Todo" id="title" v-model="editTask" :class="{'border-red-600' : isError}" />
                        <span class="text-red-500 text-bold my-2" v-if="isError">{{ isError }}</span>
                        <input v-model="editId" type="hidden">
                    </div>
                    <div class="my-3">
                        <button class="btn w-full bg-green-500">Update</button>
                    </div>
                </form>
            </template>
        </slot-modal>
        <div class="mx-auto p-3 rounded bg-gray-100 w-2/3">
            <h1 class="text-center text-4xl mb-3">Task with API</h1>
            <div class="flex justify-between border-b-2 pb-3">
                <div class="items-center">
                    <h3 class="text-2xl">Manage Todo </h3>
                </div>
                <div>
                    <div class="btn-blue" @click="isModalOpen = true"><i class="fa fa-plus-circle"></i></div>
                </div>
            </div>
            <div class="flex my-3">
                <Input placeholder="Search..." id="search" v-model="search" @keyup="searchTask"/>
                <span class="bg-green-900 p-2 rounded-r text-white flex items-center">Search <i class="fa fa-search mx-2"></i></span>
            </div>
            <div >
            
                <table class="w-full border" style="min-height:250px">
                <tr>
                    <th class="border py-3">SL</th>
                    <th class="border">Task</th>
                    <th class="border">Status</th>
                    <th class="border">Date</th>
                    <th class="border">Actions</th>
                </tr>
                <tbody class="text-center" v-if="Object.keys(tasks).length  > 0">
                    <tr v-for="(task,index) in tasks" :key="task.key" class="py-2 my-5">
                        <td class="border py-3">{{++index}}</td>
                        <td class="border text-left">{{task.title}}</td>
                        <td class="border" >
                            <span class="rounded p-2 text-white" :class="{'bg-green-700': task.status ,'bg-red-700' : !task.status}">
                                {{task.status == 1 ? 'Active' : 'Inactive'}}
                            </span>
                        </td>
                        <td class="border">{{task.format_date}} {{task.status}}</td>
                        <td class="border">
                            <button @click="inactiveTask(task.key)" v-if="task.status" class="btn text-purple-500"><i class="fa fa-angle-down"></i></button>
                            <button v-if="!task.status" class="btn text-pink-500"><i class="fa fa-angle-up" @click="activeTask(task.key)"></i></button>
                            <button class="btn text-green-500" @click="update(task.key)"><i class="fa fa-edit"></i> {{task.key}}</button>
                            <span class="text-red-500 rounded cursor-pointer " @click="deleteRow(task.key)"><i class="fa fa-trash-alt"></i></span>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="5" class="text-center"><span class="text-red-500">Not Found!! <i class="fas fa-frown-open"></i></span></td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-center mt-3" v-if="links.prev || links.next">
                <div class="p-2 rounded shadow-sm">
                    <button class="bg-gray-400 btn" @click.prevent="prev" v-if="links.prev">Previous</button>
                    <button disabled v-else>Previous</button>
                    </div>
                <div class="p-2 rounded shadow-sm cursor-pointer">
                    <button class="bg-gray-400 btn" @click.prevent="next" v-if="links.next">Next</button>
                    <button disabled v-else>Next</button>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
import { useStore } from 'vuex'
import {  computed } from '@vue/reactivity'
import SlotModal from '../components/SlotModal.vue'
import Input from '../components/Input.vue';
import { onMounted } from '@vue/runtime-core';
import Task from "../utilities/composables/task"

    export default {
    components: { SlotModal,Input },
        setup(){
            const store = useStore();    
            const { fetchAllTodoList,next,prev,searchTask,
                    search,isError,activeTask,inactiveTask,deleteRow,
                    addNewTodo,isModalOpen,todo,showSingleTask,
                    links,update,updateTask,tasks,isUpdateModal,editTask,editId} = Task();

            let authToken = computed(() => store.getters.getAuthToken)
    //        const updateRow = (id) => {
    //      alert(6)
    //     store.dispatch('getSingleTask',id);
    //     isUpdateModal.value = true;
    //     editTask.value = showSingleTask.value.title
    //     editId.value  =  showSingleTask.value.key
    // }
            onMounted(()=> {
                fetchAllTodoList();     
            })
  
            return{
                isModalOpen,todo,addNewTodo,tasks,search,searchTask,links,next,prev,
                deleteRow,isError,activeTask,inactiveTask,isUpdateModal,update,showSingleTask,editId,editTask,updateTask,authToken
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
