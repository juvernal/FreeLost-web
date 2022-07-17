import ArticlesView from '@/views/ArticlesView.vue'
import ArticleDetails from '@/views/ArticleDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import ContactView from '@/views/ContactView.vue'
import HeaderView from '@/components/HeaderView.vue'
import DeclarationView from '@/views/DeclarationView.vue'
import AnnonceView from '@/views/AnnonceView.vue'
import AdminViewVue from '../views/AdminView.vue'
import UsersView from '@/components/UsersView.vue'






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
    component: ContactView
  },
  {
    path: '/articles',
    name: 'listeArticles',
    component: ArticlesView
  },
  {
    path: '/articles/:id',
    name: 'detailsArticle',
    component: ArticleDetails
  },
  {
    path: '/nav',
    name: 'nav',
    component: HeaderView
  },
  {
    path: '/declaration',
    name: 'declaration',
    component: DeclarationView
  },
  {
    path: '/annonce',
    name: 'annonce',
    component: AnnonceView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminViewVue
  },
  {
    path: '/usersList',
    name: 'user',
    component: UsersView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
