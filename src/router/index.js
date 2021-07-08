import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Admin from '@/views/Admin.vue'
import Compagnie from '@/views/Compagnie'
import Pagespectacles from '@/views/Pagespectacles'
import Agenda from '@/views/Agenda'
import Juanperezescala from '@/views/Juanperezescala'
import Galerie from '@/views/Galerie'
import Contact from '@/views/Contact'
import Equipe from '@/views/Equipe'

import Sueno from '@/views/spectacles/Sueno'
import Kazu from '@/views/spectacles/Kazu'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/compagnie',
    name: 'Compagnie',
    component: Compagnie
  },
  {
    path: '/spectacles',
    name: 'Pagespectacles',
    component: Pagespectacles
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda
  },
  {
    path: '/juan-perez-escala',
    name: 'Juanperezescala',
    component: Juanperezescala
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: Galerie
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/sueno',
    name: 'Sueno',
    component: Sueno
  },
  {
    path: '/kazu',
    name: 'Kazu',
    component: Kazu
  },
  {
    path: '/équipe',
    name: 'Equipe',
    component: Equipe
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
