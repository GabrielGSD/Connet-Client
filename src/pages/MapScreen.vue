<template>
<!--	:options="{-->
<!--	zoomControl: false,-->
<!--	mapTypeControl: false,-->
<!--	scaleControl: false,-->
<!--	streetViewControl: true,-->
<!--	rotateControl: true,-->
<!--	fullscreenControl: true,-->
<!--	}"-->
<!--	<swiper-->
<!--		:slides-per-view="1"-->
<!--		:centered-slides="true"-->
<!--		:space-between="50"-->
<!--		:navigation="true"-->
<!--		:modules="modules"-->
<!--		class="installers"-->
<!--	>-->
<!--		<swiper-slide class="card-installer">-->
<!--		</swiper-slide>-->

<!--		<swiper-slide class="card-installer">-->
<!--		</swiper-slide>-->

<!--		<swiper-slide class="card-installer">-->
<!--		</swiper-slide>-->
<!--	</swiper>-->
	<GoogleMap api-key="AIzaSyDecg3BQqfKm9D2tvBJA9TtNTjUAF9ZbNg"
			   style="width: 100%; height: 100vh;" :center="center" :zoom="this.zoom"
			   :zoomControl="false" :streetViewControl="true" :mapTypeControl="false"
			   :fullscreenControl="false">
		<div class="installers" v-for="(markers, i) in markers" :key="i" :options="{ position: location }">  <!-- -->
			<div class="card-installer">
				<button @click="setInstaller(markers)">
					Pegar Lat e lon
				</button>
				<p>
					{{ markers.id }}
				</p>
			</div>
		</div>
		<MarkerCluster>
			<Marker v-for="(markers, i) in markers" :options="{ position: {lat: markers.lat, lng: markers.lng} }" :key="i" :clickable="true" :draggable="true"
					@click="openCard(markers)"
			>
			</Marker>
		</MarkerCluster>
	</GoogleMap>


</template>

<style scoped>

.installers {

}
.card-installer {
	background: #ffffff;
	position: relative;
}

</style>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import Client from "src/service/client";
import Installers from "src/service/installers";

import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default defineComponent({
  	name: "MapScreen",
	//
	components: {
		GoogleMap,
		Marker,
		// Swiper,
		// SwiperSlide,
	},
	data(){
		return {
			openedMarkerID:null,
			latitude:-14.2400732,
			longitude:-53.1805017,
			center:{lat:-14.2400732,lng:-53.1805017},
			markers: null,
			zoom: 5
		}
	},
	mounted() {
		Installers.listInstallers(2)
			.then(response => (this.markers = response.data))
			.catch(error => console.log(error))
	},
	methods: {
		openCard(position) {
			this.openedMarkerID = position.id
			this.latitude = position.position.lat
			this.longitude = position.position.lng
			console.log(position.position.lat)
		},
		setInstaller(makers){
			this.center = {lat: makers.lat, lng: makers.lng}
			this.zoom = 12
		},
		getMyLocation() {
			navigator.geolocation.getCurrentPosition(
				position => {
					this.latitude = position.coords.latitude
					this.longitude = position.coords.longitude
				},
				error => {
					console.log(error.message);
				},
			)
		},
	}
});
</script>
