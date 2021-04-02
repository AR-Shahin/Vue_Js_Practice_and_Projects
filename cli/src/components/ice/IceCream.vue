<template>
    <div>
        <div class="icecream" id="icecream">
        <p class="cone"></p>
        <div
            class="scoop"
            v-for="cartItem in cart"
            :class="cartItem.name.toLowerCase()" :key="cartItem"
        >
        </div>
        <div class="cherry" v-if="getCartValue > 0"></div>
        <div class="question" v-else></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['cart','getCartValue']
    }
</script>

<style lang="css" scoped>


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
  background: url('../../assets/img/cherry.png') center/cover no-repeat;
  width: 50px;
  height: 77px;
  z-index: 3;
  margin-bottom: -10px;
}

.question {
  background: url('../../assets/img/question.png') center/cover no-repeat;
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

</style>