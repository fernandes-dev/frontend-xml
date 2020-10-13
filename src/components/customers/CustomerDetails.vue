<template>
  <div class="fill-height overflow-x-hidden">
    <v-row dense>
      <v-col cols="3">
        <v-list dense rounded>
          <v-subheader>Meses</v-subheader>
          <v-list-item link v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="9">
        <v-card class="pa-5" flat>
          <div>
            <small>Empresa</small>
          </div>
          <div class="title font-weight-bold">
            <span v-text="customer"></span>
          </div>
          <v-row dense>
            <v-col cols="12">
              <div>
                Arquivos Janeiro 2020
              </div>
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12">
              <v-card :loading="isLoading">
                <v-list-item>
                  <v-list-item-avatar tile>
                    <v-img src="@/assets/icons/download-folder.png"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      <span>Terceiros</span>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <span>154 MB</span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-icon>
                      <v-btn flat icon color="primary">
                        <v-icon>mdi-download-box</v-icon>
                      </v-btn>
                    </v-list-item-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card :loading="isLoading">
                <v-list-item>
                  <v-list-item-avatar tile>
                    <v-img src="@/assets/icons/download-folder.png"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      <span>Terceiros</span>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <span>154 MB</span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-icon>
                      <v-btn flat icon color="primary">
                        <v-icon>mdi-download-box</v-icon>
                      </v-btn>
                    </v-list-item-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.customer = this.$route.params.cnpj;
  },
  data() {
    return {
      isLoading: true,
      customer: null,
      item: 1,
      items: [
        { text: "Janeiro", icon: "mdi-calendar-month" },
        { text: "Fevereiro", icon: "mdi-calendar-month" },
        { text: "Março", icon: "mdi-calendar-month" },
        { text: "Abril", icon: "mdi-calendar-month" },
        { text: "Maio", icon: "mdi-calendar-month" },
        { text: "Junho", icon: "mdi-calendar-month" },
        { text: "Julho", icon: "mdi-calendar-month" },
        { text: "Agosto", icon: "mdi-calendar-month" },
        { text: "Setembro", icon: "mdi-calendar-month" },
        { text: "Novembro", icon: "mdi-calendar-month" },
        { text: "Dezembro", icon: "mdi-calendar-month" },
      ],
    };
  },
};
</script>

<style></style>
