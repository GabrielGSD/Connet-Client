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
				<h1 class="info">{{ user.state }}</h1>
				<div
					class="cardPlans shadow-2 ">
					<h1
						class="title"
						style="font-size: 2rem; font-weight: bold; text-align: center"
					>
						{{ plans.isp }} - {{ plans.id }}
					</h1>
					<div class="row">
						<div class="cardPlanDetail" style="color: #26c6ba">
							<h1>{{ plans.download_speed }}</h1>
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
							<h1>{{ plans.upload_speed }}</h1>
							<h2>Upload</h2>
							<img
								alt="Icone upload"
								src="~assets/upload.svg"
								style="height: 25px"
							/>
						</div>
						<div class="cardPlanDetail" style="color: #17acff">
							<h1>{{ plans.price_per_month }}</h1>
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
						{{ plans.description }}
					</p>
				</div>
<!--				<p class="info">ID: {{ plans.id }}</p>-->
<!--				<p class="info">Nome: {{ plans.isp }}</p>-->
<!--				<p class="info">Capacidade: {{ plans.data_capacity }}</p>-->
<!--				<p class="info">Download: {{ plans.download_speed }}</p>-->
<!--				<p class="info">{{ plans.upload_speed }}</p>-->
<!--				<p class="info">{{ plans.description }}</p>-->
<!--				<p class="info">{{ plans.price_per_month }}</p>-->
<!--				<p class="info">{{ plans.type_of_internet }}</p>-->
			</div>
			<span
				@click="$router.push('/Login')"
				style="
							right: 20px;
							color: red;
							position:absolute;
							font-size: 16px;
							bottom: 100px;
						"
			>Loggout</span
			>
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
.cardPlans {
	padding: 20px;
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
import Plan from "src/service/Plan";
import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default defineComponent({
	name: "UserProfile",
	data() {
		return {
			user: JSON.parse(localStorage.getItem('clientDados')),
			plans:{}
		};
	},
	mounted() {
		console.log(this.user.plan_id)
		Plan.listPlanId(this.user.plan_id)
			.then(response => (this.plans = response.data))
			.catch(error => console.log(error))
	},
});
</script>
