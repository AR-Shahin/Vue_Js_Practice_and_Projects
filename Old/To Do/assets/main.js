const app = Vue.createApp({
    data (){
        return {  
           name : '',
           roll : '',
           database :[
               {
                   name : 'Shahin',
                   roll : 101
               },
               {
                   name : 'omi',
                   roll : 102
               }
              
            ],

        }
    },
    methods : {
        addNewData(){
            if(this.verifyData()){
                alert('Field must not be empty!')
                return
            }
            this.database.push({
                'name' : this.name,
                'roll' : this.roll
            });
            this.clearData();
        },
        verifyData(){
            if(this.name == '' || this.roll == ''){
                return true;
            }
            return false 
        },
        clearData(){
            this.name =''
            this.roll = ''
        },
        deleteRow(index){
            this.database = this.database.filter((item,i) => {
                return i!= index
            })
        }
    },
    watch :{
        roll(oldVal,newVal){
            if(isNaN(oldVal)){
                alert('Roll Should be Number!')
            }    
        }
    }

    
 
}).mount('#app')
