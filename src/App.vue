<template>
  <v-app>
    <Loading />
    <router-view></router-view>
    <MessageOrError />
  </v-app>
</template>

<script>
import MessageOrError from "@/components/MessageOrError";
import Loading from "@/components/Loading";
export default {
  name: "App",
  mounted() {},
  components: {
    MessageOrError,
    Loading,
  },

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
