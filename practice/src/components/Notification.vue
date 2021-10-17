
<template>
    <div class="fixed bottom-5 right-5 w-100">
    <NotifyContent v-for="notificaiton in notificaitons" :key="notificaiton.id" :notificaiton="notificaiton"/>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex'
import NotifyContent from "./NotifiContent.vue"
    export default {
        components:{
            NotifyContent
        },
        setup(){
            const store = useStore()
            const notificaitons = computed(()=> store.getters.getNotifications)
            return{
notificaitons
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
