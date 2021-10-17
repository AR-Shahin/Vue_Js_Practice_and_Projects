<template>
    <div class="bg-green-100 p-3 rounded shadow-md w-2/6
     absolute top-20 right-5 ">
    <div v-if="cartLenght === 0">
        <h3 class="text-center text-yellow-800 font-medium">Cart Is Empty!</h3>
    </div>
    <div v-else>
        <div class="flex my-3 justify-between" v-for="cart in carts" :key="cart.product.id">
            <div class="w-24">
                <img :src="cart.product.image" alt="" class="w-1/2">
                <!-- {{ cart }} -->
            </div>
            <div>
                {{ cart.product.name }}
            </div>
            <div class="self-center">
                <h5 class="font-bold inline-block mr-3">{{ cart.quantity }} * {{ cart.product.price }} = {{cart.product.price = cart.quantity}}</h5>
                <button @click="removeFromCart(cart.product)"  class="btn bg-red-800 text-white"><i class="fa fa-trash"></i></button>
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
        <button @click="clearCart" class="btn bg-red-800 text-white w-full mt-3">Clear All</button>
    </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex'
import Cart from "../utilities/composables/Cart"
    export default {
        setup(){
            const store = useStore();
            const {removeFromCart,clearCart} = Cart();
            const carts = computed(() => store.getters['cart/getCartItems'])
            // console.log(carts.value)
            const cartLenght = computed(() => store.getters['cart/getCartItems'].length)
            return{
                carts,cartLenght,removeFromCart,clearCart
            }
        }
    }
</script>

<style lang="scss" scoped>
   
</style>
