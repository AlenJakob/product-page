<template>
  <div>
    <Message id="message" class="show-off" />
    <div class="columns   is-multiline">
      <div
        @scroll="onScroll()"
        class="section column is-4"
        v-for="product in priceProductList"
        :key="product.id"
      >
        <section class=" has-text-left ">
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
                  <div class="has-text-centered container mt-5">
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
  </div>
</template>


<script>
import Message from ".././Message";
export default {
  components: {
    Message,
  },
  data() {
    return {
      wheelSize: "",
      scrolled: false,
    };
  },
  methods: {
    addProduct(product) {
      this.$store.commit("addProduct", product);
      this.displayMessage();
    },
    displayMessage() {
      const message = document.querySelector("#message");

      message.style.top = 400 + window.scrollY + "px";
      message.classList.remove("show-off");
      setTimeout(() => {
        message.classList.add("show-off");
      }, 1300);
    },
    handleScroll() {
      console.log(window.scrollY);
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
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
.show {
  &-off {
    display: none;
  }
}
</style>