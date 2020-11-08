import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mapcards from '@/components/Mapcards'
import Mapbooks from '@/components/Mapbooks'
import Packages from '@/components/Packages'
import Scedules from '@/components/Scedules'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
  //  component: ,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),

     children: [
        
        {
          
          path: '4',
          component: Scedules
       },
        {
          
          path: '3',
          component: Packages
       },
        {
          
          path: '2',
          component: Mapbooks
       },
       {
          
          path: '1',
          component: Mapcards
        },
      ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
