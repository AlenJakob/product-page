<template>
  <section class="section has-text-right ml-6 mr-5">
    <div class="container" v-for="bike in Bikes" :key="bike.id">
      <div class="card">
        <div class="card-image">
          <figure class="image is-2by1">
            <img :src="bike.img" alt="Placeholder image" />4
            <h1>{{bike.img}}</h1>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ bike.title }}</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    Bikes() {
      return this.$store.state.bikes;
    },
  },
  methods: {},
  mounted() {
    console.log(this.$store.state.bikes);
  },
  created() {
    this.$store.dispatch("getBikes");
    console.log(this.$store.state);
  },
};
</script>