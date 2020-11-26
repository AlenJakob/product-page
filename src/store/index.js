import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bikes: [],
    bikesPriceList: [],
    productCart: [],
  },
  actions: {
    async getBikes({ commit }) {
      try {
        const bikes = await axios.get(
          "http://my-json-server.typicode.com/AlenJakob/product-page/blob/master/bikes"
        );
        commit("LOAD_BIKES", bikes.data);
      } catch (error) {
        console.log(error, "get Error");
      }
    },
    async getbikesPriceList({ commit }) {
      try {
        const bikesPriceList = await axios.get(
          "http://my-json-server.typicode.com/AlenJakob/product-page/blob/master/bikesPriceList"
        );
        commit("LOAD_PRICE_LIST", bikesPriceList.data);
      } catch (error) {
        console.log(error, "get Error");
      }
    },
  },

  // addProduct({ commit }, newProduct) {
  //   commit("ADD_PRODUCT", newProduct);
  // },

  mutations: {
    //   change state
    LOAD_BIKES(state, bikes) {
      this.state.bikes = bikes;
    },
    LOAD_PRICE_LIST(state, bikesPriceList) {
      this.state.bikesPriceList = bikesPriceList;
    },
    addProduct(state, product) {
      // mutate state
      state.productCart.push(product);
    },
  },
  data: {
    myprop: null, // no attempt at defining initial state
  },
  watch: {
    "$store.state.productCart": function(nv) {
      this.myprop = nv;
      console.log("work");
      console.log(this.$store.state.productCart, "--------------------here");
    },
  },
});

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
