<template>
  <div>
    <v-app-bar color="deep-purple" dark absolute height="60px">
      <v-toolbar-title>Vedas XML</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div v-if="!$vuetify.breakpoint.xsOnly" class="actions d-flex">
        <v-spacer></v-spacer>
        <v-btn @click="item.click" v-for="(item, i) in items" :key="i" text>
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.text }}
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  props: {
    items: Array
  }
};
</script>

<style></style>
