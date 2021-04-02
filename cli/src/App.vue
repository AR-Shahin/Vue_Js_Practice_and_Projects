<template>
  <div>
      <Navbar/>
      <div class="container mx-auto py-10 text-center">
        <router-view></router-view>
      </div>
      <Footer></Footer>
  </div>

</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Navbar,Footer
  }
}
</script>

<style>

</style>
