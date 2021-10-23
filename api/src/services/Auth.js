import { reactive } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import axios from './Api';


// const path = 'http://127.0.0.1:8000/api';
const authUser = reactive({
    email:'',
    password : '',
    errors : {},
});

const Auth = () => {
    const store = useStore();
    const router = useRouter();
    const Login = async ()=>{
        try{
            const res = await axios.post('auth/login',authUser);
            const {data:{token}} = res;
            const {data:{user}} = res;
            store.dispatch('auth/setAuthToken',token);
            store.dispatch('auth/setAuthUser',user);
            store.dispatch('toggleLoginModal');
            router.push({name:'dashboard'});
        }catch(err){
            console.log(err)
        }
    }
    const isAuthenticate = () => {
        if(store.getters['auth/getAuthToken'] && localStorage.getItem('token')){
            return true;
        }else{
            return false;
        }
    }

    const token = () => {
        return localStorage.getItem('token') && store.getters['auth/getAuthToken'] ? localStorage.getItem('token') : '';
    }
    const Logout = async () =>{
        // console.log(token())
        axios.defaults.headers.common['Authorization'] = `Bearer ${token()}`;
        try{
            const res = await axios.post('auth/logout');
            console.log(res)
            store.dispatch('auth/setAuthLogout');
            router.push({name:'home'});
        }catch(err){
            console.log(err)
        }
    }
    return{
        authUser,Login,isAuthenticate,Logout,token
    }
}



export default Auth;
