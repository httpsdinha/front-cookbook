import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';  
import InitialPage from '@/components/InitialPage.vue'; 

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/initial',
    name: 'InitialPage',
    component: InitialPage
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
