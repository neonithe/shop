<template>
<div>
  <div class="dropdown-menu p-2"
       style="min-width: 320px; right:0; left:auto"
       aria-labelledby="triggerId">

    <div v-for="item in cart"
         :key="item.product.id"
         :item = "item">
      <div class="px-2 d-flex justify-content-between">
        <div>
        <b>{{ item.product.title }}</b>
        <br/>
          {{ item.quantity }} x {{ item.product.price }}
        </div>
        <div>
          <a href="#" class="badge badge-secondary"
             @click.prevent="removeProductFromCart(item.product)">Remove</a>
        </div>
      </div>
      <hr>
    </div>
    <div v-if="cart.length > 0" class="d-flex justify-content-between">
      <span>Total: {{ cartTotalPrice }} sek</span>
      <router-link class="btn btn-outline-info btn-sm float-right" to="/checkout">Checkout</router-link>
      <button class="btn btn-outline-info btn-sm float-right" @click="clearCartItems">Clear cart</button>
    </div>
    <div v-else>Cart is empty</div>
  </div>
</div>
</template>
<script>
  export default {
    computed: {
      cart() {
        return this.$store.state.cart;
      },
      cartTotalPrice() {
        return this.$store.getters.cartTotalPrice;
      }
    },
    methods: {
      removeProductFromCart(product) {
        this.$store.dispatch('removeProductFromCart', product);
      },
      clearCartItems() {
        this.$store.dispatch('clearCartItems');
      }
    }
  }
</script>
