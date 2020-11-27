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
                Phasellus nec iaculis mauris.

                <label class="label mt-5">Wheel size :</label>
                <div class="control">
                  <div class="select">
                    <select v-model="wheelSize">
                      <option
                        :value="wheelSize"
                        v-for="size in product.wheelSize"
                        :key="size.id"
                      >
                        {{ size }}
                      </option>
                    </select>
                  </div>
                </div>
                <br />
                <div class="box container mt-5">
                  <button
                    @click="addProduct(product)"
                    class="button is-primary"
                  >
                    Add to Cart
                  </button>
                </div>
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
  data() {
    return {
      wheelSize: "",
    };
  },
  methods: {
    addProduct(product) {
      this.$store.commit("addProduct", product);
    },
  },
  mounted() {},
  computed: {
    priceProductList() {
      return this.$store.state.bikesPriceList;
    },
  },
  created() {
    this.$store.dispatch("getbikesPriceList");
  },
};
</script>