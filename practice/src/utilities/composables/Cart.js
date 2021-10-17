import {useStore} from 'vuex';
const Cart = () => {
    const store = useStore();

    const LengthOfCart = () => {
        return store.getters.cartLength
    }

    const addToCart = (product) => {
       // console.log(product)
        store.dispatch('cart/addToCart',product);
        store.dispatch('notification/pushNotification', {
            type: 'Success',
            class : 'bg-green-600',
            textClass : 'text-green-600',
            message : 'Product added to Cart !',
        })
    }
    const removeFromCart = (product) => {
        store.dispatch('cart/removeFromCart',product);
        store.dispatch('notification/pushNotification', {
            type: 'Success',
            class : 'bg-red-600',
            textClass : 'text-red-600',
            message : 'Product Remove From Cart !',
        })
    }

    const clearCart = () => {
        store.dispatch('cart/clearCart');
        store.dispatch('notification/pushNotification', {
            type: 'Success',
            class : 'bg-red-600',
            textClass : 'text-red-600',
            message : 'Product Remove From Cart !',
        })
    }

    return{
        LengthOfCart,addToCart,removeFromCart,clearCart
    }
}

export default Cart

