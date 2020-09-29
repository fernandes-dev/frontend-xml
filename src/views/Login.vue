<template>
  <v-app class="bg-login">
    <v-card class="ma-auto py-10 px-8 col-10 col-sm-8 col-md-4 col-xl-2">
      <v-card-title class="pt-0 pb-10">
        <h1 class="mx-auto primary--text">Vedas XML</h1>
      </v-card-title>
      <v-card-text class="pb-0">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field v-model="email" dense outlined label="E-mail" />
          </v-col>
          <v-col cols="12">
            <v-text-field dense outlined label="Senha" type="password" />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="px-4 pt-0">
        <v-row no-gutters>
          <v-col cols="12">
            <v-btn
              depressed
              @click="login"
              v-model="password"
              color="primary"
              :loading="false"
              block
            >
              Entrar
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    login() {
      console.log("logar");
      this.$router.push("/home");
    }
  }
};
</script>

<style>
h1 {
  font-size: 1.7rem;
}

.bg-login {
  background: rgb(40, 81, 150) !important;
  background: linear-gradient(
    90deg,
    rgba(40, 81, 150, 1) 0%,
    rgba(0, 181, 255, 1) 100%
  ) !important;
}
</style>
