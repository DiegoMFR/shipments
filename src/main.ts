import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";
import "./style.css";
import App from "./App.vue";

const myPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        formField: {
          background: "#ECEFF2",
          borderColor: "transparent",
          checkedBackground: "#2392A4",
        },
      },
    },
  },
  components: {
    button: {
        colorScheme: {
            light: {
                primary: { background:'#2392A4'},
            },
        },
    },
    checkbox: {
      colorScheme: {
        light: {
          checked: { background: "#2392A4" },
        },
      },
    },
    radiobutton: {
        colorScheme: {
          light: {
            checked: { border: {color: "#2392A4"} },
          },
        },
      },
  },
});

const app = createApp(App);
const pinia = createPinia();

app.use(PrimeVue, {
  theme: {
    preset: myPreset,
    options: {
      darkModeSelector: false || "none",
    },
  },
});
app.use(pinia);
app.mount("#app");
