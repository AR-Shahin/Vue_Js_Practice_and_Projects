export const setAuthToken = ({commit},payload) => {
    commit('SET_AUTH_TOKEN',payload)
}

export const setAuthUser = ({commit},payload) => {
    commit('SET_AUTH_USER',payload)
}

export const setAuthLogout = ({commit}) => {
    commit('SET_AUTH_LOGOUT')
}


