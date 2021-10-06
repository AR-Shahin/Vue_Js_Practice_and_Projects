<template>
    <div>
        <input type="text" class="w-full p-1 rounded border" :value="modelValue" @input="updateValue($event.target.value)">
    </div>
</template>

<script>
    export default {
        props :{
            modelValue :{
                type : String
            }
        },
        methods:{
            updateValue(value){
                this.$emit('update:modelValue',value)
            }
        },
        created(){
            console.log(this.$props.value)
        }
    }
</script>

<style lang="scss" scoped>

</style>
