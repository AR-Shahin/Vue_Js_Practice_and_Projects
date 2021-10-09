import Swal from "sweetalert2";

const Notification = () => {

    const sweetSuccessMessage = (text = 'Data Save Successfully!') =>{
        Swal.fire({
            icon: 'success',
            title: 'Success.',
            text
          })
    }



    return {
        sweetSuccessMessage
    }
}
export default Notification;


