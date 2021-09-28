<template>
    <div>
    <section class="flex mt-3 px-3">
         <div class="w-2/12 ">
         <img :src="data.image" alt="" class="rounded-full w-12 h-12">
         </div>
         <article class="w-10/12 ml-2 self-center border-gray-100 border-b-2 ">
             <div class="top flex justify-between">
                 <h5 class="font-semibold">{{ data.name }}</h5>
                 <span class="text-sm"
          :class="data.count > 0 ? 'text-green-500' : 'text-gray-500'">{{data.time}}</span>
             </div>
              <div class="bottom flex justify-between pb-1">
                 <h5 class="text-gray-500">{{data.message}}</h5>
                 <span class="bg-green-500 rounded-full text-white w-5 h-5 text-center text-sm pb-1" v-if="data.count > 0">{{data.count}}</span>
             </div>
         </article>
     </section>
    </div>
</template>

<script>
    export default {
        props : ['data'],
        
    }
</script>

<style lang="scss" scoped>

</style>