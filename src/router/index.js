import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import Detection from '../views/DetectionView.vue'
import Data from '../views/DataView.vue'
import VehicleData from '../views/VehicleView.vue'
import VehicleDetail from '../views/VehicleDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'resgister',
      component: Register
    },
    {
      path: '/detection',
      name: 'detection',
      component: Detection
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    },
    {
      path: '/vehicles/:video_filename',
      name: 'video',
      component: VehicleData
    },
    {
      path: '/vehicleDetail/:vehicle_id',
      name: 'vehicleDetail',
      component: VehicleDetail
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
