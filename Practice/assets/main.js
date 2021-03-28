const app = Vue.createApp({
    data (){
        return {  
           skills : ['PHP','java','Laravel'],
           newSkill : '',
           persons : [{name: 'shahin',age : 21},{name : 'omi',age:22}],
            mode : false
        }
    },
    methods : {
    addNewSkill(){
        if(this.newSkill == ''){
            alert('empty!')
            return
        }
        this.skills.push(this.newSkill);
        this.newSkill =''
    },
    remove(i){
        this.skills.splice(1,i);
    },
    toggle(){
this.mode = !this.mode
    }
    }
 
}).mount('#app')
