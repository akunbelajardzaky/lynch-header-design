import { createRouter, createWebHistory } from 'vue-router'
import Route1 from '../views/Route1.jsx'
import Route2 from '../views/route2.jsx'
import Route3 from '../views/Route3.jsx'
import Route4 from '../views/Route4.jsx'
import Route5 from '../views/Route5.jsx'
import Route6 from '../views/Route6.jsx'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'route1',
      component: Route1
    },
    {
      path: '/route2',
      name: 'route2',
      component: Route2
    },
    {
      path: '/route3',
      name: 'route3',
      component: Route3
    },
    {
      path: '/route4',
      name: 'route4',
      component: Route4
    },
    {
      path: '/route5',
      name: 'route5',
      component: Route5
    },
    {
      path: '/route6',
      name: 'route6',
      component: Route6
    }
  ]
})

export default router
