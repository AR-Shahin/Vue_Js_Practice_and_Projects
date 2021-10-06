<template>
    <section class="h-full w-full bg-gray-400 opacity-50 fixed top-0 left-0 z-20" @click="$emit('close-modal')"></section>
    <div class="absolute z-30  left-1/2 w-1/3 -translate-x-1/2  transform">
        <div class="bg-white rounded p-3 ">
            <div class="border p-2 rounded">
                <h1 class="text-center text-3xl"><slot name="heading">Modal</slot></h1>
            <form action="">
                <slot name="body"></slot>
                <div class="my-2">
                    <slot name="footer">
                        <button class="py-1 px-5 bg-yellow-500 rounded w-full">Login</button>
                    </slot>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>inset-0

<script>
    export default {
       
    }
</script>

<style lang="scss" scoped>

</style>
