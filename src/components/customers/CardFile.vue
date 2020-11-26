<template>
  <v-card
    flat
    color="light-blue accent-4"
    :loading="isLoading"
    class="mx-5"
    hover
    @click="zipFolder(month)"
  >
    <v-row class="grey lighten-5 text-center">
      <v-col cols="12">
        <v-avatar tile size="50">
          <v-img src="@/assets/icons/month-folder.png"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12">
        <div class="font-weight-bold">
          <span v-text="getMonth(month.name)"></span>
        </div>
      </v-col>
      <v-col cols="12">
        <v-btn dark color="light-blue accent-4" depressed block>
          <span>Baixar</span>
          <v-spacer></v-spacer>
          <v-icon>mdi-download-box</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  mounted() {
    if (window.navigator.userAgent.indexOf('Windows') >= 0) {
      this.isWindows = true;
    }
  },
  props: {
    month: Object,
    year: Number,
  },
  data() {
    return {
      isLoading: false,
      isWindows: false,
    };
  },
  computed: {
    size() {
      const oldSize = this.month.size;
      const newSize = parseFloat(oldSize.split(' ')[0]);

      return parseFloat(newSize);
    },
  },
  methods: {
    getMonth(month) {
      const monthNames = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ];

      return monthNames[parseInt(month) - 1];
    },
    forceFileDownload(response, title) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', title);
      document.body.appendChild(link);
      link.click();
    },
    zipFolder(value) {
      this.isLoading = true;
      if (value && value.path.indexOf('.zip') < 0) {
        this.$store
          .dispatch('customers/request', {
            method: 'post',
            url: '/folder',
            data: {
              dir: this.isWindows ? value.path.split('\\') : value.path.split('/'),
              type: value.type,
              name: `XML_CPNJ${this.$route.params.cnpj}_ANO${this.year}_MES${this.month.name}`,
            },
            noMsg: true,
          })
          .then(resp => {
            setTimeout(() => {
              this.downloadZip(resp.data);
              this.isLoading = false;
            }, 3000);
          });
      } else if (value) {
        this.downloadZip(value.path);
      }
    },
    downloadZip(value) {
      this.isLoading = true;

      this.$store
        .dispatch('customers/request', {
          method: 'post',
          url: '/folder',
          responseType: 'blob',
          data: {
            dir: this.isWindows ? value.split('\\') : value.split('/'),
            type: 'zip',
            name: `XML_CPNJ${this.$route.params.cnpj}_ANO${this.year}_MES${this.month.name}`,
          },
          noMsg: true,
        })
        .then(response => {
          this.forceFileDownload(
            response,
            `XML_CPNJ${this.$route.params.cnpj}_ANO${this.year}_MES${this.month.name}.zip`,
          );
          this.$emit('download');
          this.isLoading = false;
        });
    },
  },
};
</script>

<style></style>
