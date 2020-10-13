<template>
  <div class="px-3">
    <v-row dense class="my-5">
      <v-col cols="12">
        <span>Recentes</span>
      </v-col>
      <v-col cols="6" sm="4" lg="4" v-for="(client, i) in clients" :key="i">
        <ClientCard :client="client" />
      </v-col>
    </v-row>
    <v-row dense class="my-5">
      <v-col cols="12">
        <span>Empresas</span>
      </v-col>
      <v-col cols="6" sm="4" lg="4" v-for="(client, i) in clients" :key="i">
        <ClientCard :client="client" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ClientCard from "@/components/ClientCard";

export default {
  components: {
    ClientCard,
  },

  computed: {
    clients() {
      return this.$store.state.client.all;
    },
  },
};
</script>

<style>
h1 {
  font-size: 1.7rem;
}
</style>
