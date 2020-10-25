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
          <span>{{ size }}</span>
          <v-spacer></v-spacer>
          <v-icon>mdi-download-box</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    month: Object,
    year: Number,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    size() {
      let oldSize = JSON.parse(localStorage.getItem("sizes")).children.filter(
        (item) => item.name === this.month.name
      )[0]["size"];
      let newSize =
        parseFloat(oldSize.split(" ")[0]) + " " + oldSize.split(" ")[1];

      return newSize;
    },
  },
  methods: {
    getMonth(month) {
      const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];

      return monthNames[parseInt(month) - 1];
    },
    forceFileDownload(response, title) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", title);
      document.body.appendChild(link);
      link.click();
    },
    zipFolder(value) {
      this.isLoading = true;
      if (value && value.path.indexOf(".zip") < 0) {
        this.$store
          .dispatch("customers/request", {
            method: "post",
            url: "/folder",

            data: {
              dir: value.path.split("/"),
              type: value.type,
              name:
                "XML_CPNJ" +
                this.$route.params.cnpj +
                "_ANO" +
                this.year +
                "_MES" +
                this.month.name,
            },
            noMsg: true,
          })
          .then((resp) => {
            this.downloadZip(resp.data);
            this.isLoading = false;
          });
      } else if (value) {
        this.downloadZip(value.path);
      }
    },
    downloadZip(value) {
      this.isLoading = true;

      this.$store
        .dispatch("customers/request", {
          method: "post",
          url: "/folder",
          responseType: "blob",
          data: {
            dir: value.split("\\"),
            type: "zip",
            name:
              "XML_CPNJ" +
              this.$route.params.cnpj +
              "_ANO" +
              this.year +
              "_MES" +
              this.month.name,
          },
          noMsg: true,
        })
        .then((response) => {
          this.forceFileDownload(
            response,
            "XML_CPNJ" +
              this.$route.params.cnpj +
              "_ANO" +
              this.year +
              "_MES" +
              this.month.name +
              ".zip"
          );
          this.$emit("download");
          this.isLoading = false;
        });
    },
  },
};
</script>

<style></style>
