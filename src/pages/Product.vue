<template>
  <div class="row mt-5">
    <div class="col-4">
      <img :src="product.image" class="w-100"/>
    </div>
    <div class="col-8">
      <h1>{{ product.title }}</h1>
      <h3>{{ product.price }}</h3>
      <p class="mt-4">{{ product.description }}</p>

        <input type="text" class="text-center col-1 mr-2 p-1">
        <button class="btn btn-outline-success" @click="addToCart">Add to cart</button>

    </div>
  </div>
</template>

<script>
  export default {
    props: ["id"],

    computed: {
      product() {
        return this.$store.state.product;
      }
    },

    mounted() {
      this.$store.dispatch('getProduct', this.id);
    },
    methods:{
      addToCart() {
        this.$store.dispatch('addProductToCart', {
          product: this.product,
          quantity: 1
        })
      }
    }
  }
</script>
