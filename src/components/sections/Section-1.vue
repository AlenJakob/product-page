<template>
  <section class="section has-text-right ml-6 mr-5">
    <div class="container" v-for="post in Posts" :key="post.id">
      <h1 class="title">Section</h1>
      <h2 class="subtitle">
       {{post.title}}
      </h2>
      <p class="">
        {{post.body}}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    Posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    getPosts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    console.log(this.getPosts());
  },
  created() {
    this.$store.dispatch("getPosts");
  },
};
</script>