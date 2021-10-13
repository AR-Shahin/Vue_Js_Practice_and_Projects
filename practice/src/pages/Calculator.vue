<template>
    <section class="flex w-full">
        <div class="m-auto">
            <div class="m-auto">
            <p  class="text-3xl text-right border mt-10 w-56 h-16 overflow-x-scroll">
                
                {{ currentNum }}
            </p>
            <div class="h-10 font-medium text-gray-600">
            <div class="flex justify-between my-1">
                <small >{{previosNum}} {{operation}} {{currentNum}}  </small>
            <button @click="remove" class="px-2 bg-red-600 text-white rounded">AC</button>
            </div>
            <div class="grid grid-cols-4 gap-1 text-black mt-1">
                <button @click="pressed('1')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    1
                </button>
                <button @click="pressed('2')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    2
                </button>
                <button @click="pressed('3')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    3
                </button>
                <button @click="pressed('+')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    +
                </button>
                <button @click="pressed('4')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    4
                </button>
                <button @click="pressed('5')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    5
                </button>
                <button @click="pressed('6')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    6
                </button>
                <button @click="pressed('-')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    -
                </button>
                <button @click="pressed('7')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    7
                </button>
                <button @click="pressed('8')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    8
                </button>
                <button @click="pressed('9')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    9
                </button>
                <button @click="pressed('*')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    *
                </button>
                <button @click="pressed('c')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    C
                </button>
                <button @click="pressed('0')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    0
                </button>
                <button @click="pressed('=')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    =
                </button>
                <button @click="pressed('/')" 
                    class="p-2 h-12 w-12 rounded shadow bg-gray-50 font-medium hover:shadow-md transition duration-100">
                    /
                </button>
            </div>
      </div>
        </div>
        </div>
    </section>
</template>

<script>
// import {useStore} from 'vuex';
import { ref } from '@vue/reactivity'
import { onMounted, onUnmounted } from '@vue/runtime-core';
    export default {
        setup(){
                //  const store = useStore();
            const currentNum = ref('');
            const previosNum = ref('');
            const operation = ref('');
            const numbers = ['1','2','3','4','5','6','7','8','9','0'];
            const operations = ["+", "-", "*", "/"];
            function pressed(value) {
                if(value === 'c'){
                    clearDisplay();
                }else if(value === '=' ||value ===  'Enter'){
                    calculate();
                }else if(numbers.includes(value)){
                    appendNumber(value); 
                }
                else if(operations.includes(value)){
                    applyOperation(value);
                }else if(value === 'Backspace'){
                    remove();
                }
                
            }

            const appendNumber = (value) => currentNum.value += value;
            const clearDisplay = () => currentNum.value = previosNum.value = operation.value =  '';
            const calculate = () => {
                if(operation.value === '+') add();
                else if(operation.value === '-') sub();
                else if(operation.value === '*') mul();
                else if(operation.value === '/') div();
                previosNum.value = "";
                operation.value = "";
            }
            const add = () => currentNum.value = +previosNum.value + +currentNum.value;
            const sub = () => currentNum.value = +previosNum.value - +currentNum.value;
            const mul = () => currentNum.value = +previosNum.value * +currentNum.value;
            const div = () => currentNum.value = +previosNum.value / +currentNum.value;
            function applyOperation(value) {
                calculate();
                previosNum.value = currentNum.value;
                currentNum.value = "";
                operation.value = value;
            }
            const remove = () =>{
                currentNum.value += "";
                if(currentNum.value.length != 0){
                    currentNum.value = currentNum.value.substring(0,currentNum.value.length - 1)
                }
            }
            //   console.log(store.getters.getAuthToken)
        onMounted(() => {
            window.addEventListener("keydown",handleKeyDown);
            // console.log(store.getters.getAuthToken)
        })
       onUnmounted(() => {
           window.removeEventListener("keydown",handleKeyDown);
       })

        function handleKeyDown (e){
            pressed(e.key);
        } 
        
            return{
                currentNum,
                pressed,
                clearDisplay,remove,
                operation,previosNum
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
