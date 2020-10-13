<template>
  <v-card
    link
    flat
    class="pa-3"
    color="grey lighten-5"
    :to="{ name: 'customer-details', params: { cnpj: customer.name } }"
  >
    <v-row align="center" justify="center" class="d-flex flex-colunm">
      <v-col cols="6">
        <v-avatar tile size="80">
          <v-img src="@/assets/icons/company-folder.png"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="8">
        <div>
          <span v-text="customer.name"></span>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    customer: Object,
  },
  methods: {},
};
</script>

<style></style>
