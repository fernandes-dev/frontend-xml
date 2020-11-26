<template>
  <v-app class="bg-login">
    <v-row>
      <v-col class="ma-auto " cols="10" sm="8" md="4" xl="2">
        <v-card class="py-10 px-8">
          <v-card-title class="pt-0 pb-10">
            <h1 class="mx-auto primary--text">Vedas XML</h1>
          </v-card-title>
          <v-card-text class="pb-0">
            <v-form ref="login">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field
                    :rules="[(v) => !!v || 'obrigatório']"
                    v-model="contador_cnpj"
                    dense
                    outlined
                    label="CNPJ"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    :rules="[(v) => !!v || 'obrigatório']"
                    v-model="contador_senha"
                    @keypress.enter="login"
                    dense
                    outlined
                    label="Senha"
                    type="password"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions class="px-4 pt-0">
            <v-row no-gutters>
              <v-col cols="12">
                <v-btn
                  depressed
                  @click="login"
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
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    contador_cnpj: null,
    contador_senha: null,
  }),
  methods: {
    login() {
      if (this.$refs.login.validate()) {
        this.$store
          .dispatch('count/request', {
            url: '/login',
            method: 'post',
            data: {
              contador_cnpj: this.contador_cnpj,
              contador_senha: this.contador_senha,
            },
            state: 'profile',
            noMsg: true,
          })
          .then((resp) => {
            this.$store.commit('count/request', ['profile', resp.data]);
            localStorage.setItem('token', resp.data.token);
            this.$router.push('/home');
          })
          .catch((err) => this.$store.commit('message', [err, 'error']));
      }
    },
  },
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
