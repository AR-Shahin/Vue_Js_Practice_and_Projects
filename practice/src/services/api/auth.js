import Helper from "../../utilities/composables/Helper"
import ImageUploadComposable from "../../utilities/composables/imageUpload"
import Api from "./Api";
import { reactive , ref} from '@vue/reactivity';
import store from "../../store";
// import router from "../../router";
import { useRouter } from 'vue-router'
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
    const router = useRouter();
    const {print,emptyObjectProperty} = Helper();
    const { handleImage,imageFile } = ImageUploadComposable();
   
    const Login = async () => {
        try{
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
            store.dispatch('toggleLoader',true);
            emptyObjectProperty(newUser.errors)
            const {data} = await Api.post(`register`,formData)
            const {data:{token}} = data;
            store.dispatch('setAuthToken',token)
            toggleRegisterModal.value = false;
            emptyObjectProperty(newUser)
            router.push({name:'calculator'})
        }catch(err){
            store.dispatch('toggleLoader',false);
            //console.log('afain');
            if(err.response.data.errors.name){
                newUser.errors.name = (err.response.data.errors.name[0])
            }
            if(err.response.data.errors.email){
                newUser.errors.email = (err.response.data.errors.email[0])
            }
            if(err.response.data.errors.password){
                newUser.errors.password = (err.response.data.errors.password[0])
            }
            if(err.response.data.errors.password_confirmation){
                newUser.errors.password_confirmation = (err.response.data.errors.password_confirmation[0])
            }
            if(err.response.data.errors.image){
                newUser.errors.image = (err.response.data.errors.image[0])
            }
        }finally{
            store.dispatch('toggleLoader',false)
        }
    }

    const Logout = async () => {
       try{
           await Api.post('logout');
           store.dispatch('logout');
           router.push({name:'slider'})
       }catch(err){
           print(err)
       }
    }
    return {
        Login,Register,newUser,toggleRegisterModal,print,userLogin,
        handleImage,imageFile,Logout
    }
}

export default Auth;
