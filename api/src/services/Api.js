import axios from "axios";

const path = 'http://127.0.0.1:8000/api';

axios.defaults.baseURL = path

export default axios;
