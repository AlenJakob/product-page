<template>
  <b-carousel
    :indicator="indicator"
    :indicator-background="indicatorBackground"
    :indicator-inside="indicatorInside"
    :indicator-mode="indicatorMode"
    :indicator-position="indicatorPosition"
    :indicator-style="indicatorStyle"
  >
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section :class="`hero is-medium is-${carousel.color}`" src="https://cdn.pixabay.com/photo/2013/03/19/18/23/mountain-biking-95032_1280.jpg">
        <div class="hero-body has-text-centered">
          <h1 class="title">{{ carousel.title }}</h1>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      indicator: true,
      indicatorBackground: true,
      indicatorInside: true,
      indicatorMode: "hover",
      indicatorPosition: "is-bottom",
      indicatorStyle: "is-dots",
      carousels: [
        { title: "Slide 1", color: "info" },
        { title: "Slide 2", color: "success" },
        { title: "Slide 3", color: "warning" },
        { title: "Slide 4", color: "danger" },
      ],
    };
  },
};
</script>