<template>
    <div>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-5 "
  >
  <div class="container mx-auto">
    <router-link class="mx-2" :to="route.to" v-for="route in routes" :key="route.title">{{route.title }}</router-link>
    <button @click="toggleModal">Log in</button>
  <!-- 
      <router-link class="mx-2" :to="{name : 'todo'}">To Do</router-link>
      <router-link class="mx-2" to="new-com">Another</router-link>
      <router-link class="mx-2" to="ice-cream">Ice Cream</router-link>
    -->
    </div>  
  </nav>
    <Modal v-if="isModal" @toggle-modal="toggleModal"></Modal>
    </div>
</template>

<script>
import Modal from './Modal'
    export default {
        data(){
          return {
            routes :[
              {title : 'Home',to:'/'},
              {title : 'To Do',to:'/to-do'},
              {title : 'Ice Cream',to:'/ice-cream'},
            ],
            isModal : false
          }
        },
        components : {
          Modal
        },
        methods : {
          toggleModal(){
            this.isModal = !this.isModal;
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>