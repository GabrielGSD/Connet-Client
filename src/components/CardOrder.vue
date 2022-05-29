<template>
  <div
    class="q-pa-md center"
    style="max-height: 80vh; overflow-y: scroll; width: 90%"
  >
    <div
      ref="myListRef"
      class="column q-gutter-sm"
      style="width: 70%; flex-wrap: wrap; padding-top: 25px"
    >
      <q-intersection
        v-for="index in 6"
        :key="index"
        :root="listEl"
        transition="scale"
        class="example-item"
      >
        <q-card :style="{ 'background-image': background_image }">
          <q-card-section>
            <div>Extended</div>
          </q-card-section>
          <q-card-section>
            <h1 class="text-h5 text-center" style="font-weight: bold">
              {{ name }}
            </h1>
            <h3 class="text-h6 text-center" style="font-weight: 200">Status</h3>
            <h2 class="text-h5 text-center" style="font-weight: 400">
              {{ status }}
            </h2>
            <div class="row">
              <div id="1" class="circle"></div>
              <div id="2" class="circle"></div>
              <div id="3" class="circle"></div>
              <div id="4" class="circle"></div>
            </div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardOrder",
  props: ["name", "status"],

  setup() {
    const myListRef = ref(null);

    return {
      myListRef,
      listEl: computed(() => (myListRef.value ? myListRef.value.$el : null)),
    };
  },
});
</script>

<style scoped></style>
