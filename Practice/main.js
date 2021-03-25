const app = Vue.createApp({
    data (){
        return {
            name : 'Hello Shahin',
            title : 'ars',
            src : 'https://www.facebook.com/',
            btn : '<a href="https://www.facebook.com/">Click Me</a>',
            counter : 0,
            id:'customId',
            isButtonDisabled: true,
            path : 'dd.jpg',
            alt : 'This is an Image',
        
        }
    },
    methods : {
        increment(){
            this.counter++
        },
        method(ev){
            console.log(ev);
        }
    }
 
}).mount('#app')
