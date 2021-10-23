import { reactive } from '@vue/reactivity';



const authUser = reactive({
    email:'',
    password : '',
    errors : {},
});

const Auth = () => {


    return{
        authUser
    }
}



export default Auth;
