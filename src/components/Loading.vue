<template>
  <v-progress-linear
    height="5px"
    :active="loading"
    :indeterminate="true"
    absolute
    top
    color="red"
  ></v-progress-linear>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style></style>
