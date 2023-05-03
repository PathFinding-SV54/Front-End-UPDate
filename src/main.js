import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import "primeflex/primeflex.css";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Password from "primevue/password";
import Card from "primevue/card";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component('pv-button', Button);
app.component('pv-input-text', InputText);
app.component('pv-input-mask', InputMask);
app.component('pv-password', Password);
app.component('pv-card', Card);

app.mount('#app');
