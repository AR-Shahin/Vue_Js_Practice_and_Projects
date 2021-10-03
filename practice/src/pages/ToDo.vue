<template>
    <section class="w-1/2 p-3 mx-auto mt-5 border-2">
        <h2 class="text-center text-3xl">To Do List</h2>
        <form action="" class="mb-3" @submit.prevent="addNewList">
            <div class="mt-3 flex">
                <input type="text" class="p-2 border-2 w-2/3" :class="{'border-red-600' : isEmpty}" placeholder="Enter a List" v-model="list">
                <button class="p-2 w-1/3 bg-indigo-900 text-white font-mono font-bold">Submit</button>
            </div>
            <span v-if="isEmpty" class="text-red-900 mt-1 inline-block">Field Must Not be Empty!</span>
        </form>
        <table class="w-full border" v-if="lengthOfList > 0">
            <tr>
                <th class="border py-3">SL</th>
                <th class="border">List</th>
                <th class="border">Actions</th>
            </tr>
            <tbody class="text-center">
                <tr v-for="list in lists" :key="list.id" class="py-2 my-1">
                    <td class="border py-3">{{list.id}}</td>
                    <td class="border">{{list.name}}</td>
                    <td class="border"><span class="text-red-500 rounded cursor-pointer" @click="deleteRow(list.id)"><i class="fa fa-trash-alt"></i></span></td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                lists: [{id:1,name:'List One'}],
                list : '',
                isEmpty : false,
            }
        },
        methods : {
            addNewList(){
                if(this.list){
                    this.lists.push({
                        id : this.generateRandomId() + 1,
                        name : this.list
                    });
                    this.list = '';
                    this.isEmpty = false;
                }else{
                    this.isEmpty = true;
                }
            },
            generateRandomId(min = 1,max = 100){
                return Math.floor(Math.random() * (max - min + 1) + min)
            },
            deleteRow(id) {
                this.lists = this.lists.filter(item => {
                   return item.id !== id 
                })
            }
        },
        computed:{
            lengthOfList() {
                return this.lists.length
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
