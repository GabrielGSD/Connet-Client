<template>
	<GoogleMap
		api-key="AIzaSyDecg3BQqfKm9D2tvBJA9TtNTjUAF9ZbNg"
		style="width: 100%; height: 100vh"
		:center="center"
		:zoom="this.zoom"
		:zoomControl="false"
		:streetViewControl="true"
		:mapTypeControl="false"
		:fullscreenControl="false"
	>
		<swiper
			:modules="modules"
			:grab-cursor="true"
			:pagination="{ type: 'fraction' }"
		>
			<swiper-slide
				v-for="(markers, i) in markers"
				:key="i"
				:options="{ position: location }"
			>
				<card-item
					class="cardInstaller"
					:installer="markers"
					@click="
						setInstaller(markers);
						open('bottom');
						installerSel = markers;
					"
				/>
			</swiper-slide>
		</swiper>

		<MarkerCluster>
			<Marker
				v-for="(markers, i) in markers"
				:options="{ position: { lat: markers.lat, lng: markers.lng } }"
				:key="i"
				:clickable="true"
				:draggable="true"
				@click="openCard(markers)"
			>
			</Marker>
		</MarkerCluster>

		<q-dialog v-model="dialog" :position="position">
			<q-card style="width: 350px" class="dialogOrder">
				<q-linear-progress :value="1" color="blue-3" />

				<div class="dialogAvatar">
					<q-avatar
						size="70px"
						class="shadow-3"
						style="background: rgb(215 215 215)"
					>
						<img src="~assets/Profile.svg" style="width: 30px" />
					</q-avatar>
				</div>

				<h1
					class="title"
					style="
						text-align: center;
						font-weight: bold;
						font-size: 1.5rem;
					"
				>
					{{ installerSel.name }}
				</h1>

				<q-card-section class="col" style="padding: 0 30px">
					<div class="row lineInfo">
						<p class="infoClient">
							<img src="~assets/local.svg" style="width: 18px" />
							{{ this.dist }}
						</p>
						<div class="infoClient">
							<img
								src="~assets/R$.svg"
								style="
									width: 18px;
									filter: brightness(0) saturate(100%)
										invert(50%) sepia(4%) saturate(39%)
										hue-rotate(344deg) brightness(102%)
										contrast(85%);
								"
							/>
							{{ this.dist *  installerSel.price_per_km}}
						</div>
					</div>

					<q-space />

					<div class="row lineInfo">
						<q-btn
							@click="contratar()"
							label="Contratar"
							style="
								background: #3caef0;
								color: #fff;
								margin: 30px 0;
							"
						/>
					</div>
				</q-card-section>
			</q-card>
		</q-dialog>
	</GoogleMap>
</template>

<style scoped>
.installers {
}
.card-installer {
	background: #ffffff;
	position: relative;
}
.swiper {
	position: absolute;
	bottom: 75px;
	height: 190px;
	max-width: 100vw;
}
.swiper-slide {
	display: flex;
	align-items: center;
	justify-content: center;
}
.cardInstaller {
	width: 80%;
	height: 90%;
	border-radius: 1rem;
}
.dialogOrder {
	border-radius: 1rem 1rem 0 0 !important;
	height: 45vh;
}
.dialogOrder .dialogAvatar {
	margin: 30px;
	display: flex;
	justify-content: center;
	margin-bottom: 0;
}
.infoClient {
	display: flex;
	align-items: center;
	font-size: 1rem;
	font-weight: 500;
	color: #828282;
	margin: 0;
}
.infoClient img {
	margin-right: 5px;
}
.lineInfo {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 70vw;
	margin: 0 auto;
	margin-bottom: 10px;
}
</style>

<script>
import { ref } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import Client from "src/service/client";
import Installers from "src/service/installers";

import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";
import {post} from "axios";

export default defineComponent({
	name: "MapScreen",
	//
	components: {
		GoogleMap,
		Marker,
		Swiper,
		SwiperSlide,
		CardItem: defineAsyncComponent(() => import("components/CardItem")),
	},
	setup() {
		const dialog = ref(false);
		const position = ref("top");

		return {
			dialog,
			position,

			open(pos) {
				console.log(pos);
				position.value = pos;
				dialog.value = true;
			},
		};
	},
	data() {
		return {
			modules: [Pagination],
			openedMarkerID: null,
			latitude: -14.2400732,
			longitude: -53.1805017,
			center: { lat: -14.2400732, lng: -53.1805017 },
			markers: null,
			zoom: 5,
			installerSel: {},
			dist:null
		};
	},
	mounted() {
		if(localStorage.getItem("planId") != null){
			Installers.listInstallers(localStorage.getItem("planId"))
				.then((response) => (this.markers = response.data))
				.catch((error) => console.log(error));
			console.log(this.markers)
		} else {
			Installers.listFullInstallers()
				.then((response) => (this.markers = response.data))
				.catch((error) => console.log(error));
		}

	},
	methods: {
		async contratar() {
			let clientId = JSON.parse(localStorage.getItem('clientDados'))['client_id']
			let request = {
				"client_id": clientId,
				"final_distance": this.dist,
				"final_price": this.dist *  this.installerSel.price_per_km,
				"installer_id": this.installerSel.id,
				"plan_id": localStorage.getItem('planId'),
				"rating": this.installerSel.rating
			}
			const response = await post("https://connet-app.herokuapp.com/connet-app/api/process/v1/client/request", request);
			if (response.status === 200){
				this.$router.push('/Order')
			}
		},
		openCard(position) {
			this.openedMarkerID = position.id;
			this.latitude = position.position.lat;
			this.longitude = position.position.lng;
			console.log(position.position.lat);
		},
		setInstaller(makers) {
			this.center = { lat: makers.lat, lng: makers.lng };
			this.zoom = 12;
			let latitude = localStorage.getItem("latitude")
			let longitude = localStorage.getItem("longitude")
			console.log(parseFloat(latitude))
			console.log(parseFloat(longitude))
			this.dist = this.calc(makers.lat, makers.lng, parseFloat(latitude), parseFloat(longitude))
		}, calc(lat1, lon1, lat2, lon2){
			console.log(lat1, lon1, lat2, lon2)
			var R = 6371; // km
			var dLat = this.toRad(lat2-lat1);
			var dLon = this.toRad(lon2-lon1);
			var lat1 = this.toRad(lat1);
			var lat2 = this.toRad(lat2);

			var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
				Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
			var d = R * c;
			console.log("distancia:"+d)
			return d.toFixed(2);
		}, toRad(Value){
			return Value * Math.PI / 180;
		}
	},
});
</script>
