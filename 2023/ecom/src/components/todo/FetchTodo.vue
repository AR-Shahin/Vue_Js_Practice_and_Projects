<template>
     <div class="row justify-content-center">
            <div class="col-md-6">
                <img src="/src/assets/loading.gif" alt="" id="isLoading" v-if="isLoading">
                <table class="table table-bordered table-sm text-center" v-else>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Image</th>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr v-for="todo,index in todoItems" :key="todo.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ todo.title }}</td>
                            <td><img :src="todo.image" alt=""></td>
                            <td>
                                <button class="btn btn-sm btn-info">Edit</button>
                                <button class="btn btn-sm btn-success mx-2">View</button>
                                <button class="btn btn-sm btn-warning" @click="deleteTodo(todo._id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>

<script setup>
    import { onMounted } from '@vue/runtime-core';
    import { storeToRefs } from 'pinia';
    import { RouterLink } from 'vue-router';
    import { useTodoStore } from '@/stores/todo';
    
    const isLoading = false;
    const todoStore = useTodoStore();

    const {todoItems,lengthOfTodoItems} = storeToRefs(todoStore);
    const {loadTodoItems,deleteTodo} = todoStore;

    onMounted(()=>{
        loadTodoItems();
    });

</script>

<style lang="scss" scoped>

</style>