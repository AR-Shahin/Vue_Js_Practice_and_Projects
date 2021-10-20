<template>
    <nav class="bg-purple-600 py-3">
        <div class="container">
            <div class="flex justify-between">
            <div><router-link :to="{name:'home'}">Logo</router-link></div>
            <div>
                <router-link :to="{name:'home'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Home</router-link>
                <router-link :to="{name:'todo'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">To Do</router-link>
                <router-link :to="{name:'mark-down'}" class="px-2 mx-2 bg-purple-400 py-1 rounded text-white">Mark Down</router-link>
            </div>
        </div>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
