import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/InitialPage.vue';  
import InitialPage from '@/components/HomePage.vue'; 
import AddPage from '@/components/AddPage.vue';

const routes = [
  {
    path: '/',
    name: 'InitialPage',
    component: HomePage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: InitialPage
  },
  {
    path: '/adicionar',
    name: 'AddPage',
    component: AddPage
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
