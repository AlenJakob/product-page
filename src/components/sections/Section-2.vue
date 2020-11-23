<template>
  <section class="section has-text-left ml-6 mr-5">
    <div class="container">
      <h1 class="title">Section</h1>
    </div>
  </section>
</template>


<script>
export default {
  mounted() {
    console.log(this.$store.state.bikesPriceList);
  },
  created() {
    this.$store.dispatch("getbikesPriceList");
  },
};
</script>