import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import Todolist from '../views/Todolist.vue' 
import Todoform from '../views/Todoform.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/Todopush',
    name: 'Todopush',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Todopush.vue')
  },
  {
    path: '/Todolist',
    name: 'Todolist',
    component: Todolist
  },
  {
    path: '/Todoform',
    name: 'Todoform',
    component: Todoform
  },
  {
    path: '/Todolist/:todo_item?/edit',
    name: 'todo_edit',
    component: Todoform
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
