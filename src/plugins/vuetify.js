import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#673ab7", // #E53935
        secondary: "#F5F5F5", // #FFCDD2
        // accent: colors.indigo.base // #3F51B5
        tertiary: "#BDBDBD"
      }
    }
  }
});
