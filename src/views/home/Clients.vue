<template>
  <div class="px-3">
    <h1 class="text-center primary--text pt-2">Meus Clientes</h1>
    <v-row class="clients">
      <v-col cols="6" sm="4" lg="2" v-for="(client, i) in clients" :key="i">
        <ClientCard :client="client" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ClientCard from "@/components/ClientCard";

export default {
  components: {
    ClientCard
  },

  computed: {
    clients() {
      return this.$store.state.client.all;
    }
  }
};
</script>

<style>
h1 {
  font-size: 1.7rem;
}
</style>
