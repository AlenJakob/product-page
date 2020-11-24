<template>
  <div class="home">
    <Hero />

    <div class="container mt-6">
      <h1 class="title is-2">Articles</h1>
    </div>
    <section1 />
  </div>
</template>

<script>
import section1 from "../components/sections/Section-1";

import Hero from "@/components/Hero";
// import section2 from "../components/sections/Section-2";
// import section3 from "../components/sections/Section-3";
export default {
  components: {
    section1,
    Hero,
    // section2,
    // section3,
  },
};
</script>
