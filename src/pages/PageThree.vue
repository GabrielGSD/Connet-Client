<template>
  <q-page class="flex flex-center">
    <div class="boxTitle" style="position: absolute; top: 0; left: 0; right: 0">
      <h1 class="title">Encontre o melhor plano para você</h1>
    </div>
    <div class="scroll">
      <card-order
        v-for="index in 1"
        :key="index"
        :name="profile.name"
        :status="profile.status"
        style="margin: 10px 0"
      ></card-order>
    </div>
  </q-page>
</template>

<style scoped>
.scroll {
  max-height: 80vh;
  overflow: overlay;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.scroll .q-card {
  width: 230px;
  height: 315px;
}
</style>

<script>
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "PageThree",
  components: {
    CardOrder: defineAsyncComponent(() => import("components/CardOrder")),
  },
  setup() {},
  data() {
    return {
      profile: { name: "Margarita Cronin", status: "PENDING" },
    };
  },
});
</script>
