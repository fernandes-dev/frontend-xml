<template>
  <div class="px-3">
    <v-row dense class="my-5">
      <v-col cols="12">
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
h1 {
  font-size: 1.7rem;
}
</style>
