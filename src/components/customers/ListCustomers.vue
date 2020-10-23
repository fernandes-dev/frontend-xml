<template>
  <div id="customers-list">
    <v-row justify="space-between">
      <v-col cols="auto"> <span>Empresas</span> </v-col>
      <v-col cols="auto">
        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            label="Buscar"
            append-icon="mdi-magnify"
            hide-details
            rounded
            solo-inverted
          ></v-text-field> </v-responsive
      ></v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="3"
        lg="3"
        v-for="(Customer, i) in Customers"
        :key="i"
      >
        <Customer :customer="Customer" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Customer from "@/components/customers/CardCustomer.vue";
export default {
  components: {
    Customer,
  },
  mounted() {
    this.$store.commit("customers/request", ["customerSelected", null]);
  },
  computed: {
    Customers() {
      if (this.$store.state.customers.customers) {
        return this.$store.state.customers.customers.children || {};
      }
      return {};
    },
  },
  methods: {},
};
</script>

<style></style>
