import Helper from "../../utilities/composables/Helper"
import ImageUploadComposable from "../../utilities/composables/imageUpload"
import Api from "./Api";
import { reactive , ref} from '@vue/reactivity';
import store from "../../store";
import router from "../../router";
const toggleRegisterModal = ref(false);
const newUser = reactive({
    name:'',
    email : "",
    password : '',
    password_confirmation : '',
    image : '',
    errors : {}
});
const userLogin = reactive({
    email:'',
    password : '',
    errors : {},
});
const Auth = () => {

    const {print} = Helper();
    const { handleImage,imageFile } = ImageUploadComposable();
   
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
        newUser.image = imageFile.value
        const formData = new FormData();
        formData.append('name',newUser.name);
        formData.append('email',newUser.email);
        formData.append('password',newUser.password);
        formData.append('password_confirmation',newUser.password_confirmation);
        formData.append('image',newUser.image);
        try{
            store.dispatch('toggleLoader',true)
            const {data} = await Api.post(`register`,formData)
            const {data:{token}} = data;
            store.dispatch('setAuthToken',token)
            newUser.name = '';
            newUser.email = '';
            newUser.password = '';
            newUser.password_confirmation = '';
            imageFile.value = '';
            toggleRegisterModal.value = false;
            router.push({name:'calculator'})
        }catch(err){
            store.dispatch('toggleLoader',false)
            print(err)
        }finally{
            store.dispatch('toggleLoader',false)
        }
    }

    return {
        Login,Register,newUser,toggleRegisterModal,print,userLogin,
        handleImage,imageFile
    }
}

export default Auth;
