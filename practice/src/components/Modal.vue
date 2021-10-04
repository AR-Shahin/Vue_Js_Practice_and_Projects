<template>
<div>
    <section @click="$emit('close-modal')" class="h-full w-screen fixed bg-gray-500 opacity-50 z-20 top-0 left-0">
    </section >
      <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-10/12 md:w-1/3">
        <div class="p-2 border">
          <form action="">
              <div class="my-1">
                  <label for="">Email : </label>
                  <input type="text" class="p-1 w-full border-2" placeholder="Enter email">
              </div>
              <div class="my-2">
                  <label for="">Password : </label>
                  <input type="password" class="p-1 w-full border-2" placeholder="Enter email">
              </div>
              <div class="my-2">
                  <button class="w-full bg-green-800 p-1 text-white rounded">Submit</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
