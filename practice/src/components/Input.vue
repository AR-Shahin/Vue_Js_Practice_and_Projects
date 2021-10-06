<template>
    <input :type="type" class="w-full p-1 rounded border" :id="id" :placeholder="placeholder">
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
