<template>
  <div>
      <Navbar/>
      <div class="container mx-auto py-10">
        <ToDoComponent/>
      </div>
      <Footer></Footer>
  </div>

</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ToDoComponent from './components/ToDoComponent.vue';

export default {
  name: 'App',
  components: {
    ToDoComponent,
    Navbar,Footer
  }
}
</script>

<style>

</style>
