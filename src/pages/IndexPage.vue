<template>
  <q-page class="flex flex-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /> -->

    <div>
      <div class="cardAzul shadow-2" style="width: 40vw; height: 20vh">
        <q-btn
          style="background: #ff0080; color: white"
          label="Fuchsia"
          @click="$q.fullscreen.toggle()"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
