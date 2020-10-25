<template>
  <v-snackbar @input="input" :color="color" :value="snack" :timeout="-1">
    <h3 class="text-center" v-html="message"></h3>
    <template v-slot:action="{ attrs }">
      <v-btn color="" icon v-bind="attrs" @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  methods: {
    input() {
      this.$store.commit("utils/request", ["snack", !this.snack]);
      if (!this.snack) this.$store.commit("request", ["message", null]);
    },
    close() {
      this.$store.commit("utils/closeSnack");
    },
  },
  computed: {
    color() {
      let color = this.type == "error" ? "red lighten-1" : "green";
      return color;
    },
    snack: {
      get() {
        return this.$store.state.utils.snack;
      },
      set() {},
    },
    message() {
      return this.$store.state.message;
    },
    type() {
      return this.$store.state.utils.type || "error";
    },
  },
};
</script>

<style></style>
