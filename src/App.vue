<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("customers/request", {
      state: "customers",
      method: "get",
      url: "/folder",
    });
  },
  components: {},

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: "Nunito", sans-serif;
}

.v-btn,
.v-tab {
  text-transform: none !important;
}
</style>
