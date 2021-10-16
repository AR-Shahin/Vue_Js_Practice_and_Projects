<template>
    <div class="mb-2 bg-yellow-100 rounded p-2">
        <img src="https://via.placeholder.com/150x100" alt="" class="min-w-full">
        <router-link :to="{name:'single-product',params:{slug:'demo-product'}}"><h2 class="text-2xl cursor-pointer my-2">Demo Product</h2></router-link>
        <span class="block">Price : <span class="text-blue-800">$500</span></span>
        <span class="block">Upload : <span class="text-blue-800">2 days ago</span></span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
