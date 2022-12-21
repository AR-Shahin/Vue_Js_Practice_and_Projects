
<template>
     <div class="d-flex justify-content-center">
         <RouterLink class="btn btn-sm btn-success" :to="{name:'create'}">Create</RouterLink>
     </div>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <table class="table table-bordered table-sm text-center">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th>Image</th>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr v-for="i in 10" :key="i">
                            <td>{{ i }}</td>
                            <td>PHP</td>
                            <td><img src="" alt=""></td>
                            <td>
                                <button class="btn btn-sm btn-info">Edit</button>
                                <button class="btn btn-sm btn-success mx-2">View</button>
                                <button class="btn btn-sm btn-warning">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</div>
</template>


<script setup>
    import { RouterLink } from 'vue-router';
    import axios from 'axios';
    import { onMounted } from '@vue/runtime-core';

    onMounted( async ()=>{
        try{
            console.log("loading")
            const res = await  axios
            .get("https://api.publicapis.org/entries")
            console.log(res)
        }catch(err){
            console.log(err)
        }
    
        console.log("hi");
    });
</script>
