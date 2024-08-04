import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/pages/HomePage.vue';
import Resume from '/src/pages/Resume.vue';
import Details from '@/pages/WorksDetails.vue';

import SeawalkIndustries from '@/pages/works/SeawalkIndustries.vue';
import ProteinPartnerLogo from '@/pages/works/ProteinPartnerLogo.vue';
import DevConKidsApril2023 from '@/pages/works/DevConKidsApril2023.vue';
import DevConCebu2023OfficersGraphic from '@/pages/works/DevConCebu2023OfficersGraphic.vue';

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
      children: [
        {
            path: 'seawalk-industries',
            name: 'seawalk-industries',
            component: SeawalkIndustries,
            meta: {
                title: 'Designing Seawalk Industries Landing Page',
                loginRequired: false
            },
        },
        {
          path: 'protein-partner-logo',
          name: 'protein-partner-logo',
          component: ProteinPartnerLogo,
          meta: {
              title: 'Designing Protein Partners',
              loginRequired: false
          },
        },
        {
          path: 'devcon-kids-april-2023',
          name: 'devcon-kids-april-2023',
          component: DevConKidsApril2023,
          meta: {
              title: 'Designing for DEVCON Kids April 2023 Code Camp',
              loginRequired: false
          },
        },
        {
          path: 'devcon-cebu-2023-graphic',
          name: 'devcon-cebu-2023-graphic',
          component: DevConCebu2023OfficersGraphic,
          meta: {
              title: 'Kickstarting DEVCON Cebu 2023: Showcasing Chapter Officers',
              loginRequired: false
          },
        }
      ]
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;
