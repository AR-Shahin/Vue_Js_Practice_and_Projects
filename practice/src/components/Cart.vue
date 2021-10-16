<template>
    <div class="bg-green-100 p-3 rounded shadow-md w-2/6 absolute top-20 right-5">
        <div class="flex my-3 justify-between" v-for="i in 3" :key="i">
            <div class="">
                <img src="https://via.placeholder.com/150x100" alt="" class="w-1/2">
            </div>
            <div class="self-center">
                <h5 class="font-bold inline-block mr-3">2 * 50 = 100</h5>
                <button class="btn bg-red-800 text-white"><i class="fa fa-trash"></i></button>
            </div>
        </div>
        <div class="flex justify-between border-yellow-600 border-t">
            <div class="mt-1">
                <h5 >Total</h5>
            </div>
            <div class="mt-1">
            <h6 class="font-bold">3 * 50 = 1500</h6>
            </div>
        </div>
        <button class="btn bg-red-800 text-white w-full mt-3">Clear All</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
