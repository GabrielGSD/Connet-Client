<template>
<!--	:options="{-->
<!--	zoomControl: false,-->
<!--	mapTypeControl: false,-->
<!--	scaleControl: false,-->
<!--	streetViewControl: true,-->
<!--	rotateControl: true,-->
<!--	fullscreenControl: true,-->
<!--	}"-->
	<GoogleMap api-key="AIzaSyDecg3BQqfKm9D2tvBJA9TtNTjUAF9ZbNg"
			   style="width: 100%; height: 100vh" :center="center" :zoom="12"
			   :zoomControl="false" :streetViewControl="true" :mapTypeControl="false"
			   :fullscreenControl="false">
		<div class="installers" v-for="(location, i) in locations" :key="i" :options="{ position: location }">
			<div class="card-installer">
				<p>TESTE</p>
			</div>
		</div>
		<MarkerCluster>
			<Marker v-for="(location, i) in locations" :options="{ position: location }" :key="i" :clickable="true" :draggable="true"
					@click="openMarker(location.lat)" >
				<InfoWindow
					:closeclick="true"
					@closeclick="openMarker(null)"
					:opened="openedMarkerID === i.lat"
				>
					<div>I am in info window {{ i.lat }} </div>
				</InfoWindow>
			</Marker>

		</MarkerCluster>
	</GoogleMap>
</template>

<style scoped>
.installers {
	display: flex;
	align-items: center;
	justify-content: center;
}
.card-installer {
	position: absolute;
	float: left;
	bottom: 80px;
	background: #ffffff;
	border-radius: 20px;
	width: 90vw;
	height: 200px;
	text-align: center;
}
</style>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

export default defineComponent({
  	name: "MapScreen",
	components: { GoogleMap, Marker, InfoWindow },
	setup() {
		const openedMarkerID = null
		const center = { lat: -31.56391, lng: 147.154312 }

		const locations = [
			{ lat: -31.56391, lng: 147.154312 },
			{ lat: -33.718234, lng: 150.363181 },
			{ lat: -33.727111, lng: 150.371124 },
			{ lat: -33.848588, lng: 151.209834 },
			{ lat: -33.851702, lng: 151.216968 },
			{ lat: -34.671264, lng: 150.863657 },
			{ lat: -35.304724, lng: 148.662905 },
			{ lat: -36.817685, lng: 175.699196 },
			{ lat: -36.828611, lng: 175.790222 },
			{ lat: -37.75, lng: 145.116667 },
			{ lat: -37.759859, lng: 145.128708 },
			{ lat: -37.765015, lng: 145.133858 },
			{ lat: -37.770104, lng: 145.143299 },
			{ lat: -37.7737, lng: 145.145187 },
			{ lat: -37.774785, lng: 145.137978 },
			{ lat: -37.819616, lng: 144.968119 },
			{ lat: -38.330766, lng: 144.695692 },
			{ lat: -39.927193, lng: 175.053218 },
			{ lat: -41.330162, lng: 174.865694 },
			{ lat: -42.734358, lng: 147.439506 },
			{ lat: -42.734358, lng: 147.501315 },
			{ lat: -42.735258, lng: 147.438 },
			{ lat: -43.999792, lng: 170.463352 },
		]

		return { center, locations, openedMarkerID}
	},
	methods: {
		debug (event) {
			console.log(event)
		},
		openMarker(id) {
			this.openedMarkerID = id
			console.log(this.openedMarkerID)
		}
	}
});
</script>
