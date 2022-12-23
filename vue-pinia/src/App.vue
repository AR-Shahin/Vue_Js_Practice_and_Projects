<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HomeNavbarVue from './components/HomeNavbar.vue';
</script>

<template>
  <HomeNavbarVue/>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

</style>