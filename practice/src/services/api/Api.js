import axios from "axios";
//  import store from "../../store/index";

//  alert(store)

// console.log(store.getters.getAuthToken)
const Api = axios.create({
    baseURL : 'http://127.0.0.1:8000/api',
    headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        // 'Authorization' : "Bearer " + store.getters.getAuthToken 
        // 'Authorization' : "Bearer " + JSON.parse(localStorage.getItem('token'))
        'Authorization' : localStorage.getItem('token') ? "Bearer " + JSON.parse(localStorage.getItem('token')) : ''
    }
})


export default Api
