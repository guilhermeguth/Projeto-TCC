import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/lista-pedidos',
    name: 'lista-pedidos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListagemDePedidos.vue')
  },
  {
    path: '/novo-pedido',
    name: 'novo-pedido',
    component: () => import(/* webpackChunkName: "about" */ '../views/NovoPedido.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
