<template>
  <div style="height: 80vh;" class="d-flex">
    <v-card class="ma-auto col-10 col-sm-8 col-md-4 col-xl-2">
      <v-card-title><span class="mx-auto"> Meus Dados</span></v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="10" class="mx-auto">
            <v-text-field outlined dense hide-details label="Nome" />
          </v-col>
          <v-col cols="10" class="mx-auto">
            <v-text-field outlined dense hide-details label="E-mail" />
          </v-col>
          <v-col cols="10" class="mx-auto">
            <v-text-field outlined dense hide-details label="Senha" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" class="mx-auto">
            <v-btn color="primary" block>Salvar</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
