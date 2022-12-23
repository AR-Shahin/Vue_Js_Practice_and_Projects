<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <RouterLink :to="{name :'home'}" class="nav-link">Home</RouterLink>
                <RouterLink to="/about" class="nav-link">About</RouterLink>
                <RouterLink :to="{name:'admin'}" class="nav-link">Admin</RouterLink>

                <div v-if="authStore.isAuthenticate">
                    Hi, {{ user.name }}
                    <button class="btn btn-sm btn-warning" @click="authenticate">Logout</button>
                </div>
                <div v-else>
                    <button class="btn btn-sm btn-success" @click="authenticate">Login</button>
                </div>
            </div>
            </div>
        </div>
        </nav>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import {useAuthStore} from "@/stores/auth";
    import { storeToRefs } from 'pinia';

    const authStore = useAuthStore();
    const {isAuthenticate,user} = storeToRefs(authStore);

    const {authenticate} = authStore;

</script>

<style lang="scss" scoped>

</style>