<template>
    <div>
    <div class="flex">
         <button 
          v-for="link in linkss" :key="link.url" class="pagination_default" v-html="link.label" :class="{'pagination_disable':!link.url, 'pagination_not_active':link.url , 'pagination_active' : link.active}"
          :disabled="!link.url"
          @click.prevent="pagination(link.url)"
          ></button>
    </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import {useStore} from 'vuex';
import Product from "../utilities/composables/Product"
    export default {
        props:{
            links:{
                type: Object
            }
        },
        setup() {
              const store = useStore();
            const {pagination} = Product();
            const linkss = computed(() => store.getters['product/getLinks'])

            return{
                pagination,linkss
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
