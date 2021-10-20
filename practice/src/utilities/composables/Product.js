import Api from "../../services/api/Api"
import Helper from "./Helper";
import { useStore } from "vuex";
const Product = () => {
    const {print} = Helper();
    const store = useStore();

    const getAllProduct = async ()=>{
        try{
            store.dispatch('toggleLoader',true);
            const data = await Api.get('product');
            store.dispatch('product/setIsProductFound',false);
            store.dispatch('product/setAllProduct',data);
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
            store.dispatch('product/setSingleProduct',product)
            store.dispatch('product/setIsProductFound',false)
        }catch(err){
            store.dispatch('product/setIsProductFound',true)
            print(err)
        }
    }


    const pagination = async (url) => {
       
        try{
            store.dispatch('toggleLoader',true);
            const data = await Api.get(url);
           // print(data)
            store.dispatch('product/setIsProductFound',false);
            store.dispatch('product/pagination',data);
        }catch(err){
            store.dispatch('toggleLoader',false);
            print(err)
        }finally{
            store.dispatch('toggleLoader',false);
        }  
    }











    return{
        getAllProduct,singleProduct,pagination
    }
}
export default Product
