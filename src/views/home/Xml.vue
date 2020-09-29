<template>
  <div>
    <div class="content px-5">
      <v-row justify="center">
        <v-col>
          <h1 class="text-center primary--text">Baixar Xml</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="8" sm="4">
          <v-text-field
            outlined
            dense
            hide-details
            type="month"
            v-model="date"
            label="Data"
          />
        </v-col>
        <v-col cols="3">
          <v-btn block color="primary">Buscar</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: null
  })
};
</script>

<style>
h1 {
  font-size: 1.7rem;
}
</style>
