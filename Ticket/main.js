const app = Vue.createApp({
    data (){
        return {  
            seatStates: {
            sold: {
            text: "Sold",
            color: "#ff0000"
            },
            available: {
            text: "Available",
            color: "#fff"
            },
            booked: {
            text: "Booked",
            color: "gray"
            },
            selected: {
            text: "Selected",
            color: "#00ff00"
            }
        },
           seats :[
               {
                   name : 'A1',
                   type :'available',
                   price: 500
               },
               {
                   name : 'A2',
                   type :'available',
                   price: 500
               },
               {
                   name : 'A3',
                   type :'available',
                   price: 500
               }
               ,
               {
                   name : 'A4',
                   type :'available',
                   price: 500
               },
                {
                name: "B1",
                type: "available",
                price: 450
                },
                {
                name: "B2",
                type: "available",
                price: 450
                },
                {
                name: "B3",
                type: "available",
                price: 450
                },
                {
                name: "B4",
                type: "available",
                price: 450
                },
                {
                name: "C1",
                type: "sold",
                price: 500
                },
                {
                name: "C2",
                type: "sold",
                price: 500
                },
                {
                name: "C3",
                type: "sold",
                price: 500
                },
                {
                name: "C4",
                type: "sold",
                price: 500
                },
                {
                name: "D1",
                type: "available",
                price: 400
                },
                {
                name: "D2",
                type: "available",
                price: 400
                },
                {
                name: "D3",
                type: "available",
                price: 400
                },
                {
                name: "D4",
                type: "available",
                price: 400
                },
                {
                name: "E1",
                type: "available",
                price: 300
                },
                {
                name: "E2",
                type: "available",
                price: 300
                },
                {
                name: "E3",
                type: "booked",
                price: 300
                },
                {
                name: "E4",
                type: "booked",
                price: 300
                },
                {
                name: "F1",
                type: "available",
                price: 300
                },
                {
                name: "F2",
                type: "available",
                price: 300
                },
                {
                name: "F3",
                type: "available",
                price: 300
                },
                {
                name: "F4",
                type: "available",
                price: 300
                }
           ],
           appliedCoupon: null,
            couponCode: "",
            coupons: [
                {
                code: "ars",
                discount: 100
                },
                {
                code: "cdn",
                discount: 200
                }
            ],
            confirmed : false,
            name : '',
            phone : ''
        }//data
    },
    methods : {
        handleClick(index){
            let clickedSeat = this.seats[index]
            if(clickedSeat.type ==='booked' || clickedSeat.type ==='sold'){
                alert("You Can't Select this seat!!")
                return 0;
            }
             if(this.selectedSeats.length > 2 && clickedSeat.type === 'available'){
                alert("You Can't Select More than 3 seat!!")
                return 0;
            }
           clickedSeat.type = clickedSeat.type === 'selected' ? 'available' : 'selected'
        },
        confirm(){
            if(this.name == '' || this.phone == ''){
                alert('Filed Must not be empty!')
                return 0;
            }
            this.confirmed = true
        },
        resetData(){
            this.confirmed = false
            this.name = ''
            this.phone = ''
            this.appliedCoupon = null;

            this.seats.forEach((seat) => {
                if(seat.type === 'selected'){
                    seat.type = 'sold'
                }
            });
        }
    },
    computed :{
        selectedSeats(){
            let sc = this.seats.filter((item) => item.type === 'selected')
            return sc
        },
        totalCost(){
            let cost = 0
            this.selectedSeats.forEach((item) => {
                cost+= item.price
            })
            if(this.appliedCoupon !== null){
                cost -= this.appliedCoupon.discount
            }
            return cost
        }
    },

    watch :{
        couponCode(newValue){
            if(newValue.length === 3){
                let searchedCoupons = this.coupons.filter((item) =>
                    item.code === newValue
                )
                if(searchedCoupons.length === 1){
                    this.appliedCoupon = searchedCoupons[0];
                    this.couponCode = ''
                }else{
                  alert("Coupon not valid!");
                }
            }
        }
    }
 
}).mount('#app')
  