<template>
    <section class="relative">
        <div v-for="(color,index) in sliders" :key="color">
            <transition>
                <div 
                    v-if="currentIndex === index"
                    class="w-full absolute inset-0" 
                    :class="color"
                    style="height:400px">
                </div>
            </transition>
        </div>
    </section>

    <AnotherInput v-model="name" class="hidden"/>
</template>

<script>
import AnotherInput from "../components/AnotherInput.vue";
    export default {
        components : {
            AnotherInput
        },
        data(){
            return{
                sliders : ['bg-red-500' , 'bg-yellow-500' , 'bg-green-500'],
                currentIndex : 0,
                interval : null,
                name : 'shahin'
            }
        },
        mounted(){
            this.interval = setInterval(() => {
                this.currentIndex = this.currentIndex == this.sliderLenght - 1 ? 0 : this.currentIndex + 1;
            }, 1000);
        },
        computed:{
            sliderLenght(){
                return this.sliders.length;
            }
        }
    }
</script>

<style lang="scss" scoped>
.v-enter-from{
    opacity: 0;
}
.v-enter-to{
     opacity: 1;
}
.v-enter-active,.v-leave-active{
    transition: .6s;
}
.v-leave-from{
    opacity: 1;
}
.v-leave-to{
    opacity: 0;
}
</style>
