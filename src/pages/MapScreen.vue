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
			   style="width: 100%; height: 100vh" :center="center" :zoom="15"
			   :zoomControl="false" :streetViewControl="true" :mapTypeControl="false"
			   :fullscreenControl="false">
		<div class="installers" v-for="(markers, i) in markers" :key="i" :options="{ position: location }">  <!-- -->
			<div class="card-installer">
				<button @click="setInstaller(markers)">
					Pegar Lat e lon
				</button>
				<p>
					ID: {{markers.id}}
					<br/>
					{{markers.position}}
				</p>
			</div>
		</div>
		<MarkerCluster>
			<Marker v-for="(markers, i) in markers" :options="{ position: markers.position }" :key="i" :clickable="true" :draggable="true"
					@click="openCard(markers)"
			>
			</Marker>

		</MarkerCluster>
	</GoogleMap>


</template>

<style scoped>
.installers {
	display: flex;
	align-items: center;
	justify-content: center;
	left: auto;
}
.card-installer {
	position: relative;
	/*bottom: 80px;*/
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
import Client from "src/service/client";


export default defineComponent({
  	name: "MapScreen",
	components: { GoogleMap, Marker},
	data(){
		return {
			openedMarkerID:null,
			latitude:-31.56391,
			longitude:147.154312,
			center:{lat:-31.56391,lng:147.154312},
			markers: [
				{
					id: 1,
					position: {
						lat: 51.093048, lng: 6.842120,
					},
				},
				{
					id: 2,
					position: {
						lat: -31.56391, lng: 147.154312
					},
				},
				{
					id: 3,
					position: {
						lat: -33.718234, lng: 150.363181
					},
				}
			]
		}
	},
	mounted() {
		alert(Client.listClients("c207f069-5ed9-4cad-b874-1a23a65cafc5"))
	},
	methods: {
		openCard(position) {
			this.openedMarkerID = position.id
			this.latitude = position.position.lat
			this.longitude = position.position.lng
			console.log(position.position.lat)
		},
		setInstaller(makers){
			this.center = {lat: makers.position.lat, lng: makers.position.lng}
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
