import axios from './Api';
import Auth from './Auth';


const Product = () => {
    const {token} = Auth();
    const test = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token()}`;
        const res = await axios.get('products')
        console.log(res)
        return res;
    }

    return {
        test
    }
}
export default Product
