<template>
  <v-app class="fill-height">
    <Menu :items="items" />
    <v-main dark class="light-blue accent-4 ma-0">
      <v-container class="pa-0">
        <v-card
          class="pa-5 fill-height overflow-y-auto"
          height="85vh"
          rounded="lg"
        >
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
  mounted() {
    this.$store.dispatch("customers/request", {
      state: "customers",
      method: "get",
      url: "/folder",
      noMsg: true,
    });

    this.$store
      .dispatch("count/request", {
        state: "profile",
        method: "post",
        url: "/verify",
        noMsg: true,
      })
      .catch((err) => {
        this.$store.commit("message", [err, "error"]);
        localStorage.clear();
        setTimeout(() => {
          this.$router.replace("/");
        }, 3000);
      });
  },
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
          click: () => {},
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
