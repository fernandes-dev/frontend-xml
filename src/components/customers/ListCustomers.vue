<template>
  <div id="customers-list">
    <v-row justify="space-between">
      <v-col cols="auto"> <span>Empresas</span> </v-col>
      <v-col cols="auto">
        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            label="Buscar"
            append-icon="mdi-magnify"
            hide-details
            rounded
            solo-inverted
          ></v-text-field> </v-responsive
      ></v-col>
    </v-row>

    <div v-if="$store.state.loading" class="sk-chase d-flex justify-center">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>

    <v-row v-else>
      <v-col cols="12" sm="4" v-for="(Customer, i) in Customers" :key="i">
        <Customer :customer="Customer" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Customer from "@/components/customers/CardCustomer.vue";
export default {
  components: {
    Customer,
  },
  mounted() {
    this.$store.commit("customers/request", ["customerSelected", null]);
  },
  computed: {
    Customers() {
      if (this.$store.state.customers.customers) {
        return this.$store.state.customers.customers.children || {};
      }
      return {};
    },
  },
  methods: {},
};
</script>

<style>
.sk-chase {
  width: 60px;
  height: 60px;
  margin: auto;
  margin-top: 20%;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2s infinite ease-in-out both;
}

.sk-chase-dot:before {
  content: "";
  display: block;
  width: 20%;
  height: 20%;
  background-color: #1697f6;
  border-radius: 100%;
  animation: sk-chase-dot-before 2s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2) {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}
.sk-chase-dot:nth-child(1):before {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2):before {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3):before {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4):before {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5):before {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6):before {
  animation-delay: -0.6s;
}

@keyframes sk-chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}
</style>
