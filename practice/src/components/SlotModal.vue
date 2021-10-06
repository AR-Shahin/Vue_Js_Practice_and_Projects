<template>
    <section class="h-full w-full bg-gray-400 opacity-50 fixed top-0 left-0 z-20" @click="fired"></section>
    <div class="absolute z-30  left-1/2 w-1/3 -translate-x-1/2  transform">
        <div class="bg-white rounded p-3 ">
            <div class="border p-2 rounded">
                <h1 class="text-center text-3xl"><slot name="heading">Modal</slot></h1>  
                <slot name="body"></slot>
                <div class="my-2">
                </div>
            </div>
        </div>
    </div>
</template>inset-0

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
