<template>
  <q-layout class="bg-image" v-cloak>
    <q-page-container>
      <q-page class="flex flex-center" style="flex-direction: column">
        <h1 class="title" style="color: #fff; font-size: 2rem">Cadastro</h1>
        <q-card class="bg-transparent no-border no-shadow">
          <q-item>
            <q-item-section>
              <q-input
                dark
                color="white"
                dense
                v-model="userRegister.name"
                label="User Name"
              />

              <q-input
                dark
                color="white"
                dense
                v-model="userRegister.email"
                label="Email Address"
              />

              <q-input
                dark
                v-model="password"
                color="white"
                :type="isPwd ? 'password' : 'text'"
                placeholder="Enter Password"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
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
                v-model="userRegister.address"
                label="Address"
              />
              <q-input
                dark
                color="white"
                dense
                type="number"
                v-model="userRegister.phone"
                label="Phone"
              />
            </q-item-section>

            <q-item-section side center>
              <q-btn
                to="/"
                round
                flat
                color="white"
                class="q-mt-lg bg-blue-5"
                icon="arrow_right_alt"
                style="margin: 0 auto; margin-top: 24px"
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

  setup() {
    return {
      userRegister: {},
      password: ref(""),
      isPwd: ref("password"),
    };
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
