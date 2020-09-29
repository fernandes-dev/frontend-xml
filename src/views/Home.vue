<template>
  <div class="overflow-y-auto overflow-x-hidden">
    <v-main> </v-main>
    <Menu :items="items" class="menu" />
    <div class="components">
      <router-view></router-view>
    </div>
    <v-bottom-navigation fixed v-if="$vuetify.breakpoint.xsOnly">
      <div v-for="(item, i) in items" :key="i" class="d-flex">
        <v-btn @click="item.click">
          <span>{{ item.text }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </div>
    </v-bottom-navigation>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  },
  computed: {
    items() {
      return [
        {
          icon: "mdi-account-multiple",
          text: "Clientes",
          click: () => {
            this.$router.push("/clients").catch(() => {});
          }
        },
        {
          icon: "mdi-account",
          text: "Perfil",
          click: () => {
            this.$router.push("/profile").catch(() => {});
          }
        },
        {
          icon: "mdi-exit-to-app",
          text: "Sair",
          click: () => {
            localStorage.clear();
            location.reload();
          }
        }
      ];
    }
  }
};
</script>

<style>
.menu {
  margin-bottom: 60px !important;
  /* padding-bottom: 400px !important; */
}
</style>
