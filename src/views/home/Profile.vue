<template>
  <div style="height: 80vh;" class="d-flex">
    <v-card
      :loading="$store.state.loading"
      v-if="profile"
      class="ma-auto col-10 col-sm-8 col-md-4 col-xl-2"
    >
      <v-card-title><span class="mx-auto"> Meus Dados</span></v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="10" class="mx-auto">
            <v-text-field
              v-model="profile.contador_nome"
              outlined
              dense
              hide-details
              label="Nome"
            />
          </v-col>
          <v-col cols="10" class="mx-auto">
            <v-text-field
              v-model="profile.contador_cnpj"
              outlined
              dense
              hide-details
              label="CNPJ"
            />
          </v-col>
          <v-col cols="10" class="mx-auto">
            <v-text-field
              v-model="profile.contador_senha"
              outlined
              dense
              hide-details
              label="Senha"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" class="mx-auto">
            <v-btn color="primary" @click="saveProfile" block>Salvar</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store
      .dispatch('count/request', {
        state: 'profile',
        method: 'post',
        url: '/verify',
        noMsg: true,
      })
      .catch((err) => {
        this.$store.commit('message', [err, 'error']);
        localStorage.clear();
        setTimeout(() => {
          this.$router.replace('/');
        }, 3000);
      });
  },
  computed: {
    profile() {
      return this.$store.state.count.profile;
    },
  },
  methods: {
    saveProfile() {
      this.$store.dispatch('count/request', {
        state: 'profile',
        method: 'put',
        url: '/update-profile',
        data: this.profile,
      });
    },
  },
};
</script>

<style></style>
