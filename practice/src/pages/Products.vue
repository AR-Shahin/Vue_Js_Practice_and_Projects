<template>
    <div>
        <div class="grid md:grid-cols-4 gap-4 mb-2">
            <Product v-for="i in 8" :key="i"/>
        </div>
        <div class="flex justify-center mb-20">
            <Pagination/>
        </div>
    </div>
</template>

<script>
    import Product from "../components/Product.vue";
    import Pagination from "../components/Pagination.vue";
    export default {
        components:{
            Product,Pagination
        }
    }
</script>

<style lang="scss" scoped>

</style>
