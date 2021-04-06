<template>
    <div>
    <div>
        <h1 class="text-indigo-900 text-4xl font-medium">{{title}}</h1>
    
      <!-- body start -->
      <div class="mainBody" id="body">
        <div class="container" id="iceCreamBuilder">
          <!-- icecream start -->
        <IceCream :cart="cart" :getCartValue="getCartValue"></IceCream>
          <!-- ice cream end -->
          <!-- builder start -->
          <div id="builder">
            <div class="builder">
              <h3>
                Build your cool Ice Cream
                <span
                  class="quantity" 
                  :style = "getCartValue > 0 ? {} : {color : 'red'}"
                  > 
                {{ getCartValue }}
                  </span>
              </h3>
              <!-- items start -->
              <div id="items">
                <ul>
                  <!-- item start -->
                  <li
                    class="item"
                   v-for="variant in variants" :key="variant.id"
                  >
                    <span>{{variant.name}}</span>
                    <div class="right">
                      <button
                        type="button"
                        class="plus rounded"
                        @click="addToCart(variant.id)"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="minus rounded"
                       @click="removeFromCart(variant.id)"
                      >
                        -
                      </button>
                    </div>
                  </li>
                  <!-- item end -->
                </ul>
              </div>
              <!-- items end -->

              <!-- total price start -->
              <div class="total" id="total">
                <div>Total Price</div>
                <div>{{ getCartAmount }} Tk</div>
              </div>
              <!-- total price end -->
              <button type="button" class="order rounded" @click="toggleModal" :disabled="getCartValue == 0 ? '' : disabled">
                Proceed
              </button>
            </div>

            <!-- modal start -->
           <Modal 
            v-if="showModal"
            @toggle-order-form="toggleModal" 
            :bill="getCartAmount"
            @clear-cart="clearCart"
            ></Modal>
            <!-- modal end -->
          </div>
          <!-- builder end -->
        </div>
      </div>
      <!-- body end -->

    </div>
    </div>
</template>

<script>
import IceCream from '../components/ice/IceCream'
import Modal from '../components/ice/Modal'
    export default {
        components:{
            IceCream,Modal
        },
        data(){
            return {
                title : 'Ice Cream',
                variants: [
                {id: 1, name: 'Vanilla', price: 100},
                {id: 2, name: 'Chocolate', price: 120},
                {id: 3, name: 'Strawberry', price: 90},
                {id: 4, name: 'Orange', price: 70},
                {id: 5, name: 'Lemon', price: 30},
            ],
            cart: [],
            showModal: false
            }
        },
        methods : {
            toggleModal(){
                this.showModal = !this.showModal;
            },
            addToCart(id){
                if(this.getCartValue > 8){
                    alert("You can't add more than 8 Scope!")
                    return
                }
                this.cart.push(this.variants.find((variant) => variant.id === id))
            },
            removeFromCart(id){
                let position = this.cart.findIndex(variant => variant.id === id);
               //console.log(position);
                this.cart =  this.cart.filter((item,i) => i != position);
            },
            clearCart(){
                this.cart = []
            }
        },
        computed :{
            getCartValue(){
                return this.cart.length
            },
            getCartAmount(){
                return this.cart.reduce((t, variant) => t + variant.price, 0);
            }
        },

    }
</script>

<style lang="css" scoped>
/* common */
* {
  box-sizing: border-box;
  font-size: 14px;
  padding: 5px;
}

