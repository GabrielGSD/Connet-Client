<template>
	<q-card class="cardItem">
		<q-item>
			<q-item-section avatar style="padding-right: 30px">
				<q-avatar
					size="70px"
					class="shadow-3"
					style="background: rgb(215 215 215)"
				>
					<img src="~assets/Profile.svg" style="width: 30px" />
				</q-avatar>
			</q-item-section>

			<q-item-section>
				<q-item-label class="name">{{ installer.name }}</q-item-label>
				<q-item-label
					caption
					class="center"
					style="
						color: #00a4ff;
						font-size: 1.2rem;
						letter-spacing: -1px;
					"
				>
					{{ installer.price_per_km }}
					<span
						style="
							color: #999999;
							font-size: 0.7rem;
							margin-left: 5px;
							letter-spacing: 0px;
						"
						>Reais por Km percorrido</span
					>
				</q-item-label>
				<q-item-label caption class="center dados">
					<img
						src="~assets/phone.svg"
						style="
							width: 20px;
							filter: brightness(0) saturate(100%) invert(50%)
								sepia(4%) saturate(39%) hue-rotate(344deg)
								brightness(102%) contrast(85%);
						"
					/>
					{{ installer.phone }}
				</q-item-label>
				<q-item-label caption class="center dados">
					<q-rating
						:v-model="installer.rating"
						size="1.5em"
						color="yellow"
						readonly
					/>
				</q-item-label>
			</q-item-section>
		</q-item>
	</q-card>
</template>

<style scoped>
.cardItem {
	width: 90% !important;
	height: 80% !important;
	padding: 10px;
}
.cardItem .q-item {
	padding: 20px;
	padding-left: 35px;
}
.dados {
	font-size: 1rem;
	letter-spacing: -0.5px;
}
.name {
	font-size: 1.2rem;
	font-weight: bold;
}
.center {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.center img {
	margin-top: 3px;
	margin-right: 8px;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "CardItem",

	props: ["installer"],
	data() {
		return {
			rating: 3,
		};
	},
});
</script>

<style scoped></style>
