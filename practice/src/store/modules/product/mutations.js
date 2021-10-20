export const SET_ALL_PRODUCT = (state,payload) =>{
// console.log(payload)
    state.products = [];
    state.links = []
    const {data:{data:products}} = payload;
    const {data:{links}} = payload
       state.links.push(...links);
       //console.log(state.links)
    state.products.push(...products) 
}
export const SET_SINGLE_PRODUCT = (state,payload) =>{
    state.product = payload
}
export const SET_PRODUCT_FOUND_OR_NOT = (state,payload) =>{
    state.isProductFound = payload
}

export const pagination = (state,payload) =>{
   // console.log(state.links)
        state.products = [];
       // state.links = []
        const {data:{data:products}} = payload;
        const {data:{links}} = payload
        console.log(links)
           //state.links.push(...links);
           //console.log(state.links)
        state.products.push(...products) 
    }

