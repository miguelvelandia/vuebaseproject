import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '@/components/Default'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default
  },
  {
    path: '/example',
    name: 'ExampleIndex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "index" */ '../components/example/Index.vue')
  },{
    path: '/example/:id',
    name: 'ExampleView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "view" */ '../components/example/View.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
