<template>
  <v-card rounded="lg" class="pa-3 fixed-menu">
    <v-list rounded color="transparent">
      <v-list-item-group v-model="item" color="light-blue accent-4">
        <v-list-item v-for="(item, key) in menu" :key="key" link>
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
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
</template>

<script>
export default {
  data() {
    return {
      item: null,
      menu: [
        {
          icon: "mdi-home",
          title: "Inicio",
          router: "/",
        },
        {
          icon: "mdi-history",
          title: "Recentes",
          router: "/",
        },
        {
          icon: "mdi-share-variant",
          title: "Compartilhar",
          router: "/",
        },
        {
          icon: "mdi-download-box-outline",
          title: "Downloads",
          router: "/",
        },
      ],
    };
  },
};
</script>

<style>
.fixed-menu {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 5em;
  z-index: 2;
}
</style>
