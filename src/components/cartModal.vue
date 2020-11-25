<template>
  <div id="modal" class="modal">
    <div class="modal-card ">
      <header class="modal-card-head ">
        <p class="modal-card-title">Modal title</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section
        class="modal-card-body is-danger"
        v-for="product in this.$store.state.productCart"
        :key="product.id"
      >
        {{ product.name }}
      </section>
      <footer class="modal-card-foot"></footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    closeModal() {
      document.querySelector("#modal").classList.remove("showModal");
    },
  },
  mounted() {
    this.productList.push(this.$store.state.productCart);
    console.log(this.productList);
  },
};
</script>


<style lang="scss">
</style>

// https://medium.com/js-dojo/how-to-permanently-save-data-with-vuex-localstorage-in-your-vue-app-f1d5c140db69