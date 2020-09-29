<template>
  <v-card @click="goXml(client)">
    <v-card-text>
      <div>
        <b> {{ client.name }} </b>
      </div>
      <div>
        <b>{{ client.cnpj }}</b>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    client: Object
  },
  methods: {
    goXml(client) {
      this.$router.push("/xml/" + client.cnpj);
    }
  }
};
</script>

<style></style>
