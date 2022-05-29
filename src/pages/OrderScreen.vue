<template>
  <q-page class="flex flex-center">
    <div class="boxTitle" style="position: absolute; top: 0; left: 0; right: 0">
      <h1 class="title">Encontre o melhor plano para você</h1>
    </div>
    <div class="scroll">
      <card-order
        v-for="(index, value) in this.process"
        :key="index"
        :name="nameInstaller[value]"
        :status="index['status']"
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
import ProcessService from "src/service/ProcessService";
import Installers from "src/service/Installers";

export default defineComponent({
  name: "OrderScreen",
  components: {
    CardOrder: defineAsyncComponent(() => import("components/CardOrder")),
  },
  setup() {},
  data() {
    return {
		process:[],
		installerId:[],
		nameInstaller:[]
    };
  },
	mounted() {
		ProcessService.listProcessClient("c207f069-5ed9-4cad-b874-1a23a65cafc5")
			.then(response => {
				this.process = response.data
				console.log(response.data)
				response.data.forEach((index, value) => {
					Installers.listInstaller(index['installer_id'])
						.then(response => {
							this.nameInstaller[value] = response.data['name']
						})
						.catch(error => console.log(error))
				});
			})
			.catch(error => console.log(error))

	}
});
</script>
