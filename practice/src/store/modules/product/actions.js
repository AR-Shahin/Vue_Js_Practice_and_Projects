export const setAllProduct = ({commit},payload) => {
    commit('SET_ALL_PRODUCT',payload)
 }
 export const setSingleProduct = ({commit},payload) => {
    commit('SET_SINGLE_PRODUCT',payload)
 }
 export const setIsProductFound = ({commit},payload) => {
    commit('SET_PRODUCT_FOUND_OR_NOT',payload)
 }
  export const pagination = ({commit},payload) => {
    commit('pagination',payload)
 }
