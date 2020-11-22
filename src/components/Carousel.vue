<template>
  <b-carousel class="hero is-medium" :indicator-inside="false">
    <b-carousel-item v-for="(item, i) in carousels" :key="i" :has-drag="drag">
      <span class="image">
        <img :src="item.image" />
        <h1 class="title title-inside">{{ item.title }}</h1>
      </span>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      drag: true,
      indicator: true,
      indicatorBackground: true,
      indicatorInside: true,
      indicatorMode: "hover",
      indicatorPosition: "is-bottom",
      indicatorStyle: "is-dots",
      carousels: [
        {
          title: "Best Tricks",
          color: "info",
          image:
            "https://cdn.pixabay.com/photo/2019/06/25/11/11/mountain-bike-4297972_1280.jpg",
        },
        {
          title: "Mountain",
          color: "success",
          image:
            "https://cdn.pixabay.com/photo/2020/11/08/15/36/mountain-5724055_1280.jpg",
        },
        {
          title: "Dark forest",
          color: "warning",
          image:
            "https://cdn.pixabay.com/photo/2015/07/02/10/13/cycling-828646_1280.jpg",
        },
        {
          title: "Fast Travel",
          color: "danger",
          image:
            "https://cdn.pixabay.com/photo/2016/11/18/21/26/bike-1836934_1280.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style >
.carousel-indicator {
  background: rgba(65, 105, 225, 0.473);
}
.carousel-item .image img {
  object-fit: cover;
  object-position: center center;
  max-height: 400px;
}
.carousel .carousel-indicator .indicator-item .indicator-style {
  border: 1px solid #167df0;
}
.carousel .carousel-indicator .indicator-item.is-active .indicator-style,
.carousel .carousel-indicator .indicator-item .indicator-style:hover {
  background: #167df0;
  border: 1px solid white;
}
.carousel .carousel-indicator .indicator-item .indicator-style.is-dots {
  width: 35px;
  height: 15px;
}
.title-inside {
  position: absolute;
  color: #fff;
  text-shadow: 0 0 12px black;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
</style>