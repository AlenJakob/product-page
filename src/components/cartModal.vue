<template>
  <div id="modal" class="modal">
    <div @click="closeModal" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Shop Cart ( {{ this.$store.state.productCart.length }} ) Total Price (
          {{ totalCost }} $)
        </p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <ul class="menu-list">
        <li
          class="modal-card-body"
          v-for="(product, index) in this.$store.state.productCart"
          :key="Math.random(product.id)"
        >
          <!-- begin of box -->
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img
                    src="https://bulma.io/images/placeholders/128x128.png"
                    alt="Image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p class="has-text-left">{{ index }}</p>
                  <p class="has-text-left">
                    <strong> {{ product.name }}</strong>
                    <br />
                    <strong class="has-text-danger">
                      {{ product.price }}$</strong
                    >
                  </p>
                </div>
                <nav class="level is-mobile"></nav>
              </div>
            </article>
          </div>
          <!-- end of box -->
        </li>
      </ul>
      <footer class="modal-card-foot"></footer>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      document.querySelector("#modal").classList.toggle("showModal");
      document.querySelector(".modal-background").classList.toggle("showModal");
    },
  },
  computed: {
    totalCost() {
      const stock = this.$store.state.productCart;
      return stock.map((prod) => prod.price).reduce((a, b) => a + b, 0);
    },
  },
};
</script>


<style lang="scss">
.menu-list {
  overflow-y: scroll;
  & .modal-card-body:nth-child(even) {
    // background: rgb(230, 230, 230) !important;
    opacity: 0.9;
    & .box {
      // background: rgb(230, 230, 230) !important;
      opacity: 0.9;
    }
  }
}
.list-item {
  list-style: decimal;
}
.modal-card-body {
  padding: 0.2rem !important;
}
</style>

// https://medium.com/js-dojo/how-to-permanently-save-data-with-vuex-localstorage-in-your-vue-app-f1d5c140db69