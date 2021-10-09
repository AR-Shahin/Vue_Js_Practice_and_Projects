<template>
    <section class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50" @click="fired"></section>
    <div class="absolute  z-30  left-1/2 w-1/3 top-3/5 -translate-x-1/2  transform">
        <div class="bg-white rounded p-3 ">
            <div class="border p-2 rounded">
                <h1 class="text-center text-3xl"><slot name="heading">Modal</slot></h1>  
                <slot name="body"></slot>
                <div class="my-2">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        emits :{
            'close-slot-modal': null,
            'another' : (payload) => {
                if(typeof(payload.name) === 'string'){
                    return true;
                }
                return false
            }
            },
       setup(_,{ emit }) {
           function fired(){
               emit('close-slot-modal');
               emit('another',{name:"shahin"});
           }
           return {
               fired
           }
       }
    }
</script>

<style lang="scss" scoped>

</style>
