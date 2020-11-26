<template>
  <v-app-bar app color="light-blue accent-4" flat dark>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32"
        ><v-img src="@/assets/logo.png"></v-img
      ></v-avatar>
      <v-btn @click="link.click" v-for="(link, i) in links" :key="i" text>
        {{ link.title }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="exitApp">
        <span>Sair</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  computed: {
    links() {
      return [
        {
          title: 'Início',
          click: () => this.$router.push('/home').catch(() => {}),
        },
        {
          title: 'Minha conta',
          click: () => this.$router.push('/profile').catch(() => {}),
        },
      ];
    },
  },
  methods: {
    exitApp() {
      localStorage.clear();
      this.$router.replace('/');
    },
  },
};
</script>

<style></style>
