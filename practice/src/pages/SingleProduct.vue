<template>
    <div>
        <router-link :to="{name:'products'}" class="btn bg-green-600 text-white"><i class="fa fa-angle-left"></i> Back</router-link>

        <div class="mt-3 w-1/3 bg-blue-100 p-3 rounded m-auto">
            <img src="https://via.placeholder.com/150x100" alt="" class="w-full">
            <h2 class="text-2xl cursor-pointer my-2">Demo Product</h2>
            <div class="flex justify-between my-2">
                <span class="block">Price : <span class="text-blue-800">$500</span></span>
                <span class="block">Upload : <span class="text-blue-800">2 days ago</span></span>
            </div>
             <div class="flex justify-between my-3">
             <div class="self-center">
                 <span class="block">Quantity : <span class="text-blue-800">50</span></span>
             </div>
             <button class="btn bg-purple-800  text-white">Add To Cart</button>
            </div>
            <p class="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi aliquam soluta laboriosam adipisci cum ratione ut, ab quas doloribus culpa!</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
