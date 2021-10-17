
export const pushNotification = ({commit},payload) => {
    commit('PUSH_NOTIFICATION',payload)
}


export const removeNotification = ({commit},payload) => {
    commit('REMOVE_NOTIFICATION',payload)
}

export const removeNotificationByClick = ({commit},payload) => {
    commit('REMOVE_NOTIFICATION_BY_CLICK',payload)
}
