
<template>
  <div>
    <b-navbar>
      <!-- src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png" -->
      <template slot="brand">
        <b-navbar-item class="mr-6" tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/logo.png" alt="Logo Bike4US" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item class="has-text-dark" href="/"> Home </b-navbar-item>
        <b-navbar-item class="has-text-dark" href="#"> Shop </b-navbar-item>
        <b-navbar-item class="has-text-dark" href="#"> About </b-navbar-item>
        <b-navbar-item class="has-text-dark" href="#"> Contact </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-dark">
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




<style scoped lang="scss">
.navbar-item img {
  max-height: 4rem;
  margin: 1rem;
}
.navbar-item {
  font-size: 1.5rem !important;
}
</style>

