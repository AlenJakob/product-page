<template>
  <div class="columns container is-multiline">
    <div
      class="column is-6"
      v-for="product in priceProductList"
      :key="product.id"
    >
      <section class="section has-text-left ml-6 mr-5">
        <div class="container">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{ product.name }}</p>
                  <p class="subtitle is-6">#{{ product.name }}</p>
                  <h1 class="has-text-right title is-4 has-text-danger">
                    {{ product.price }}€
                  </h1>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <button @click="addProduct(product)" class="button">Add</button>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    test(product) {
      console.log(product);
    },
    addProduct(product) {
      this.$store.commit("addProduct", product);
      console.log(this.$store.state.productCart);
      console.log(this.$store.state.productCart.length);
    },
  },
  mounted() {
    console.log(this.$store.state.bikesPriceList);
  },
  computed: {
    priceProductList() {
      return this.$store.state.bikesPriceList;
    },
  },
  created() {
    this.$store.dispatch("getbikesPriceList");
    console.log(this.bikesPriceList);
    console.log(this.$store.state.productCart);
  },
};
</script>