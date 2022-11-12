import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:"dashboard",
    component:Dashboard
  },
  {
    path:'/post',
    name:'post',
    component:()=> import('@/views/PostDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
