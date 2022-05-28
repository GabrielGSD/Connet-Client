<template>
  <q-layout view="lHh Lpr lFf">
    <q-tabs
      v-model="tab"
      narrow-indicator
      dense
      align="justify"
      class="absolute-bottom menuBar"
    >
      <q-route-tab name="plans" to="/">
        <img alt="Icone Plans" src="~assets/Plans.svg" />
        <span>Plans</span>
      </q-route-tab>
      <q-route-tab name="maps" to="/page">
        <img alt="Icone Maps" src="~assets/Maps.svg" />
        <span>Maps</span>
      </q-route-tab>
      <q-route-tab name="order" to="/">
        <img alt="Icone Order" src="~assets/Order.svg" />
        <span>Order</span>
      </q-route-tab>
      <q-route-tab name="profile" to="/page">
        <img alt="Icone Profile" src="~assets/Profile.svg" />
        <span>Profile</span>
      </q-route-tab>
    </q-tabs>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.menuBar {
  z-index: 2;
  background: #fff;
  padding: 0.5rem;
}
.menuBar * {
  color: #98999a;
}
img {
  width: auto;
  height: 20;
}
</style>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  data() {
    return {
      tab: "plans",
    };
  },
  watch: {
    tab(value) {
      console.log(value);
    },
  },
});
</script>
