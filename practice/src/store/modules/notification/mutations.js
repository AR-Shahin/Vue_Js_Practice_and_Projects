

export const PUSH_NOTIFICATION = (state,payload) =>{
    state.notifications.push({
        ...payload,
        id : (Math.random().toString(36) + Date.now().toString(36)).substr(2)
    })
}

export const REMOVE_NOTIFICATION = (state,payload) => {
    state.notifications = state.notifications.filter(notification => {
        return notification.id != payload.id;
    })
}
export const REMOVE_NOTIFICATION_BY_CLICK = (state,payload) => {
    state.notifications = state.notifications.filter(notification => {
        return notification.id != payload;
    })
}

