import Helper from "../../utilities/composables/Helper"
import Api from "./Api";
import { reactive , ref} from '@vue/reactivity';
import store from "../../store";
import router from "../../router";
const toggleRegisterModal = ref(false);
const newUser = reactive({
    name:'',
    email : "",
    password : '',
    password_confirmation : ''
});
const userLogin = reactive({
    email:'',
    password : '',
    errors : {},
});
const Auth = () => {

    const {print} = Helper();

    const Login = async () => {
        try{
           // store.state.authToken = null
            const {data} = await Api.post('login',userLogin);
            const {data:{user}} = data;
            const {data:{token}} = data;
            store.dispatch('setAuthToken',token);
            store.dispatch('setAuthUser',user);
            router.push({name:'calculator'})
        }catch(err) {
            if(err.response.data.errors.email){
                userLogin.errors.email = (err.response.data.errors.email[0])
            }
            if(err.response.data.errors.password){
                userLogin.errors.password = (err.response.data.errors.password[0])
            }
        }
    }

    const Register = async () => {
        const {data} = await Api.post(`register`,newUser)
        const {data:{token}} = data;
        store.dispatch('setAuthToken',token)
        toggleRegisterModal.value = false;
        router.push({name:'calculator'})
    }

    return {
        Login,Register,newUser,toggleRegisterModal,print,userLogin
    }
}

export default Auth;
