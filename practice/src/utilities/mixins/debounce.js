export default{
    data() {
        return {
            timeOut : ''
        }
    },
    methods: {
        debounce(func ,time = 1000){
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(func,time);
        }
    },
}
