const Helper = () => {

    const print = (el="Ok") => console.log(el);

    // const emptyObjectProperty = (obj) => {
    //     for (let props in obj) {
    //         if(typeof obj[props] === 'object'){
    //             emptyObjectProperty(obj[props]);
    //         }else{
    //             obj[props] = '';
    //         }
    //     }
    // }

    const emptyObjectProperty = (obj) => {
        for (let props in obj) {
            if(typeof obj[props] !== 'object'){
                obj[props] = '';
            }
        }
    }


    return {
        print,emptyObjectProperty
    }
}
export default Helper;
