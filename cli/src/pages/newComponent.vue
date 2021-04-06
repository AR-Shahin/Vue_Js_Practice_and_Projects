<template>
    <div>
        <h1>This a custom component -> {{id}}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id : this.$route.params.id ? this.$route.params.id  : 404
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>