body {
  margin: 0;
  background: #f3f3f3; /*#53c1de*/
  color: #1d2129;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

p {
  margin-bottom: 30px;
}

ul {
  list-style-type: none;
  width: 100%;
  margin: 25px auto 10px;
  padding: 0;
}

a,
a:link,
a:visited,
a:hover,
a:active {
  color: #385898;
  text-decoration: none;
}

button {
  outline: none;
  cursor: pointer !important;
}

input[type="submit"]:disabled,
button:disabled {
  opacity: 0.6;
  cursor: not-allowed !important;
}

.right {
  float: right;
}

.textRight {
  text-align: right;
}

.rounded {
  border-radius: 3px;
}

span {
  line-height: normal;
  vertical-align: middle;
  padding: 0;
}

.red {
  color: red;
  padding: 0;
  margin: 0;
}

.container {
  border-bottom: 1px solid #5250507e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1024px;
}

.container > div {
  width: 100%;
}

/* header */
.logo {
  width: 60px;
}

.vueLogo {
  height: 60px;
  vertical-align: middle;
}

/* main body */

.mainBody {
  margin: 0;
  width: 100%;
  height: 100%;
}

/* icecreamBuilder */
@media only screen and (max-width: 600px) {
  .mainBody .container {
    flex-direction: column;
  }
}

/* ice cream */
.icecream {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 632px;
}

@media only screen and (max-width: 600.99px) {
  .icecream {
    min-height: 0px !important;
  }
}

.cone {
  margin-top: -20px;
  height: 0px;
  width: 0px;
  border-right: 45px solid transparent;
  border-left: 45px solid transparent;
  border-top: 140px solid tan;
  z-index: 1;
}

.cherry {
  background: url('../assets/img/cherry.png') center/cover no-repeat;
  width: 50px;
  height: 77px;
  z-index: 3;
  margin-bottom: -10px;
}

.question {
  background: url('../assets/img/question.png') center/cover no-repeat;
  width: 48px;
  height: 48px;
  z-index: 3;
  margin-bottom: 25px;
}

/* scoop */

.scoop {
  width: 100px;
  height: 80px;
  border-radius: 100%;
  position: relative;
  margin-bottom: -45px;
  z-index: 3;
}

.scoop::after {
  content: "";
  position: absolute;
  bottom: 10px;
  left: -10px;
  height: 35px;
  width: 120px;
  border-radius: 100%;
  z-index: 2;
}

div.scoop:first-of-type {
  margin-bottom: 0px;
}

.chocolate,
.chocolate::after {
  background: #b98160;
}

.vanilla,
.vanilla::after {
  background: #fae8b6;
}

.strawberry,
.strawberry::after {
  background: pink;
}

.orange,
.orange::after {
  background: orange;
}

.lemon,
.lemon::after {
  background: #5fd592;
}

/* builder */
.builder {
  padding: 20px;
  background: #fff;
  border: 1px solid #dddfe2;
  border-radius: 3px;
}

.order {
  background-color: #28a745;
  color: #fff;
  border-color: #28a745;
  border: 1px solid transparent;
  display: block;
  margin: 30px auto 0;
  width: 100%;
  padding: 10px 0;
  font-weight: bold;
}

/* totalPrice */
.total {
  border-top: 1px solid #5250507e;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

/* Item */

.item {
  height: 40px;
  text-align: left;
  clear: both;
  padding: 0;
  line-height: 40px;
}

.quantity {
  color: #5250507e;
  vertical-align: top;
}

.quantity::after {
  content: ")";
}

.quantity::before {
  content: "(";
}

.plus {
  width: 30px;
  background: #28a745;
  border: 0px;
  color: white;
  padding: 5px;
}

.minus {
  width: 30px;
  background: red;
  border: 0px;
  color: white;
  padding: 5px;
  margin-left: 5px;
}
/* footer */

footer .container {
  border-bottom: 0px !important;
  padding-top: 0px;
  color: #616163;
}

/* modal */
.backdrop {
  /* display: none; */
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  cursor: pointer;
}

.modalBody {
  /* display: none; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 10;
  background-color: white;
}

/* form */
.formContainer {
  padding: 1rem 3rem;
}
.orderForm {
  max-width: 450px;
  background: #e9ebee;
  padding: 30px;
  margin: 20px auto;
  border-radius: 3px;
}
.orderForm ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.orderForm ul li {
  display: block;
  margin-bottom: 10px;
  min-height: 35px;
  height: 100%;
  line-height: inherit;
}
.orderForm ul li .fieldStyle {
  box-sizing: border-box;
  padding: 8px;
  outline: none;
  border: 1px solid #dddfe2;
}
.orderForm ul li .fieldStyle:focus {
  box-shadow: 0 0 5px #b0cfe0;
  border: 1px solid #b0cfe0;
}
.orderForm ul li .fieldSplit {
  width: 49%;
}
.orderForm ul li .fieldFull {
  width: 100%;
}
.orderForm ul li input.alignLeft {
  float: left;
}
.orderForm ul li input.alignRight {
  float: right;
}
.orderForm ul li textarea {
  width: 100%;
  height: 100px;
  font-family: inherit;
}

.orderForm ul li input[type="button"],
.orderForm ul li input[type="submit"] {
  background-color: #28a745;
  color: #fff;
  border-color: #28a745;
  border: 1px solid transparent;
  display: block;
  margin: 30px auto 0;
  width: 100%;
  padding: 10px 0;
  font-weight: bold;
  cursor: pointer;
}

/* footer */

footer .container {
  border-bottom: 0px !important;
  padding-top: 0px;
  color: #616163;
}

</style>