<template>
	<q-page>
		<div class="boxSwiper" style="position: initial">
			<div class="boxTitle">
				<h1 class="title">Perfil</h1>
			</div>
			<div class="column center">
				<q-avatar
					size="70px"
					class="shadow-3"
					style="background: rgb(215 215 215); margin: 30px 0"
				>
					<img src="~assets/Profile.svg" style="width: 30px" />
				</q-avatar>
				<h1 class="info name">{{ user.name }}</h1>
				<h1 class="info">{{ user.email }}</h1>
				<h1 class="info">{{ user.phone }}</h1>
				<h1 class="info">{{ user.address }}</h1>
				<h1 class="info">{{ user.plan_id }}</h1>
			</div>
		</div>
	</q-page>
</template>

<style scoped>
.info {
	margin: 10px 0;
	font-size: 1rem;
	font-weight: normal;
	display: inline-block;
	line-height: normal;
}
.name {
	font-weight: bold;
	font-size: 1.5rem;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "UserProfile",
	setup() {
		return {
			user: {
				address: "Lerugays, 302, sahduhaus",
				email: "teste@teste.com",
				name: "Gabriel de Souza",
				phone: "35 987667887",
				plan_id: "2",
			},
		};
	},
});
</script>
