<template>
  <div class="d-flex align-items-stretch flex-wrap">
      <product-card
          v-for="product in products"
          :key="product.id"
          :product = "product"/>
  </div>
</template>
<script>
  import ProductCard from "@/components/ProductCard";
  export default {
    components: {
      ProductCard
    },
    computed: {
      cart() {
        return this.$store.state.cart;
      },
      products() {
        return this.$store.state.products;
      }
    },
    mounted() {
      this.$store.dispatch('getProducts');
    },
    methods: {

    }
  }
</script>
