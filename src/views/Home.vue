<template>
  <div class="overflow-y-auto overflow-x-hidden">
    <Menu :items="items" class="menu" />
    <v-main dark class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-card rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title> Baixar XML </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="my-2"></v-divider>
                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col>
            <v-sheet class="pa-5" min-height="70vh" rounded="lg">
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu,
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

<style></style>
