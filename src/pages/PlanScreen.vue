<template>
	<q-page>
		<div class="boxSwiper plans" style="position: initial">
			<div class="boxTitle">
				<h1 class="title">Encontre o melhor plano para você</h1>
			</div>

			<div style="margin-top: 20px; height: 55vh; padding: 10px">
				<h1
					class="title"
					style="font-size: 1rem; padding: 0; margin-bottom: 10px"
				>
					Planos de internet via {{ this.planSelected }}
				</h1>
				<swiper
					:space-between="10"
					:modules="modules"
					:grab-cursor="true"
					:pagination="{ type: 'fraction' }"
				>
					<swiper-slide
						class="cardPlans shadow-2"
						v-for="plan in this.plans"
						:key="plan"
						@click="selectPlan(plan['id'])"
					>
						<img
							alt="Icone Satelite"
							src="~assets/Sat.svg"
							style="height: 30px"
							class="icon"
						/>
						<h1
							class="title"
							style="font-size: 2rem; font-weight: bold"
						>
							{{ plan['isp'] }}
						</h1>
						<div class="row">
							<div class="cardPlanDetail" style="color: #26c6ba">
								<h1>{{ plan['download_speed'] }}</h1>
								<h2>Download</h2>
								<img
									alt="Icone download"
									src="~assets/download.svg"
									style="height: 25px"
								/>
							</div>
							<div
								class="cardPlanDetail"
								style="color: #ffa217; margin: 0 10px"
							>
								<h1>{{ plan['upload_speed'] }}</h1>
								<h2>Upload</h2>
								<img
									alt="Icone upload"
									src="~assets/upload.svg"
									style="height: 25px"
								/>
							</div>
							<div class="cardPlanDetail" style="color: #17acff">
								<h1>{{ plan['price_per_month'] }}</h1>
								<h2>Mensal</h2>
								<img
									alt="Icone real"
									src="~assets/R$.svg"
									style="height: 25px"
								/>
							</div>
						</div>
						<h2
							class="title"
							style="
								color: #98999a;
								font-size: 1rem;
								padding-bottom: 5px;
							"
						>
							Descrição
						</h2>
						<p
							style="
								color: #98999a;
								font-size: 0.8rem;
								margin: 0;
								padding: 0 10px;
								text-align: justify;
							"
						>
							{{ plan['description'] }}
						</p>
					</swiper-slide>
				</swiper>
			</div>
		</div>

		<div class="boxSwiper types">
			<h1
				class="title"
				style="font-size: 1rem; padding: 0; margin-bottom: 10px"
			>
				Tipos de internet
			</h1>
			<swiper
				:slides-per-view="5"
				:centered-slides="true"
				:space-between="30"
				:navigation="true"
				:modules="modules"
			>
				<swiper-slide
					class="slide cardAzul"
					@click="this.planSelected = 'Satélite'"
				>
					<div class="centerObj">
						<img
							alt="Icone Satelite"
							src="~assets/Sat.svg"
							style="height: 40px"
						/>
						<p>Satélite</p>
					</div>
				</swiper-slide>
				<swiper-slide
					class="slide cardAzul"
					@click="this.planSelected = 'Cabo'"
				>
					<div class="centerObj">
						<img
							alt="Icone Cabo"
							src="~assets/Cab.svg"
							style="height: 40px"
						/>
						<p>Cabo</p>
					</div>
				</swiper-slide>
				<swiper-slide
					class="slide cardAzul"
					@click="this.planSelected = 'Rádio'"
				>
					<div class="centerObj">
						<img
							alt="Icone Radio"
							src="~assets/Rad.svg"
							style="height: 40px"
						/>
						<p>Radio</p>
					</div>
				</swiper-slide>
				<swiper-slide
					class="slide cardAzul"
					@click="this.planSelected = 'Fibra'"
				>
					<div class="centerObj">
						<img
							alt="Icone Wire"
							src="~assets/Wir.svg"
							style="height: 40px"
						/>
						<p>Cabo</p>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</q-page>
</template>

<style scoped>
.boxSwiper {
	position: absolute;
	bottom: 73px;
	width: 100vw;
}
.swiper {
	max-width: 100vw;
	height: 120px;
}
.swiper-slide {
	display: flex;
	align-items: center;
	justify-content: center;
}
.centerObj {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.centerObj p {
	margin: 0;
	margin-top: 10px;
	font-size: 0.8rem;
	font-weight: 700;
	color: #303030;
}
.plans .swiper {
	padding: 10px;
	height: 95%;
	position: relative;
}
.plans .swiper-slide {
	max-height: 90%;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding-top: 5px;
}
.plans .cardPlans .icon {
	position: absolute;
	top: 10px;
	left: 10px;
}
.cardPlanDetail {
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 2px solid;
	padding: 15px 5px;
	border-radius: 0.5rem;
	min-width: 80px;
}
.cardPlanDetail h1 {
	margin: 0;
	font-size: 1.6rem;
	font-weight: bold;
	line-height: 1.6rem;
}
.cardPlanDetail h2 {
	margin: 0;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1rem;
	margin: 8px 0;
}
</style>

<script>
import { defineComponent } from "vue";
import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import uniq from 'lodash/uniq';

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";
import Installers from "src/service/installers";
import Plan from "src/service/Plan";
import {post, put} from "axios";

export default defineComponent({
	name: "PlanScreen",
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			modules: [Pagination],
			planSelected: "Satélite",
			plans:[],
			planType:[],
			user: JSON.parse(localStorage.getItem('clientDados'))
		};
	},
	methods:{
		async selectPlan(planId) {
			this.getMyLocation();
			this.user.plan_id = planId
			const response = await put("https://connet-app.herokuapp.com/connet-app/api/connet/v1/client/clients/"+this.user.client_id, this.user);
			if (response.status === 200) {
				this.$router.push('/Order')
			}
			localStorage.setItem("planId", JSON.stringify(planId))
			localStorage.setItem(this.user.plan_id, JSON.stringify(planId))
			this.$router.push('/map')
		},
		getMyLocation() {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.latitude = position.coords.latitude;
					this.longitude = position.coords.longitude;
					localStorage.setItem("latitude", this.latitude)
					localStorage.setItem("longitude", this.longitude)
				},
				(error) => {
					console.log(error.message);
				}
			);
		},
	},
	mounted() {
		Plan.listPlanUf(JSON.parse(localStorage.getItem('clientDados'))['state'])
			.then(response => (this.plans = response.data))
			.catch(error => console.log(error))
	},
	setup() {},
});
</script>
