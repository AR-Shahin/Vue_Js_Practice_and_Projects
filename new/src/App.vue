<template>
 <NavBar></NavBar>
    <div class="container mt-5">
        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
