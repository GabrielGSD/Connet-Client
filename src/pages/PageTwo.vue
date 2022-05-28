<template>
  <q-page>
    <swiper :modules="modules">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </q-page>
</template>

<style scoped>
.swiper {
  max-width: 100vw;
  height: 20vh;
  padding: 0 20px 0 20px;
  position: absolute;
  bottom: 85px;
}
.swiper-pagination-bullet {
  display: none !important;
}
</style>

<script>
import { defineComponent } from "vue";
import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";

export default defineComponent({
  name: "PageTwo",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
});
</script>
