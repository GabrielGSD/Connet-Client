<template>
  <q-page class="flex flex-center">
    <div class="boxTitle" style="position: absolute; top: 0; left: 0; right: 0">
      <h1 class="title">Encontre o melhor plano para você</h1>
    </div>
    <card-order :name="profile.name" :status="profile.status"></card-order>
  </q-page>
</template>

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
      profile: { name: "Gabriel", status: "Pendente" },
    };
  },
});
</script>
