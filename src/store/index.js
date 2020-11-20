import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    info: "Hello",
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const posts = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        commit("LOAD_POSTS", posts.data);
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
    LOAD_POSTS(state, posts) {
      this.state.posts = posts;
    },
    SET_ID(state, currentID) {
      state.currentID = currentID;
    },
  },
});

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
