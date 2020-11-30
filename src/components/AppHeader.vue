<template>
<div>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
      <div class="nav nabar-nav">
        <router-link to="/" class="btn btn-outline-info btn-sm">Home</router-link>
        <router-link to="/checkout" class="btn btn-outline-info btn-sm">Checkout</router-link>
      </div>
    <div>
      <div class="dropdown open">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >{{ cartItemCount }} items | {{cartTotalPrice}} sek</button>
        <div @click="$event.stopPropagation()">
          <MiniCart/>
        </div>
      </div>
      </div>
    </div>
    </nav>
  </div>
</div>
</template>

<script>
  import MiniCart from "@/components/MiniCart";
  export default {
    components: {
      MiniCart
    },
    computed: {
      cartItemCount() {
        return this.$store.getters.cartItemCout;
      },
      cartTotalPrice() {
        return this.$store.getters.cartTotalPrice;
      }
    }
  };
</script>
