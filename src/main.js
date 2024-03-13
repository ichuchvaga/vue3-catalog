import './assets/css/main.scss';

import { createApp } from 'vue';
import Catalog from './Catalog.vue';
import store from './store';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

const app = createApp(Catalog);
app.use(store);
app.use(VueAwesomePaginate);
app.mount('#app');