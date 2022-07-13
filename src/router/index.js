import Articles from '@/views/Articles.vue'
import ArticleDetails from '@/views/ArticleDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import Contact from '@/views/Contact.vue'

import AnnonceView from '@/components/AnnonceView.vue'
import DeclarationView from '@/components/DeclarationView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/connexion',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/inscription',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/articles',
    name: 'listeArticles',
    component: Articles
  },
  {
    path: '/articles/:id',
    name: 'detailsArticle',
    component: ArticleDetails
  },
  {

    path: '/annonces',
    name: 'AnnonceView',
    component: AnnonceView
  },

  {
    path: '/declaration',
    name: 'DeclarationPerte',
    component: DeclarationView
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
