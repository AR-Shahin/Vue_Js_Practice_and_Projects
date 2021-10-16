<template>
    <div class="mb-2 bg-yellow-100 rounded p-2">
        <img :src="product.image" alt="" class="min-w-full">
        <router-link :to="{name:'single-product',params:{slug:product.slug}}"><h2 class="text-2xl cursor-pointer my-2">{{ product.name }}</h2></router-link>
        <span class="block">Price : <span class="text-blue-800">${{ product.price }}</span></span>
        <span class="block">Upload : <span class="text-blue-800">{{date}}</span></span>
         <div class="flex justify-between my-3">
             <div class="self-center">
                 <span class="block">Quantity : <span class="text-blue-800">{{product.quantity}}</span></span>
             </div>
             <button class="btn bg-purple-800 text-white" @click="addToCart(product)">Add To Cart</button>
            </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import Cart from "../utilities/composables/Cart"
    export default {
        props:{
            product:{
                type: Object,
                required : true
            }
        },
        setup(props){
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = computed(() => new Date(props.product.created_at).toLocaleString("en-US",options))
            const {addToCart} = Cart();




            return {
                date,addToCart
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
