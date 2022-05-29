<template>
	<q-layout class="bg-image" v-cloak>
		<q-page-container>
			<q-page class="flex flex-center" style="flex-direction: column">
				<h1 class="title" style="color: #fff; font-size: 2.3rem">
					Cadastro
				</h1>
				<q-item-section avatar>
					<q-avatar
						size="130px"
						class="shadow-10"
						style="
							background: #fff;
							margin-top: 30px;
							margin-bottom: 10px;
						"
					>
						<img src="~assets/Profile.svg" style="width: 45px" />
					</q-avatar>
				</q-item-section>
				<q-card class="bg-transparent no-border no-shadow">
					<q-item>
						<q-item-section>
							<q-input
								dark
								color="white"
								dense
								v-model="user.name"
								label="Nome"
								:rules="[(val) => !!val || 'Field is required']"
							/>

							<p>{{ this.name }}</p>

							<q-input
								dark
								color="white"
								dense
								type="email"
								v-model="user.email"
								label="Email"
								:rules="[
									(v) =>
										!v ||
										/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
											v
										) ||
										'E-mail must be valid',
								]"
							/>

							<q-input
								dark
								v-model="user.password"
								color="white"
								:type="isPwd ? 'password' : 'text'"
								placeholder="Senha"
								:rules="[(val) => !!val || 'Field is required']"
							>
								<template v-slot:append>
									<q-icon
										:name="
											isPwd
												? 'visibility_off'
												: 'visibility'
										"
										class="cursor-pointer"
										@click="isPwd = !isPwd"
									/>
								</template>
							</q-input>

							<q-input
								dark
								color="white"
								autogrow
								dense
								v-model="user.address"
								label="Endereço"
								:rules="[(val) => !!val || 'Field is required']"
							/>
							<q-input
								dark
								color="white"
								dense
								type="number"
								v-model="user.phone"
								mask="(##) # ####-####"
								label="Celular"
								:rules="[(val) => !!val || 'Field is required']"
							/>
							<q-btn
								to="/"
								round
								flat
								color="blue-3"
								class="q-mt-lg bg-white"
								icon="arrow_right_alt"
								style="
									width: 42px;
									height: 42px;
									margin: 0 auto;
									margin-top: 20px;
								"
							></q-btn>
						</q-item-section>
					</q-item>
				</q-card>
			</q-page>
		</q-page-container>
	</q-layout>
</template>

<style scoped>
.q-item {
	display: flex;
	flex-direction: column;
}
</style>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
	name: "RegisterScreen",

	data() {
		return {
			user: { name: "", email: "", password: "", address: "", phone: "" },
			model: "",
			isPwd: ref("user.password"),
		};
	},
	watch: {
		email: function (mail) {
			if (mail !== "") {
				this.emailRules = [
					(v) =>
						v.match(
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
						) || "Invalid Email address",
				];
			} else if (mail === "") {
				this.emailRules = [];
			}
		},
	},
});
</script>

<style>
.bg-image {
	background-image: linear-gradient(135deg, #42a5f5 0%, #d1f8fd 100%);
}

[v-cloak] {
	display: none !important;
}
</style>
