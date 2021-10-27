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
      title: "Cie de théâtre de marionnette | Singe Diesel",
      description: "Basée à Guillers, dans le Finistère, Singe Diesel est une compagnie de théâtre d'envergure internationnale. Juan Perez Escala écrit et met en scène des spectacles empreints de douceur et de poésie."
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "login | Singe Diesel",
      description: ""
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      title: "Admin | Singe Diesel",
      description: ""
    }
  },
  {
    path: '/compagnie',
    name: 'Compagnie',
    component: Compagnie,
    meta: {
      title: "La compagnie | Singe Diesel",
      description: "Singe Diesel compte actuellement plus de 200 marionnettes, construites dans différents supports (papier, bois, mousse) et 6 spectacles dont 3 sont encore en diffusion à une échelle locale et internationale."
    }
  },
  {
    path: '/spectacles',
    name: 'Pagespectacles',
    component: Pagespectacles,
    meta: {
      title: "Les spectacles | Singe Diesel",
      description: "Les spectacles écrit et produits par la compagnie Singe Diesel."
    }
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda,
    meta: {
      title: "Agenda | Singe Diesel",
      description: "Toutes les dates des représentations à venir."
    }
  },
  {
    path: '/juan-perez-escala',
    name: 'Juanperezescala',
    component: Juanperezescala,
    meta: {
      title: "Juan Perez Escala | Singe Diesel",
      description: "Juan Perez Escala, génie de la marionnette, écrit et met en scène les spectacles de la compagnie Singe Diesel."
    }
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: Galerie,
    meta: {
      title: "Galerie | Singe Diesel",
      description: "Photo et dessins issus des productions de la compagnie Singe Diesel"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: "Contact | Singe Diesel",
      description: "Contactez-nous pour toute question ou requête."
    }
  },
  {
    path: '/sueno',
    name: 'Sueno',
    component: Sueno,
    meta: {
      title: "Sueño | Singe Diesel",
      description: "À travers personnages et situations imaginaires, Juan développe un ailleurs de tous les possibles, dévoilant l’intimité de Tom, un sans-abri aveugle qui refuse de voir le monde réel."
    }
  },
  {
    path: '/kazu',
    name: 'Kazu',
    component: Kazu,
    meta: {
      title: "Kazu | Singe Diesel",
      description: "Une plongée dans l’atelier de marionnettes de Juan Perez Escala et dans l’univers du réalisme magique et de la micro fiction, courant artistique d’Amérique du Sud."
    }
  },
  {
    path: '/équipe',
    name: 'Equipe',
    component: Equipe,
    meta: {
      title: "L'équipe artistique | Singe Diesel",
      description: "Membres de l'équipe artistique de la compagnie Singe Diesel."
    }
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`
    // const tag = document.getElementsByName('description')[0]
    // tag.setAttribute("content", "test")
    document.getElementsByName('description')[0].setAttribute("content", `${to.meta.description}`)
    next()
})

export default router
