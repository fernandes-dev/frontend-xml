<template>
  <v-card link flat height="100px" color="grey lighten-5" @click="getFiles(customer)">
    <v-list color="transparent" three-line>
      <template>
        <v-list-item three-line>
          <v-list-item-avatar tile>
            <v-img src="@/assets/icons/company-folder.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-subtitle v-html="customer.client.clientes_razao"></v-list-item-subtitle>
            <v-list-item-subtitle>
              <span class="font-weight-bold">
                {{ customer.client.clientes_cnpj.length === 14 ? 'CNPJ: ' : 'CPF: ' }}
                {{ customer.client.clientes_cnpj | formatCNPJ }}
              </span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <!-- <v-row class="pa-3 pb-0">
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
    <div class="pl-4">
      <small>{{ customer.client.clientes_cnpj.length === 14 ? 'CNPJ: ' : 'CPF: ' }} </small>
      <small>
        {{ customer.client.clientes_cnpj | formatCNPJ }}
      </small>
    </div> -->
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
