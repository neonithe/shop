<template>
    <div class="col-3 mt-3">
      <div class="card text-left">
        <img class="w-100"
             :src="product.image" alt=""/>
        <div class="card-body">
          <h4 class="card-title">
            <router-link :to="{name: 'product', params: {id: product.productId}}">
              {{ product.title }}
            </router-link>
          </h4>
          <b>{{ product.price }}</b>
          <p class="card-text">{{ product.description }}</p>
        </div>
        <div class="px-4 pb-3">
          <button class="btn btn-outline-success"
          @click="addToCart">Add to cart</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: ["product"],

    methods: {
      addToCart() {
        this.$store.dispatch('addProductToCart', {
          product: this.product,
          quantity: 1
        })
      }
    }
  };
</script>
