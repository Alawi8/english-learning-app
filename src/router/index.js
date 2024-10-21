import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Texts from '../views/TextsView.vue';
import Audio from '../views/AudioView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/texts', component: Texts },
  { path: '/audio', component: Audio },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
