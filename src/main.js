import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import { i18n } from "@/locales/i18n";

import "primeflex/primeflex.css";

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Password from "primevue/password";
import Card from "primevue/card";
import Panel from "primevue/panel";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import Toast from "primevue/toast";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(i18n);

app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-input-text', InputText);
app.component('pv-input-mask', InputMask);
app.component('pv-password', Password);
app.component('pv-card', Card);
app.component('pv-panel', Panel);
app.component('pv-text-area', Textarea);
app.component('pv-dropdown', Dropdown);
app.component('pv-file-upload', FileUpload);
app.component('pv-toast', Toast);

app.mount('#app');
