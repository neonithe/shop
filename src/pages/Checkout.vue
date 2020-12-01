<template>
  <div class="container mt-4">
    <div v-if="list.length != 0">
    <div class="row">
      <div class="col-8">
        <div>
          <h3>Billing and shipping</h3>
          <hr>
        </div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input v-model="bFName" type="text" class="form-control" id="inFName" placeholder="First name">
            </div>
            <div class="form-group col-md-6">
              <input v-model="bLName" type="text" class="form-control" id="inLName" placeholder="Last name">
            </div>
          </div>
          <div class="form-group">
            <input v-model="bEmail" type="email" class="form-control" id="inEmail" placeholder="Email">
          </div>
          <div class="form-group">
            <input v-model="bAddress" type="text" class="form-control" id="inAddress" placeholder="Address">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input v-model="bCity" type="text" class="form-control" id="inCity" placeholder="City">
            </div>
            <div class="form-group col-md-6">
              <input v-model="bZipcode" type="number" class="form-control" id="inZipcode" placeholder="Zipcode">
            </div>
          </div>
          <div v-if="step == 0">
            <button :disabled="verify" @click.prevent="otherShipping" class="btn btn-outline-info">Other shipping address</button>
          </div>
          <div v-else>
            <p>Other shipping address</p>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input v-model="sFName" type="text" class="form-control" id="otinFName" placeholder="First name">
              </div>
              <div class="form-group col-md-6">
                <input v-model="sLName" type="text" class="form-control" id="otinLName" placeholder="Last name">
              </div>
            </div>
            <div class="form-group">
              <input v-model="sEmail" type="email" class="form-control" id="otinEmail" placeholder="Email">
            </div>
            <div class="form-group">
              <input v-model="sAddress" type="text" class="form-control" id="otinAddress" placeholder="Address">
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input v-model="sCity" type="text" class="form-control" id="otinCity" placeholder="City">
              </div>
              <div class="form-group col-md-6">
                <input v-model="sZipcode" type="number" class="form-control" id="otinZipcode" placeholder="Zipcode">
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-4">
        <div>
          <h3>Cart</h3>
          <hr>
        </div>
        <div v-for="item in cart" :key="item.id" :item = "item">
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">{{ item.product.title }}</h6>
                  <small class="text-muted">{{ item.product.description }}</small>
                </div>
                <div>
                  <p class="text-muted float-left mr-4">{{ item.quantity }} x {{ item.product.price }} sek</p>
                  <button @click="removeProductFromCart(item.product)" class="btn btn-outline-danger btn-sm float-left">Delete</button>

                </div>
              </li>
            </ul>
        </div>
        <hr>
        <div>
          <div v-if="cartTotal < 500"><small>Shipping cost: 100 sek</small></div>
          <div v-else>Shipping cost: 0 sek</div>
          <small>Tax: {{ tax }} sek</small>
          <h2>Total: {{ total }} sek</h2>
          <br>
          <button :disabled="secVer" id="checkout-button"
                  class="btn btn-outline-success float-right btn-lg">Stripe payment</button>
        </div>
      </div>
    </div>
    </div>
    <div v-else> Your cart is empty</div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        list: this.$store.state.cart,
        step: 0,
        disable: 0,

        bFName: '',
        bLName: '',
        bEmail: '',
        bAddress: '',
        bCity: '',
        bZipcode: '',

        sFName: '',
        sLName: '',
        sEmail: '',
        sAddress: '',
        sCity: '',
        sZipcode: ''
      }
    },
    computed: {
      cart() {
        return this.$store.state.cart;
      },
      cartTotal() {
        return this.$store.getters.cartTotalPrice;
      },
      total: function () {

        if ( this.cartTotal <= 500 ) {
          if ( this.cartTotal == 0 ) {
            return this.cartTotal;
          } else {
            return this.cartTotal+100;
          }
        } else {
          return this.cartTotal;
        }
      },
      tax: function () {
        return this.cartTotal*0.25;
      },
      verify() {
        if ( this.bFName == '' || this.bLName == '' || this.bEmail == '' || this.bAddress == '' || this.bCity == '' || this.bZipcode == '') {
          return true;
        } else {
          return false;
        }
      },
      shipVerify() {
        if ( this.sFName == '' || this.sLName == '' || this.sEmail == '' || this.sAddress == '' || this.sCity == '' || this.sZipcode == '') {
          return true
        } else {
          return false;
        }
      },
      secVer() {
        if ( this.verify == false ) {
          return false;
        } else {
          return true
        }
      }

    },
    methods : {
      otherShipping: function () {
        this.step ++;
      },
      removeProductFromCart(product) {
        return this.$store.dispatch('removeProductFromCart', product);
      },
    }
  }
</script>
