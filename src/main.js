import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TablaAlumnos from './components/TablaAlumnos.vue';
import LoginForm from './components/LoginForm.vue';
import store from './store/alumnos.js'; 

// Configura las rutas para Vue Router
const router = createRouter({
  history: createWebHistory(),
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
