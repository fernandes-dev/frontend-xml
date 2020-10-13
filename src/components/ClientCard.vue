<template>
  <v-card link outlined flat @click="goXml(client)">
    <v-avatar size="100" color="grey lighten-5">
      <v-icon>mdi-file-cloud</v-icon>
    </v-avatar>
    <div>
      {{ client.name }}
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    client: Object,
  },
  methods: {
    goXml(client) {
      this.$router.push("/xml/" + client.cnpj);
    },
  },
};
</script>

<style></style>
