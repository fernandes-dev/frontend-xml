<template>
  <v-app id="inspire">
    <v-app-bar app color="light-blue accent-4" flat dark>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="light-blue accent-4">
      <v-container fluid>
        <v-row>
          <v-col cols="9">
            <v-sheet min-height="70vh" rounded="lg" class="overflow-y-hidden">
              <v-row dense class="pa-5">
                <v-col cols="12">
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
                </v-col>
                <v-col cols="12">
                  <v-row>
                    <v-col cols="3" v-for="n in 20" :key="n">
                      <v-card link flat class="pa-5" color="grey lighten-5">
                        <v-row
                          align="center"
                          justify="center"
                          class="flex-colunm"
                        >
                          <v-col cols="auto">
                            <v-avatar tile size="80">
                              <v-img
                                src="https://i.imgur.com/TPUYE5x.png"
                              ></v-img>
                            </v-avatar>
                          </v-col>
                          <v-col cols="auto">
                            <div>
                              <span>060.496.901-54</span>
                            </div>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["Minha conta", "Contabilidade", "Contato", "Atualizações"],
  }),
  methods: {
    goXml(client) {
      this.$router.push("/xml/" + client.cnpj);
    },
  },
};
</script>
verify object javascript in array
