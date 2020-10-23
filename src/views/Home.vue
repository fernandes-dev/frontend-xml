<template>
  <v-app class="fill-height overflow-x-hidden ">
    <Menu :items="items" class="menu" />
    <v-main dark class="light-blue accent-4 ">
      <v-container>
        <v-card class="pa-5 fill-height " rounded="lg">
          <router-view></router-view>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Menu from "@/components/shared/Menu";
// import Nav from "@/components/shared/NavigationDrawer";
export default {
  components: {
    Menu,
    // Nav,
  },
  computed: {
    items() {
      return [
        {
          icon: "mdi-account-multiple",
          text: "Clientes",
          click: () => {
            this.$router.push("/clients").catch(() => {});
          },
        },
        {
          icon: "mdi-account",
          text: "Perfil",
          click: () => {
            this.$router.push("/profile").catch(() => {});
          },
        },
        {
          icon: "mdi-exit-to-app",
          text: "Sair",
          click: () => {
            localStorage.clear();
            location.reload();
          },
        },
      ];
    },
  },
};
</script>

<style>
.fixed-container {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 5em;
  z-index: 2;
}
</style>
