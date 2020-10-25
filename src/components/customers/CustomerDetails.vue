<template>
  <v-row dense>
    <v-col v-if="Customer && Customer.children" cols="12">
      <v-card flat>
        <div class="title font-weight-bold">
          <v-row align="center">
            <v-col cols="4">
              <div>
                <small>Empresa</small>
                <div>
                  <span v-text="client_name"></span>
                </div>
                <!-- <div>
                  <span v-text="$route.params.cnpj"></span>
                </div> -->
              </div>
            </v-col>
            <div>
              <v-row>
                <v-col v-for="(item, i) in getYears" :key="i">
                  <v-chip
                    @click="filterYear(item)"
                    :color="selected(item)"
                    link
                    :text-color="parseInt(item) === year ? 'white' : ''"
                  >
                    Ano {{ item }}</v-chip
                  >
                </v-col>
              </v-row>
            </div>
          </v-row>
        </div>
        <v-divider></v-divider>
        <v-row>
          <v-col
            cols="12"
            sm="3"
            lg="2"
            v-for="(item, i) in Customer.children.filter(
              (item) => item.path.indexOf('.zip') < 0
            )"
            :key="i"
          >
            <CardFile @download="getFiles" :month="item" :year="year" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col v-else>
      <v-card
        height="50vh"
        flat
        class="d-flex flex-column justify-center align-center"
      >
        <h3>
          Nenhum arquivo encontrado
        </h3>
        <div>
          <v-icon>
            mdi-alert-circle
          </v-icon>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import CardFile from "@/components/customers/CardFile.vue";
export default {
  components: {
    CardFile,
  },
  mounted() {
    this.getFiles();
    this.client_name = localStorage.getItem("cliente");
  },
  data() {
    return {
      isLoading: true,
      item: 1,
      year: new Date().getFullYear(),
      client_name: null,
    };
  },
  computed: {
    Customer() {
      let customer;
      if (
        this.$store.state.customers.customerSelected &&
        this.$store.state.customers.customerSelected.children
      ) {
        this.$store.state.customers.customerSelected.children.filter((item) => {
          if (parseInt(item.name) === parseInt(this.year)) {
            customer = item;
          }
        });
        localStorage.setItem("sizes", JSON.stringify(customer));
        return customer;
      }
      return null;
    },
    getYears() {
      return this.$store.getters["customers/getYears"] || [];
    },
  },
  methods: {
    async getFiles() {
      await this.$store.dispatch("customers/request", {
        state: "customerSelected",
        method: "post",
        url: "/folder-param",
        data: {
          getPath: JSON.stringify({
            value: localStorage.getItem("customer"),
          }),
          depth: 3,
        },
        noMsg: true,
      });
    },
    selected(item) {
      if (item == this.year) {
        return "light-blue accent-4";
      }
      return "grey lighten-5";
    },
    filterYear(item) {
      this.year = parseInt(item);
    },
  },
};
</script>

<style></style>
