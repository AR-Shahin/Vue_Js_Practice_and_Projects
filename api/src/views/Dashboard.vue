<template>
    <div>
        <h1 class="text-center">Dashboard</h1>
        {{ test() }}
    </div>
</template>

<script>
import Product from "@/services/Product";
    export default {
        setup(){

            const {test} = Product()
            return{
                test
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
