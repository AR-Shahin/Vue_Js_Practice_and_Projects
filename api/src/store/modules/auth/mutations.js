
export const SET_AUTH_TOKEN = (state,payload) =>{
    state.authToken = payload;
    localStorage.setItem('token',payload)
}

export const SET_AUTH_USER = (state,payload) =>{
    state.authUser = payload
}

export const SET_AUTH_LOGOUT = (state) =>{
    state.authUser = null;
    state.authToken = null;
    localStorage.getItem('token',null);
}

