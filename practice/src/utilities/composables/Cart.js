import {useStore} from 'vuex';
const Cart = () => {
    const store = useStore();

    const LengthOfCart = () => {
        return store.getters.cartLength
    }

    const addToCart = (product) => {
       // console.log(product)
        store.dispatch('addToCart',product)
    }
    const removeFromCart = (product) => {
        store.dispatch('removeFromCart',product)
    }

    const clearCart = () => {
        store.dispatch('clearCart')
    }

    return{
        LengthOfCart,addToCart,removeFromCart,clearCart
    }
}

export default Cart

