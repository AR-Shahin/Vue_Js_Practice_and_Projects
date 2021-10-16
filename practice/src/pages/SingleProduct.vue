<template>
    <div>
        <router-link :to="{name:'products'}" class="btn bg-green-600 text-white"><i class="fa fa-angle-left"></i> Back</router-link>
        <div v-if="isProduct" class="mt-3 w-1/3 bg-blue-100 p-3 rounded m-auto">
            <h2 class="text-center text-red-500">Product Not Found!</h2>
        </div>
        <div class="mt-3 w-1/3 bg-blue-100 p-3 rounded m-auto" v-else >
            <img :src="product.image" alt="" class="w-full">
            <h2 class="text-2xl cursor-pointer my-2">{{product.name}}</h2>
            <div class="flex justify-between my-2">
                <span class="block">Price : <span class="text-blue-800">${{product.price}}</span></span>
                <span class="block">Upload : <span class="text-blue-800">{{product.created_at}}</span></span>
            </div>
             <div class="flex justify-between my-3">
             <div class="self-center">
                 <span class="block">Quantity : <span class="text-blue-800">{{product.quantity}}</span></span>
             </div>
             <button class="btn bg-purple-800  text-white">Add To Cart</button>
            </div>
            <p class="mt-2">{{product.des}}</p>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import {useRoute} from 'vue-router';
import ProductComposable from "../utilities/composables/Product"
import store from '../store';
    export default {
        setup(){
            const route = useRoute();
            const {singleProduct} = ProductComposable();

            const isProduct = computed(() => store.getters.getIsProductFound)
            const product = computed(() => store.getters.getSingleProduct)
            onMounted(()=> {
                singleProduct(route.params.slug);
            })




            return {
                isProduct,product
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
