import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ingresareventoview from '../views/ingresareventoview.vue'
import registrodeeventos from '../views/registrodeeventos.vue'

    const routes = [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/ingresar-evento',
        name: 'ingresar-evento',
        component: ingresareventoview
      },
      {
        path: '/ver-registro-de-eventos',
        name: 'ver-registro-de-eventos',
        component: registrodeeventos
      }
    ]

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })

    export default router