<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
         
          class="w-full h-full"
          :value="text"
          @input="markDownType"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="convertTextToMarkDown"></article>
    </section>
  </div>
</template>
<script>
import marked from "marked";
import debounce from "../utilities/mixins/debounce";
    export default {
        mixins : [debounce],
        data(){
            return{
                markedText : '',
                text : '',
            }
        },
        methods: {
            markDownType(e){
                clearTimeout(this.timeOut);
                const task = () => this.text = e.target.value;
                this.debounce(task,500)
            }
        },
        computed : {
            convertTextToMarkDown(){
               return marked(this.text);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
