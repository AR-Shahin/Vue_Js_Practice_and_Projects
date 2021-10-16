<template>
    <div>
        <div class="grid md:grid-cols-4 gap-4 mb-2">              
            <Product v-for="product in products" :key="product.id" :product="product"/>
        </div>
        <div class="flex justify-center mb-20">
            <Pagination/>
        </div>
    </div>
</template>

<script>
    import Product from "../components/Product.vue";
    import Pagination from "../components/Pagination.vue";
    import ProductComposable from '../utilities/composables/Product';
    import { computed, onMounted } from '@vue/runtime-core';
    import {useStore} from 'vuex';
    export default {
        components:{
            Product,Pagination
        },
        setup(){
            const store = useStore();
            const {getAllProduct} = ProductComposable();

            const products = computed(() => store.getters.getAllProducts)
            onMounted(()=> {
                getAllProduct();
            })








            return{
                products
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
