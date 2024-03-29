import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import TablaAlumnos from './components/TablaAlumnos.vue';
import LoginForm from './components/LoginForm.vue';
import store from './store/alumnos.js'; 

const router = createRouter({
  history: createWebHashHistory(), // Cambia a createWebHashHistory()
  routes: [
    { path: '/tabla-alumnos', component: TablaAlumnos },
    { path: '/login', component: LoginForm },
    { path: '/', redirect: '/login' } // Redirige a /login por defecto
  ]
});

// Crea la aplicación Vue y úsala junto con Vue Router y Vuex
const app = createApp(App);
app.use(router); // Usa Vue Router
app.use(store); // Usa Vuex

// Monta la aplicación en el elemento con el id "app" en tu HTML
app.mount('#app');
