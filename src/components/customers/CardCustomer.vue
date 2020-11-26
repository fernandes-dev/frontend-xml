<template>
  <v-card
    link
    flat
    height="100px"
    class="pa-3"
    color="grey lighten-5"
    @click="getFiles(customer)"
  >
    <v-row class="pa-3">
      <v-col cols="4" class="d-flex justify-center pa-0">
        <v-avatar tile size="40">
          <v-img src="@/assets/icons/company-folder.png"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="8" class="pa-0">
        <div>
          <span v-text="customer.client.clientes_razao"></span>
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
  methods: {
    getFiles(customer) {
      localStorage.setItem('customer', customer.path);
      localStorage.setItem('cliente', customer.client.clientes_razao);

      this.$store.dispatch('customers/request', {
        state: 'customerSelected',
        method: 'post',
        url: '/folder-param',
        noMsg: true,
        data: {
          getPath: JSON.stringify({ value: customer.path }),
          depth: 3,
        },
      });
      this.$router.push({
        name: 'customer-details',
        params: { cnpj: customer.name },
      });
    },
  },
};
</script>

<style></style>
