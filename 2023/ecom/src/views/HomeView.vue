
<template>
     <div class="d-flex justify-content-center">
         <RouterLink class="btn btn-sm btn-success" :to="{name:'create'}">Create</RouterLink>
     </div>
     <FetchTodo/>
    <div class="container mt-5">
       
    </div>
</template>


<script setup>
    import { RouterLink } from 'vue-router';
    import FetchTodo from '../components/todo/FetchTodo.vue';
    
</script>
