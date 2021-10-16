import Api from "../../services/api/Api"
import Helper from "./Helper";
import { useStore } from "vuex";
const Product = () => {
    const {print} = Helper();
    const store = useStore();

    const getAllProduct = async ()=>{
        try{
            store.dispatch('toggleLoader',true);
            const {data:products} = await Api.get('product');
            store.dispatch('setIsProductFound',false);
            store.dispatch('setAllProduct',products);
        }catch(err){
            store.dispatch('toggleLoader',false);
            print(err)
        }finally{
            store.dispatch('toggleLoader',false);
        }  
    }

    const singleProduct = async (slug) => {
        try{
            const {data:product} = await Api.get(`product/${slug}`);
            store.dispatch('setSingleProduct',product)
            store.dispatch('setIsProductFound',false)
        }catch(err){
            store.dispatch('setIsProductFound',true)
            print(err)
        }
    }














    return{
        getAllProduct,singleProduct
    }
}
export default Product
