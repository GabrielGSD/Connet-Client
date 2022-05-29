<template>
  <q-layout class="bg-image" v-cloak>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card
          v-if="!$q.screen.lt.sm"
          class="bg-transparent no-border no-shadow"
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar size="130px" class="shadow-10">
                <img src="Profile.svg" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-white">
              <q-item-label>Pratik Patel</q-item-label>
              <q-item-label caption>
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
              </q-item-label>
              <q-item-label></q-item-label>
            </q-item-section>
            <q-item-section side center>
              <q-btn
                to="/"
                round
                flat
                color="white"
                class="q-mt-lg bg-blue-5"
                icon="arrow_right_alt"
              ></q-btn>
            </q-item-section>
          </q-item>
        </q-card>
        <q-card
          v-if="$q.screen.lt.sm"
          class="bg-transparent no-border no-shadow"
        >
          <q-card-section class="text-center">
            <q-avatar size="130px" class="shadow-10" style="background: #fff">
              <img src="~assets/Profile.svg" style="width: 45px" />
            </q-avatar>
          </q-card-section>
          <q-card-section class="text-center">
            <q-input
              dark
              v-model="user"
              color="white"
              type="text"
              placeholder="Entre com o usuário"
            />
            <q-input
              dark
              v-model="password"
              color="white"
              :type="isPwd ? 'password' : 'text'"
              placeholder="Entre com a senha"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-btn
              to="/"
              round
              flat
              color="blue-3"
              class="q-mt-lg bg-white"
              icon="arrow_right_alt"
            ></q-btn>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "LockScreen",

  setup() {
    return {
      user: ref(""),
      password: ref(""),
      isPwd: ref("password"),
      isUsr: ref("user"),
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
