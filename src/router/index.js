import { createRouter, createWebHistory } from 'vue-router'

import IndexView from '../views/Index.vue';
import LoginView from '../views/Login.vue';
import ServiceView from '../views/Service.vue';
import AboutView from '../views/About.vue';
import BlogView from '../views/Blog.vue';
import BlogEvent from '../views/BlogEvent.vue';
import ItineraryDetail from '../views/ItineraryDetail.vue';
import Carousel from '../views/Carousel.vue';

const routes=[
  {path:'/',name:'home',component:IndexView},
  {path:'/login',name:'login',component:LoginView},
  {path:'/service',name:'service',component:ServiceView},
  {path:'/about',name:'about',component:AboutView},
  {path:'/blog',name:'blog',component:BlogView},
  {path:'/blogevent/:title',component:BlogEvent,props: true},
  {path:'/itineraryDetail/:title',component:ItineraryDetail,props: true},
  
  {path:'/carousel',name:'carousel',component:Carousel}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]


  routes:routes
})

export default router
