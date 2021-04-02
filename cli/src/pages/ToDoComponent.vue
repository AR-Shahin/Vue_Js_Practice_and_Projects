<template>
    <div class="mx-auto">
        <h1 class="text-center text-3xl font-medium pb-1">{{ title }}</h1>
        <hr>
        <div class="grid grid-cols-3 gap-4 mt-2">
    <div>
        <input type="text" class="border rounded px-2" v-model="user.name" placeholder="Enter your name">
        </div>
        <div>
        <input type="text" class="border rounded px-2" v-model="user.roll" placeholder="Enter your roll">
        </div>
        <div>
        <button class="p-2 bg-gray-900 text-white rounded" @click="addNewData">Add New Data</button>
        </div>
    </div>
            <hr>
            <h3 class="text-center py-3">Total Row : {{setDefaultData}}</h3>
        <table class="border-separate border border-green-800 text-center mt-5 mx-auto ">
            <thead>
                <tr>
                <th class="border border-green-600 ...">SL</th>
                <th class="border border-green-600 ...">Name</th>
                <th class="border border-green-600 ...">Phone</th>
                <th class="border border-green-600 ...">Actions</th>
                </tr>
            
            </thead>
            <tbody>
                <tr v-for="(data,index) in database" :key="data.name">
                <td class="border border-green-600 ...">{{ index+1 }}</td>
                <td class="border border-green-600 ...">{{ data.name }}</td>
                 <td class="border border-green-600 ...">{{ data.roll }}</td>
                  <td class="border border-green-600 ..."><button class="bg-red-500 text-white p-2" @click="deleteRow(index)">Delete</button></td>

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
        },
        methods : {
            addNewData(){
                if(this.verifyData()){
                    alert('Field Must not be empty!')
                    return
                }
                this.database.push({name : this.user.name,roll : this.user.roll})
                this.clearData()
            },
            deleteRow(index){
                this.database = this.database.filter((item,i) => {
                    return i != index
                })
            },
            verifyData(){
                if(this.user.name == '' || this.user.roll == ''){
                    return true;
                }
                return false 
        },
            clearData(){
                this.user.name =''
                this.user.roll = ''
        },
           
        },
        watch : {
            'user.roll'(oldVal){
                if(isNaN(oldVal)){
                alert('Roll Should be Number!')
                } 
            }
        },
        computed : {
            setDefaultData(){
              return this.database.length
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>