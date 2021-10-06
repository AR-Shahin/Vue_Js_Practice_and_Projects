<template>
    <input :type="type" class="w-full p-1 rounded border" :id="id" :placeholder="placeholder" :value="modelValue" @input="modelUpdate($event.target.value)">
</template>

<script>

    export default {
        props:{
            type:{
                type : String,
                default : 'text'
            },
            placeholder : {
                type : String
            },
            id:{
                type : String,
                required : true
            },
            modelValue:{
                type : String,
            }
        },
        setup(_,{ emit }) {

            function modelUpdate(value){
                emit('update:modelValue',value)
            }
            return{
                modelUpdate
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
