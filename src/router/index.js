import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/pages/Home.vue';
import Resume from '/src/pages/Resume.vue';
import Details from '@/pages/WorksDetails.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/resume',
        component: Resume,
    },
    {
      path: '/details',
      component: Details,
  }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;
