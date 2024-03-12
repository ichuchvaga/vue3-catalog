import './assets/css/main.scss';

import { createApp } from 'vue';
import Catalog from './Catalog.vue';
import store from './store';

const app = createApp(Catalog);
app.use(store);
app.mount('#app');