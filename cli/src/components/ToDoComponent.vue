<template>
    <div>
        <h1 class="text-center text-3xl font-medium pb-1">{{ title }}</h1>
        <hr>
        <div class="grid grid-cols-3 gap-4 mt-2">
    <div>
        <input type="text" class="border rounded px-2" v-model="name" placeholder="Enter your name">
        </div>
        <div>
        <input type="text" class="border rounded px-2" v-model="roll" placeholder="Enter your roll">
        </div>
        <div>
        <button class="p-2 bg-gray-900 text-white rounded" @click="addNewData">Add New Data</button>
        </div>
    </div>
            <hr>
        <table class="border-separate border border-green-800 text-center mt-2 ">
            <thead>
                <tr>
                <th class="border border-green-600 ...">SL</th>
                <th class="border border-green-600 ...">Name</th>
                <th class="border border-green-600 ...">Phone</th>
                <th class="border border-green-600 ...">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="border border-green-600 ...">Indiana</td>
                <td class="border border-green-600 ...">Indianapolis</td>
                 <td class="border border-green-600 ...">Indianapolis</td>
                  <td class="border border-green-600 ...">Indianapolis</td>

                </tr>
              
            </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                title : 'This is To Do Component',
                database : [],
                user :{
                    name : '',
                    phone : ''
                }
            }  
        }
    }
</script>

<style lang="scss" scoped>

</style>