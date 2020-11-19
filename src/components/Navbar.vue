
<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item class="has-text-info" href="/home"> Home </b-navbar-item>
        <b-navbar-item class="has-text-info" href="#">
          Documentation
        </b-navbar-item>
        <b-navbar-item class="has-text-info" href="#"> About </b-navbar-item>
        <b-navbar-item class="has-text-info" href="#"> Contact </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-info">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <Hero />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
export default {
  components: {
    Hero,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
