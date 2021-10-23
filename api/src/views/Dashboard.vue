<template>
    <div>
        <h1 class="text-center">Dashboard</h1>
       {{ authUser.name }}
    </div>
</template>

<script>

import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
    export default {
        setup(){
            const store = useStore();
            const authUser = computed(()=> store.getters['auth/getAuthUser'])
            return{
                authUser
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
