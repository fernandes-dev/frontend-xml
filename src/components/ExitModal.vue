<template>
  <v-dialog v-model="exitModal" max-width="290">
    <v-card>
      <v-card-text>
        Tem certeza que deseja sair?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="$store.commit('request', ['exitModal', false])"
        >
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" text @click="exit">
          Sim
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    text: String,
  },
  methods: {
    exit() {
      this.$store.commit('request', ['exitModal', false]);
      localStorage.clear();
      location.reload(true);
    },
  },
  computed: {
    exitModal() {
      return this.$store.state.exitModal;
    },
  },
};
</script>

<style></style>
