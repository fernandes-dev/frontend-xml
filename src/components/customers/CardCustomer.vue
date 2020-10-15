<template>
  <v-card
    link
    flat
    class="pa-3"
    color="grey lighten-5"
    @click="getFiles(customer)"
  >
    <v-row align="center" justify="center" class="d-flex flex-colunm">
      <v-col cols="6">
        <v-avatar tile size="80">
          <v-img src="@/assets/icons/company-folder.png"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="8">
        <div>
          <span v-text="customer.name"></span>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    customer: Object,
  },
  methods: {
    getFiles(customer) {
      console.log("merda");
      localStorage.setItem("customer", customer.path);
      // this.$store.commit("customers/request", ["customerSelected", null]);

      this.$store.dispatch("customers/request", {
        state: "customerSelected",
        method: "post",
        url: "/folder-param",
        data: {
          getPath: JSON.stringify({ value: customer.path }),
          depth: 1,
        },
      });
      this.$router.push({
        name: "customer-details",
        params: { cnpj: customer.name },
      });
    },
  },
};
</script>

<style></style>
