import Swal from "sweetalert2";
import store from "../../store/index";

const Notification = () => {

    const sweetSuccessMessage = (text = 'Data Save Successfully!') =>{
        Swal.fire({
            icon: 'success',
            title: 'Success.',
            text
          })
    }

    const removeNotificationByClick = (id) =>{
        store.dispatch('notification/removeNotificationByClick',id);
    }

    return {
        sweetSuccessMessage,removeNotificationByClick
    }
}
export default Notification;


