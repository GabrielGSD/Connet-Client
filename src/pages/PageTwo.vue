<template>
  <q-page>
    <div class="boxSwiper plans" style="position: initial">
      <div class="boxTitle">
        <h1 class="title">Encontre o melhor plano para você</h1>
      </div>

      <div style="margin-top: 40px; height: 50vh; padding: 10px">
        <h1
          class="title"
          style="font-size: 1rem; padding: 0; margin-bottom: 10px"
        >
          Planos de internet
        </h1>
        <swiper
          :modules="modules"
          :grab-cursor="true"
          :pagination="{ type: 'fraction' }"
        >
          <swiper-slide> CARALHO1 </swiper-slide>
          <swiper-slide> CARALHO 2 </swiper-slide>
          <swiper-slide> CARALHO 3 </swiper-slide>
          <swiper-slide> CARALHO 4 </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="boxSwiper types">
      <h1
        class="title"
        style="font-size: 1rem; padding: 0; margin-bottom: 10px"
      >
        Tipos de internet
      </h1>
      <swiper
        :slides-per-view="5"
        :centered-slides="true"
        :space-between="30"
        :navigation="true"
        :modules="modules"
      >
        <swiper-slide class="slide cardAzul">
          <div class="centerObj">
            <img
              alt="Icone Satelite"
              src="~assets/Sat.svg"
              style="height: 40px"
            />
            <p>Satélite</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide cardAzul">
          <div class="centerObj">
            <img alt="Icone Cabo" src="~assets/Cab.svg" style="height: 40px" />
            <p>Cabo</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide cardAzul">
          <div class="centerObj">
            <img alt="Icone Radio" src="~assets/Rad.svg" style="height: 40px" />
            <p>Radio</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide cardAzul">
          <div class="centerObj">
            <img alt="Icone Wire" src="~assets/Wir.svg" style="height: 40px" />
            <p>Cabo</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </q-page>
</template>

<style scoped>
.boxSwiper {
  position: absolute;
  bottom: 73px;
  max-width: 100vw;
}
.swiper {
  max-width: 100vw;
  height: 120px;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.centerObj {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.centerObj p {
  margin: 0;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #303030;
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
      effects: {
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      },
    };
  },
});
</script>
