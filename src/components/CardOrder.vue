<template>
  <q-card>
    <q-card-section style="padding-top: 35px; padding-bottom: 0">
      <div class="q-ma-md shadow-2 center circleIcon">
        <img alt="Icone Radio" src="~assets/Worker.svg" width="25" />
      </div>
    </q-card-section>
    <q-card-section>
      <h1
        class="text-center"
        style="font-size: 1.5rem; font-weight: bold; line-height: normal"
      >
        {{ name }}
      </h1>
      <h3
        class="text-center"
        style="
          font-weight: 400;
          margin-top: 20px;
          font-size: 1rem;
          line-height: normal;
        "
      >
        Status:
      </h3>
      <h2
        class="text-center"
        style="
          font-weight: 500;
          font-size: 1.25rem;
          line-height: normal;
          margin-top: 5px;
        "
      >
        {{ status }}
      </h2>
      <div class="row circleGroup">
        <div id="1" class="circle enabled"></div>
        <div id="2" class="circle"></div>
        <div id="3" class="circle"></div>
        <div id="4" class="circle"></div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.circleIcon {
  background: #fff;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
h1,
h2,
h3 {
  margin: 0;
}
.q-card {
  border-radius: 1rem;
  background: url("../assets/Efeito.png"),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.7) 0%,
      rgba(110, 191, 244, 0.2) 77.08%,
      rgba(70, 144, 213, 0.02) 100%
    );

  height: 270px;
}
.circleGroup {
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
  justify-content: space-evenly;
}
.circle {
  background: #d4d4d466;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  border: 1px solid #ababab;
}
.enabled {
  border: 1px solid #0687ce;
  background: #00c9ea;
}
</style>

<script>
import { ref, computed } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardOrder",
  props: { name: String, status: String },

  setup() {
    const myListRef = ref(null);
    return {
      myListRef,
      listEl: computed(() => (myListRef.value ? myListRef.value.$el : null)),
    };
  },
  data() {
    return {
      value: 10,
    };
  },
  watch: {
    status: function () {
      if (this.status == "PENDING") {
        var element = document.getElementById("1");
        element.classList.add("enabled");
      }
      if (this.status == "ACCEPTED") {
        var element = document.getElementById("2");
        element.classList.add("enabled");
      }
      if (this.status == "IN_PROGRESS") {
        var element = document.getElementById("3");
        element.classList.add("enabled");
      }
      if (this.status == "DONE") {
        var element = document.getElementById("4");
        element.classList.add("enabled");
      }
    },
  },
});
</script>

<style scoped></style>
