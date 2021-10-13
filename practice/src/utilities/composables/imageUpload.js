import {  ref} from '@vue/reactivity';
const ImageUploadComposable = () => {

    const imageFile = ref("");
    const handleImage = (event) => {
        if (event.target.files.length === 0) {
            imageFile.value = "";
            return;
          }
      
          imageFile.value = event.target.files[0];
         // console.log(imageFile.value)
    }



    return{
        handleImage,imageFile
    }
}



export default ImageUploadComposable;
