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
    component: Home,
    meta: {
      title: "Cie de théâtre de marionnette | Singe Diesel"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "login | Singe Diesel"
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      title: "Admin | Singe Diesel"
    }
  },
  {
    path: '/compagnie',
    name: 'Compagnie',
    component: Compagnie,
    meta: {
      title: "La compagnie | Singe Diesel"
    }
  },
  {
    path: '/spectacles',
    name: 'Pagespectacles',
    component: Pagespectacles,
    meta: {
      title: "Les spectacles | Singe Diesel"
    }
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda,
    meta: {
      title: "Agenda | Singe Diesel"
    }
  },
  {
    path: '/juan-perez-escala',
    name: 'Juanperezescala',
    component: Juanperezescala,
    meta: {
      title: "Juan Perez Escala | Singe Diesel"
    }
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: Galerie,
    meta: {
      title: "Galerie | Singe Diesel"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: "Contact | Singe Diesel"
    }
  },
  {
    path: '/sueno',
    name: 'Sueno',
    component: Sueno,
    meta: {
      title: "Sueño | Singe Diesel"
    }
  },
  {
    path: '/kazu',
    name: 'Kazu',
    component: Kazu,
    meta: {
      title: "Kazu | Singe Diesel"
    }
  },
  {
    path: '/équipe',
    name: 'Equipe',
    component: Equipe,
    meta: {
      title: "L'équipe artistique | Singe Diesel"
    }
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`
    next()
})

export default router
