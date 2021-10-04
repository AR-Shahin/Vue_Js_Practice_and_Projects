<template>
 <NavBar @login-modal-open="isModalOpen = !isModalOpen"></NavBar>
    <div class="container mt-5">
        <router-view></router-view>
    </div>
    <teleport to='body'>
    <Modal v-if="isModalOpen" @close-modal="isModalOpen = !isModalOpen"/>
    </teleport>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    NavBar,Modal
  },
  data(){
      return {
          isModalOpen : false
      }
  }
}
</script>

<style>

</style>
