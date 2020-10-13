<template>
  <div>
    <v-row justify="space-between">
      <v-col cols="auto">
        <v-breadcrumbs class="px-0" :items="items" divider=">"></v-breadcrumbs>
      </v-col>
      <v-col cols="auto">
        <v-row dense>
          <v-col cols="auto">
            <v-text-field
              outlined
              dense
              hide-details
              type="years"
              v-model="date"
              label="Ano"
            />
          </v-col>
          <v-col cols="auto">
            <v-btn block color="primary">Buscar</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div>
      <span>Ano 2020</span>
      <v-divider></v-divider>
    </div>
    <v-row>
      <v-col v-for="n in 12" :key="n" cols="3">
        <v-card outlined link flat>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon color="purple">mdi-folder-multiple</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-subtitle>Março</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: null,
    items: [
      {
        text: "Vedas sistemas",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Meses",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Lista",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
};
</script>

<style>
h1 {
  font-size: 1.7rem;
}
</style>
