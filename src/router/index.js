import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/pages/Home.vue';
import Resume from '/src/pages/Resume.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/resume',
        component: Resume,
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;
