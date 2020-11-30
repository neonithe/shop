<template>
<div>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
      <div class="nav nabar-nav">
        <router-link to="/" class="nav-item nav-link active">Home</router-link>
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
        >0 Cart</button>
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
    }
  };
</script>
