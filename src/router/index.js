import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/get',
    name: 'Get',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GetWord.vue')
  },
  {
    path:'/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "create" */ '../views/CreateWord.vue')
  },
  {
    path:'/update',
    name: 'Update',
    component: () => import(/* webpackChunkName: "create" */ '../views/UpdateWord.vue')
  },
  {
    path:'/delete',
    name: 'Delete',
    component: () => import(/* webpackChunkName: "create" */ '../views/DeleteWord.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
