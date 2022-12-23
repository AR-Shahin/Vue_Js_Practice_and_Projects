<template>
    <div>
        <h4>Home</h4>
        <button @click="increment">+</button>
        
        <h5 v-for="user in users" :key="user.first_name">{{ user.first_name }}</h5>
     
    </div>
</template>

<script setup>
    import {useCounterStore} from '@/stores/counter';
    import {useApiStore} from '@/stores/api';
    import { storeToRefs } from 'pinia'

    import { onMounted } from 'vue';
    const counterStore = useCounterStore();
    const ApiStore = useApiStore();
    const {count} = storeToRefs(counterStore);
    const {increment} = counterStore;

    const {loadUsers,getUsers} = ApiStore
    const {data} = storeToRefs(ApiStore);

    const users = [];
    onMounted(()=>{
        loadUsers();
        
        users = getUsers();
    });


</script>

<style lang="scss" scoped>

</style>