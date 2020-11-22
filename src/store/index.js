import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bikes: [],
    info: "Hello",
  },
  actions: {
    async getBikes({ commit }) {
      try {
        const bikes = await axios.get(
          // "https://jsonplaceholder.typicode.com/bikes"
          // "https://github.com/AlenJakob/product-page/blob/master/db.json"
          "http://my-json-server.typicode.com/AlenJakob/product-page/blob/master/bikes"
        );
        commit("LOAD_BIKES", bikes.data);
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
    SET_ID(state, currentID) {
      state.currentID = currentID;
    },
  },
});

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
