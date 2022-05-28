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
      <q-route-tab name="maps" to="/page" active-color="blue-grey-1">
        <img alt="Icone Maps" src="~assets/Maps.svg" />
        <span>Maps</span>
      </q-route-tab>
      <q-route-tab name="order" to="/page2">
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
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.13);
  border-radius: 32px 32px 0px 0px;
}
.menuBar * {
  color: #98999a;
  font-size: 0.7rem;
  text-transform: capitalize;
}
img {
  width: auto;
  height: 25px;
  margin-bottom: 5px;
}
.q-tab--active * {
  color: #72c1ec;
  font-weight: bold;
  filter: brightness(0) saturate(100%) invert(79%) sepia(42%) saturate(2481%)
    hue-rotate(174deg) brightness(103%) contrast(85%);
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
  watch: {},
});
</script>
