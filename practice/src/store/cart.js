const cart = {
    namespaced: true,
    state :{
        isCartOpen : false,
        cart : [
            //       {
            //       product:{
            //          sell_price:100,
            //           id:5,
            //           name:'lorsem',
            //           image:'dsdd',
            //       },
            //       quantity : 5
                  
            //   }
            ],
    },
    getters : {
        getIsCart (state){
            return state.isCartOpen;
        },
        getCartItems(state) {
            return state.cart
        },
        cartLength(state){
           return state.cart.length
        },
    },
    mutations:{
        TOGGLE_CART(state,payload){
            //console.log(payload)
            state.isCartOpen = payload;
        },
        ADD_TO_CART(state,payload){
            //console.log(typeof payload)
            let oldProduct = state.cart.find((item) => item.product.id == payload.id);
            if(oldProduct){
                console.log(oldProduct.product.price)
                oldProduct.quantity ++ 
            }else{
                state.cart.push({product:payload,quantity : 1})
            }
            
            //console.log({product:payload,quantity : 1})
        },
        REMOVE_FROM_CART(state,payload){
            state.cart
            .splice(state.cart.
                findIndex((item) => item.product.id === payload.id), 1);
        }
        ,CLEAR_CART(state){
            state.cart = []
        },
    },
    actions:{
        toggleCart({commit},payload){
            commit('TOGGLE_CART',payload);
         },
         addToCart({commit},payload){
            commit('ADD_TO_CART',payload);
         },
         removeFromCart({commit},payload){
            commit('REMOVE_FROM_CART',payload);
         },
         clearCart({commit}){
             commit('CLEAR_CART')
         },
    }
}

export default cart
